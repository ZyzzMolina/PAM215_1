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
    title: 'TRABAJO',
    extendedDescription: 'DESCRIPCION: Subir carpeta de venta del mes!.',
    extendedDescription: 'PRIORIDAD: Alta.',
    extendedDescription: 'ESTATUS: Pendiente.',
    imageUrl: 'https://www.pueblaonline.com.mx/wp-content/uploads/2024/02/FOTO-EMPLEO.webp',
  },
  {
    id: '2',
    title: 'PERSONAL',
    extendedDescription: 'Salir a viaje con amigos a Mazatlán.',
    extendedDescription: 'PRIORIDAD: Media.',
    extendedDescription: 'ESTATUS: Pendiente.',
    imageUrl: 'https://www.pueblaonline.com.mx/wp-content/uploads/2024/02/FOTO-EMPLEO.webp',
    imageUrl: 'https://picsum.photos/seed/2/400/300',
  },
  {
    id: '3',
    title: 'ESTUDIOS',
    description: 'Luces de la ciudad desde las alturas.',
    extendedDescription: 'El horizonte de la ciudad cobra vida por la noche con millones de luces de oficinas y coches, creando un espectáculo visual.',
    imageUrl: 'https://picsum.photos/seed/3/400/300',
  },
 