import { Text, StyleSheet, View, Button, Switch } from 'react-native'
import React,{useState} from 'react';

export default function BotonesScreen(){
  const [esEncendido, cambiarEncendido] = useState(false);
  const [color, cambiarColor] = useState('yellow');

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Control de luz</Text>
        
        {/* Operador terniario 
        {condicional ? valorTrue : valorFalse}
        */}
        <Text style={[styles.luz, {color: esEncendido ? color:'white'}]}>
          {esEncendido ? 'Luz Encendida' : 'Luz Apagada'}
        </Text>

        <Switch
        value={esEncendido}
        onValueChange = {() => cambiarEncendido(!esEncendido)}
        trackColor = {{true: 'yellow', false: 'grey'}}
        ></Switch>

      <View style={styles.cajaBotones}>
        <Button
        title='Amarillo'
        onPress={() =>esEncendido && cambiarColor('yellow')}
        color='#e7d91fff'
        ></Button>

        <Button
        title='Azul'
        onPress={() =>esEncendido && cambiarColor('blue')}
        color='#0040ffff'
        ></Button>

        <Button
        title='Rojo'
        onPress={() =>esEncendido && cambiarColor('red')}
        color='#ff0000ff'
        ></Button>
      </View>
      </View>
    )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajaBotones:{
    flexDirection:'arrow',
    gap:10,
    mrginTop:15,
  },
  titulo:{
    fontSize:40,
    color:'white',
    marginBottom:20,
    fontWeight: 'bold',
  },

  luz:{
    fontSize:30,
    marginBottom:15,

  },
})