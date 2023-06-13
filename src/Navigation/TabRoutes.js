import React from "react";
import NavigationStrings from "../Components/NavigationStrings";
import imagePath from "../Components/imagePath";
import { Home, About, Signup } from "../Screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TempProfile from "../Screens/Profile/Temp";
import { Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../Screens";
import CompleteSignup from "../Screens/Signup/CompleteSignup";
import { Profile } from "../Screens";
import Beneficiaries from "../Screens/Beneficiaries/Beneficiaries";
import Uploader from "../Screens/Uploader/Uploader";
import Formularios from "../Screens/CompletarRegistro/Formularios";
import Contrato from "../Screens/Contrato/Contrato";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ 
      headerShown: true,
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
      <Stack.Screen name={NavigationStrings.HOME} component={Home}
       />

      <Stack.Screen name={NavigationStrings.SIGNUP} component={Signup} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ 
      headerShown: true,
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
      <Stack.Screen name={NavigationStrings.TEMPPROFILE} component={TempProfile}
      screenOptions={{ 
        headerShown: true,
        headerTitle:true,
        headerTitleAlign:"center",
        headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
  
          headerTitleStyle: {
            fontWeight: 'bold',
          },
  
      
      }}
      
      />
      <Stack.Screen name={NavigationStrings.PROFILE} component={Profile} />
      <Stack.Screen name={NavigationStrings.LOGIN} component={Login} />
      <Stack.Screen name={NavigationStrings.SIGNUP} component={Signup} />
      <Stack.Screen name={NavigationStrings.COMPLETESIGNUP} component={CompleteSignup} />
      <Stack.Screen name={NavigationStrings.BENEFICIARIES} component={Beneficiaries} />
      <Stack.Screen name={NavigationStrings.FORMULARIOS} component={Formularios} />
      <Stack.Screen name={NavigationStrings.CONTRATO} component={Contrato} />
    </Stack.Navigator>
  );
}

function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName={NavigationStrings.HOME}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "green",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "relative",
          backgroundColor: "#000000",
        },
      }}
    >
      <Tab.Screen
        name={NavigationStrings.HOME}
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? "#fff" : "gray",
                }}
                source={imagePath.icHome}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.TEMPPROFILE}
        title="MY PROFILE"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? "#fff" : "gray",
                }}
                source={imagePath.icUser}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name={NavigationStrings.ABOUT}
        component={About}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? "#fff" : "gray",
                }}
                source={imagePath.icInfo}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;
