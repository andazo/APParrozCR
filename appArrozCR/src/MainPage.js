import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const MainPage = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/mainPage.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>CR-Arroz</Text>
      <Text style={styles.description}>Una plataforma moderna que mejora la salud y rendimiento de las platanciones de arroz en Costa Rica</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={handleRegisterPress}>
        <Text style={styles.buttonText}>Registrarme</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "white",
  },
  image: {
    width: 400,
    height: 300,
    marginBottom: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 35,
    color: "#666",
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
  },
  registerButton: {
    backgroundColor: '#2ecc71',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MainPage;
