import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';

export default function Prueba() {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    // Simula una carga de 3 segundos
    setTimeout(() => setLoading(false), 3000);
  };

  // Si loading es true, renderizamos solo el loader
  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#2196F3" animating={true} hidesWhenStopped={true} />
          <Text>Cargando...</Text>
        </View>
      </View>
    );
  }

  // Si loading es false, mostramos el estado listo
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ActivityIndicator</Text>
      <Button title="Cargar datos" onPress={startLoading} />
      <Text>Listo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderContainer: {
    alignItems: 'center',
  },
});