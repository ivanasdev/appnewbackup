import React from "react";

import {
    Alert,
    Button,
    Image,
    Pressable,
  
  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";;
import MainStack from "./MainStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "../Styles";
const Stack=createNativeStackNavigator();
const goback=()=>{
    alert("GOLA")
}
const Routes=()=>{
    return(
        <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerShown:false,
            headerTitle:true,
            headerTitleAlign:"center",
            headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#fff',
      
              headerTitleStyle: {
                fontWeight: 'bold',
              },

             
          
       
         
         }}>
            
            {MainStack(Stack)}
          

        </Stack.Navigator>
    </NavigationContainer>

    )
}

export default Routes