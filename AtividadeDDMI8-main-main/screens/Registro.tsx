import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper'
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import styles from '../estilo.js'


export default function Registro() {
   const[nome, setNome] = useState('');
   const[email, setEmail] = useState('');
   const[senha, setSenha] = useState('');
   const[fone, setFone] = useState('');


   const navigation = useNavigation();


   const cadastrar = () =>{
    auth
    .createUserWithEmailAndPassword(email, senha)
    .then( userCredentials => {
        console.log(' : ', userCredentials.user.email);
        navigation.replace("Home");
    })
   }


     const sair = () => {
    auth
    .signOut()
    .then( ()=>{
     navigation.replace('Login')
    })
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>cadastro de usuario</Text>
      

      <TextInput style={styles.textInput} label='Nome'     onChangeText={texto => setNome(texto)}/>
      <TextInput style={styles.textInput} label='Email'    onChangeText={texto => setEmail(texto)}/>
      <TextInput style={styles.textInput} label='Senha'    onChangeText={texto => setSenha(texto)}/>
      <TextInput style={styles.textInput} label='Telefone' onChangeText={texto => setFone(texto)}/>


      <TouchableOpacity style={styles.button} onPress={cadastrar}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button} onPress={sair}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

    </View>
  );
}

