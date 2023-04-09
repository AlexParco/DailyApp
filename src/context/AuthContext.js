import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  useEffect,
  useState,
  createContext,
  useContext
} from "react";

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const changeUser = (value, label) => {
    setUser(prev => {
      prev[label] = value
    })
  }

  useEffect(() => {
    if (!user) {
      AsyncStorage.setItem('GLOBAL_USER', user)
    }
  }, [user])

  useEffect(() => {
    AsyncStorage.getItem('GLOBAl_USER')
      .then(value => {
        console.log(value)
      })
  })
  return (
    <AuthContext.Provider value={{
      user,
      changeUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const { user, changeUser } = useContext(AuthContext)
  return {
    user,
    changeUser
  }
}