import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,

} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import NavigationStrings from "../../Components/NavigationStrings";
import styles from "../../Styles";
import axios from "axios";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";
import Form6 from "./Form6";


const Formularios =({navigation,route})=>{

    const id_User = route.params.id_User;
    const id_Form=route.params.Flag;
    const Token = route.params.Token




    console.log("USUARIO")
    console.log(id_User)
    console.log("ID FLAG")
    console.log(id_Form)

    



    return(

        <LinearGradient
        colors={["#fff", "#ffff", "#ffff"]}
        style={styles.linearGradient}
      >
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.welcomeprofiletxt}>Termina tu registro</Text>
            <Text style={styles.welcomeprofiletxt}>Paso {id_Form} de 5 </Text>

{id_Form == 1 ?
 (
<Form2 id_Form={id_Form} id_User={id_User} Token={Token} />

 )
 :
 (<Text></Text>)
 }
 {id_Form == 2 ?
 (
  <Form3 id_Form={id_Form} id_User={id_User} Token={Token} />
 )
 :
 (<Text></Text>)
 }

{id_Form == 3 ?
 (
  <Form4 id_Form={id_Form} id_User={id_User} Token={Token}/>
 )
 :
 (<Text></Text>)
 }

{id_Form == 4 ?
 (
  <Form5 id_Form={id_Form} id_User={id_User} Token={Token} />
 )
 :
 (<Text></Text>)
 }

{id_Form == 5 ?
 (
  <Form6 id_Form={id_Form} id_User={id_User} Token={Token} />
 )
 :
 (<Text></Text>)
 }







            </View>
            </ScrollView>
            </LinearGradient>


    )
}

export default Formularios