
import React from 'react';
import { View, StyleSheet, Image, TextInput, Text } from 'react-native';
import ImageSign from '../components/ImageSign'; // Import the ImageSign component
import SignButton from '../components/SignButton'; // Import the SignButton component
import MyTextInput from '../components/TextInput';
const LoginScrean = () => {
  return (
    <View style={styles.container}>
      {/* You can customize the ImageSign component with your desired props */}
      <ImageSign
        src={require('../assets/d.png')} // Provide the image source
        style={{ marginBottom: 20 }} // Add any additional styles
      />

      {/* TextInput for username and password input */}
      <MyTextInput
        style={styles.input}
        placeholder="Email or User Name"
        icon="envelope"
      />

      <MyTextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry // To hide the entered text
        icon="lock"
      />

      {/* Sign in button */}
      <SignButton
        text="Sign In"
       
        onPress={() => {
          // Add your login logic here
          alert('Signing in...');
        }}
      />
      <Text style={styles.text}>don't have an account yet? <Text  style={styles.textt}>Register Now</Text></Text>
      {/* You can add more components or elements as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 15,
  },
  text:{
   margin:10,
  },
  textt:{
    color:'#FF8c00',
    fontWeight:'600',
  },
});

export default LoginScrean;
