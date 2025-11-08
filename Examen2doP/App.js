//Gestión de Tareas por Categorías
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Button,
  Switch,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

// Datos 
const INITIAL_TASKS = {
  trabajo: [
    {
      id: 't1',
      descripcion: 'Subir carpeta de ventas del mes',
      prioridad: 'Alta',
      completada: false,
    },
    {
      id: 't2',
      descripcion: 'Presentación ejecutiva de resultados',
      prioridad: 'Media',
      completada: false,
    },
  ],
  personal: [
    {
      id: 'p1',
      descripcion: 'Salir a viaje con amigos a Mazatlán',
      prioridad: 'Media',
      completada: false,
    },
    {
      id: 'p2',
      descripcion: 'Organizar reunión familiar',
      prioridad: 'Baja',
      completada: false,
    },
  ],
  estudios: [
    {
      id: 'e1',
      descripcion: 'Estudiar para examen de Matemáticas',
      prioridad: 'Alta',
      completada: false,
    },
    {
      id: 'e2',
      descripcion: 'Entregar proyecto de programación',
      prioridad: 'Alta',
      completada: false,
    },
  ],
};

// Componente para una tarea individual
const TaskItem = ({ task, onToggle }) => {
  const getPriorityColor = (prioridad) => {
    switch (prioridad) {
      case 'Alta':
        return '#FF4444';
      case 'Media':
        return '#FFA500';
      case 'Baja':
        return '#4CAF50';
      default:
        return '#999';
    }
  };

  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskInfo}>
        <Text style={styles.taskDescription}>{task.descripcion}</Text>
        <View style={styles.taskDetails}>
          <Text style={[styles.priority, { color: getPriorityColor(task.prioridad) }]}>
            Prioridad: {task.prioridad}
          </Text>
          <Text style={styles.status}>
            Estatus: {task.completada ? 'Completada' : 'Pendiente'}
          </Text>
        </View>
      </View>
      <Switch
        value={task.completada}
        onValueChange={onToggle}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={task.completada ? '#007AFF' : '#f4f3f4'}
      />
    </View>
  );
};

// Componente para una categoría
const CategorySection = ({ title, tasks, color, onTaskToggle }) => {
  return (
    <View style={[styles.categoryContainer, { backgroundColor: color }]}>
      <Text style={styles.categoryTitle}>{title}</Text>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={() => onTaskToggle(task.id)}
        />
      ))}
    </View>
  );
};

//Splash Screen con frase motivacional
const SplashScreen = () => (
  <View style={styles.splashContainer}>
    <Text style={styles.splashText}>""No podemos cambiar lo hecho, sólo podemos seguir adelante". " </Text>
    <ActivityIndicator size="large" color="#FFFFFF" style={styles.loader} />
  </View>
);

// Componente Principal de la App
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  // Simula la carga de la app para mostrar el splash screen
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  // Función para cambiar el estado de una tarea
  const handleTaskToggle = (category, taskId) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [category]: prevTasks[category].map((task) =>
        task.id === taskId ? { ...task, completada: !task.completada } : task
      ),
    }));
  };

  // Boton de reinicio
  const handleReiniciar = () => {
    const resetTasks = {};
    Object.keys(INITIAL_TASKS).forEach((category) => {
      resetTasks[category] = INITIAL_TASKS[category].map((task) => ({
        ...task,
        completada: false,
      }));
    });
    setTasks(resetTasks);
  };

  // Obtener la fecha actual formateada
  const getCurrentDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
  };

  if (isLoading) {
    return <SplashScreen />;
  }

  // Pantalla principal con ImageBackground
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800',
        }}
        style={styles.backgroundImage}
        imageStyle={{ opacity: 0.3 }}
      >
        <View style={styles.container}>
          {/*Encabezado con título y fecha */}
          <View style={styles.header}>
            <Text style={styles.mainTitle}>Mis Deberes</Text>
            <Text style={styles.dateText}>{getCurrentDate()}</Text>
          </View>

          {/*ScrollView con 3 secciones de categorías */}
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Cada categoría con color distintivo */}
            <CategorySection
              title="TRABAJO"
              tasks={tasks.trabajo}
              color="rgba(52, 152, 219, 0.24)"
              onTaskToggle={(taskId) => handleTaskToggle('trabajo', taskId)}
            />

            <CategorySection
              title="PERSONAL"
              tasks={tasks.personal}
              color="rgba(156, 89, 182, 0.36)"
              onTaskToggle={(taskId) => handleTaskToggle('personal', taskId)}
            />

            <CategorySection
              title="ESTUDIOS"
              tasks={tasks.estudios}
              color="rgba(46, 204, 112, 0.29)"
              onTaskToggle={(taskId) => handleTaskToggle('estudios', taskId)}
            />
          </ScrollView>

          {/* Requerimiento 7: Botón Reiniciar */}
          <TouchableOpacity style={styles.resetButton} onPress={handleReiniciar}>
            <Text style={styles.resetButtonText}>Reiniciar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  // Estilos del Splash Screen
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6C63FF',
    paddingHorizontal: 30,
  },
  splashText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 32,
  },
  loader: {
    marginTop: 20,
  },

  // Estilos de la App Principal
  safeArea: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  backgroundImage: {
    flex: 1,
    backgroundColor: '#ffffffff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },

  // Estilos del Encabezado
  header: {
    paddingTop: 20,
    paddingBottom: 15,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    marginBottom: 15,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  dateText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 5,
    fontWeight: '600',
  },

  // Estilos del ScrollView
  scrollViewContent: {
    paddingBottom: 100,
  },

  // Estilos de la Categoría
  categoryContainer: {
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  // Estilos de la Tarea
  taskContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  taskInfo: {
    flex: 1,
    marginRight: 10,
  },
  taskDescription: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  taskDetails: {
    gap: 4,
  },
  priority: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },

  // Estilos del Botón Reiniciar
  resetButton: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 15,
    backgroundColor: '#E74C3C',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});