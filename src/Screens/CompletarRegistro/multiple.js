import * as React from 'react';
import { Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

const handleFileUpload = async () => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') {
    console.log('Permission denied!');
    return;
  }

  const files = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsMultipleSelection: true,
  });

  if (!files.cancelled) {
    const id = 'your-id'; // Replace with your actual ID

    const uploadPromises = files.uris.map(async (uri) => {
      const fileInfo = await FileSystem.getInfoAsync(uri);
      if (fileInfo.exists) {
        const fileName = `${id}_${fileInfo.uri.split('/').pop()}`;

        const formData = new FormData();
        formData.append('file', {
          uri: fileInfo.uri,
          type: 'application/octet-stream',
          name: fileName,
        });

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
    });

    await Promise.all(uploadPromises);
  }
};

const App = () => {
  return (
    <Button title="Upload Files" onPress={handleFileUpload} />
  );
};

export default App;
