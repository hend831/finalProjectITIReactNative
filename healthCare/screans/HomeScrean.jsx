import React from 'react';
import {  Image, TouchableOpacity,Text, StyleSheet ,SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HospitalScrean from '../screans/HospitalScrean'
export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    
    <SafeAreaView style={styles.container}>
     <Text style={styles.text}>welcome to <Text style={styles.textt}>Y</Text>alla <Text style={styles.textt}>H</Text>elp</Text>
      <Image source={require('../../healthCare/assets/doctor.png')} style={styles.image} />
     
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("About ", HospitalScrean)}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#F5F5F5',
  },
  image: {
    width: 200, // Adjust the width and height as needed
    height: 250,
    marginBottom: 30,
    // Adjust the spacing between the image and button
  },
  button: {
    backgroundColor: '#45B3CB', // Background color
    borderRadius: 10, // Border radius
    padding: 10, 
    width: 120,// Adjust the padding as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // Text color
    fontSize: 16, // Font size
  },
  text:{
    color: 'black', // Text color
    fontSize: 20,
    marginBottom:30,
  },
  textt:{
    color: '#FF8c00', // Text color
    fontSize: 20,
    marginBottom:30,
  }
});
