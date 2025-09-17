import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, Alert, KeyboardAvoidingView, ImageBackground } from 'react-native';
import  Modal  from 'react-native-modal';
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native';
import styles from '../estilo.js'

export default function Home() {
   const [visivel, setVisivel] = useState(false);
   const [visivel1, setVisivel1] = useState(false);
   const [visivel2, setVisivel2] = useState(false);

   const [nome,setNome] = useState('');
   const [data,setData] = useState('');
   const [valor,setValor] = useState('');
   
   const trocar = () => {
    setVisivel(!visivel);
   }

    const trocar1 = () => {
    setVisivel1(!visivel1);
   }

    const trocar2 = () => {
    setVisivel2(!visivel2);
   }

  const Limpar = () => {
    setNome('');
    setData('');
    setValor('');
  }

  const sair = () => {
    auth
    .signOut()
    .then( ()=>{
     navigation.replace('Login')
    })
  }

  const navigation = useNavigation();


  return (
  <KeyboardAvoidingView behavior='padding' style={styles.container}>
   <ImageBackground source={require('../assets/back3.png')} resizeMode='stretch' style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.titleText}>CHAMO</Text>
      

        <TouchableOpacity style={styles.button4} onPress={sair}>
        <Text>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={trocar}>
        <Text style={styles.buttonText}>Assistente Administrativo</Text>
      </TouchableOpacity>

      <Modal 
      isVisible={visivel} 
      style={styles.modal} 
      animationIn={'slideInLeft'}
      animationInTiming={1000}
      animationOut={'slideOutRight'}
      animationOutTiming={1000}
      >
        <Text style={styles.text}>Quer a vaga?</Text>
        <Text style={styles.text}>Informe seus dados</Text> 
        
        <TextInput placeholder='Nome:' value={nome} onChangeText={texto => setNome(texto)} style={styles.textInput}/>
        <TextInput placeholder='Data:' value={data} onChangeText={texto => setData(texto)} style={styles.textInput}/>
        <TextInput placeholder='Valor:' value={valor} onChangeText={texto => setValor(texto)} style={styles.textInput}/>

      <TouchableOpacity  
      style={styles.button2}
      onPress={() => { 
          Alert.alert('Enviado');
          Limpar();
        }
      }
      >
      <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.fecharButton} onPress={trocar}>
       <Text style={styles.fecharButtonText}>Fechar</Text>
       </TouchableOpacity>

      </Modal>

        <TouchableOpacity style={styles.button} onPress={trocar1}>
        <Text style={styles.buttonText}>Técnico em Suporte de TI</Text>
        </TouchableOpacity>

      <Modal 
      isVisible={visivel1} 
      style={styles.modal} 
      animationIn={'slideInLeft'}
      animationInTiming={1000}
      animationOut={'slideOutRight'}
      animationOutTiming={1000}
      >
        <Text style={styles.text}>Quer a vaga?</Text>
        <Text style={styles.text}>Informe seus dados</Text>

        <TextInput placeholder='Nome:' value={nome} onChangeText={texto => setNome(texto)} style={styles.textInput}/>
        <TextInput placeholder='Data:' value={data} onChangeText={texto => setData(texto)} style={styles.textInput}/>
        <TextInput placeholder='Valor:' value={valor} onChangeText={texto => setValor(texto)} style={styles.textInput}/>

        <TouchableOpacity  
         style={styles.button2}
         onPress={()=> { Alert.alert('Enviado');
         Limpar();
         }
         }
      >
      <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.fecharButton} onPress={trocar1}>
       <Text style={styles.fecharButtonText}>Fechar</Text>
       </TouchableOpacity>

      </Modal>

        <TouchableOpacity style={styles.button} onPress={trocar2}>
        <Text style={styles.buttonText}>Analista de Marketing Dig</Text>
        </TouchableOpacity>

      <Modal 
      isVisible={visivel2} 
      style={styles.modal} 
      animationIn={'slideInLeft'}
      animationInTiming={1000}
      animationOut={'slideOutRight'}
      animationOutTiming={1000}
      >
        <Text style={styles.text}>Quer a vaga?</Text>
        <Text style={styles.text}>Informe seus dados</Text>
        
        <TextInput placeholder='Nome:' value={nome} onChangeText={texto => setNome(texto)} style={styles.textInput}/>
        <TextInput placeholder='Data:' value={data} onChangeText={texto => setData(texto)} style={styles.textInput}/>
        <TextInput placeholder='Valor:' value={valor} onChangeText={texto => setValor(texto)} style={styles.textInput}/>

      <TouchableOpacity  
      style={styles.button2}
      onPress={()=> { Alert.alert('Enviado');
      Limpar();
       }
      }
      >
      <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.fecharButton} onPress={trocar2}>
      <Text style={styles.fecharButtonText}>Fechar</Text>
      </TouchableOpacity>

      </Modal>
    </View>
  </ImageBackground>
  </KeyboardAvoidingView>
  );
}
//<Text style={styles.title}>{auth.currentUser?.email}</Text>
//
//