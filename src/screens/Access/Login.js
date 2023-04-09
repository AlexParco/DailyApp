import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
  Button,
  Touchable,
  TouchableOpacity,
} from 'react-native'
import { useAuth } from '../../context/AuthContext'

const Login = ({ navigation }) => {
  const { loginAuth, changeUser } = useAuth()

  const handleLogin = () => {
    loginAuth()
    navigation.navigate('Main')
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
        <Text
          style={{
            fontSize: 25
          }}
        >Log In</Text>
        <TextInput
          multiline={true}
          label='Username'
          placeholder="Username"
          onChangeText={(value) =>
            changeUser({
              value: value,
              label: 'username'
            })
          }
          style={[styles.usernameInput, styles.shadowProp]} />
        <TextInput
          multiline={true}
          label='Password'
          onChangeText={(value) =>
            changeUser({
              value: value,
              label: 'password'
            })
          }
          placeholder="Password"
          style={styles.usernameInput} />
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => handleLogin()}>
          <Text style={{
            color: '#fff',
            textAlign: 'center',
            letterSpacing: 1.2,
            fontWeight: '500',
          }}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    width: '100%',
    height: Dimensions.get("window").height,
    flex: 1,
    justifyContent: 'center',
  },
  containerForm: {
    gap: 20
  },
  usernameInput: {
    height: 50,
    borderRadius: 12,
    paddingLeft: 20,
    padding: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#b9b9b9',
  },
  loginBtn: {
    width: '100%',
    backgroundColor: '#252525',
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
  }
})

export default Login