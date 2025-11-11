import { Text, StyleSheet, View, SectionList, ScrollView, FlatList } from 'react-native'
import React, { Component } from 'react'

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
    { titulo: 'Frutas', 
      data: [
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
          <Text style={styles.Titulo}>Ejemplo de Flatlist</Text>
          <FlatList

          data={datos}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View style={styles.elementos}>
              <Text style={styles.Text}>{item.nombre}</Text>
            </View>
          )}

          scrollEnabled={false}
          ItemSeparatorComponent={() => <View style={styles.separador} />}

          > </FlatList>

          <Text style={styles.Titulo2}>Ejemplo de SectionList</Text>
          <SectionList
            sections={secciones}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
              <View style={styles.itemSeccion}>
                <Text style={styles.textitem}>
                  {item.nombre}
                </Text>
              </View>

                
            )}
            renderSectionHeader={({section: { titulo}}) => (
              <View style={styles.encabezado}>
                <Text style={styles.tituloSeccion}>
                  {titulo}
                </Text>
              </View>
            )}
            scrollEnabled={false}
            stickySectionHeadersEnabled={false}
            />
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bfffff',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },

  Titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
    color: '#000000ff',
  },

  Titulo2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 30,
    textAlign: 'center',
    color:'#000000ff',
  },
  elementos: {
    width: '100%',
    height: 80,
    backgroundColor: '#ffffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  Text: {
    fontSize: 20,
    color: '#000000ff',
    fontFamily: 'Arial',
    fontWeight: '900',
    textDecorationLine: 'underline',
  },
  separador: {
    height: 10,
  },
  encabezado: {
    backgroundColor: '#ffdeadff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemSeccion: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    marginLeft: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  textitem: {
    fontSize: 18,
    color: '#000000',
    textAlign: 'left',
    fontWeight: '700',

  },
  tituloSeccion: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Arial',
  },
})