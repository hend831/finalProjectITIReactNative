// ProfileScreen.js
import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {

  const handleLogout = () => {
    // Implement your logout logic here
  };

  return (
    <View>
    <View style={styles.container}>
       <Image source={require('../../healthCare/assets/doctor.png')} style={styles.profileImage} />
      <Text style={styles.userName}>name:</Text>
      <Text style={styles.userDetails}>address:</Text>
      <Text style={styles.userDetails}>phone:</Text>
      <Text style={styles.userDetails}>email:</Text>
     
    </View>
    <TouchableOpacity style={styles.btn} onPress={handleLogout} > 
      <Text style={styles.txt}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   alignItems:'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
   
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userDetails: {
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor:'gray',
    width:'90%',
    height:40,
    borderRadius:7,
    padding:7,
  },
  btn:{
   backgroundColor:'gray',
   width:'20%',
   borderRadius:10,
   marginHorizontal:'5%',
   
  
   
  },
  txt:{
    padding:12,
    color:'white',
    
  }
});

export default ProfileScreen;
