import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, {useState, useEffect} from 'react';
import firebase from "firebase/compat";
import Login from "./src/Login";
import Register from "./src/Register";
import Dashboard from "./src/Dashboard";
import Header from "./components/Header"
import MainPage from "./src/MainPage";

const Stack = createStackNavigator();

function App(){
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;

    if(!user){
        return(
            <Stack.Navigator>

                <Stack.Screen
                    name="MainPage"
                    component={MainPage}
                    options={{
                    }}
                />

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                    }}
                />

                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                    }}
                />
            </Stack.Navigator>
        );
    }

    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                }}
            />
        </Stack.Navigator>
    );
}

export default () => {
    return (
        <NavigationContainer>
            <App />
        </NavigationContainer>
    )
}