// ProfileScreen.js
import React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {

  const handleLogout = () => {
    // Implement your logout logic here
  };

  return (

    <SafeAreaView style={styles.container}>
    <View >
       <Image source={require('../../healthCare/assets/doctor.png')} style={styles.profileImage} />
      <Text style={styles.userName}>name:</Text>
      <Text style={styles.userDetails}>address:</Text>
      <Text style={styles.userDetails}>phone:</Text>
      <Text style={styles.userDetails}>email:</Text>
     
   
    <TouchableOpacity style={styles.btn} onPress={handleLogout} > 
      <Text style={styles.txt}>Logout</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  marginLeft:20,
   marginTop:40,
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
  margin:10,
 width:'28%',
   borderRadius:10,
   
  },
  txt:{
    padding:12,
    color:'white',
    
  }
});

export default ProfileScreen;
