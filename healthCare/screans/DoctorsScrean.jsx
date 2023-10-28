// import React from 'react';
// import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
// import Doctors from '../components/Doctors'; // Import the Doctors component

// const DoctorsScreen = () => {
//   // Define the data for the doctors
//   const doctorsData = [
//     {
//       id: 1,
//       name: 'Dr. John Doe',
//       specialty: 'Cardiologist',
//       jobTitle: 'Consultant',
//       address: '123 Main Street, City',
//       price: 'Consultation fee: $100',
//       waitingPeriod: 'Average waiting period: 30 mins',
//       mobileNumber: 'Contact: (123) 456-7890',
//       image: require('../assets/user.png'), // Replace with the actual image path
//     },
//     // Add more doctor data objects as needed
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         {doctorsData.map((doctor) => (
//           <Doctors key={doctor.id} doctorInfo={doctor} />
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default DoctorsScreen;
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Doctors from '../components/Doctors'; // Import the Doctors component
import { useNavigation } from '@react-navigation/native';

const DoctorsScreen = () => {
  const navigation = useNavigation();

  // Define the data for the doctors
  const doctorsData = [
    {
      id: 1,
      name: 'Dr. John Doe',
      specialty: 'Cardiologist',
      jobTitle: 'Consultant',
      address: '123 Main Street, City',
      price: 'Consultation fee: $100',
      waitingPeriod: 'Average waiting period: 30 mins',
      mobileNumber: 'Contact: (123) 456-7890',
      image: require('../assets/user.png'), // Replace with the actual image path
    },
    // Add more doctor data objects as needed
  ];

  // Handle the onPress event when a doctor's profile is clicked
  const handleDoctorPress = (doctorId) => {
    // You can navigate to another screen here using your navigation system
    // For example, if you're using React Navigation, you can do:
    navigation.navigate('DoctorDetails', { doctorId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {doctorsData.map((doctor) => (
          <Doctors
            key={doctor.id}
            doctorInfo={doctor}
            onPress={() => handleDoctorPress(doctor.id)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DoctorsScreen;
