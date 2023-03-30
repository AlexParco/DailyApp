import {
  View,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Button
} from "react-native"
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddTask = () => {
  const [date, setDate] = React.useState(new Date())
  const [open, setOpen] = React.useState(false)

  return (
    <View
      style={{
        paddingTop: 30,
        marginTop: StatusBar.currentHeight + 10,
        marginHorizontal: 10,
        backgroundColor: "#fff",
        borderRadius: 20,
        elevation: 10,
        height: "100%",
        paddingHorizontal: 30,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold"
        }}>Add Task</Text>
      <View>
        <View
          style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column'
          }}>
          <Text
            style={{ fontSize: 18, fontWeight: '400' }}>
            Name:
          </Text>
          <TextInput placeholder="type a name" style={{
            padding: 5,
            marginTop: 10,
            borderWidth: 1,
          }} />
        </View>
        <View
          style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column'
          }}>
          <Text
            style={{ fontSize: 18, fontWeight: '400' }}>
            Description:
          </Text>
          <TextInput
            multiline={true}
            numberOfLines={6}
            label='description'
            placeholder="Type Something"
            style={{
              padding: 5,
              textAlignVertical: 'top',
              marginTop: 10,
              borderWidth: 1,
            }} />
        </View>
        <View
          style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column'
          }}>
        </View>
        <TouchableOpacity onClick={() => setOpen(!open)}><Text>hola</Text></TouchableOpacity>
        {
          open &&
          <DateTimePicker
            value={date}
            mode={'datetime'}
            is24Hour={true}
            onTouchCancel={() => setOpen(false)}
          // onChange={(e, selectedDate) => setDate(selectedDate)}
          />
        }
      </View>
      <TouchableOpacity
        style={{
          marginTop: 40,
          height: 50,
          backgroundColor: "#303030",
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#0a0a0a30",
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{
          fontSize: 16,
          color: '#fff'
        }}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddTask