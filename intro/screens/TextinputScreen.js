import {Text, StyleSheet, View, TextInput, Alert, Button } from 'react-native';
import React, { useState } from 'react';

export default function TextInputScreen() {
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [telefono, setTelefono] = useState('');

    const mostrarAlerta = () => {
        if (nombre.trim() === '' || password.trim() === '' || telefono.trim() === '') {
            Alert.alert('Error', 'Por favor, complete todos los campos. (movil)');
            alert("Favor de llenar todos los campos (web)"); 
        } else {
            // alert para movil
            Alert.alert(
                "Datos Ingresados\n" + `Nombre: ${nombre}\nPassword: ${password}\nTelefono: ${telefono}`
            );
            
            // alert para web 
            alert(
                "Datos Ingresados\n" +`Nombre: ${nombre}\nPassword: ${password}\nTelefono: ${telefono}`
            );
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Text Input Screen </Text>
            <Text style={styles.etiquetas}> Nombre: </Text>
            <TextInput
             style={styles.input}
                placeholder='Escribe tu nombre aqui'
                value={nombre}
                onChangeText={setNombre}
            />

            <Text  style={styles.etiquetas}> Password: </Text>
            <TextInput
            style={styles.input}
                placeholder='Escribe tu password aqui'
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />

            <Text  style={styles.etiquetas}> Telefono: </Text>
            <TextInput
             style={styles.input}
                placeholder='Escribe tu telefono aqui'
                keyboardType='phone-pad'
                value={telefono}
                onChangeText={setTelefono}
            />

            <Button 
            color='#02ec68ff'
                title='Mostrar Alerta'
                onPress={mostrarAlerta}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#554f4fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontFamyly: 'Times New Roman',
        fontSize: 32,
        color: '#000000ff',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginBottom: 20,

    },
    etiquetas: {
        fontSize: 16,
        merginBottom: 5,
        marginTop: 10,
    },
    input:{
        with: '50%', // ocupa el ancho disponible
        borderWidth: 2, // Grosor del borde
        borderColor: '#39df8cff', // color del borde
        padding: 10, // espacio interno dentro del input
        marginBottom: 10, // espacio entre cada campo
        backgroundColor: '#a8a8a8ff',
    },
});