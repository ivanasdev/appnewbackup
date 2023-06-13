import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Pressable,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import NavigationStrings from "../../Components/NavigationStrings";
import styles from "../../Styles";
import axios from "axios";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
const Form6 =(props)=>{
  id_User=props.id_User;
  console.log("ID DEL USER")
  console.log(id_User)

  const URI="http://45.80.153.150:5001"

  const handleFileUpload = async () => {

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission denied!');
      return;
    }
  
    const file = await ImagePicker.launchImageLibraryAsync();
  
    if (!file.canceled) {
      const id = id_User; 
      const { uri } = file;
      const fileInfo = await FileSystem.getInfoAsync(uri);
  
      if (fileInfo.exists) {

   // Replace with your actual ID
        const fileName = `${id}_${fileInfo.uri.split('/').pop()}`;
        const formData = new FormData();
        formData.append('file', {
          uri: fileInfo.uri,
          type: 'application/octet-stream',
          name: fileName, 
        });
  
        try {
          console.log(fileName)
          console.log(formData.uri)
          const response = await fetch(`${URI}/upload`, {
            method: 'POST',
            body: formData,
          });
  
          if (response.ok) {
            console.log('File uploaded successfully!');
          } else {
            console.log('Failed to upload file');
          }
        } catch (error) {
          console.log('Error occurred while uploading file:', error);
        }
      }
    }
    
  };
  




    return(

        <LinearGradient
        colors={["#fff", "#ffff", "#ffff"]}
        style={styles.linearGradient}
      >
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.welcomeprofiletxtf3}>Subir Documentos</Text>

            <Text style={styles.welcomeprofiletxtf3}>INE</Text>
            <Button title="Subir INE" onPress={handleFileUpload} />

            </View>
            </ScrollView>
            </LinearGradient>


    )
}
export default Form6