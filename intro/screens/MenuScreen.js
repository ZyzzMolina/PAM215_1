import { Text, StyleSheet, View,Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextinputScreen from './TextinputScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import BottomSheetScreen from './BottomSheetScreen';
import Repaso1Screen from './Repaso1Screen';


export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch (screen) {
        case 'contador':
            return <ContadorScreen />;
        case 'botones':
            return <BotonesScreen />;
        case 'textinput':
            return <TextinputScreen />;
        case 'imagebackground':
            return <ImageBackgroundScreen />;
        case 'scrollview':
            return <ScrollViewScreen />;
        case 'activityindicator':
            return <ActivityIndicatorScreen />;
        case 'flatlist':
            return <FlatListScreen />;
        case 'modal':
            return <ModalScreen />;
        case 'botom sheet':
            return <BottomSheetScreen />;
        case 'repaso1':
            return <Repaso1Screen />;
        
        case 'menu':
        default:
            return (

      <View style={styles.container}>
      <Text style={styles.texto}>MENU DE PRACTICAS</Text>
      <View style={styles.contenedorbotones}>
    
    <Button onPress={()=>setScreen('contador')} title='Pract:Contador' />
    <Button onPress={()=>setScreen('botones')} title='Pract:Buttons' />
    <Button onPress={()=>setScreen('textinput')} title='Pract:Text input & alert' />
    <Button onPress={()=>setScreen('imagebackground')} title='Pract:Image background' />
    <Button onPress={()=>setScreen('scrollview')} title='Pract:Scroll view' />
    <Button onPress={()=>setScreen('activityindicator')} title='Pract:Activity indicator' />
    <Button onPress={()=>setScreen('flatlist')} title='Pract:Flat list' />
    <Button onPress={()=>setScreen('modal')} title='Pract:Modal' /> 
    <Button onPress={()=>setScreen('botom sheet')} title='Pract:Bottom sheet' />  
    <Button onPress={()=>setScreen('repaso1')} title='Repaso 1' />  
      </View>
      </View>
    )
            
    }

    

}

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
    flexDirection:'column',
    gap:10,

  },
})