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
      <Text style={styles.title}>Bienvenido a CRArroz</Text>
      <Text style={styles.description}>Somos una plataforma que impulsa el rendimiento y salud de las plantaciones de arroz en el territorio nacional</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Inicio sesión</Text>
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
    width: 420,
    height: 300,
    marginBottom: 30,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
    color: "#666",
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
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
