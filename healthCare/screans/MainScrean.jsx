

import React from 'react';
import { SafeAreaView, View, Text , StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ServiceCard from '../components/ServiceCard';
import SpecialtiesScreen from './ٍٍSpecialtiesScrean';


export default function MainScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}><Text style={styles.textt}>O</Text>ur <Text style={styles.textt}>S</Text>ervices</Text>
      <View style={styles.row}>
        <ServiceCard
          
          imageSource={require('../../healthCare/assets/da.png')}
          cardText="Doctors"
          nav={() => navigation.navigate("specialties ", SpecialtiesScreen)}
        />
        <ServiceCard
        
        
          imageSource={require('../../healthCare/assets/lab.png')}
          cardText="Laboratory"
        />
        </View>
         <View style={styles.row}>
        <ServiceCard
        
          imageSource={require('../../healthCare/assets/phr.png')}
          cardText="Pharmacy"
        />
        <ServiceCard
        
          imageSource={require('../../healthCare/assets/amb.png')}
          cardText="Ambulance"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    padding: 16,
  },
  textt:{
    color: '#FF8c00', // Text color
    fontSize: 20,
    marginBottom:30,
  },
  row: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: '#45B3CB',
    borderRadius: 8,
    width: '43%',
    height: 130,
    marginRight: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  cardImage: {
    width: '100%',
    height: '80%',
    padding: 5,
  },
  cardText: {
    marginTop: 5,
    width: '100%',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
    color: 'white',
    
    borderRadius: 8,
    padding: 5,
  },
  text: {
    marginBottom: 10,
    fontSize: 20,
  },
});
