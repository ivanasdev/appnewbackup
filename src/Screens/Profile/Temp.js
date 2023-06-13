import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,

} from 'react-native';

import NavigationStrings from '../../Components/NavigationStrings';
import styles from '../../Styles';
import { LinearGradient } from 'expo-linear-gradient';

const TempProfile=({navigation})=>{
  const [name,setName]=useState("")
  
  useEffect(()=>{
    getData();

  },[])

  const getData=()=>{
    try{
      AsyncStorage.getItem("username")
      .then(value=>{
        if(value != null){
          setName(value)
        }
      })
    }catch(error){

    }
  }

    const goToScreen = () => {
        navigation.navigate(NavigationStrings.LOGIN, {title: 'INICIO'});
      };
      const goToScreenregister = () => {
        navigation.navigate(NavigationStrings.SIGNUP, {title: 'SIGNUP'});
      };
      const goToScreenUS = () => {
        navigation.navigate(NavigationStrings.ABOUT, {title: 'NOSOTROS'});
      };
      const goToScreenProfile=()=>{
        navigation.navigate(NavigationStrings.PROFILE,{username:name});
      }

      if(name == true){
        goToScreenProfile(username);
      }
    
    return(
        <LinearGradient
        colors={['#000000', '#000000', '#000000']}
        style={styles.linearGradient}>
        <ScrollView>
          <View style={styles.container}>

          <Image
              style={styles.imgintro}
              source={require('../../../assets/inmo.png')}
            />
  
            
       
            <View>
            <Text style={styles.card1tmplog}>Inicia sesi&oacute;n o registrate es completamente gratis</Text>
            </View>
  
  
              <Pressable onPress={goToScreen} style={styles.buttontmp}>
                <Text style={styles.btn1txt}>Iniciar Sesi&oacute;n</Text>
              </Pressable>

   
           
           <Pressable onPress={goToScreenregister} style={styles.buttontmp}>
             <Text style={styles.btn1txt}>Registrate</Text>
           </Pressable>

 
  
     
          </View>
        </ScrollView>
      </LinearGradient>

    )
}


export default TempProfile