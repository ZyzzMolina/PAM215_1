import { StyleSheet, View, ImageBackground, Animated, Easing, TextInput, Alert, Button, Switch, Text } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';

// Componente formulario
function TextInputContent() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const mostrarAlerta = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
  if (nombre.trim() === '' && correo.trim() === '' && !isTermsAccepted) {
    Alert.alert('Faltan todos los datos', 'Por favor, llena todos los campos y acepta los términos.');
    return;
  }

  
  if (nombre.trim() === '') {
    Alert.alert('Nombre requerido', 'Por favor, ingresa tu nombre.');
    return;
  }

  
  if (correo.trim() === '') {
    Alert.alert('Correo requerido', 'Por favor, ingresa tu correo.');
    return;
  }

 
  if (!emailRegex.test(correo)) {
    Alert.alert('Correo inválido', 'Por favor, ingresa un correo electrónico válido.');
    return;
  }

 
  if (!isTermsAccepted) {
    Alert.alert(
      'Términos no aceptados',
      'Debes aceptar los términos y condiciones para continuar.'
    );
    return;
  }

  Alert.alert(
    "Registro Exitoso",
    `Nombre: ${nombre}\nCorreo: ${correo}`
  );
};


  return (
    <View style={textInputStyles.container}>
      <Text style={textInputStyles.titulo}> REGISTRO DE USUARIO </Text>

      <Text style={textInputStyles.etiquetas}> Nombre: </Text>
      <TextInput
        style={textInputStyles.input}
        placeholder='Nombre Completo'
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={textInputStyles.etiquetas}> Correo: </Text>
      <TextInput
        style={textInputStyles.input}
        placeholder='Correo Electrónico'
        value={correo}
        onChangeText={setCorreo}
        keyboardType='email-address'
      />

      <View style={textInputStyles.terminosContainer}>
        <Text style={textInputStyles.etiquetas}>Aceptar Términos</Text>
        <Switch
          onValueChange={setIsTermsAccepted}
          value={isTermsAccepted}
        />
      </View>

      <Button
        color='#0513d7ff'
        title='Registrarse'
        onPress={mostrarAlerta}
      />
    </View>
  );
}

const textInputStyles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#50474739',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 26,
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 15,
  },
  etiquetas: {
    fontSize: 16,
    color: '#000',
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#808080',
    padding: 8,
    marginBottom: 10,
    backgroundColor: '#a8a8a8',
    borderRadius: 5,
  },
  terminosContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20,
  }
});

export default function Black_SplashScreen() {
  const [cargando, setCargando] = useState(true);
  const desvanecido = useRef(new Animated.Value(1)).current;

  const umbrellaImageSource = require('../assets/umbrella.png');
  const backgroundImageSource = require('../assets/b3.jpg');

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(desvanecido, {
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start(() => setCargando(false));
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (cargando) {
    return (
      <Animated.View style={[styles.splashContainer, { opacity: desvanecido }]}>
        <ImageBackground style={styles.splashImage}
          source={umbrellaImageSource}
          resizeMode='contain'
        />
      </Animated.View>
    );
  }

  return (
    <ImageBackground style={styles.Background}
      source={backgroundImageSource}
      resizeMode='cover'
    >
      <TextInputContent />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  splashImage: {
    width: '100%',
    height: '100%',
  }
});
