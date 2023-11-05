
// import React from 'react';
// import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons

// const Lab = ({ labInfo ,onPress  }) => {
//   return (
    
//     <TouchableOpacity onPress={onPress} style={styles.container}>
//     <View style={styles.profileContainer}>
//       <Image source={labInfo.image} style={styles.profileImage} />
//     </View>
//     <View style={styles.detailsContainer}>
//       <Text style={styles.name}>{labInfo.name}</Text>
     
      
//       <Text style={styles.address}>
//         <FontAwesome name="map-marker" size={16} color="#45B3CB" /> {labInfo.address}
//       </Text>
//       <Text style={styles.price}>
//         <FontAwesome name="dollar" size={16} color="#45B3CB" /> {labInfo.HomeService}
//       </Text>
     
//       <Text style={styles.mobileNumber}>
//         <FontAwesome name="mobile" size={16} color="#45B3CB" /> {labInfo.mobileNumber}
//       </Text>
//       <Text style={styles.waitingPeriod}>
//         <FontAwesome name="comments" size={16} color="#45B3CB" /> {labInfo.message}
//       </Text>
//       <View style={styles.horizontalLine} />
//     </View>
//   </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'col',
//     marginLeft:20,
//     padding: 16,
//   },
//   profileContainer: {
   
//   },
//   profileImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30, // To create a circular image, set borderRadius to half of width/height
//   },
//   detailsContainer: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
 
 
//   address: {
//     fontSize: 14,
//   },
//   price: {
//     fontSize: 14,
//   },
//   waitingPeriod: {
//     fontSize: 14,
//   },
//   mobileNumber: {
//     fontSize: 14,
//   },
//   horizontalLine: {
//     borderBottomColor: 'gray',
//     borderBottomWidth: 1,
//     marginVertical: 8, // Adjust spacing as needed
//   },
// });

// export default Lab;


import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Lab = ({ labInfo, onPressChatPage }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openModal} style={styles.labCard}>
        <View style={styles.profileContainer}>
          <Image source={labInfo.image} style={styles.profileImage} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{labInfo.name}</Text>
          <Text style={styles.address}>
            <FontAwesome name="map-marker" size={16} color="#45B3CB" /> {labInfo.address}
          </Text>
          <Text style={styles.price}>
            <FontAwesome name="dollar" size={16} color="#45B3CB" /> {labInfo.HomeService}
          </Text>
          <Text style={styles.mobileNumber}>
            <FontAwesome name="mobile" size={16} color="#45B3CB" /> {labInfo.mobileNumber}
          </Text>
          <Text style={styles.waitingPeriod}>
            <FontAwesome name="comments" size={16} color="#45B3CB" /> {labInfo.message}
          </Text>
          <View style={styles.horizontalLine} />
        </View>
      </TouchableOpacity>
      <Modal visible={isModalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.popupText}>Hello </Text>
            <TouchableOpacity style={styles.modalButton} onPress={onPressChatPage}>
              <Text style={styles.buttonText}>Chat With laboratory</Text>
            </TouchableOpacity>
           
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 5,
  },
  labCard: {
    flexDirection: 'row',
  },
  profileContainer: {},
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 14,
  },
  price: {
    fontSize: 14,
  },
  waitingPeriod: {
    fontSize: 14,
  },
  mobileNumber: {
    fontSize: 14,
  },
  horizontalLine: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  popupText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalButton: {
    backgroundColor: '#45B3CB',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Lab;
