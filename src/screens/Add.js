import {
  View,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native"
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddTask = ({ navigation }) => {
  const [date, setDate] = React.useState(new Date())
  const [open, setOpen] = React.useState(false)

  return (
    <View
      style={styles.container}
    >
      <View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 20,
        }}>
          <TouchableOpacity
            style={{
              width: 45,
              height: 45,
              backgroundColor: "#f3f3f3",
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#0a0a0a30",
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => {
              navigation.navigate('Main')
            }}
          >
            <Text>{'<'}</Text>
          </TouchableOpacity>
          <Text
            style={styles.addText}>Add Task</Text>
        </View>
        <View
          style={styles.nameBox}>
          <Text
            style={styles.nameText}>
            Name:
          </Text>
          <TextInput
            placeholder="type a name"
            style={styles.nameInput}
          />
        </View>
        <View
          style={styles.descriptionBox}>
          <Text
            style={styles.descriptionText}>
            Description:
          </Text>
          <TextInput
            multiline={true}
            numberOfLines={6}
            label='description'
            placeholder="Type Something"
            style={styles.descriptionInput} />
        </View>
        <View
          style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column'
          }}>
        </View>
        <TouchableOpacity
          onPress={() => setOpen(!open)}>
          <Text>hola</Text>
        </TouchableOpacity>
        {
          open &&
          <DateTimePicker
            value={date}
            mode={'datetime'}
            is24Hour={true}
            onTouchCancel={() => setOpen(!open)}
          />
        }
      </View>
      <TouchableOpacity
        style={styles.saveButton}
      >
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginTop: StatusBar.currentHeight + 10,
    backgroundColor: "#fff",
    height: "100%",
    paddingHorizontal: 30,
  },
  saveText: {
    fontSize: 16,
    color: '#fff'
  },
  addText: {
    fontSize: 30,
    fontWeight: "500"
  },
  nameBox: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column'
  },
  nameText: {
    fontSize: 18,
    fontWeight: '400'
  },
  nameInput: {
    padding: 5,
    marginTop: 10,
    borderWidth: 1,
  },
  descriptionBox: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column'
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: '400'
  },
  descriptionInput: {
    padding: 5,
    textAlignVertical: 'top',
    marginTop: 10,
    borderWidth: 1,
  },
  saveButton: {
    marginTop: 40,
    height: 50,
    backgroundColor: "#303030",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#0a0a0a30",
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default AddTask