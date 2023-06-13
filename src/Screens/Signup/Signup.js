import React, { useEffect, useState } from "react";

import { LinearGradient } from "expo-linear-gradient";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import NavigationStrings from "../../Components/NavigationStrings";
import axios from "axios";
import imagePath from "../../Components/imagePath";
import styles from "../../Styles";
import { stringMd5 } from 'react-native-quick-md5';


const SignupPage = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [ap, setAp] = useState("");
  const [am, setAm] = useState("");

  const [password, setPassword] = useState("");
  const [seePassword, setSeePassword] = useState(true);
  const [checkEmail, setCheckEmail] = useState(false);

  const ToastShow = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Inicio Exitoso!!",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      50,
      50
    );
  };
  const ToastShowFail = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Clave de acceso o email incorrectos ",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      50,
      50
    );
  };

  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    setEmail(text);

    if (re.test(text) || regex.test(text)) {
      setCheckEmail(false);
    } else {
      setCheckEmail(true);
    }
  };

  const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return "La clave de acceso no debe tener espacios en blanco.";
    }
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return "La clave de acceso debe tener al menos una mayuscula.";
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return "La clave de acceso debe tener al menos una minuscula .";
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return "La clave de acceso debe tener un digito por lo menos .";
    }

    const isValidLength = /^.{6,16}$/;
    if (!isValidLength.test(value)) {
      return "La clave de acceso debe tener de 6 a 10 caracteres.";
    }

    return null;
  };

  const gotoLogin = () => {
    navigation.navigate(NavigationStrings.LOGIN, { title: "Inicia Sesion" });
  };

  const HandleSignupTmp = () => {
    const checkPassword = checkPasswordValidity(password);
    if (!checkPassword) {
      //goToScreenProfile()

 
      const URI = "https://inmobicapital.com:9589/test/usuario";
      const config={
        headers:{
          key:"497eb7602213ecc9f64bd9630cd9e829"

        }
      }
      const contrasena = stringMd5(password);
      const data={
        nombre:nombre,
        ap:ap,
        am:am,
        email:email,
        password:contrasena,
      }

      console.log(nombre, ap, am, email, password);
      axios
        .post(URI,data,config)
        .then((response) => {
          console.log(response.data);

          if (response.data.length == 0) {
            console.log("Error al registrar");
            alert("Algo salio  mal");
          } else {
            console.log("Usuario Registrado");
            console.log(response);
            alert("Inicio exitoso");
            gotoLogin();
          }
        });
    } else {
      alert(checkPassword);
    }
  };

  return (
    <LinearGradient colors={["#ffff", "#ffff"]} style={styles.linearGradient}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.txtlog}>Registrate</Text>

          <View>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={nombre}
              name="nombre"
              onChangeText={(text) => setNombre(text)}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Apellido Paterno"
              value={ap}
              name="ap"
              onChangeText={(text) => setAp(text)}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Apellido Materno"
              value={am}
              name="am"
              onChangeText={(text) => setAm(text)}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Correo electronico"
              value={email}
              onChangeText={(text) => handleCheckEmail(text)}
            />
          </View>

          {checkEmail ? (
            <Text style={styles.Wrongemail}>¡Formato de correo invalido!</Text>
          ) : (
            <Text style={styles.Wrongemail}>¡Correcto!</Text>
          )}

          <View>
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              value={password}
              secureTextEntry={seePassword}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              style={styles.wrapperIcon}
              onPress={() => setSeePassword(!seePassword)}
            >
              <Image
                source={seePassword ? imagePath.icEyeOff : imagePath.icEye}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          <View></View>

          {email == "" || password == "" || checkEmail == true ? (
            <Text style={styles.txtlogsubmit}></Text>
          ) : (
            <TouchableOpacity style={styles.button} onPress={HandleSignupTmp}>
              <Text style={styles.txtlogsubmit}>Guardar</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SignupPage;
