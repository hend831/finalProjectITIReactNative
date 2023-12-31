
import React from 'react';
import { View, StyleSheet,Text, TouchableOpacity } from 'react-native';
import ImageSign from '../components/ImageSign'; // Import the ImageSign component
import SignButton from '../components/SignButton'; // Import the SignButton component
import MyTextInput from '../components/TextInput';
import { useNavigation } from '@react-navigation/native';
import LoginScrean from './LoginScrean';
const RegisterScrean = () => {
  const navigation = useNavigation();
  return (
   
    <View style={styles.container}>
      {/* You can customize the ImageSign component with your desired props */}
      <Text style={styles.laball}><Text style={styles.textt}>S</Text>ign <Text style={styles.textt}>U</Text>p <Text style={styles.textt}>A</Text>s <Text style={styles.textt}>P</Text>atient</Text>
      <ImageSign
        src={require('../assets/d.png')} // Provide the image source
        style={{ marginBottom: 20 }} // Add any additional styles
      />

      {/* TextInput for username and password input */}
      <MyTextInput
        style={styles.input}
        placeholder="Email"
        secureTextEntry // To hide the entered text
        icon="envelope"
      />
      <MyTextInput
        style={styles.input}
        placeholder="Username"
        icon="user"
      />

      <MyTextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry // To hide the entered text
        icon="lock"
      />
       <MyTextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry // To hide the entered text
        icon="lock"
      />
      

      {/* Sign in button */}
      <SignButton
        text="Sign Up"
       
        onPress={() => {
          // Add your login logic here
          alert('Signing in...');
        }}
      />
       <Text style={styles.text}> have an account !
         <TouchableOpacity onPress={() => navigation.navigate("logins",LoginScrean )}>
        <Text  style={styles.textt}> Sign in</Text>
        </TouchableOpacity>
        </Text>
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
  laball:{
    marginBottom:20,
    fontWeight:'600',

  },
  text:{
    margin:10,
   },
   textt:{
     color:'#FF8c00',
     fontWeight:'600',
   },
});

export default RegisterScrean;
