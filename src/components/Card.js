import {
  Text,
  View,
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
        style={styles.nameText}>
        {task.name}
      </Text>
      <View
        style={styles.viewBox}
      >
        <Ionicons name="time-outline" size={17} color="#c4c4c4" />
        <Text
          style={styles.createdText}>
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
  },
  viewBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5
  },
  createdText: {
    paddingLeft: 2,
    fontSize: 13,
    color: "#c4c4c4"
  }
})

export default Card