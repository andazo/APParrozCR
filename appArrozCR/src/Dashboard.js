import { View,ScrollView,Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { Appbar,Button, Menu, Divider, PaperProvider } from 'react-native-paper';
import React, {useEffect, useState} from 'react'
import {firebase} from '../config'

const Dashboard = ({ navigation }) => {
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
    
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Información de usuario</Text>
        <View style={styles.cardContent}>
          <Text style={styles.infoItem}>Nombre: {name.nombre}</Text>
          <Text style={styles.infoItem}>Correo: {email.email}</Text>
          <Text style={styles.infoItem}>Localidad: {localidad.localidad}</Text>
          <Text style={styles.infoItem}>Variedad: {tipo.variedad}</Text>
          <Text style={styles.infoItem}>Hectareas: {hectarea.hectareas}</Text>
        </View>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={[styles.button, styles.exitButton]} onPress={() => {firebase.auth().signOut()}}>
          <Text style={styles.buttonText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContent: {
    // Add styling for the content inside the card if needed
  },
  infoItem: {
    fontSize: 18,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
  },
  exitButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "white",
  },
});

export default Dashboard