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
    margin: 28,
    alignItems: 'center',
    backgroundColor: Colors.blue,
    borderRadius: 5,
    width: '80%',
    padding: 8,
  },
  firstCrudText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 16
  },
  crudText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});



import {Colors} from '../../styles';

const HomeView = ({navigation}) => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Text style={styles.headerText}>Books Search</Text>
        </View>
        <View
          style={{
            borderBottomColor: Colors.purple,
            borderBottomWidth:  3,
            
          }}
        />
        <View style={{flex: 8, alignItems: 'center'}}>
        <Text style={styles.firstCrudText}>Would you like to</Text>
          <TouchableOpacity
            style={styles.crudButton}
            onPress={() => navigation.navigate('BrowseAllScreen')}>
            <Text style={styles.crudText}>Browse All</Text>
          </TouchableOpacity>
          <Text style={styles.crudText}>Or</Text>
          <TouchableOpacity
            style={styles.crudButton}
            onPress={() => navigation.navigate('SearchView')}>
            <Text style={styles.crudText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
