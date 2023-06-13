import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Pressable
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import NavigationStrings from "../../Components/NavigationStrings";
import styles from "../../Styles";
import axios from "axios";


const Form2 =(props)=>{
    const id_Form=props.id_Form
    const id_User=props.id_User
    const Token = props.Token
    
    console.log(id_Form,id_User,Token)
    
    const [calle, setCalle] = useState("");
    const [nint, setNint] = useState("");
    const [nexte, setNexte] = useState("");
    const [col, setCol] = useState("");
    const [alcaldia, setAlcaldia] = useState("");
    const [edo, setEdo] = useState("");
    const [cpostal, setCpostal] = useState("");


    const usuarioId = id_User; // Reemplaza con el ID de usuario adecuado
    const URI = `https://inmobicapital.com:9589/test/usuario/${usuarioId}/domicilio`;
    
    const data = {
      
      calle:calle,
                nint:nint,
                nexte:nexte,
                col:col,
                alcaldia:alcaldia,
                edo:edo,
                cpostal:cpostal
    
    };
    
    const token = Token;
    
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Agrega el encabezado de autorización con el token Bearer
      },
    };
    const jsonData = JSON.stringify(data);
    const SubmitForm=()=>{
      axios
      .post(URI, jsonData, config).then((response) => {
  
    console.log(response.data);

    const responseData = response.data;
    const Historico = responseData.historicoEstadoId;
    console.log(Historico)
    
  });

      

          
    }


    return(

        <LinearGradient
        colors={["#fff", "#ffff", "#ffff"]}
        style={styles.linearGradient}
      >
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.welcomeprofiletxt}>Domicilio</Text>


         

<TextInput
  style={styles.input}
  placeholder="Calle"
  value={calle}
  name="calle"
  onChangeText={(text) => setCalle(text)}
/>

<TextInput
  style={styles.input}
  placeholder="N&uacute;mero interior"
  value={nint}
  name="nint"
  keyboardType="numeric"
  onChangeText={(text) => setNint(text)}
/>

<TextInput
  style={styles.input}
  placeholder="N&uacute;mero exterior"
  value={nexte}
  name="nexte"
  keyboardType="numeric"
  onChangeText={(text) => setNexte(text)}
/>
<TextInput
  style={styles.input}
  placeholder="Colonia"
  value={col}
  name="col"
  onChangeText={(text) => setCol(text)}
/>
<TextInput
  style={styles.input}
  placeholder="Alcaldia &oacute; municipio"
  value={alcaldia}
  name="alcaldia"
  onChangeText={(text) => setAlcaldia(text)}
/>
<TextInput
  style={styles.input}
  placeholder="Estado"
  value={edo}
  name="edo"
  onChangeText={(text) => setEdo(text)}
/>
<TextInput
  style={styles.input}
  placeholder="C&oacute;digo postal"
  value={cpostal}
  name="cpostal"
  keyboardType="numeric"
  onChangeText={(text) => setCpostal(text)}
/>

<Pressable onPress={SubmitForm} style={styles.button}>
          <Text style={styles.txtlogsubmit}>Guardar Datos</Text>
        </Pressable>

            </View>
            </ScrollView>
            </LinearGradient>


    )
}

export default Form2