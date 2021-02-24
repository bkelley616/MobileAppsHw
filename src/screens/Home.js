import React, {useState, useEffect, useRef} from 'react';

import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  View,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import {Colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  
  button: {
    backgroundColor: Colors.blue,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: 50,
    width: '90%',
    borderRadius: 6,
    margin: 20
  },
  
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
  },
  actionButton: {
    backgroundColor: Colors.purple,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 50,
    width: 100,
    margin: 10
  },

});
const message = (name) => { console.log(`messaging ${name}`)}
const HomeView = ({navigation}) => {
  const [contacts, setContacts] = useState([{name: 'Person 1'}, {name: 'Person 2'}, {name: 'Person 3'}, {name: 'Person 4'}, {name: 'Person 5'}, {name: 'Person 6'}, {name: 'Person 7'}, {name: 'Person 8'}]);
  const addContact = () => { setContacts([...contacts, {name: `Person ${contacts.length + 1}`}])}
  const renderItem = ({item}) => (
    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignSelf:'center', backgroundColor: '#e1e2e2', margin: 5, width: 350, padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>{item.name}</Text>
      <TouchableOpacity onPress={() => message(item.name)}
      style={{
        margin: 8,
        alignItems: 'center',
        padding: 8,
        borderRadius: 5,
        backgroundColor: Colors.purple,

      }}>
      <Text style={{fontSize: 20}}>Message</Text>
    </TouchableOpacity>
    </View>
    
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={addContact}>
        <Text style={styles.buttonText}>Add More Contacts</Text>
      </TouchableOpacity>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        style={{
          marginBottom: 32,
        }}
      />
    </View>
  );
};

export default HomeView;
