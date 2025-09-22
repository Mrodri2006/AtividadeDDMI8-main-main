import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',  
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  imagemLogo: {
    width: 200,  
    height: 200,
    borderRadius: 90,  
    alignSelf: 'center',
    bottom: 120
  },
  title: {
    fontSize: 36, 
    fontWeight: '700',
    color: '#1E90FF',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',  
    textShadowOffset: { width: 1, height: 3 },
    textShadowRadius: 8,
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: 0.8,
    textAlign: 'center',
    margin: 30,
    bottom:140
  },
  input: {
    width: '100%',  
    height: 50,  
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 18,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: '#dfe6e9',
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    bottom: 80
  
  },

buttonText: {
  color: '#fff', // White text
  fontSize: 18, // Increase text size for better readability
  fontWeight: 'bold', // Make text bold for emphasis
  letterSpacing: 1, // Add a slight letter spacing for a cleaner look
  textAlign: 'center', // Center text properly
},
  registro:{
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 1,
    marginRight: 60,
    bottom: 30
  }, 
  modal: {
    backgroundColor: '#fff',
    width: '80%',
    marginTop: 200,
    marginBottom: 200,
    marginLeft: '10%',
    marginRight: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#dfe6e9',
    borderWidth: 2,
    borderRadius: 20,
  },
  titleText: {
    fontSize: 36, 
    fontWeight: '700',
    color: '#1E90FF',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',  
    textShadowOffset: { width: 1, height: 3 },
    textShadowRadius: 8,
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: 0.8,
    textAlign: 'center',
    margin: 30,
    bottom:140
  },
button2: {
  width: '50%', // Largura um pouco maior para dar destaque
  backgroundColor: '#00b894', // Cor de fundo diferente, um tom de verde para contraste
  paddingVertical: 18, // Tamanho da altura um pouco menor que o botão de login
  borderRadius: 16, // Bordas arredondadas para manter a consistência com o botão anterior
  alignItems: 'center',
  marginTop: 80,
  shadowOpacity: 0.15,
  shadowRadius: 10,
  elevation: 5,
  bottom: 60,
  borderWidth: 1,
},
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInput: {
    width: '80%',
    height: 45,
    borderColor: '#ddd',  
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
    color: '#333',
  },
  fecharButton: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#FF4D4D',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  fecharButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  button4: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#0984e3',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },
  viewInput: {
    width: '80%',
    height: '60%'
  }, 
});
