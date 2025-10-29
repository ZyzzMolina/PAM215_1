import { Text, StyleSheet, View, SectionList, ScrollView } from 'react-native'
import React,{component} from 'react'

export default function FlatListScreen() {

  const datos = [
    { id: '1', nombre: 'manzana',},
    { id: '2', nombre: 'platano',},
    { id: '3', nombre: 'naranja',},
    { id: '4', nombre: 'uva',},
    { id: '5', nombre: 'fresa',},
    { id: '6', nombre: 'Sandia',},
  ]
  const secciones = [
    { title: 'Frutas', data: [
      {nombre: 'manzana' },
      {nombre: 'platano' },
      {nombre: 'naranja' }, 
      {nombre: 'uva' },

     ] 
    },
    

    {
      titulo: 'Verduras',
      data: [
        {nombre: 'zanahoria' },
        {nombre: 'lechuga' },
        {nombre: 'tomate' }, 
        {nombre: 'brocoli' },
      ]
    },


  ]
    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Ejemplo de Flatlist</Text>
          <FlatList

          
          
          > </FlatList>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})