
//          
//         </View>
//         <View style={styles.row}>
//           <TouchableOpacity
//             style={styles.card}
//             onPress={() => navigation.navigate('Ambulance')}
//           >
//             <Image
//               source={require('../assets/s4.png')}
//               style={styles.cardImage}
//             />
//             <Text style={styles.cardText}>Gynecology</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.card}
//             onPress={() => navigation.navigate('SomeOtherScreen')}
//           >
//             <Image
//               source={require('../assets/s5.png')}
//               style={styles.cardImage}
//             />
//             <Text style={styles.cardText}>Gastroenterology</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.card}
//             onPress={() => navigation.navigate('YetAnotherScreen')}
//           >
//             <Image
//               source={require('../assets/s6.png')}
//               style={styles.cardImage}
//             />
//             <Text style={styles.cardText}>Neurology</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.row}>
//           <TouchableOpacity
//             style={styles.card}
//             onPress={() => navigation.navigate('Doctors')}
//           >
//             <Image
//               source={require('../assets/s7.png')}
//               style={styles.cardImage}
//             />
//             <Text style={styles.cardText}>Ophthalmology</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.card}
//             onPress={() => navigation.navigate('Laboratory')}
//           >
//             <Image
//               source={require('../assets/s8.png')}
//               style={styles.cardImage}
//             />
//             <Text style={styles.cardText}>Dermatology</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.card}
//             onPress={() => navigation.navigate('Pharmacy')}
//           >
//             <Image
//               source={require('../assets/s9.png')}
//               style={styles.cardImage}
//             />
//             <Text style={styles.cardText}>Oral and dental</Text>
//           </TouchableOpacity>
//         </View>
//         {/* Add more rows of cards here as needed */}
//       </View>
//     </SafeAreaView>
//   );
// }

import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DoctorsScrean from '../screans/DoctorsScrean';
import ServiceCards from '../components/ServiceCards'; // Import the ServiceCard component

export default function SpecialtiesScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Medical Specialties</Text>
      <View style={styles.grid}>
        <View style={styles.row}>
          <ServiceCards
            screenName="doctors"
            imageSource={require('../assets/s1.png')}
            cardText="Cardiology"
          />
          <ServiceCards
            screenName="Laboratory"
            imageSource={require('../assets/s2.png')}
            cardText="Nephrology"
          />
          <ServiceCards
            screenName="Pharmacy"
            imageSource={require('../assets/s3.png')}
            cardText="Pediatrics"
          />
        </View>
        <View style={styles.row}>
        <ServiceCards
            screenName="doctors"
            imageSource={require('../assets/s4.png')}
            cardText="Gynecology"
          />
          <ServiceCards
            screenName="Laboratory"
            imageSource={require('../assets/s5.png')}
            cardText="Gastroenterology"
          />
          <ServiceCards
            screenName="Pharmacy"
            imageSource={require('../assets/s6.png')}
            cardText="Neurology"
          />
          {/* Add more ServiceCard components here as needed */}
        </View>
        <View style={styles.row}>
        <ServiceCards
            screenName="doctors"
            imageSource={require('../assets/s7.png')}
            cardText="Ophthalmology"
          />
          <ServiceCards
            screenName="Laboratory"
            imageSource={require('../assets/s8.png')}
            cardText="Dermatology"
          />
          <ServiceCards
            screenName="Pharmacy"
            imageSource={require('../assets/s9.png')}
            cardText="Oral and dental"
          />
          {/* Add more ServiceCard components here as needed */}
        </View>
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
  grid: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    marginBottom: 10,
    fontSize: 20,
  },
});
// Rest of your styles...
