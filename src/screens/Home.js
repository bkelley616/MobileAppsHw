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
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';

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
    width: 150,
    borderRadius: 6,
    margin: 10,
  },

  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  actionButton: {
    backgroundColor: Colors.purple,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 50,
    width: 100,
    margin: 10,
  },
});

const HomeView = ({navigation}) => {
  const sizes = [5, 10];
  const [size, setSize] = useState(sizes[0]);
  const toggleSize = () => {
    size === sizes[0] ? setSize(sizes[1]) : setSize(sizes[0]);
  };
  const colors = ['black', 'red', 'blue', 'green'];
  const [colorIndex, setColorIndex] = useState(0);
  const changeColor = () => {
    colorIndex + 1 > colors.length - 1 ? setColorIndex(0) : setColorIndex(colorIndex + 1)
  };

  return (
    <View style={styles.container}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <TouchableOpacity style={styles.button} onPress={toggleSize}>
          <Text style={styles.buttonText}>Size</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={changeColor}>
          <Text style={styles.buttonText}>Color</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#e1e2e2'}}>
        <SketchCanvas
          style={{flex: 1}}
          strokeColor={colors[colorIndex]}
          strokeWidth={size}
        />
      </View>
    </View>
  );
};

export default HomeView;
