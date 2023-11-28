import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from "@react-navigation/native";
import { TextInput } from 'react-native-paper';
import {firebase} from '../config'

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confrmPassword, setconfrmPassword] = useState('')
  const [nombre, setNombre] = useState('')
  const [localidad, setLocalidad] = useState('')
  const [variedad, setVariedad] = useState('')
  const [hectareas, setHectareas] = useState('')
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  registerUser = async (email,password,nombre,localidad,variedad,hectareas) => {
      const hectareaValue = parseInt(hectareas, 10);
      if (email === '' || password === '' || confrmPassword === '' || nombre === '' || localidad === '' || variedad === '' || hectareas === '') {
        alert('Ingrese los campos necesarios');
        return;
      }
      if (password !== confrmPassword) {
        alert('Las contraseñas no coinicden');
        return;
      }
      await firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(() => {
        firebase.auth().currentUser.sendEmailVerification({
          handleCodeInApp: true,
          url: 'https://crarroz.firebaseapp.com',
        })
        .then(() => {
          alert('Se ha enviado un correo de verificación al correo electrónico ingresado')
        }) .catch((error) => {
          alert(error.message)
        }) .then(() => {
          firebase.firestore().collection('usuarios')
          .doc(firebase.auth().currentUser.uid)
          .set({
            nombre,
            email,
            localidad,
            variedad,
            hectareas: hectareaValue,
          })
        })
        .then(() => {
          alert('Se ha enviado un correo de verificación al correo electrónico ingresado')
          useNavigation("Login");
        })
        .catch((error) => {
          console.log(error.message)
        })
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 26 }}>Registro usuario</Text>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <TextInput 
          style={styles.textInput}
          mode="outlined"
          label="Nombre completo"
          onChangeText={(nombre) => setNombre(nombre)}
          autoCorrect={false}
        />
        <TextInput 
          style={styles.textInput}
          mode="outlined"
          label="Correo electrónico"
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Contraseña"
          secureTextEntry={secureTextEntry}
          right={<TextInput.Icon icon="eye" onPress={() => {
            setSecureTextEntry(!secureTextEntry);
            return false;
          }}/>}
          onChangeText={(password) => setPassword(password)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Confirmar contraseña"
          secureTextEntry={secureTextEntry}
          right={<TextInput.Icon icon="eye" onPress={() => {
            setSecureTextEntry(!secureTextEntry);
            return false;
          }}/>}
          onChangeText={(confrmPassword) => setconfrmPassword(confrmPassword)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput 
          style={styles.textInput}
          mode="outlined"
          label="Localidad"
          onChangeText={(localidad) => setLocalidad(localidad)}
          autoCorrect={false}
        />
        <TextInput 
          style={styles.textInput}
          mode="outlined"
          label="Variedad"
          onChangeText={(variedad) => setVariedad(variedad)}
          autoCorrect={false}
        />
        <TextInput 
          style={styles.textInput}
          mode="outlined"
          label="Número de hectáreas"
          onChangeText={(hectareas) => setHectareas(hectareas)}
          autoCorrect={false}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={[styles.button,styles.registerButton]} onPress={() => registerUser(email,password,nombre,localidad,variedad,hectareas)} title="Register">
        <Text style={styles.buttonText}>Registrarme</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "white",
  },
  textInput: {
    paddingTop: 5,
    paddingBottom: 5,
    width: 300,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
  },
  registerButton: {
    backgroundColor: '#2ecc71',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#2ecc71',
  },
});