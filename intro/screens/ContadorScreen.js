
//1.imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

//2.Main: Zona de componentes
export default function App() {

  const[contador,setContador]=useState(0);

  return (


    <View style={styles.container}>

<Text style={styles.texto}>Contador</Text>
<Text style={styles.texto2}>{contador}</Text>

      <View style={styles.contenedorbotones}>  
      <Button color="red" title='Incrementar' onPress={()=>setContador(contador+1)}>  </Button>
      <Button color="red" title='Quitar' onPress={()=>setContador(contador-1)}>  </Button>
      <Button color="red" title='Reiniciar' onPress={()=>setContador(0)}>  </Button>
      </View>   

      <StatusBar style="auto" />

    </View>



  );
}
//3.Styles: Zona de estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
    fontFamily:'Times New Roman',
    color:'#ff0000',
    fontSize:30,
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through',
  },

  texto2:{
    fontFamily:'Courier New',
    color:'#f8f7f7ff',
    fontSize:30,
    fontWeight:'black',
    fontStyle:'normal',

  },

  contenedorbotones:{
    marginTop: 20,
    flexDirection:'row',
    gap:10,

  },

});
