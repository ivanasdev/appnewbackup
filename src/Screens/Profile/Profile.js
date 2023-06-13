
import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TextInput,
  Alert,
} from "react-native";

import styles from "../../Styles";
import NavigationStrings from "../../Components/NavigationStrings";
import { LinearGradient } from "expo-linear-gradient";
import SelectDropdown from "react-native-select-dropdown";
import axios from "axios";
//import AsyncStorage from "@react-native-async-storage/async-storage";
//import Contrato from "../Contrato/Contrato";

const ProfilePage = ({ navigation, route }) => {

 

  const id_User = route.params.id_User;
  const Token= route.params.Token
  const nombreuser = route.params.nombreuser;
  const apPat = route.params.apPat;
  const apMat = route.params.apMat;
  const Historico=route.params.Historico;
  
  const [monto, setMonto] = useState("");
  const [plazo, setPlazo] = useState("");
  const [resultado, setResultado] = useState(0);
  const plazocat = ["Un año", "Dos años", "Tres años"];
  //const [name, setName] = useState("");

  const Flag = Historico;
  const FlagRegistroCompleto = 0;


  


  //const [montoget,setmontoget]=useState(0)
  const [plazodef,setPlazodef]=useState(0)
  

  console.log(Token);

  const politcsform = () => {
    goToPolitis(id_User);
  };
  const goToPolitis = (id_User) => {
    navigation.navigate(NavigationStrings.POLITICS, {
      id_User: id_User,
      Flag: Flag,
    });
  };
  const goToCompleteSignup = (nombreuser, id_User, Flag,Token) => {
    navigation.navigate(NavigationStrings.FORMULARIOS, {
      nombreuser: nombreuser,
      id_User: id_User,
      Flag: Flag,
      Token:Token
    });
  };

  const terminarreg = () => {
    goToCompleteSignup(nombreuser, id_User, Flag,Token);
  };

  const goContract = (nombreuser, id_User) => {
    navigation.navigate(NavigationStrings.CONTRATO, {
      nombreuser: nombreuser,
      id_User: id_User,
    });
  };

  const vamosContrato = () => {
    goContract(nombreuser, id_User);
  };

  return (
    <LinearGradient
      colors={["#fff", "#ffff", "#ffff"]}
      style={styles.linearGradient}
    >
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.iconcontrato}
            source={require("../../../assets/icons/INMOBICAPITALELEMENTOVISUAL1.png")}
          />
          <Text style={styles.welcomeprofiletxt}>Bienvenido {nombreuser}</Text>

          {Flag < 6 ? (
            <Pressable onPress={terminarreg} style={styles.botininvestpro}>
              <Text style={styles.btn1txt}> Completa tu Registro </Text>
            </Pressable>
          ) : (
            <Text> </Text>
          )}

          {FlagRegistroCompleto == 1 ? (
            <Pressable onPress={vamosContrato} style={styles.botininvestpro}>
              <Text style={styles.btn1txt}> Mi contrato </Text>
            </Pressable>
          ) : (
            <Text></Text>
          )}

          <LinearGradient
            colors={["#fff", "#ffff"]}
            style={styles.linearGradientSimulator}
          >
            <Text style={styles.welcomeprofiletxt1}>Simulador de ganacias</Text>

            <TextInput
              style={styles.input}
              placeholder="Monto a invertir"
              value={monto}
              name="monto"
              keyboardType="numeric"
              onChangeText={(text) => setMonto(text)}
            />

            <SelectDropdown
              dropdownStyle={styles.dropdown1DropdownStyle}
              buttonStyle={styles.dropdown1BtnStyle}
              data={plazocat}
              defaultButtonText={"Selecciona un plazo"}
              onSelect={(selectedItem, index) => {
                //console.log(selectedItem, index);
                setPlazo(selectedItem);
        
                if(selectedItem=="Un año"){
                  setPlazodef(12)

                }
                else if(selectedItem == "Dos años"){
                  setPlazodef(24)
                }
                else if(selectedItem =="Tres años"){
                  setPlazodef(36)
                }
                
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
                
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />

            <Text style={styles.btn1txt1}>Podras ganar hasta *</Text>

       {plazodef == 0 ?

       (     <Text style={styles.resultado}>$0 </Text>)
       :
       (     <Text style={styles.resultado}> ${plazodef}ss</Text>) }
            <Text style={styles.txtlog}>*rendimiento bruto</Text>

            
          </LinearGradient>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ProfilePage;


