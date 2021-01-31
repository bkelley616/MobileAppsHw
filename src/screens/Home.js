import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

import {Colors} from '../../styles';

const styles = StyleSheet.create({
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "37%",
    height: '100%',
    flex: 1,
    backgroundColor: Colors.blue,
    borderRadius: 5,
    margin: 5,
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "37%",
    height: '100%',
    flex: 2,
    backgroundColor: Colors.blue,
    borderRadius: 5,
    margin: 5,
    marginLeft: "30%"
  },
  button3: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "37%",
    height: '100%',
    flex: 3,
    backgroundColor: Colors.blue,
    borderRadius: 5,
    margin: 5,
    marginLeft: "60%"

  },
  
});

const HomeView = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <TouchableOpacity style={styles.button1} onPress={() => {}}>
          <Text >Button</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => {}}>
          <Text >Button</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={() => {}}>
          <Text >Button</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
