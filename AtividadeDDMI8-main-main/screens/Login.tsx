import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { useState } from 'react';
import { Image } from 'react-native';
import styles from '../estilo.js'


import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation();

  const logar = () => {
    auth
      .signInWithEmailAndPassword(email, senha)
      .then(userCredentials => {
        console.log('Logado : ', userCredentials.user.email);
        navigation.replace("Home");
      })
      .catch(erro => alert(erro.message));
  };

  
  const registrar = () => {
    navigation.replace("Registro");
  }

  return (
  <KeyboardAvoidingView behavior='padding' style={styles.container}>
   <ImageBackground source={require('../assets/back3.png')} resizeMode='stretch' style={styles.container}>
    <View style={styles.viewInput}>
      <Text style={styles.title}>Tela de Login</Text>
       <Image source={require('../assets/logo.png')} style={styles.imagemLogo} />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#7f8c8d"
        onChangeText={setEmail}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#7f8c8d"
        secureTextEntry
        onChangeText={setSenha}
        value={senha}
      />

      <TouchableOpacity style={styles.button} onPress={logar}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registro} onPress={registrar}>
        <Text style={styles.registro}>Não tem cadastro? Registre-se</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
   </ImageBackground>
  </KeyboardAvoidingView>
  );
}

