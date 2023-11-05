
// import React, { useState } from 'react';
// import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// import ImagePicker from 'react-native-image-picker';

// function ChatScreen({ route }) {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const { user } = route.params;

//   const handleSendMessage = () => {
//     if (message) {
//       setMessages([...messages, { text: message, isImage: false }]);
//       setMessage('');
//     }
//   };

//   const handleUploadImage = () => {
//     const options = {
//       title: 'Select Image',
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };

//     ImagePicker.showImagePicker(options, (response) => {
//       if (response.uri) {
//         setMessages([...messages, { text: response.uri, isImage: true }]);
//       }
//     });
//   };

//   const renderMessage = (message, index) => {
//     if (message.isImage) {
//       return (
//         <Image key={index} source={{ uri: message.text }} style={styles.imageMessage} />
//       );
//     } else {
//       return (
//         <View key={index} style={styles.textMessageContainer}>
//           <Text style={styles.textMessage}>{message.text}</Text>
//         </View>
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.userName}>{user.name}</Text>
//       <View style={styles.horizontalLine} />
//       <ScrollView style={styles.messageContainer}>
//         {messages.map((message, index) => renderMessage(message, index))}
//       </ScrollView>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.inputField}
//           placeholder="Type a message..."
//           value={message}
//           onChangeText={(text) => setMessage(text)}
//         />
//         <TouchableOpacity style={styles.uploadButton} onPress={handleUploadImage}>
//           <Text style={styles.uploadButtonText}>Upload</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
//           <Text style={styles.sendButtonText}>GO</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f9f9f9',
//   },
//   userName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   horizontalLine: {
//     borderBottomColor: 'gray',
//     borderBottomWidth: 1,
//     marginVertical: 8,
//   },
//   uploadButton: {
//     backgroundColor: '#45B3CB',
//     borderRadius: 50,
//     width: '15%',
//     marginRight: 8,
//   },
//   uploadButtonText: {
//     color: 'white',
//     padding: 8,
//     textAlign: 'center',
//   },
//   sendButton: {
//     backgroundColor: '#45B3CB',
//     borderRadius: 50,
//     width: '15%',
//   },
//   sendButtonText: {
//     color: 'white',
//     padding: 8,
//     textAlign: 'center',
//   },
//   messageContainer: {
//     flex: 1,
//     marginTop: 16,
//     marginBottom: 16,
//   },
//   textMessageContainer: {
//     backgroundColor: '#45B3CB',
//     borderRadius: 8,
//     maxWidth: '70%',
//     alignSelf: 'flex-end',
//     marginVertical: 4,
//   },
//   textMessage: {
//     color: 'white',
//     padding: 8,
//   },
//   imageMessage: {
//     width: 200,
//     height: 200,
//     alignSelf: 'flex-end',
//     marginVertical: 4,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderTopColor: 'gray',
//     padding: 8,
//   },
//   inputField: {
//     flex: 1,
//     marginRight: 8,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 8,
//   },
// });

// export default ChatScreen;
// import React, { useState } from 'react';
// import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// import {launchCamera,launchImageLibrary} from 'react-native-image-picker';

// function ChatScreen({ route }) {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const { user } = route.params;

//   const handleSendMessage = () => {
//     if (message) {
//       setMessages([...messages, { text: message, isImage: false }]);
//       setMessage('');
//     }
//   };

//   const handleUploadImage = () => {
//     const options = {
//       title: 'Select Image',
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };
    
//    const ImagePicker=()=>{
    
//     launchImageLibrary(options, (response) => {
      
//       if (response.uri) {
//         setMessages([...messages, { text: response.uri, isImage: true }]);
//       }
//     });}
//   };

//   const renderMessage = (message, index) => {
//     if (message.isImage) {
//       return (
//         <Image key={index} source={{ uri: message.text }} style={styles.imageMessage} />
//       );
//     } else {
//       return (
//         <View key={index} style={styles.textMessageContainer}>
//           <Text style={styles.textMessage}>{message.text}</Text>
//         </View>
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.userName}>{user.name}</Text>
//       <View style={styles.horizontalLine} />
//       <ScrollView style={styles.messageContainer}>
//         {messages.map((message, index) => renderMessage(message, index))}
//       </ScrollView>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.inputField}
//           placeholder="Type a message..."
//           value={message}
//           onChangeText={(text) => setMessage(text)}
//         />
//         <TouchableOpacity style={styles.uploadButton} onPress={handleUploadImage}>
//           <Text style={styles.uploadButtonText}>Upload</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f9f9f9',
//   },
//   userName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   horizontalLine: {
//     borderBottomColor: 'gray',
//     borderBottomWidth: 1,
//     marginVertical: 8,
//   },
//   uploadButton: {
//     backgroundColor: '#45B3CB',
//     borderRadius: 50,
//     width: '15%',
//     marginRight: 8,
//   },
//   uploadButtonText: {
//     color: 'white',
//     padding: 8,
//     textAlign: 'center',
//   },
//   sendButton: {
//     backgroundColor: '#45B3CB',
//     borderRadius: 50,
//     width: '15%',
//   },
//   sendButtonText: {
//     color: 'white',
//     padding: 8,
//     textAlign: 'center',
//   },
//   messageContainer: {
//     flex: 1,
//     marginTop: 16,
//     marginBottom: 16,
//   },
//   textMessageContainer: {
//     backgroundColor: '#45B3CB',
//     borderRadius: 8,
//     maxWidth: '70%',
//     alignSelf: 'flex-end',
//     marginVertical: 4,
//   },
//   textMessage: {
//     color: 'white',
//     padding: 8,
//   },
//   imageMessage: {
//     width: 200,
//     height: 200,
//     alignSelf: 'flex-end',
//     marginVertical: 4,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderTopColor: 'gray',
//     padding: 8,
//   },
//   inputField: {
//     flex: 1,
//     marginRight: 8,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 8,
//   },
// });

// export default ChatScreen;
// import React, { useState } from 'react';
// import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// import { launchImageLibrary } from 'react-native-image-picker';

// function ChatScreen({ route }) {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const { user } = route.params;

//   const handleSendMessage = () => {
//     if (message) {
//       setMessages([...messages, { text: message, isImage: false }]);
//       setMessage('');
//     }
//   };

//   const handleUploadImage = () => {
//     const options = {
//       title: 'Select Image',
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };

//     launchImageLibrary(options, (response) => {
//       if (response.uri) {
//         setMessages([...messages, { text: response.uri, isImage: true }]);
//       }
//     });
//   };

//   const renderMessage = (message, index) => {
//     if (message.isImage) {
//       return (
//         <Image key={index} source={{ uri: message.text }} style={styles.imageMessage} />
//       );
//     } else {
//       return (
//         <View key={index} style={styles.textMessageContainer}>
//           <Text style={styles.textMessage}>{message.text}</Text>
//         </View>
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.userName}>{user.name}</Text>
//       <View style={styles.horizontalLine} />
//       <ScrollView style={styles.messageContainer}>
//         {messages.map((message, index) => renderMessage(message, index))}
//       </ScrollView>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.inputField}
//           placeholder="Type a message..."
//           value={message}
//           onChangeText={(text) => setMessage(text)}
//         />
//         <TouchableOpacity style={styles.uploadButton} onPress={handleUploadImage}>
//           <Text style={styles.uploadButtonText}>Upload</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f9f9f9',
//   },
//   userName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   horizontalLine: {
//     borderBottomColor: 'gray',
//     borderBottomWidth: 1,
//     marginVertical: 8,
//   },
//   uploadButton: {
//     backgroundColor: '#45B3CB',
//     borderRadius: 50,
//     width: '15%',
//     marginRight: 8,
//   },
//   uploadButtonText: {
//     color: 'white',
//     padding: 8,
//     textAlign: 'center',
//   },
//   sendButton: {
//     backgroundColor: '#45B3CB',
//     borderRadius: 50,
//     width: '15%',
//   },
//   sendButtonText: {
//     color: 'white',
//     padding: 8,
//     textAlign: 'center',
//   },
//   messageContainer: {
//     flex: 1,
//     marginTop: 16,
//     marginBottom: 16,
//   },
//   textMessageContainer: {
//     backgroundColor: '#45B3CB',
//     borderRadius: 8,
//     maxWidth: '70%',
//     alignSelf: 'flex-end',
//     marginVertical: 4,
//   },
//   textMessage: {
//     color: 'white',
//     padding: 8,
//   },
//   imageMessage: {
//     width: 200,
//     height: 200,
//     alignSelf: 'flex-end',
//     marginVertical: 4,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderTopColor: 'gray',
//     padding: 8,
//   },
//   inputField: {
//     flex: 1,
//     marginRight: 8,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 8,
//   },
// });

// export default ChatScreen;


import React, { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker'; // Import the library correctly

function ChatScreen({ route }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { user } = route.params;
  const [image, setImage] = useState(null); // State to hold the selected image

  const handleSendMessage = () => {
    if (message) {
      setMessages([...messages, { text: message, isImage: false }]);
      setMessage('');
    }
  };

  const handleUploadImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => { // Use ImagePicker
      if (response.uri) {
        setImage(response); // Store the selected image
        setMessages([...messages, { text: response.uri, isImage: true }]);
      }
    });
  };

  const renderMessage = (message, index) => {
    if (message.isImage) {
      return (
        <Image key={index} source={{ uri: message.text }} style={styles.imageMessage} />
      );
    } else {
      return (
        <View key={index} style={styles.textMessageContainer}>
          <Text style={styles.textMessage}>{message.text}</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>{user.name}</Text>
      <View style={styles.horizontalLine} />
      <ScrollView style={styles.messageContainer}>
        {messages.map((message, index) => renderMessage(message, index))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Type a message..."
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <TouchableOpacity style={styles.uploadButton} onPress={handleUploadImage}>
          <Text style={styles.uploadButtonText}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Your styles here
    container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  horizontalLine: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 8,
  },
  uploadButton: {
    backgroundColor: '#45B3CB',
    borderRadius: 50,
    width: '15%',
    marginRight: 8,
  },
  uploadButtonText: {
    color: 'white',
    padding: 8,
    textAlign: 'center',
  },
  sendButton: {
    backgroundColor: '#45B3CB',
    borderRadius: 50,
    width: '15%',
  },
  sendButtonText: {
    color: 'white',
    padding: 8,
    textAlign: 'center',
  },
  messageContainer: {
    flex: 1,
    marginTop: 16,
    marginBottom: 16,
  },
  textMessageContainer: {
    backgroundColor: '#45B3CB',
    borderRadius: 8,
    maxWidth: '70%',
    alignSelf: 'flex-end',
    marginVertical: 4,
  },
  textMessage: {
    color: 'white',
    padding: 8,
  },
  imageMessage: {
    width: 200,
    height: 200,
    alignSelf: 'flex-end',
    marginVertical: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'gray',
    padding: 8,
  },
  inputField: {
    flex: 1,
    marginRight: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
  },
});

export default ChatScreen;
