import { Text, StyleSheet, View, Pressable, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
 


export default function ModalScreen() {

  const[mostrar, setMostrar] = useState(false);
  
    return (
      <View style={styles.container}>

        <Text style={styles.titulo}>BIENVENIDO</Text>

        <Pressable style={styles.boton} onPress={() => setMostrar('login')}>
          <Text style={styles.text}>Iniciar Sesion</Text>
        </Pressable>

         <Pressable style={styles.boton} onPress={() => setMostrar('Registro')}>
          <Text style={styles.text}>Registrarse</Text>
        </Pressable>

         <Pressable style={styles.boton} onPress={() => setMostrar('alerta')}>
          <Text style={styles.text}>Alerta</Text>
        </Pressable>

        <Modal
          animationType='slide'
          visible={mostrar === 'login' }
          transparent={true}
          onRequestClose={() => setMostrar(null)}
        >
          <View style={styles.container2}>

            <Text style={styles.titulo}> Formulario de inicio de sesion </Text>

            <TextInput placeholder='Ingrese su usuario' style={styles.input} />
            <TextInput placeholder='Ingrese su contraseña' style={styles.input} secureTextEntry={true} />

            <Pressable style={styles.boton} onPress={() => setMostrar(null)}>
          <Text style={styles.text}>Iniciar Sesion</Text>
        </Pressable>


          </View>


        </Modal>

        <Modal
          animationType='slide'
          visible={mostrar === 'Registro' }
          transparent={true}
          onRequestClose={() => setMostrar(null)}
        >
          <View style={styles.container2}>

            <Text style={styles.titulo}> Formulario de inicio de sesion </Text>

            <TextInput placeholder='Ingrese su usuario' style={styles.input} />
            <TextInput placeholder='Ingrese su Email'  keyboardType="email-address" style={styles.input} />
            <TextInput placeholder='Ingrese su contraseña' style={styles.input} secureTextEntry={true} />

            <Pressable style={styles.boton} onPress={() => setMostrar(null)}>
          <Text style={styles.text}>Registrarse</Text>
        </Pressable>


          </View>


        </Modal>

        <Modal
        animationType='fade'
        transparent={false}
        visible={mostrar === 'alerta'}
        onRequestClose={() => setMostrar(null)}
        >
          <View style={styles.container3}>

            <View style={styles.containerAlerta}> 

              <Text style={styles.textAlerta}> Esta es una alerta </Text>

              <View style={styles.containerBoton}>

                <Pressable style={styles.boton1} onPress={() => setMostrar(null)}>
          <Text style={styles.text}>Ok</Text>
        </Pressable>

        <Pressable style={styles.boton2} onPress={() => setMostrar(null)}>
          <Text style={styles.text}>Cerrar</Text>
        </Pressable>

              </View>
              
            </View>

            </View>
          

        </Modal>

      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    padding: 30,
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 40,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  boton: {
    backgroundColor: '#2c3e50',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginVertical: 8,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    letterSpacing: 0.5,
  },
  input: {
    width: '90%',
    height: 54,
    borderColor: '#e0e0e0',
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 15,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    fontSize: 15,
    color: '#2c3e50',
  },
  containerAlerta: {
    width: '85%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  textAlerta: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 24,
  },
  boton1: {
    backgroundColor: '#2c3e50',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 6,
  },
  boton2: {
    backgroundColor: '#ff0000ff',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 6,
  },
  containerBoton: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 24,
    justifyContent: 'center',
    gap: 12,
  },
});