// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to delete the user

import React, {useState} from 'react';
import {
  Text,
  View,
  Alert,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import {Colors} from '../../styles';

var db = openDatabase({name: 'UserDatabase.db'});

const DeleteOneRecordView = ({navigation}) => {
  let [inputUserId, setInputUserId] = useState('');

  let deleteUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  table_user where user_id=?',
        [inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'Contact deleted successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Home'),
                },
              ],
              {cancelable: false},
            );
          } else {
            alert('Please insert a valid Contact Id');
          }
        },
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <TextInput
            placeholder="Enter Contact Id"
            onChangeText={(inputUserId) => setInputUserId(inputUserId)}
            style={{padding: 10}}
          />

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.red,
                margin: 32,
                padding: 8,
                fontSize: 20,
                alignItems: 'center',
                borderRadius: 5,
                width: '70%',
              }}
              onPress={deleteUser}>
              <Text style={{}}>Delete Contact</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DeleteOneRecordView;
