import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const Start = ({ navigation }) => {
  const [name, setName] = useState('');

  const [backgroundColor, setBackgroundColor] = useState('#090C08'); // Default background color

  const handleEnterChat = () => {
    if (name.trim() !== '') {
      navigation.navigate('Chat', { name, backgroundColor });
    }
  };

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
       <View style={styles.container}><Text style={styles.appTitle}>Chat App</Text></View> 

      <View style={[styles.container,styles.buttonPaddedBackground]}>
        <Text style={styles.label}>Your name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="rgba(117, 112, 131, 0.5)"
          onChangeText={setName}
        />
        <Text style={styles.label}>Choose background color</Text>
        <View style={styles.colorOptions}>
        <TouchableOpacity
        style={[styles.colorOption, { backgroundColor: '#090C08' }]}
        onPress={() => setBackgroundColor('#090C08')}
        />
        <TouchableOpacity
            style={[styles.colorOption, { backgroundColor: '#474056' }]}
            onPress={() => setBackgroundColor('#474056')}
        />
        <TouchableOpacity
            style={[styles.colorOption, { backgroundColor: '#8A95A5' }]}
            onPress={() => setBackgroundColor('#8A95A5')}
        />
        <TouchableOpacity
            style={[styles.colorOption, { backgroundColor: '#B9C6AE' }]}
            onPress={() => setBackgroundColor('#B9C6AE')}
        />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleEnterChat}>
          <Text style={styles.buttonText}>Start Chatting</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  appTitle: {
    fontSize: 45,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: '300',
    color: 'rgba(117, 112, 131, 1)',
    marginBottom: 10,
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#757083',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    color: '#757083',
    opacity: 0.5,
  },
  colorOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  colorOption: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  button: {
    backgroundColor: '#757083',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  paddedBackground: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  buttonPaddedBackground: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
  }
});

export default Start;