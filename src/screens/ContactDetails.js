import React from 'react';
import { View, Text,   TouchableOpacity,} from 'react-native';
import { Colors } from '../../styles';


const ContactDetailsView = ({route, navigation}) => {
  const {enteredName, enteredNumber, enteredEmail} = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'flex-start'}}>
      <Text
        style={{
          fontSize: 35,
          textAlign: 'center',
          margin: 25,
          borderBottomColor: Colors.purple,
          borderBottomWidth: 2,
        }}>
        {enteredName}
      </Text>

      <Text  style={{
          fontSize: 25,
          margin: 20,
        }}>Phone Number:</Text>
        <Text  style={{
          fontSize: 20,
          textAlign: 'center',

          color: Colors.darkBlue
        }}> {enteredNumber ? enteredNumber : "No number added"}</Text>
      <Text  style={{
          fontSize: 25,
          margin: 20,
        }}>Email:</Text>
      <Text style={{
          fontSize: 20,
          textAlign: 'center',
          color: Colors.darkBlue
        }}> {enteredEmail ? enteredEmail : "No Email added"}</Text>
    </View>
  );
};

export default ContactDetailsView;
