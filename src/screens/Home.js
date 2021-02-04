import React, {useContext, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import {HeaderButtonContext} from '../Context';

import {Colors} from '../../styles';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 120,
    backgroundColor: Colors.primary,
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
  menuButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 40,
    backgroundColor: Colors.purple,
    borderRadius: 5,
    margin: 10,
  },
  buttonCLR: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 40,
    backgroundColor: Colors.red,
    borderRadius: 5,
    margin: 12,
  },
  hiddenText:{
    fontSize: 20,
  }
});

const HomeView = ({navigation}) => {
  const [hiddenLocationObject, setHiddenLocationSwitch] = useContext(
    HeaderButtonContext,
  );
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => {
              setHiddenLocationSwitch({...hiddenLocationObject, location1: 1});
            }}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => {
              setHiddenLocationSwitch({...hiddenLocationObject, location2: 1});
            }}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => {
              setHiddenLocationSwitch({...hiddenLocationObject, location3: 1});
            }}>
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => {
              setHiddenLocationSwitch({...hiddenLocationObject, location4: 1});
            }}>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCLR}
            onPress={() => {
              setHiddenLocationSwitch({
                location1: 0,
                location2: 0,
                location3: 0,
                location4: 0,
              });
            }}>
            <Text>CLR</Text>
          </TouchableOpacity>
        </View>
      ),
    });
  });

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
          {hiddenLocationObject.location1 ? <Text style={styles.hiddenText}>Top Left</Text> : null}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          {hiddenLocationObject.location2 ? <Text style={styles.hiddenText}>Top Right</Text> : null}
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          {hiddenLocationObject.location3 ? <Text style={styles.hiddenText}>Bottom Left</Text> : null}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          {hiddenLocationObject.location4 ? <Text style={styles.hiddenText}>Bottom Right</Text> : null}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeView;
