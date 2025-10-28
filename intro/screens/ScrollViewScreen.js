import { Text, StyleSheet, View, ScrollView, Button } from 'react-native'
import react, {useState,useRef}from 'react'


export default function ScrollViewScreen() {
  const scrollRef= useRef();

  const irAlFinal=()=>{
    scrollRef.current.scrollToEnd({animated:true});
  }
  
    return (
      <ScrollView
        ref={scrollRef}
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={true}
      >
        <Text style = {styles.Titulo}> practica: ScrollView</Text>
        <Text style = {styles.Titulo2}> Ejemplo desplazamiento vertical</Text>

        <View > 
          <Button
            color='#0513d7ff'
            title='Ir al final'
            onPress={irAlFinal}
          />
        </View>

        <view style={styles.elementos}>
          <Text style={styles.text}>Elemento 1 </Text>
        </view>

        <view style={styles.elementos}>
          <Text style={styles.text}>Elemento 2 </Text>
        </view>

        <view style={styles.elementos}>
          <Text style={styles.text}>Elemento 3 </Text>
        </view>

        <view style={styles.elementos}>
          <Text style={styles.text}>Elemento 4 </Text>
        </view>

        <view style={styles.elementos}>
          <Text style={styles.text}>Elemento 5 </Text>
        </view>

        <Text style = {styles.Titulo2}> Ejemplo desplazamiento horizontal</Text>
        
        <ScrollView
          horizontal
        nestedScrollEnabled={true}
        style={styles.scrollhorizontal}
        showsHorizontalScrollIndicator={true}
        >
        

        

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 1 </Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 2 </Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 3 </Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 4 </Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 5 </Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 6 </Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 7 </Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 8 </Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 9 </Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 10 </Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 11 </Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 12 </Text>
        </View>

        </ScrollView>


      </ScrollView>
    )
}

const styles = StyleSheet.create({

  container:{
   
    backgroundColor: '#554f4fff',  
    
  },

  content: {
    padding: 20,
    paddingBottom:40,
  },

  Titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000000ff',

  },

  Titulo2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 20,  
    textAlign: 'center',
  },

  elementos:{
    backgroundColor: '#8c8c8cff',
    padding: 20,
    marginBottom: 10,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center', 
    height: 100,
    justifyContent: 'center', 
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },

  elementos2:{
    backgroundColor: '#8c8c8cff',
    padding: 20,
    marginBottom: 10,
    width: 120,
    alignSelf: 'center',
    alignItems: 'center', 
    height: 100,
    justifyContent: 'center', 
    marginRight: 10,
    borderRadius: 10,
  },

  text: {
    fontSize: 18,
    color: '#000000ff',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textdecorationLine: 'underline',
  },

  scrollhorizontal: {
    flexDirection: 'row',
    marginVertical: 10,
    width: '100%',
  },

})