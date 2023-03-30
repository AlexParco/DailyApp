import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Button,
  Dimensions,
  StyleSheet
} from 'react-native';

import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';

const Card = ({ task }) => {
  return (
    <View
      style={styles.container}
    >
      <Text
        style={nameText}>
        {task.name}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 5
        }}
      >
        <Ionicons name="time-outline" size={17} color="#c4c4c4" />
        <Text
          style={{
            paddingLeft: 2,
            fontSize: 13,
            color: "#c4c4c4"
          }}>
          {moment(task.created_at).format("LT")}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#171717",
    shadowColor: "#000",
    shadowOpacity: 3.9,
    shadowRadius: 5,
    elevation: 5
  },
  nameText: {
    fontSize: 16,
    color: "white"
  }
})

export default Card