import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert, ActivityIndicator, Platform } from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController';

export default function InsertUsuarioScreen() {

  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [loading, setLoading] = useState(true);
  const [guardando, setGuardando] = useState(false);

  // Instancia del controlador
  const [controller] = useState(() => new UsuarioController());

  // Inicialización
  useEffect(() => {
    const init = async () => {
      try {
        await controller.initialize();
        await cargarUsuarios();
        controller.addListener(cargarUsuarios);
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'No se pudo iniciar la base de datos');
      }
    };
    init();
    return () => controller.removeListener(cargarUsuarios);
  }, []);

  const cargarUsuarios = async () => {
    setLoading(true);
    try {
      const lista = await controller.obtenerUsuarios();
      setUsuarios(lista);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleInsert = async () => {
    try {
        // La validación ahora ocurrirá dentro del controller
        // Si el nombre está vacío o mal, el controller lanzará error
        
        setGuardando(true);
        const nuevoUsuario = await controller.crearUsuario(nombre); 
        
        setNombre(''); // Limpiar input

        // ALERTA DE ÉXITO
        if (Platform.OS === 'web') {
            alert(`Usuario Creado: "${nuevoUsuario.nombre}" con ID: ${nuevoUsuario.id}`);
        } else {
            Alert.alert(
                'Usuario Creado',
                `"${nuevoUsuario.nombre}" guardado con ID: ${nuevoUsuario.id}`
            );
        }

    } catch (error) {
        // ALERTA DE ERROR (Validación o BD)
        const mensaje = error.message || 'Error desconocido';
        if (Platform.OS === 'web') {
            alert(mensaje);
        } else {
            Alert.alert('Error', mensaje);
        }
    } finally {
        setGuardando(false);
    }
  };

  const renderUserItem = ({ item }) => {
    // Formatear la fecha correctamente
    const formatearFecha = (fechaISO) => {
      const fecha = new Date(fechaISO);
      const dia = fecha.getDate();
      const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 
                     'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
      const mes = meses[fecha.getMonth()];
      const año = fecha.getFullYear();
      return `${dia} de ${mes} de ${año}`;
    };

    return (
      <View style={styles.userItem}>
        <View style={styles.userNumber}>
          <Text style={styles.userNumberText}>{item.id}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.nombre}</Text>
          <Text style={styles.userId}>ID: {item.id}</Text>
          <Text style={styles.userDate}>
            {item.fecha_creacion ? formatearFecha(item.fecha_creacion) : 'Fecha no disponible'}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>INSERT & SELECT</Text>
      <Text style={styles.subtitle}>
        {Platform.OS === 'web' ? ' WEB (LocalStorage)' : ` ${Platform.OS.toUpperCase()} (SQLite)`}
      </Text>

      <View style={styles.insertSection}>
        <Text style={styles.sectionTitle}>Insertar Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
          editable={!guardando}
        />
        <TouchableOpacity 
          style={[styles.button, guardando && styles.buttonDisabled]} 
          onPress={handleInsert} 
          disabled={guardando} 
        >
          <Text style={styles.buttonText}>
            {guardando ? 'Guardando...' : 'Agregar Usuario'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.selectSection}>
        <View style={styles.selectHeader}>
          <Text style={styles.sectionTitle}>Lista de Usuarios</Text>
          <TouchableOpacity style={styles.refreshButton} onPress={cargarUsuarios}>
            <Text style={styles.refreshText}>Recargar</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={styles.loadingText}>Cargando usuarios...</Text>
          </View>
        ) : (
          <FlatList
            data={usuarios} 
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderUserItem} 
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No hay usuarios</Text>
              </View>
            }
            contentContainerStyle={usuarios.length === 0 && styles.emptyList}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 50 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', color: '#333', marginBottom: 5 },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 20 },
  insertSection: { backgroundColor: '#fff', padding: 20, marginHorizontal: 15, marginBottom: 15, borderRadius: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  selectSection: { flex: 1, backgroundColor: '#fff', marginHorizontal: 15, marginBottom: 15, borderRadius: 12, padding: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  input: { borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 8, padding: 15, marginBottom: 12, fontSize: 16, backgroundColor: '#fafafa' },
  button: { backgroundColor: '#007AFF', padding: 16, borderRadius: 8, alignItems: 'center' },
  buttonDisabled: { backgroundColor: '#ccc' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  selectHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  refreshButton: { padding: 8 },
  refreshText: { color: '#007AFF', fontSize: 14 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 40 },
  loadingText: { marginTop: 10, color: '#666', fontSize: 14 },
  userItem: { flexDirection: 'row', backgroundColor: '#f9f9f9', padding: 15, borderRadius: 8, marginBottom: 10, borderLeftWidth: 4, borderLeftColor: '#007AFF' },
  userNumber: { width: 35, height: 35, borderRadius: 17.5, backgroundColor: '#007AFF', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  userNumberText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  userInfo: { flex: 1 },
  userName: { fontSize: 16, fontWeight: '600', color: '#333', marginBottom: 4 },
  userId: { fontSize: 12, color: '#007AFF', marginBottom: 2 },
  userDate: { fontSize: 12, color: '#666' },
  emptyContainer: { alignItems: 'center', paddingVertical: 40 },
  emptyList: { flex: 1, justifyContent: 'center' },
  emptyText: { fontSize: 18, color: '#999' }
});