import * as React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Dimensions,
} from 'react-native';
import profile from '../../assets/luiiis.jpg';
import Calendar from '../components/Calendar';
import { Entypo } from '@expo/vector-icons';
import moment from 'moment';
import Card from '../components/Card';
import { useAuth } from '../context/AuthContext';

const testTasks = [
  { id: 1, name: "tarea 1", description: "", done: false, created_at: "10:20", expired_at: "11:20" },
  { id: 2, name: "tarea 2", description: "", done: true, created_at: "2023-03-29T03:35:28.286Z", expired_at: "11:20" },
  { id: 3, name: "tarea 3", description: "", done: false, created_at: "10:20", expired_at: "11:20" },
  { id: 4, name: "tarea 4", description: "", done: false, created_at: "10:20", expired_at: "11:20" },
  { id: 5, name: "tarea 5", description: "", done: false, created_at: "2023-03-13 10:20:00", expired_at: "11:20" },
  { id: 6, name: "tarea 6", description: "", done: false, created_at: "10:20", expired_at: "11:20" },
  { id: 7, name: "tarea 7", description: "", done: false, created_at: "2023-03-15", expired_at: "11:20" },
  { id: 8, name: "tarea 8", description: "", done: false, created_at: "2023-03-13", expired_at: "11:20" },
]


const Main = ({ navigation }) => {
  const [tasks, setTasks] = React.useState(testTasks)
  const today = moment(new Date())
  const [selectedDate, setSelectedDate] = React.useState(today)
  const { user } = useAuth()

  React.useEffect(() => {
    setTasks(prev => prev.filter(e =>
      moment(e.created_at).day() === selectedDate.day()))
  }, [selectedDate])

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          marginTop: StatusBar.currentHeight + 15,
          width: '100%',
          height: Dimensions.get("window").height,
          flex: 1
        }}
      >
        <View
          style={{
            flex: 0.1,
            paddingTop: 5,
            paddingHorizontal: 30,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 18,
                color: '#303030',
                fontWeight: 'bold'
              }}
            >Hello, {user.username}</Text>
            <TouchableOpacity
              onPress={() => setSelectedDate(today)}
            >
              <Text
                style={{
                  color: "#30303090"
                }}
              >
                {
                  tasks.filter(e =>
                    moment(e.created_at).day() === today.day()).length
                } new Tasks For Today</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Image
              source={profile}
              alt='profile'
              style={{
                width: 45,
                height: 45,
                marginBottom: 20,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: "#0a0a0a30",
                resizeMode: "contain"
              }}
            />
          </TouchableOpacity>
        </View>
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <View
          style={{
            flex: 0.9,
            borderTopLeftRadius: 50,
            backgroundColor: "#fff",
            paddingHorizontal: 29,
            paddingTop: 40,
            elevation: 10,
          }}
        >
          {
            tasks.length === 0
              ?
              <Text>No hay Dailys para hoy</Text>
              :
              tasks.map((task, index) => (
                <Card key={index} task={task} />
              ))
          }
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Add")
        }}
        title='add'
        style={styles.addBtn}
      >
        <Entypo name="plus" size={24} color="black" />
      </TouchableOpacity>
    </>
  )
};

const styles = StyleSheet.create({
  addBtn: {
    width: 45,
    height: 45,
    backgroundColor: "#F3F2F3",
    marginBottom: 20,
    borderRadius: 15,
    position: 'absolute',
    bottom: 20,
    borderWidth: 1,
    borderColor: "#0a0a0a30",
    right: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: .5,
    shadowRadius: 5,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Main;