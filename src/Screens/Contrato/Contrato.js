import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "../../Styles";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";



const Contrato=()=>{
    
const htmlContrato="<html> <body><div><h1>Mi contrato</h1></div></body></html> ";
const generaPDF= async()=>{
  const file=await printToFileAsync({
    html:htmlContrato,
    base64:false
  });
  await shareAsync(file.uri)
}


    return(
        <LinearGradient
        colors={["#fff", "#ffff", "#ffff"]}
        style={styles.linearGradient}
      >
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.welcomeprofiletxtf3}>Mi contrato</Text>

            <Image
              style={styles.iconcontrato}
              source={require('../../../assets/icons/INMOBICAPITALELEMENTOVISUAL1.png')}
            />



            <Pressable onPress={generaPDF} style={styles.botininvestpro}>
           <Text style={styles.btn1txt}> Descargar contrato </Text>
         </Pressable>

         <Pressable  style={styles.botininvestpro}>
           <Text style={styles.btn1txt}> Aviso de Privacidad </Text>
         </Pressable>

         <Pressable  style={styles.botininvestpro}>
           <Text style={styles.btn1txt}> Mis datos bancarios </Text>
         </Pressable>

            </View>
            </ScrollView>
            </LinearGradient>

    )
}

export default Contrato