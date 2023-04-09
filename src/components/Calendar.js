import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

const Calendar = ({ selectedDate, setSelectedDate }) => {

  return (
    <CalendarStrip
      scrollable
      calendarAnimation={{ type: 'sequence', duration: 30 }}
      daySelectionAnimation={{ type: 'background', duration: 200, highlightColor: "#181818" }}
      calendarHeaderFormat="MMMM"
      calendarHeaderPosition="above"
      startingDate={moment()}
      calendarHeaderStyle={{
        fontSize: 19,
        color: '#303030',
        alignSelf: 'flex-start',
        paddingHorizontal: 30,
      }}
      highlightDateContainerStyle={{
        borderRadius: 12,
        width: 40
      }}
      onDateSelected={(e) => setSelectedDate(e)}
      selectedDate={selectedDate}
      dateNumberStyle={{ color: '#73737390' }}
      dateNameStyle={{ color: '#73737390' }}
      highlightDateNumberStyle={{ color: 'white' }}
      highlightDateNameStyle={{ color: 'white' }}
      style={{ height: 110, paddingTop: 5, paddingBottom: 15 }}
      iconLeft=""
      iconRight=""
    />
  )
}

export default Calendar