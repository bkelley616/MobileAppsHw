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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 75,
    backgroundColor: Colors.blue,
    borderRadius: 5,
    margin: 2.5,
  },
});

const HomeView = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Text 1</Text>
        <Text>Text 2</Text>
        <Text>Text 3</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text>Button</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text>Button</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text>Button</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
