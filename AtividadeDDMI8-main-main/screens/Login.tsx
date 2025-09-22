import { useState } from 'react';
import { StyleSheet, Text, View, Button, KeyboardAvoidingView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import styles from '../estilo';

export default function Login() {
  const[email, setEmail] = useState('')
  const[senha, setSenha] = useState('')

  const navigation = useNavigation()

  const logar = () => {
    auth
    .signInWithEmailAndPassword(email, senha)
    .then( userCredentials => {
      console.log("Logado como: " + userCredentials.user?.email)
      navigation.replace('Menu')
    })
    .catch(erro => alert(erro.message))
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <ImageBackground source={require('../assets/back2.png')} resizeMode='stretch' style={styles.container}>
        <Text style={styles.title}>TELA DE LOGIN</Text>
         <Image source={require('../assets/logo.png')} style={styles.imagemLogo} />
        

        <View style={styles.textInput}>
          <TextInput
            label='E-mail'
            onChangeText={texto => setEmail(texto)}
            style={styles.input}
            activeUnderlineColor='#005362'
          />

          <TextInput
            label='Senha'
            onChangeText={texto => setSenha(texto)}
            secureTextEntry={true}
            style={styles.input}
            activeUnderlineColor='#005362'
          />
        </View>      

        <View style={styles.button2}>
          <TouchableOpacity onPress={() => navigation.replace('Home')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={[]} onPress={() => navigation.replace('Registro')}>
            <Text style={[styles.text]}>Não tem login, registre-se</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>      
    </KeyboardAvoidingView>
  );
}


