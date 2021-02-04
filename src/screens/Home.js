import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    textAlign: "center",
    margin: 50,
    fontWeight: "bold"
  },
  scrollText: {
    fontSize: 30,
    textAlign: "center",
    margin: 50
  },
});

const HomeView = ({navigation}) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'android');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <ScrollView>
       <View>
      <View>
        <Text style={styles.headerText}> Date and Time Picker Demo With Scrolling!</Text>
      </View>
      <View>
        <Text style={styles.scrollText}> Click the button below to open the date picker!</Text>
      </View>

      <View>
        <Button onPress={showDatepicker} title="Show date picker!"  />
      </View>
      <View style={{marginBottom: 200}}></View>
      <View>
        <Text style={styles.scrollText}> Keep on scrolling to find the Time Picker!!!!</Text>
      </View>
      <View style={{marginBottom: 200}}></View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!"  style={styles.button}/>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
    <View style={{marginBottom: 100}}></View>
    <View>
        <Text style={styles.scrollText}> You made it to the bottom!!</Text>
      </View>
    </ScrollView>
  );
};

export default HomeView;
