// App.js
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Button,
  Alert,
  SafeAreaView,
  StatusBar,
  ActivityIndicator, // Para el splash screen
  Platform,
} from 'react-native';

// --- (Opcional) Datos de la Galería ---
// Usamos fotos de Picsum para los ejemplos.
const FOTOS = [
  {
    id: '1',
    title: 'Bosque Nublado',
    description: 'Un misterioso bosque cubierto de niebla.',
    extendedDescription: 'Esta foto fue tomada al amanecer en las montañas, capturando la niebla matutina mientras se movía entre los árboles altos.',
    imageUrl: 'https://picsum.photos/seed/1/400/300',
  },
  {
    id: '2',
    title: 'Playa Tropical',
    description: 'Aguas cristalinas y arena blanca.',
    extendedDescription: 'Una vista aérea de una playa paradisíaca remota, perfecta para escapar del ruido de la ciudad y relajarse bajo el sol.',
    imageUrl: 'https://picsum.photos/seed/2/400/300',
  },
  {
    id: '3',
    title: 'Ciudad Nocturna',
    description: 'Luces de la ciudad desde las alturas.',
    extendedDescription: 'El horizonte de la ciudad cobra vida por la noche con millones de luces de oficinas y coches, creando un espectáculo visual.',
    imageUrl: 'https://picsum.photos/seed/3/400/300',
  },
  {
    id: '4',
    title: 'Montañas Nevadas',
    description: 'Picos majestuosos cubiertos de nieve.',
    extendedDescription: 'Los picos de las montañas se elevan bruscamente hacia el cielo azul, cubiertos por una gruesa capa de nieve fresca de invierno.',
    imageUrl: 'https://picsum.photos/seed/4/400/300',
  },
  {
    id: '5',
    title: 'Café Matutino',
    description: 'Una taza de café caliente al vapor.',
    extendedDescription: 'No hay nada como empezar el día con una taza de café recién hecho, cuyo aroma llena la habitación y despierta los sentidos.',
    imageUrl: 'https://picsum.photos/seed/5/400/300',
  },
  {
    id: '6',
    title: 'Desierto Dorado',
    description: 'Dunas de arena al atardecer.',
    extendedDescription: 'Las dunas del vasto desierto brillan con un tono dorado intenso justo antes de que el sol se ponga en el horizonte.',
    imageUrl: 'https://picsum.photos/seed/6/400/300',
  },
];

// --- Requerimiento 4, 5, 6, 7 ---
// Componente para cada tarjeta de foto
const PhotoCard = ({ title, description, extendedDescription, imageUrl }) => {
  
  // Requerimiento 5: Mostrar Alerta
  const onDetailsPress = () => {
    Alert.alert(
      title, // Título
      extendedDescription, // Detalles
      [{ text: 'Cerrar' }] // Botón
    );
  };

  return (
    // Requerimiento 7: Espaciado (con marginBottom)
    // Requerimiento 6: Estilos consistentes (styles.cardContainer)
    <View style={styles.cardContainer}>
      
      {/* Requerimiento 4: ImageBackground */}
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.imageBackground}
        imageStyle={{ borderRadius: 10 }} // Para redondear la imagen de fondo
      >
        {/* Overlay para que el texto sea legible */}
        <View style={styles.textOverlay}>
          {/* Requerimiento 4: Título de la foto */}
          <Text style={styles.cardTitle}>{title}</Text>
          
          {/* Requerimiento 4: Breve descripción */}
          <Text style={styles.cardDescription}>{description}</Text>
          
          {/* Requerimiento 4: Botón "Ver detalles" */}
          <View style={styles.buttonWrapper}>
            <Button
              title="Ver detalles"
              onPress={onDetailsPress}
              color={Platform.OS === 'ios' ? '#fff' : '#007AFF'}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

// --- Requerimiento 1: Splash Screen ---
// Creamos un splash screen simulado en JS.
const SplashScreen = () => (
  <View style={styles.splashContainer}>
    <Text style={styles.splashText}>Mi Galería</Text>
    <ActivityIndicator size="large" color="#FFFFFF" />
  </View>
);

// --- Componente Principal de la App ---
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simula la carga de la app para mostrar el splash screen
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Muestra el splash por 2 segundos
  }, []);

  // Requerimiento 1: Muestra el Splash Screen mientras carga
  if (isLoading) {
    return <SplashScreen />;
  }

  // --- Vista Principal de la Galería ---
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        
        {/* Requerimiento 2: Título "Mi Galería" */}
        <Text style={styles.mainTitle}>Mi Galería</Text>

        {/* Requerimiento 3: ScrollView vertical */}
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {FOTOS.map((foto) => (
            <PhotoCard
              key={foto.id}
              title={foto.title}
              description={foto.description}
              extendedDescription={foto.extendedDescription}
              imageUrl={foto.imageUrl}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

// --- Requerimiento 6 y 7: Estilos y Espaciado ---
const styles = StyleSheet.create({
  // Estilos del Splash
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007AFF', // Un color de fondo
  },
  splashText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  
  // Estilos de la App Principal
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f4f4', // Fondo general de la app
  },
  container: {
    flex: 1,
    paddingHorizontal: 15, // Espaciado lateral
  },
  
  // Estilo del Título Principal (Req 2)
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20, // Espaciado (Req 7)
    color: '#333',
  },
  
  // Estilos del ScrollView (Req 3)
  scrollViewContent: {
    paddingBottom: 20, // Espacio al final del scroll
  },

  // Estilos de la Tarjeta (Req 4, 6, 7)
  cardContainer: {
    borderRadius: 10,
    overflow: 'hidden', // Necesario para que ImageBackground respete el borderRadius
    marginBottom: 20, // Espaciado entre tarjetas (Req 7)
    
    // Sombra para dar profundidad
    elevation: 5, // Android
    shadowColor: '#000', // iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  imageBackground: {
    width: '100%',
    height: 200, // Altura fija para las tarjetas
    justifyContent: 'flex-end', // Alinea el contenido (texto) al fondo
  },
  textOverlay: {
    // Overlay semitransparente para legibilidad
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#EEEEEE',
    marginBottom: 8,
  },
  buttonWrapper: {
    // Envolvemos el botón para mejor control de estilo si es necesario
    alignSelf: 'flex-start', // Para que el botón no ocupe todo el ancho
    // Fix para el color del botón en iOS dentro del overlay
    ...(Platform.OS === 'ios' && {
      backgroundColor: '#007AFF',
      borderRadius: 5,
    }),
  },
});