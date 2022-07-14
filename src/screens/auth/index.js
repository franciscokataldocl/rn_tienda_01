import React from 'react'
import { View, Text, TextInput, Button, SafeAreaView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const AuthScreen = () => {

  const title ='Regístrate';
  const message = '¿Ya tienes una cuenta?';
  const messageAction= 'Login';
  const messageTarget= 'Login';



  return (
    <SafeAreaView style={{ flex: 1 }}>
    <KeyboardAvoidingView 
    behavior='height' 
    style={styles.containerKeyboard}
    >
        <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text>INPUTS</Text>
        </View>
        <View style={styles.prompt}>
        <Text style={styles.promptMessage}>{message}</Text>
        <TouchableOpacity
        onPress={() => console.log(messageTarget)}>
        <Text style={styles.promptButton}>{messageAction}</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => console.log(messageTarget)}>
        <Text style={styles.promptButtonDos}>{title}</Text>
        </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default AuthScreen;