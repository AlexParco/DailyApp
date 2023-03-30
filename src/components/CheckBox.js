import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

const CheckBox = ({ id, text, done, isToday, hour }) => {
  return (
    <TouchableOpacity style={done ? styles.checked : styles.unchecked}>
      {done && <Entypo name="check" size={16} color="#FAFAFA" />}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  checked: {
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: "#262626",
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: .3,
    shadowRadius: 5,
    elevation: 5
  },
  unchecked: {
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
    borderColor: '#E8E8E8',
    backgroundColor: "#FFF",
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: .3,
    shadowRadius: 5,
    elevation: 5
  }
})

export default CheckBox