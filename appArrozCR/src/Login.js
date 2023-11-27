import { View, Text, TouchableOpacity, StyleSheet} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../config";
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 26 }}>Iniciar Sesión</Text>
      <View style={{ marginTop: 40 }}>
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Correo electrónico"
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}
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
      </View>
      <Button icon="login" 
        mode="outlined" 
        onPress={() => loginUser(email, password)} 
        style={styles.button}>
        Ingresar
      </Button>
      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={{ marginTop: 20 }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          ¿No tienes cuenta? Regístrate
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 70,
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
  button: {
    marginTop: 40,
    height: 70,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
  },
});
