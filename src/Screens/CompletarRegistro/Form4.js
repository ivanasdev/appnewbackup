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


const Form4 = (props)=>{

    id_Form = props.id_Form;
    id_User = props.id_User;
    console.log(id_Form, id_User);
  







    const soypp = ["SI", "NO"];
    const [ppe, setPpe] = useState(false);



    const tipopterceros=["FISICA","MORAL"]

    const sifam = ["SI", "NO"];
    const sitercero=["SI","NO"]
  

  //PPE
  const [nombrecargo, setNombreCargo] = useState("");
  const [dependencia, setDependencia] = useState("");
 

  //FAMILAIR 
  const [parentesco, setParentesco] = useState("");
  const [nombrefuncionario, setNombrefuncionario] = useState("");
  const [apfuncionario, setApfuncionario] = useState("");
  const [amfuncionario, setAmfuncionario] = useState("");
  const [cargofuncionario, setNCargoFuncionario] = useState("");
  const [dependenciafunc, setDependenciaFunc] = useState("");

//TERCEROS 
const [rsocial, setRsocial] = useState("");
const [tipopter, setTipopter] = useState("");
const [nombretercero, setNombretercero] = useState("");
const [aptercero, setAptercero] = useState("");
const [amtercero, setAmtercero] = useState("");
const [rfctercero, setRfctercero] = useState("");
const [curptercero, setCurptercero] = useState("");
const [telfijotercero, setTelfijotercero] = useState("");

const [celulartercero, setCelulartercero] = useState("");


  //DATEPICKER
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

  const [day, setDay] = useState("");
  const [mount, setMount] = useState("");
  const [year, setYear] = useState("");
  const [dayf, setDayf] = useState("");
  const [mountf, setMountf] = useState("");
  const [yearf, setYearf] = useState(""); 


  const fechai = year + "-" + mount + "-" + day;
  const fechaseparacion = new Date(fechai);


  const fechaif = yearf + "-" + mountf + "-" + dayf;
  const fechaseparacionf = new Date(fechaif);

  const [clabe, setClabe] = useState("");
  const [clabeveri, setClabeveri] = useState("");
  const [bancoasignado,setBancoasigando]=useState("")


   
    

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
  

 




    const [flagfamilia, setFlagfamilia] = useState("");

 
  
      const [flagTerceros,setFlagterceros]=useState(false)
  





      const validaCurpT = (curptercero) => {
        if (curptercero.length == 18) {
          console.log("CURP CORRECTO");
          setFlagCurp(true);
        } else if (curptercero.length > 18) {
          alert("CURP INVALIDO");
          setFlagCurp(false);
        } else if (curptercero.length < 18) {
          alert("CURP INVALIDO");
          setFlagCurp(false);
        }
      };
    
      //console.log("CURP" + curpval);
    

      const validaRFCTercero = (rfctercero) => {
        if (rfctercero.length == 10 || rfctercero.length == 13) {
          console.log("RFC CORRECTO");
          setFlagrfc(true);
        } else if (rfctercero.length < 10) {
          alert("RFC no debe ser menor a 10 caracteres");
          setFlagrfc(false);
        } else if (rfctercero.length > 14) {
          alert("RFC exede 13 caracteres");
          setFlagrfc(false);
        }
      };
      const validaNacionalT = (curptercero) => {
        const curpvalt = curptercero[11] + curptercero[12];
        const Nacidoextt = "NE";
    
        if (curpvalt == Nacidoextt) {
          alert("ERROR: Este CURP no corresponde a cuidadanos nacionales");
        }
      };
    
      const validaClabe=(clabe)=>{
        
        if(clabe.length == 18){
            console.log("CLABE VALIDA")
        }
        else if(clabe.length >18){
            alert("La cuenta CLABE debe ser menor a 18 digitos")
        }
        else if(clabe.length <18){
            alert("La cuenta CLABE debe ser mayor a 18 digitos")
            
        }

      }
 

      const asignarBanco=(clabe)=>{
        const binclabe = clabe[0] + clabe[1] + clabe[2];
        setClabeveri(binclabe);
       
        console.log(nombrebanco)
      }

      const  handleForm = ()=>{
        validaClabe(clabe)
        validaCurpT(curptercero)
        validaRFCTercero(rfctercero)

        
        console.log(clabe,nombrebanco, nombrecargo,dependencia,fechaseparacion,parentesco,nombrefuncionario,apfuncionario,amfuncionario,cargofuncionario,dependenciafunc,fechaseparacionf,rsocial,tipopter,nombretercero,aptercero,amtercero,rfctercero,curptercero,telfijotercero,celulartercero)
        
     
      
      }

    return(
        <LinearGradient
        colors={["#fff", "#ffff", "#ffff"]}
        style={styles.linearGradient}
      >
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.welcomeprofiletxtf3}>Datos Bancarios</Text>


            <TextInput
              style={styles.inputclabe}
              placeholder={bancoasignado}
              value={clabe}
              name="clabe"
              keyboardType="numeric"
              onChangeText={(text) => setClabe(text)}
              onChange={()=>asignarBanco(clabe)}
           
            />

<Text style={styles.welcomeprofiletxtf3}>
            BANCO: {nombrebanco}
          </Text>


            <Text style={styles.welcomeprofiletxtf3}>
            Soy persona pol&iacute;ticamente expuesta?
          </Text>

          <SelectDropdown
            dropdownStyle={styles.dropdown1DropdownStyle}
            buttonStyle={styles.dropdown1BtnStyle}
            defaultButtonText={"NO"}
            data={soypp}
            onSelect={(selectedItem) => {
              if (selectedItem == "SI") {
                setPpe(true);
              } else {
                setPpe(false);
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

{ppe ? (
            <View style={styles.container}>
              <TextInput
                style={styles.input}
                placeholder="Nombre del cargo p&uacute;blico"
                value={nombrecargo}
                name="nombrecargo"
                onChangeText={(text) => setNombreCargo(text)}
              />

              <TextInput
                style={styles.input}
                placeholder="Dependencia"
                value={dependencia}
                name="dependencia"
                onChangeText={(text) => setDependencia(text)}
              />

              <Text style={styles.txtfn}>Fecha de separaci&oacute;n</Text>

              <View style={styles.datefechasep}>
                <SelectDropdown
                  dropdownStyle={styles.dropdown1DropdownStyleDate}
                  buttonStyle={styles.dropdown1BtnStyleDate}
                  data={dias}
                  defaultButtonText={"D"}
                  onSelect={(selectedItem) => {
                    console.log(day);
                    setDay(selectedItem);
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

                <SelectDropdown
                  dropdownStyle={styles.dropdown1DropdownStyleDate}
                  buttonStyle={styles.dropdown1BtnStyleDate}
                  data={meses}
                  defaultButtonText={"M"}
                  onSelect={(selectedItem) => {
                    console.log(selectedItem + "Mes");
                    setMount(selectedItem);
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

                <SelectDropdown
                  dropdownStyle={styles.dropdown1DropdownStyleDateA}
                  buttonStyle={styles.dropdown1BtnStyleDateA}
                  data={years}
                  defaultButtonText={"A"}
                  onSelect={(selectedItem) => {
                    console.log(selectedItem);
                    setYear(selectedItem);
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
              </View>

              <Text style={styles.txtfn}>
                Tiene algun tipo de parentesco con alguna persona que desempeñe
                &oacute; haya desempeñado algun cargo p&uacute;blico destacado ?
              </Text>

              <SelectDropdown
                dropdownStyle={styles.dropdown1DropdownStyleben}
                buttonStyle={styles.dropdown1BtnStyleben}
                data={sifam}
                defaultButtonText={"NO"}
                onSelect={(selectedItem) => {
                  if (selectedItem == "SI") {
                    setFlagfamilia(true);
                  }
                  else if(selectedItem == ""){
                    selectedItem=="NO"
                  }
                  
                  else {
                    setFlagfamilia(false);
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
              {flagfamilia ? (
                <View style={styles.container}>
                  <Text style={styles.txtfn}>Datos del funcionario:</Text>

                  <TextInput
                    style={styles.input}
                    placeholder="Parentesco"
                    value={parentesco}
                    name="parentesco"
                    onChangeText={(text) => setParentesco(text)}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={nombrefuncionario}
                    name="nombrefuncionario"
                    onChangeText={(text) => setNombrefuncionario(text)}
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="Apellido Paterno"
                    value={apfuncionario}
                    name="apfuncionario"
                    onChangeText={(text) => setApfuncionario(text)}
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="Apellido Materno"
                    value={amfuncionario}
                    name="amfuncionario"
                    onChangeText={(text) => setAmfuncionario(text)}
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="Nombre del cargo p&uacute;blico"
                    value={cargofuncionario}
                    name="ncargofuncionario"
                    onChangeText={(text) => setNCargoFuncionario(text)}
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="Dependencia"
                    value={dependenciafunc}
                    name="dependenciafunc"
                    onChangeText={(text) => setDependenciaFunc(text)}
                  />
<Text style={styles.txtfn}>Fecha de separaci&oacute;n</Text>

              <View style={styles.datefechasep}>
                <SelectDropdown
                  dropdownStyle={styles.dropdown1DropdownStyleDate}
                  buttonStyle={styles.dropdown1BtnStyleDate}
                  data={dias}
                  defaultButtonText={"D"}
                  onSelect={(selectedItem) => {
                    console.log(day);
                    setDayf(selectedItem);
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

                <SelectDropdown
                  dropdownStyle={styles.dropdown1DropdownStyleDate}
                  buttonStyle={styles.dropdown1BtnStyleDate}
                  data={meses}
                  defaultButtonText={"M"}
                  onSelect={(selectedItem) => {
                    console.log(selectedItem + "Mes");
                    setMountf(selectedItem);
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

                <SelectDropdown
                  dropdownStyle={styles.dropdown1DropdownStyleDateA}
                  buttonStyle={styles.dropdown1BtnStyleDateA}
                  data={years}
                  defaultButtonText={"A"}
                  onSelect={(selectedItem) => {
                    console.log(selectedItem);
                    setYearf(selectedItem);
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
              </View>
            

              <Text style={styles.txtfn}>Actua a nombre de un tercero?</Text>
          <SelectDropdown
            dropdownStyle={styles.dropdown1DropdownStyleben}
            buttonStyle={styles.dropdown1BtnStyleben}
            data={sitercero}
            defaultButtonText={"Seleccione"}
            onSelect={(selectedItem) => {
              if(selectedItem =="SI"){
                setFlagterceros(true)

              }
              else if(selectedItem == ""){
                selectedItem=="NO"
              }
              else{
                setFlagterceros(false)
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


{flagTerceros ? (
         <View>
         
              <TextInput
                style={styles.input}
                placeholder="Raz&oacute;n social"
                value={rsocial}
                name="rsocial"
                onChangeText={(text) => setRsocial(text)}
              />

              <SelectDropdown
                dropdownStyle={styles.dropdown1DropdownStyle}
                buttonStyle={styles.dropdown1BtnStyle}
                data={tipopterceros}
                defaultButtonText={"Tipo de persona"}
                onSelect={(selectedItem) => {
                  //console.log(selectedItem);
                  setTipopter(selectedItem);
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
                placeholder="Nombre"
                value={nombretercero}
                name="nombretercero"
                onChangeText={(text) => setNombretercero(text)}
              />

              <TextInput
                style={styles.input}
                placeholder="Apellido paterno"
                value={aptercero}
                name="aptercero"
                onChangeText={(text) => setAptercero(text)}
              />

              <TextInput
                style={styles.input}
                placeholder="Apellido materno"
                value={amtercero}
                name="amtercero"
                onChangeText={(text) => setAmtercero(text)}
              />

              <TextInput
                style={styles.input}
                placeholder="RFC "
                value={rfctercero}
                name="rfctercero"
                onChangeText={(text) => setRfctercero(text)}
              />

             
              <TextInput
                style={styles.input}
                placeholder="CURP"
                value={curptercero}
                name="curptercero"
                onChangeText={(text) => setCurptercero(text)}
              />

              <TextInput
                style={styles.input}
                placeholder="Tel&eacute;fono fijo *opcional"
                value={telfijotercero}
                name="telfijotercero"
                onChangeText={(text) => setTelfijotercero(text)}
              />

            

              <TextInput
                style={styles.input}
                placeholder="Celular"
                value={celulartercero}
                name="celulartercero"
                onChangeText={(text) => setCelulartercero(text)}
              />



         </View>
          )
          :
          (
          <Text>NO TERCEROS</Text>
          )
          }



                </View>
              ) : (
                <Text>NO</Text>
              )}
            </View>
          ) : (
            <Text></Text>
          )}
 
 <Pressable onPress={handleForm} style={styles.button}>
            <Text style={styles.txtlogsubmit}>Guardar Datos</Text>
          </Pressable>


            </View>
            </ScrollView>
            </LinearGradient>
            

    )
}

export default Form4