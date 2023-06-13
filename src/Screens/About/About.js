import React from "react";
import {
    View,
    Text,
    ScrollView,
    Image,

  } from 'react-native';

  import styles from "../../Styles";

  import { LinearGradient } from "expo-linear-gradient";


  const About =()=>{
    return(

        <LinearGradient
        colors={['#000000', '#000000', '#000000']}
        style={styles.linearGradient}>
        <ScrollView>
          <View style={styles.container}>
          
  
            <LinearGradient
              colors={['#E2DAD7', '#E2DAD7']}
              style={styles.linearGradientcard2}>


              <Text style={styles.TextBenfits}>¿Qui&eacute;nes somos ?</Text>
              <Image
              style={styles.imgabout}
              source={require('../../../assets/icons/INMOBICAPITAlMORADO.png')}
            />
              <View>

         
                <Text style={styles.TexContentBenefits}>
           
                  Somos una empresa mexicana enfocada en compartir los bebeficios
                  de invertir en el sector inmobiliario con todos nuestros
                  inversionistas.
                </Text>
              </View>
              <View>
                <Text style={styles.TexContentBenefits}>
                  Gracias a nuestra experiencia en el sector inmobiliario, opdemos
                  brindar ademas de solidez, una tasa de inter&eacute;s
                  competitiva y superior a la referencia de mercado.
                </Text>
              </View>
  
              <View>
                <Text style={styles.TexContentBenefits}>
                  Nuestro portafolio permite brindarte certeza a su
                  inversi&oacute;n
                </Text>
              </View>
              <View>
                <Text style={styles.TexContentBenefits}>
                  Todas nuestras asesor&iacute;as son personalizadas, enfocadas al
                  cumplimiento de necesidades y objetivas.
                </Text>
              </View>
  
              <View>
               
  
                <Text style={styles.TexContentBenefitslist}>
                  Tenemos el perfecto balance entre capitalizaci&oacute;n y
                  colocaci&oacute;n de la cartera de inmuebles
                </Text>
              </View>
  
              <View>
               
  
                <Text style={styles.TexContentBenefitslist}>
                  Nuestro portafolio inmobiliario cuenta con el rendimiento
                  m&aacute;s alto del mercado
                </Text>
              </View>
  
              <View>
               
  
                <Text style={styles.TexContentBenefitslist}>
                  Nuestra cartera consolidada de m&aacute;s de 3,000 inmuebles en
                  ciclo de venta
                </Text>
              </View>
            </LinearGradient>
          </View>
        </ScrollView>
      </LinearGradient>

    )
  }

  export default About