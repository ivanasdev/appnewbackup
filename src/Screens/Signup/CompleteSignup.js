import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  ToastAndroid,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import NavigationStrings from "../../Components/NavigationStrings";
import styles from "../../Styles";
import axios from "axios";

import SelectDropdown from "react-native-select-dropdown";
import Politic from "./Politic";

const CompleteSignup = ({ navigation, route }) => {

  const ToastShowFail = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Llene todos los campos ",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      50,
      50
    );
  };

  const ToastShow = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Registro Exitoso!",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      50,
      50
    );
  };
  const username = route.params.username;
  const apellidop = route.params.ap;
  const apellidom = route.params.am;
  const idUser = route.params.id_User;

  console.log(idUser);

  const URI = "http://45.80.153.150:5001";

  const [day, setDay] = useState("");
  const [mount, setMount] = useState("");
  const [year, setYear] = useState("");
  const [telfijo, setTelfijo] = useState("");

  const [celular, setCelular] = useState("");
  //const [nombredelbanco, setNombredelbanco] = useState("");
  const [clabe, setClabe] = useState("");
  const [rfc, setRfc] = useState("");
  const [nacion, setNacion] = useState("");
  const [curp, setCurp] = useState("");
  const [tipop, setTipop] = useState("");
  const [clabeveri, setClabeveri] = useState("");

  const [calleb, setCalleb] = useState("");
  const [nint, setNint] = useState("");
  const [nextb, setNextb] = useState("");
  const [col, setCol] = useState("");
  const [alcaldia, setAlcaldia] = useState("");
  const [edo, setEdo] = useState("");
  const [cpostal, setCpostal] = useState("");
 

  //FLAGS
  const [llenado, setLlenado] = useState(false);
  const [flagrfc, setFlagrfc] = useState(false);
  const [flagcel, setFlagcel] = useState(false);
  const [flagcurp, setFlagCurp] = useState(false);
  const [flagPolitic,setFlagPolitic]=useState(false);

const siono=["SI","NO"]
  const dias = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
  const meses = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  const years = [
    "1940",
    "1941",
    "1942",
    "1943",
    "1944",
    "1945",
    "1946",
    "1947",
    "1948",
    "1949",
    "1950",
    "1950",
    "1951",
    "1952",
    "1953",
    "1954",
    "1955",
    "1956",
    "1957",
    "1958",
    "1959",
    "1960",
    "1960",
    "1961",
    "1962",
    "1963",
    "1964",
    "1965",
    "1966",
    "1967",
    "1968",
    "1969",
    "1970",
    "1970",
    "1971",
    "1972",
    "1973",
    "1974",
    "1975",
    "1976",
    "1977",
    "1978",
    "1979",
    "1980",
    "1980",
    "1981",
    "1982",
    "1983",
    "1984",
    "1985",
    "1986",
    "1987",
    "1988",
    "1989",
    "1990",
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];


let nombrebanco = "";
  switch (clabeveri) {
    case "002":
      nombrebanco = "BANAMEX";
      break;
    case "006":
      nombrebanco = "BANCOMEXT";
      break;
    case "009":
      nombrebanco = "BANOBRAS";
      break;
    case "012":
      nombrebanco = "BBVA BANCOMER";
      break;
    case "014":
      nombrebanco = "SANTANDER";
      break;
    case "019":
      nombrebanco = "BANJERCITO";
      break;
    case "021":
      nombrebanco = "HSBC";
      break;
    case "030":
      nombrebanco = "BAJIO";
      break;
    case "032":
      nombrebanco = "IXE";
      break;
    case "036":
      nombrebanco = "INBURSA";
      break;
    case "037":
      nombrebanco = "INTERACCIONES";
      break;
    case "042":
      nombrebanco = "MIFEL";
      break;
    case "044":
      nombrebanco = "SCOTIABANK";
      break;
    case "058":
      nombrebanco = "BANREGIO";
      break;
    case "059":
      nombrebanco = "INVEX";
      break;
    case "060":
      nombrebanco = "BANSI";
      break;
    case "062":
      nombrebanco = "AFIRME";
      break;
    case "072":
      nombrebanco = "BANORTE";
      break;
    case "102":
      nombrebanco = "HE ROYAL BANK";
      break;
    case "103":
      nombrebanco = "AMERICAN EXPRESS";
      break;
    case "106":
      nombrebanco = "BAMSA";
      break;
    case "108":
      nombrebanco = "TOKYO";
      break;
    case "110":
      nombrebanco = "JP MORGAN";
      break;
    case "112":
      nombrebanco = "BMONEX";
      break;
    case "113":
      nombrebanco = "VE POR MAS";
      break;
    case "116":
      nombrebanco = "ING";
      break;
    case "124":
      nombrebanco = "DEUTSCHE";
      break;
    case "126":
      nombrebanco = "CREDIT SUISSE";
      break;
    case "127":
      nombrebanco = "AZTECA";
      break;
    case "128":
      nombrebanco = "AUTOFIN";
      break;
    case "129":
      nombrebanco = "BARCLAYS";
      break;
    case "130":
      nombrebanco = "COMPARTAMOS";
      break;
    case "131":
      nombrebanco = "BANCO FAMSA";
      break;
    case "132":
      nombrebanco = "BMULTIVA";
      break;
    case "133":
      nombrebanco = "ACTINBER";
      break;
    case "134":
      nombrebanco = "WALT-MART";
      break;
    case "135":
      nombrebanco = "NAFIN";
      break;
    case "136":
      nombrebanco = "INTERBANCO";
      break;
    case "137":
      nombrebanco = "BANCOPPEL";
      break;
    case "138":
      nombrebanco = "ABC CAPITAL";
      break;
    case "139":
      nombrebanco = "UBS BANK";
      break;
    case "140":
      nombrebanco = "CONSUBANCO";
      break;
    case "141":
      nombrebanco = "VOLKSWAGEN";
      break;
    case "143":
      nombrebanco = "CIBANCO";
      break;
    case "145":
      nombrebanco = "BBASE";
      break;
    case "166":
      nombrebanco = "BANSEFI";
      break;
    case "168":
      nombrebanco = "HIPOTECARIA FEDERAL";
      break;
    case "600":
      nombrebanco = "MONEXCB";
      break;
    case "601":
      nombrebanco = "GMB";
      break;
    case "602":
      nombrebanco = "MASARI";
      break;
    case "605":
      nombrebanco = "VALUE";
      break;
    case "606":
      nombrebanco = "ESTRUCTURADORES";
      break;
    case "607":
      nombrebanco = "TIBER";
      break;
    case "608":
      nombrebanco = "VECTOR";
      break;
    case "610":
      nombrebanco = "B&B";
      break;
    case "614":
      nombrebanco = "ACCIVAL";
      break;
    case "615":
      nombrebanco = "MERRILL LYNCH";
      break;
    case "616":
      nombrebanco = "FINAMEX";
      break;
    case "617":
      nombrebanco = "VALMEX";
      break;
    case "618":
      nombrebanco = "UNICA";
      break;
    case "619":
      nombrebanco = "MAPFRE";
      break;
    case "620":
      nombrebanco = "PROFUTURO";
      break;
    case "621":
      nombrebanco = "CB ACTINVER";
      break;
    case "622":
      nombrebanco = "OACTIN";
      break;
    case "623":
      nombrebanco = "SKANDIA";
      break;
    case "626":
      nombrebanco = "CBDEUTSCHE";
      break;
    case "627":
      nombrebanco = "ZURICH";
      break;
    case "628":
      nombrebanco = "ZURICHVI";
      break;
    case "629":
      nombrebanco = "SU CASITA";
      break;
    case "630":
      nombrebanco = "CB INTERCAM";
      break;
    case "631":
      nombrebanco = "CI BOLSA";
      break;
    case "632":
      nombrebanco = "BULLTICK CB";
      break;
    case "633":
      nombrebanco = "STERLING";
      break;
    case "634":
      nombrebanco = "FINCOMUN";
      break;
    case "636":
      nombrebanco = "HDI SEGUROS";
      break;
    case "637":
      nombrebanco = "ORDER";
      break;
    case "638":
      nombrebanco = "AKALA";
      break;
    case "640":
      nombrebanco = "CB JPMORGAN";
      break;
    case "642":
      nombrebanco = "REFORMA";
      break;
    case "646":
      nombrebanco = "STP";
      break;
    case "647":
      nombrebanco = "TELECOMM";
      break;
    case "648":
      nombrebanco = "EVERCORE";
      break;
    case "649":
      nombrebanco = "SKANDIA";
      break;
    case "651":
      nombrebanco = "SEGMTY";
      break;
    case "652":
      nombrebanco = "ASEA";
      break;
    case "653":
      nombrebanco = "KUSPIT";
      break;
    case "655":
      nombrebanco = "SOFIEXPRESS";
      break;
    case "656":
      nombrebanco = "UNAGRA";
      break;
    case "659":
      nombrebanco = "OPCIONES EMPRESARIALES DEL NOROESTE";
      break;
    case "901":
      nombrebanco = "CLS";
      break;
    case "902":
      nombrebanco = "INDEVAL";
      break;
    case "670":
      nombrebanco = "LIBERTAD";
      break;
  }
  //console.log(Bancos[1].name)

  const tipopersona = ["Fisica", "Moral"];

  const rendimientos = ["MENSUAL", "AL VENCIMIENTO"];
  const nacionalidades = ["MEXICANA", "EXTRANJERA"];
  const [rendimiento, setRendimiento] = useState("");

  const fechai = year + "-" + mount + "-" + day;
  const fn = new Date(fechai);
  const idcp=1
  
  const goToScreenProfile = (username,idcp) => {
    navigation.navigate(NavigationStrings.PROFILE,{username:username,idcp:idcp});
  };
  const goback = () => {
    goToScreenProfile(username,idcp);
  };

  //VALIDACIONES
  const validaRFC = (rfc) => {
    if (rfc.length < 10) {
      alert("RFC no debe ser menor a 10 caracteres");
      setFlagrfc(false);
    } else if (rfc.length > 14) {
      alert("RFC exede 13 caracteres");
      setFlagrfc(false);
    } else if (rfc.length == 10 || rfc.length == 13) {
      setFlagrfc(true);
    }
  };

  const validacel = (celular) => {
    if (celular.length < 10) {
      alert("Numero de celular debe ser mayor a 10 digitos");
      setFlagcel(false);
    } else if (celular.length > 13) {
      alert("N&uacute;mero exede los digitos permitidos");
      setFlagcel(false);
    } else if (celular.length == 10 || celular.length == 12) {
      setFlagcel(true);
    }
  };

  const validaCurp = (curp) => {
    if (curp.length == 18) {
      setFlagCurp(true);
    } else if (curp.length > 18) {
      alert("CURP INVALIDO");
      setFlagCurp(false);
    } else if (curp.length < 18) {
      alert("CURP INVALIDO");
      setFlagCurp(false);
    }
    
  };

  //Valida que los primeros 4 digitos del curp sean corretos
  const validaNacional = (curpval) => {
    const Nacidoext="NE"

    if (curpval == Nacidoext) {
      alert("ERROR EN CURP:NACIDO EN EL EXTRANJERO");
    }

  };

  const validallenado = (
    tipop,
    fn,
    rfc,
    nacion,
    curp,
    celular,
    clabe,
    rendimiento
  ) => {
    if (
      !tipop ||
      !fn ||
      !rfc ||
      !nacion ||
      !curp ||
      !celular ||
      !clabe ||
      !rendimiento
    ) {
      alert("Campos Vacios");
      setLlenado(false);
    } else {
      setLlenado(true);
    }
  };



  const submitData = () => {
    validallenado(tipop, fn, rfc, nacion, curp, celular, clabe, rendimiento);
    if (llenado == true) {
  
      validaRFC(rfc);
      validaCurp(curp);
      validacel(celular);
      const binclabe = clabe[0] + clabe[1] + clabe[2];
      setClabeveri(binclabe);
      const curpval = curp[11] + curp[12];  
      //console.log("CURP" + curpval);
      validaNacional(curpval)
        axios
        .post(`${URI}/completereg `, {
          idUser,
          username,
          apellidop,
          apellidom,
          tipop,
          fn,
          rfc,
          nacion,
          curp,
          telfijo,
          celular,
          clabe,
          nombrebanco,
          rendimiento,
          calleb,
          nint,
          nextb,
          col,
          alcaldia,
          edo,
          cpostal
        })
        .then((response) => {
          //console.log(response);
    
          console.log(response.data.length);
          if (response.data.length == 0) {
            console.log("Error al registrar");
            alert("Error en registro")
          } else {
            console.log("Registro completo");
            alert("Registro completo")
    
            goback();
          }
        });
      
     
    } else {
      alert("Error en llenado de datos");
    }
  };




  return (
    <LinearGradient
      colors={["#000000", "#000000", "#000000"]}
      style={styles.linearGradient}
    >
      <ScrollView>
        <View style={styles.container}>
          <LinearGradient
            colors={["#ffff", "#ffff"]}
            style={styles.linearGradientcardComplete}
          >
            <Text style={styles.txtlog}>DATOS GENERALES</Text>

            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={username}
              name="nombre"
            />

            <TextInput
              style={styles.input}
              placeholder="Apellido paterno"
              value={apellidop}
              name="ap"
            />

            <TextInput
              style={styles.input}
              placeholder="Apellido materno"
              value={apellidom}
              name="am"
            />


            <SelectDropdown
              dropdownStyle={styles.dropdown1DropdownStyle}
              buttonStyle={styles.dropdown1BtnStyle}
              defaultButtonText={"Tipo de Persona"}
              data={tipopersona}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                setTipop(selectedItem);
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

 
            <TextInput
              style={styles.input}
              placeholder="RFC"
              value={rfc}
              name="rfc"
              onChangeText={(text) => setRfc(text)}
            />
            <SelectDropdown
              dropdownStyle={styles.dropdown1DropdownStyle}
              buttonStyle={styles.dropdown1BtnStyle}
              data={nacionalidades}
              defaultButtonText={"NACIONALIDAD"}
              onSelect={(selectedItem) => {
                console.log(selectedItem);
                setNacion(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="CURP"
              value={curp}
              name="curp"
              onChangeText={(text) => setCurp(text)}
            />

            <Text style={styles.txtlog}>Datos de contacto</Text>
            <TextInput
              style={styles.input}
              placeholder="Telefono fijo"
              value={telfijo}
              name="telfijo"
              keyboardType="numeric"
              onChangeText={(text) => setTelfijo(text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Celular"
              value={celular}
              name="celular"
              keyboardType="numeric"
              onChangeText={(text) => setCelular(text)}
            />

            <Text style={styles.txtlog}>Datos Bancarios</Text>

            <TextInput
              style={styles.inputclabe}
              placeholder="CLABE"
              value={clabe}
              name="clabe"
              keyboardType="numeric"
              onChangeText={(text) => setClabe(text)}
            />
     

            <Text style={styles.txtlog}>Forma de pago de rendimientos</Text>
            <SelectDropdown
              dropdownStyle={styles.dropdown1DropdownStyle}
              buttonStyle={styles.dropdown1BtnStyle}
              defaultButtonText={"Forma de pago de rendimientos"}
              data={rendimientos}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                setRendimiento(selectedItem);
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

            <View>
              
            <Text style={styles.txtlog}>Persona Políticamente expuesta</Text>

            <SelectDropdown
              dropdownStyle={styles.dropdown1DropdownStyle}
              buttonStyle={styles.dropdown1BtnStyle}
              defaultButtonText={"Seleccione una opción"}
              data={siono}
              onSelect={(selectedItem) => {
                console.log(selectedItem);
                if(selectedItem=="SI"){
                  setFlagPolitic(()=>((<Politic  iduser={idUser} />)) )
                }
                else{
                  setFlagPolitic("")
                }
              }}
              buttonTextAfterSelection={(selectedItem) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />


              <TouchableOpacity
                style={styles.botonsendpolitics1}
                onPress={submitData}
              >
                <Text style={styles.txtlogsubmit}>Guardar</Text>
              </TouchableOpacity>

              <View>
{flagPolitic }
</View>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default CompleteSignup;
