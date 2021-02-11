import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Button,
  SafeAreaView,
  TextInput,
  FlatList,
  Alert,
  ToastAndroid,
  TouchableOpacityBase
} from 'react-native';

const styles = StyleSheet.create({
  headerText: {
    margin: 16,
    textAlign: 'center',
    fontSize: 32,
    paddingBottom: 16,
  },
  crudButton: {
    margin: 32,
    alignItems: 'center',
    backgroundColor: Colors.purple,
    borderRadius: 5,
    width: '70%',
    padding: 8,
  },
  crudText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});

import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});

import {Colors} from '../../styles';

const HomeView = ({navigation}) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              [],
            );
          }
        },
      );
    });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Text style={styles.headerText}>SQLite Contact Database</Text>
        </View>
        <View
          style={{
            borderBottomColor: Colors.blue,
            borderBottomWidth:  3,
            
          }}
        />
        <View style={{flex: 8, alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.crudButton}
            onPress={() => navigation.navigate('InsertView')}>
            <Text style={styles.crudText}>Insert</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.crudButton}
            onPress={() => navigation.navigate('ReadAllRecordsView')}>
            <Text style={styles.crudText}>Read All Records</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.crudButton}
            onPress={() => navigation.navigate('ReadOneRecordView')}>
            <Text style={styles.crudText}>Read One Record</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.crudButton}
            onPress={() => navigation.navigate('UpdateOneRecordView')}>
            <Text style={styles.crudText}>Update One Record</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.crudButton}
            onPress={() => navigation.navigate('DeleteOneRecordView')}>
            <Text style={styles.crudText}>Delete One Record</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
