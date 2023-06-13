import React, { useState } from "react";

import { LinearGradient } from "expo-linear-gradient";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  ToastAndroid,
  Pressable,
  Alert,
} from "react-native";

import styles from "../../Styles";
import SelectDropdown from "react-native-select-dropdown";
import axios from "axios";

const Politic = (iduser) => {
  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "Registro exitoso", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const URI = "http://45.80.153.150:5001";

  const id_User = iduser;

  const [day, setDay] = useState("");
  const [mount, setMount] = useState("");
  const [year, setYear] = useState("");

  const [dayf, setDayf] = useState("");
  const [mountf, setMountf] = useState("");
  const [yearf, setYearf] = useState("");

  const [dayter, setDayter] = useState("");
  const [mountter, setMountter] = useState("");
  const [yearter, setYearter] = useState("");

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
  const fechai = year + "-" + mount + "-" + day;
  const fechaif = yearf + "-" + mountf + "-" + dayf;
  const fechait = yearter + "-" + mountter + "-" + dayter;

  const fechaseparacion = new Date(fechai);
  const fechaseparacionf = new Date(fechaif);
  const fechanactercero = new Date(fechait);

  const sicargo = ["NACIONAL", "EXTRANJERO"];
  const sicargo2 = ["SI", "NO"];
  const sitercero = ["SI", "NO"];
  const tipoptercero = ["Moral", "Fisica"];

  const tipopersona = ["Fisica", "Moral"];
  const [nombrecargo, setNombreCargo] = useState("");
  const [dependencia, setDependencia] = useState("");
  const [cargopublico, setCargoPublico] = useState("");
  const [cargopublico2, setCargoPublico2] = useState("");

  const [parentesco, setParentesco] = useState("");
  const [nombrefuncionario, setNombrefuncionario] = useState("");
  const [apfuncionario, setApfuncionario] = useState("");
  const [amfuncionario, setAmfuncionario] = useState("");
  const [ncargofuncionario, setNCargoFuncionario] = useState("");
  const [dependenciafunc, setDependenciaFunc] = useState("");
  const [tercero, setTercero] = useState("");

  const [rsocial, setRsocial] = useState("");
  const [tipopter, setTipopter] = useState("");
  const [nombretercero, setNombretercero] = useState("");
  const [aptercero, setAptercero] = useState("");
  const [amtercero, setAmtercero] = useState("");
  const [rfctercero, setRfctercero] = useState("");
  const [curptercero, setCurptercero] = useState("");
  const [telfijo, setTelfijo] = useState("");
  const [teltrabajotercero, setTeltrabajotercero] = useState("");
  const [celulartercero, setCelulartercero] = useState("");

  const [flagFamilia,setFlagfamilia]=useState(false)
  const [flagTerceros,setFlagterceros]=useState(false)






  const sendform1 = () => {
    console.log(
      id_User,
      cargopublico,
      nombrecargo,
      dependencia,
      fechaseparacion
    );
    axios
      .post(`${URI}/setformpolitic1`, {
        id_User,
        cargopublico,
        nombrecargo,
        dependencia,
        fechaseparacion,
      })
      .then((response) => {
        console.log(response);

        console.log(response.data.length);
        if (response.data.length == 0) {
          console.log("Error al registrar");
        } else {
          console.log("Registro completo");
          createTwoButtonAlert();
        }
      });
  };

  const sendForm2 = () => {
    console.log(
      id_User,
      cargopublico2,
      parentesco,
      nombrefuncionario,
      apfuncionario,
      amfuncionario,
      ncargofuncionario,
      dependenciafunc,
      fechaseparacionf
    );
    axios
      .post(`${URI}/sendformpolitics2`, {
        id_User,
        cargopublico2,
        parentesco,
        nombrefuncionario,
        apfuncionario,
        amfuncionario,
        ncargofuncionario,
        dependenciafunc,
        fechaseparacionf,
      })
      .then((response) => {
        console.log(response);

        console.log(response.data.length);
        if (response.data.length == 0) {
          console.log("Error al registrar");
        } else {
          console.log("Registro completo");
          createTwoButtonAlert();
        }
      });
  };

  const sendform3 = () => {
    console.log(
      id_User,
      rsocial,
      tipopter,
      nombretercero,
      aptercero,
      amtercero,
      rfctercero,
      fechanactercero,
      curptercero,
      telfijo,
      teltrabajotercero,
      celulartercero
    );
    axios
      .post(`${URI}/sendpolitcs3`, {
        id_User,
        rsocial,
        tipopter,
        nombretercero,
        aptercero,
        amtercero,
        rfctercero,
        fechanactercero,
        curptercero,
        telfijo,
        teltrabajotercero,
        celulartercero,
      })
      .then((response) => {
        console.log(response);

        console.log(response.data.length);
        if (response.data.length == 0) {
          console.log("Error al registrar");
        } else {
          console.log("Registro completo");
          createTwoButtonAlert();
        }
      });
  };

  return (
    <LinearGradient
      colors={["#ffff", "#ffff", "#fff"]}
      style={styles.linearGradient}
    >
      <ScrollView>
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

          <Pressable onPress={sendform1} style={styles.botonsendpolitics1}>
            <Text style={styles.textbtnpolitics1}> Guardar </Text>
          </Pressable>

          <Text style={styles.txtfn}>
            Tiene algun tipo de parentesco con alguna persona que desempeñe
            &oacute; haya desempeñado algun cargo p&uacute;blico destacado ?
          </Text>

          <SelectDropdown
            dropdownStyle={styles.dropdown1DropdownStyleben}
            buttonStyle={styles.dropdown1BtnStyleben}
            data={sicargo2}
            defaultButtonText={"Seleccione uno "}
            onSelect={(selectedItem) => {
              

              if(selectedItem == "SI"){
                setFlagfamilia(true)

              }
              else{
                setFlagfamilia(false)
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

          {flagFamilia ? (
            <View>
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
                value={ncargofuncionario}
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
              <Pressable onPress={sendForm2} style={styles.botonsendpolitics1}>
                <Text style={styles.textbtnpolitics1}> Guardar </Text>
              </Pressable>
            </View>
          ) : (
            <Text></Text>
          )}

          <Text style={styles.txtfn}>
            Identificaci&oacute;n del propietario (Si es el caso)
          </Text>

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
                data={tipoptercero}
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
                placeholder="RFC (HOMOCLAVE)"
                value={rfctercero}
                name="rfctercero"
                onChangeText={(text) => setRfctercero(text)}
              />

              <Text style={styles.txtfn}>Fecha de nacimiento</Text>

              <View style={styles.datecard}>
                <SelectDropdown
                  dropdownStyle={styles.dropdown1DropdownStyleDate}
                  buttonStyle={styles.dropdown1BtnStyleDate}
                  data={dias}
                  defaultButtonText={"D"}
                  onSelect={(selectedItem) => {
                    console.log(day);
                    setDayter(selectedItem);
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
                    setMountter(selectedItem);
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
                    setYearter(selectedItem);
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

              <TextInput
                style={styles.input}
                placeholder="CURP"
                value={curptercero}
                name="curptercero"
                onChangeText={(text) => setCurptercero(text)}
              />

              <TextInput
                style={styles.input}
                placeholder="Tel&eacute;fono fijo"
                value={telfijo}
                name="telfijo"
                onChangeText={(text) => setTelfijo(text)}
              />

              <TextInput
                style={styles.input}
                placeholder="Tel&eacute;fono de trabajo"
                value={teltrabajotercero}
                name="teltrabajotercero"
                onChangeText={(text) => setTeltrabajotercero(text)}
              />

              <TextInput
                style={styles.input}
                placeholder="Celular"
                value={celulartercero}
                name="celulartercero"
                onChangeText={(text) => setCelulartercero(text)}
              />

              <Pressable onPress={sendform3} style={styles.botonsendpolitics1}>
                <Text style={styles.textbtnpolitics1}> Guardar </Text>
              </Pressable>
            </View>
          ) : (
            <Text></Text>
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Politic;
