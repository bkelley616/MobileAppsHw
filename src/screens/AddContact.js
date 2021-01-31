import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'
import { ContactsContext } from "../Context";


import { Colors } from '../../styles'

const AddContactsView = ({ navigation }) => {
  const [contacts, setContacts] = useContext(ContactsContext);

  const [enteredName, setEnteredName] = useState('');
  const [enteredNumber, setEnteredNumber] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Add Contacts Page
          </Text>
          <TextInput placeholder="Name:" value={enteredName} onChangeText={text => setEnteredName(text)} style={{ height: 40, margin: 10, borderColor: Colors.purple, borderWidth: 3, borderRadius: 3, width: "90%" }}></TextInput>
          <TextInput placeholder="Number:" value={enteredNumber} onChangeText={text => setEnteredNumber(text)} style={{ height: 40, margin: 10, borderColor: Colors.purple, borderWidth: 3, borderRadius: 3, width: "90%" }}></TextInput>
          <TextInput placeholder="Email:" value={enteredEmail} onChangeText={text => setEnteredEmail(text)} style={{ height: 40, margin: 10, borderColor: Colors.purple, borderWidth: 3, borderRadius: 3, width: "90%" }}></TextInput>
          <TouchableOpacity
            style={{
              marginTop: 40,
              backgroundColor: Colors.blue,
              borderRadius: 5,
              padding: 10
            }}
            onPress={() => {
              setContacts([...contacts, { key: enteredName, number: enteredNumber, email: enteredEmail }]);
              navigation.navigate('Home')
            }}
            underlayColor='#fff'>
            <Text style={{
              fontSize: 25,
            }}>Add Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddContactsView;