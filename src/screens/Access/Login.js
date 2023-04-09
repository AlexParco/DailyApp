import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
} from 'react-native'
import { useAuth } from '../../context/AuthContext'

const Login = () => {
  const { user } = useAuth()
  const [form, setForm] = React.useState({
    username: '',
    password: ''
  })
  console.log(form)

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
            setForm(prev => ({
              ...prev,
              username: value
            }))
          }
          style={[styles.usernameInput, styles.shadowProp]} />
        <TextInput
          multiline={true}
          label='Password'
          onChangeText={(value) =>
            setForm(prev => ({
              ...prev,
              password: value
            }))
          }
          placeholder="Password"
          style={styles.usernameInput} />
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
})

export default Login