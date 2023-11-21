import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import {firebase} from '../config'

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confrmPassword, setconfrmPassword] = useState('')
  const [nombre, setNombre] = useState('')
  const [localidad, setLocalidad] = useState('')
  const [variedad, setVariedad] = useState('')
  const [hectareas, setHectareas] = useState('')

  registerUser = async (email,password,confrmPassword,nombre,localidad,variedad,hectareas) => {
    if (password === confrmPassword) {
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
            hectareas,
          })
        })
        .catch((error) => {
          alert(error.message)
        })
      })
      .catch((error) => {
        alert(error.message)
      })
    } else {
      alert('Las contraseñas ingresadas no coinciden')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold', 'fontSize': 23}}>
        Registro de usuario
      </Text>
      <View style={{marginTop:40}}>
        <TextInput 
          style={styles.textInput}
          placeholder="Nombre completo"
          onChangeText={(nombre) => setNombre(nombre)}
          autoCorrect={false}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Correo electrónico"
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Contraseña"
          onChangeText={(password) => setPassword(password)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Confirmar contraseña"
          onChangeText={(confrmPassword) => setconfrmPassword(confrmPassword)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Localidad"
          onChangeText={(localidad) => setLocalidad(localidad)}
          autoCorrect={false}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Variedad arroz"
          onChangeText={(variedad) => setVariedad(variedad)}
          autoCorrect={false}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Número de hectáreas"
          onChangeText={(hectareas) => setHectareas(hectareas)}
          autoCorrect={false}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity
        onPress={() => registerUser(email, password, nombre, localidad, variedad, hectareas)}
        style={styles.button}
      >
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>Registrarme</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  textInput: {
    paddingTop: 20,
    paddingBottom: 10,
    width: 400,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    marginTop: 50,
    height: 70,
    width: 250,
    backgroundColor: "#026efd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});