import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  useEffect,
  useState,
  createContext,
  useContext
} from "react";

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const changeUser = ({ value, label }) => {
    setUser(prev => ({
      ...prev,
      [label]: value
    }))
  }

  const loginAuth = () => {
    console.log(user)
    AsyncStorage.setItem('GLOBAL_USER', JSON.stringify(user))
  }

  useEffect(() => {
    AsyncStorage.getItem('GLOBAl_USER')
      .then(value => {
        if (value) {
          setUser(user)
        }
      })
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      changeUser,
      loginAuth
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const { user, changeUser, loginAuth } = useContext(AuthContext)
  return {
    user,
    changeUser,
    loginAuth
  }
}
