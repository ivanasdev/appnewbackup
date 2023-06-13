import React from 'react';
import { Text, View ,ScrollView,Image,Pressable} from 'react-native';
import styles from '../../Styles';
import { LinearGradient } from 'expo-linear-gradient';

import NavigationStrings from '../../Components/NavigationStrings';


const HomePage=({navigation})=>{

    const goToScreen = () => {
        navigation.navigate(NavigationStrings.LOGIN, {title: 'INICIO'});
      };
    
      const gotoabout = () => {
        navigation.navigate(NavigationStrings.ABOUT, {title: 'ESto es un test'});
      };
      const goToScreenregister = () => {
        navigation.navigate(NavigationStrings.SIGNUP, {title: 'SIGNUP'});
      };
      const goToScreenUS = () => {
        navigation.navigate(NavigationStrings.ABOUT, {title: 'NOSOTROS'});
      };
    return(

        <LinearGradient
        colors={['#000000', '#000000', '#010101']}
        style={styles.linearGradient}>
        <ScrollView>
          <View style={styles.container}>
     
  
            <Text style={styles.introtxt}>Haz crecer tu patrimonio</Text>
            <Text style={styles.cursitxt}>
              invirtiendo con respaldo inmobiliario
            </Text>
            <Image
              style={styles.imgintro}
              source={require('../../../assets/inmo.png')}
            />
  
            <LinearGradient
              colors={['#fff', '#ffff']}
              style={styles.linearGradientcard1}>
              <Text style={styles.texto1}>
                Tenemos el perfecto balance entre capitalización y colocación de
                la cartera de inmuebles.
              </Text>
       
              <View>
                <Pressable onPress={goToScreenregister} style={styles.btn1}>
                  <Text style={styles.btn1txt1}> Quiero Invertir</Text>
                </Pressable>
              </View>
              
  
            </LinearGradient>
  
            
          </View>
        </ScrollView>
      </LinearGradient>

    )
}

export default HomePage