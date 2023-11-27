import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import {firebase} from '../config'

const Dashboard = () => {
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [localidad, setlocalidad] = useState('');
  const [tipo, settipo] = useState('');
  const [hectarea, sethectarea] = useState('');

  useEffect(() => {
    firebase.firestore().collection('usuarios')
    .doc(firebase.auth().currentUser.uid).get()
    .then((snapshot) => {
      if(snapshot.exists){
        setName(snapshot.data());
        setemail(snapshot.data());
        setlocalidad(snapshot.data());
        settipo(snapshot.data());
        sethectarea(snapshot.data());
      } else {
        console.log('El usuario no existe')
      }
    })
  },[])

  return(
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:20, fontWeight:'bold'}}>
        Bienvenido,{name.nombre}
      </Text>
      <Text style={{fontSize:20, fontWeight:'bold'}}>
        Bienvenido,{email.email}
      </Text>
      <Text style={{fontSize:20, fontWeight:'bold'}}>
        Bienvenido,{localidad.localidad}
      </Text>
      <Text style={{fontSize:20, fontWeight:'bold'}}>
        Bienvenido,{tipo.variedad}
      </Text>
      <Text style={{fontSize:20, fontWeight:'bold'}}>
        Bienvenido,{hectarea.hectareas}
      </Text>
      <TouchableOpacity
        onPress={() => {firebase.auth().signOut()}}
        style={styles.button}
      >
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>
          Cerrar sesión
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
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