import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
} from 'react-native';


import {Colors} from '../../styles';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 100,
    backgroundColor: Colors.blue,
    borderRadius: 5,
    margin: 5,
  },
  bigButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: '98%',
    backgroundColor: Colors.purple,
    borderRadius: 5,
    margin: 5,
  },
});

const HomeView = ({navigation}) => {

  return (
      
      <View
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text>Top Left</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text>Top Right</Text>
          </TouchableOpacity>
        </View>

        <View style={{display: 'flex', flexDirection: 'row'}}>
          <TouchableOpacity style={styles.bigButton} onPress={() => {}}>
            <Text>Middle</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text>Bottom Left</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text>Bottom Right</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default HomeView;
