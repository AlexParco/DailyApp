import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "./src/screens/Main.js";
import AddTask from "./src/screens/Add.js";
import Settings from "./src/screens/Setttings.js";
import { Feather } from '@expo/vector-icons';
import Login from "./src/screens/Access/Login.js";
import { AuthContextProvider } from "./src/context/AuthContext.js";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <AuthContextProvider>

        <NavigationContainer >
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen
              name="Login"
              component={Login}
            />
            <Stack.Screen
              name="Main"
              component={Main}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Feather name="server" size={size} color={color} />
                )
              }}
            />
            <Stack.Screen
              name="Add"
              component={AddTask}
              options={{
                presentation: 'card'
              }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
            />
          </Stack.Navigator>
        </NavigationContainer >
      </AuthContextProvider>
    </>
  )
}