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
import NavigationStrings from "../../Components/NavigationStrings";
import styles from "../../Styles";
import axios from "axios";
import SelectDropdown from "react-native-select-dropdown";

const Form5 =(props)=>{

    id_Form = props.id_Form;
    id_User = props.id_User;
    console.log(id_Form, id_User);



    const [nombreb, setNombreb] = useState("");
    const [apb, setApb] = useState("");
    const [amb, setAmb] = useState("");
    const [parent, setParent] = useState("");
    const [telfijo, setTelfijo] = useState("");
    const [telTrabajo, setTelTrabajo] = useState("");
    const [celularb, setCelularb] = useState("");
    const [calleb, setCalleb] = useState("");
    const [nint, setNint] = useState("");
    const [nextb, setNextb] = useState("");
    const [col, setCol] = useState("");
    const [alcaldia, setAlcaldia] = useState("");
    const [edo, setEdo] = useState("");
    const [cpostal, setCpostal] = useState("");





    const setFormB=()=>{
        console.log(
            
            nombreb,
            apb,
            amb,
            parent,
            telfijo,
            telTrabajo,
            celularb,
            calleb,
            nint,
            nextb,
            col,
            alcaldia,
            edo,
            cpostal
          );
    }
    return(

        <LinearGradient
        colors={["#fff", "#ffff", "#ffff"]}    
        style={styles.linearGradient}
      >
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.welcomeprofiletxtf3}>Beneficiarios</Text>

            <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombreb}
          name="nombreb"
          onChangeText={(text) => setNombreb(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Apellido paterno"
          value={apb}
          name="apb"
          onChangeText={(text) => setApb(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Apellido materno"
          value={amb}
          name="amb"
          onChangeText={(text) => setAmb(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Parentesco"
          value={parent}
          name="parent"
          onChangeText={(text) => setParent(text)}
        />




        <TextInput
          style={styles.input}
          placeholder="Telefono Fijo"
          value={telfijo}
          name="telfijo"
          keyboardType="numeric"
          onChangeText={(text) => setTelfijo(text)}
        />


        <TextInput
          style={styles.input}
          placeholder="Celular"
          value={celularb}
          name="celularb"
          keyboardType="numeric"
          onChangeText={(text) => setCelularb(text)}
        />

        <Text style={styles.txtlog}>Domicilio</Text>

        <TextInput
          style={styles.input}
          placeholder="Calle"
          value={calleb}
          name="calleb"
          onChangeText={(text) => setCalleb(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="N&uacute;mero interior"
          value={nint}
          name="nint"
          
          onChangeText={(text) => setNint(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="N&uacute;mero exterior"
          value={nextb}
          name="nextb"
          onChangeText={(text) => setNextb(text)}
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


        <Pressable onPress={setFormB} style={styles.button}>
          <Text style={styles.txtlogsubmit}>Guardar Datos</Text>
        </Pressable>
      

            </View>
            </ScrollView>
            </LinearGradient>


    )
}
export default Form5