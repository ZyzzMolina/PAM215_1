import { Text, StyleSheet, View, ImageBackground,
  Animated,Easing} from 'react-native'
import React,{useEffect,useState} from 'react';


export default function Black_SplashScreen() {
  const[cargando,setcargador]=useState(true);
  const desvanecido = new Animated.Value(1);

  useEffect(()=>{
    const timer = setTimeout(() => {
      Animated.timing(desvanecido,{
        toValue:0,
        duration:800,
        easing:Easing.out(Easing.ease),
        useNativeDriver:true,

      }).start(()=>setcargador(false));

    }, 2000);
    return () => clearTimeout(timer);
  },[]);







  if(cargando){
    return(

      <Animated.View style={[styles.splashContainer,{opacity:desvanecido}]}>
        <ImageBackground style={styles.splashImage}
        source={require('../assets/perico.jpg')}
        resizeMode='contain'
        >
          <Text style={styles.texto2}>Cargando...</Text>
        </ImageBackground>
      </Animated.View>
    );
  }

    return (
      <ImageBackground style={styles.Background}
      source={require('../assets/gato.jpeg')}
      resizeMode='cover'
      >

        <Text style={styles.texto}>BIENVENIDO A MI PAGINA!</Text>
      </ImageBackground>

        
     
    )
  }


const styles = StyleSheet.create({
  Background:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height: '100%',
  },
  texto:{
    color: '#ffffffff',
    fontWeight: 'bold',
    fontSize:25,
    backgroundColor: '#0004f96a',
    padding:10,
  },
  texto2:{
    color: '#ffffffff',
    fontWeight: 'bold',
    fontSize:25,
    backgroundColor: '#000000aa',
    padding:10,
  },
  splashContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding: 50,
  },
  splashImage:{
    flex:1,
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  splashtext:{
    flex:1,
  }
});