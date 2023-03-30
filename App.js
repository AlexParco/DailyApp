import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "./src/screens/Main.js";
import AddTask from "./src/screens/Add.js";
import Settings from "./src/screens/Setttings.js";
import { Feather } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer >
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{
            headerShown: false,
          }}>
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
    </>
  )
}