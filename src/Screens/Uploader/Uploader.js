import React from 'react';
import { View, Image, Button, Text,ScrollView} from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { LinearGradient } from 'expo-linear-gradient';


import styles from '../../Styles';

const Uploader = ({navigate,route}) => {

    id_User=route.params.id_User;

    const handleFileUpload = async () => {
        // Request permission to access media library
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission denied!');
          return;
        }
      
        // Select a file from the device
        const file = await ImagePicker.launchImageLibraryAsync();
      
        if (!file.cancelled) {
          // Retrieve file details
          const { uri, type, name } = file;
          
          // Create a formData object to send the file to the server
          const formData = new FormData();
          formData.append('file', {
            uri,
            type: type || 'application/octet-stream',
            name,
          });
      
          // Make a network request to upload the file
          try {
            const response = await fetch('http://your-server-url.com/upload', {
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
      };
      
  

     return(

        <LinearGradient
        colors={["#000000", "#ffff", "#ffff"]}
        style={styles.linearGradient}
      >
        <ScrollView>
          <View style={styles.container}>
            <Text>SUBIR DOCS </Text>




        </View>
        </ScrollView>

</LinearGradient>
     )
  
};

export default Uploader;