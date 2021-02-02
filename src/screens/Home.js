import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {Colors} from '../../styles';

const styles = StyleSheet.create({
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 100,
    backgroundColor: Colors.red,
    borderRadius: 5,
    margin: 2.5,
  },
  saveButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 100,
    backgroundColor: Colors.green,
    borderRadius: 5,
    margin: 2.5,
  },
  label: {
    margin: 8,
  },
  inputContainer: {
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLabel: {},
  inputText: {
    borderBottomColor: Colors.blue,
    borderBottomWidth: 1,
    width: "100%",
  },
});

const HomeView = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <SafeAreaView>
      <View>
      <Text style={styles.inputLabel}>Comments</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            multiline
            numberOfLines={8}
            editable
            maxLength={40}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => {}}>
          <Text style={{fontWeight: 'bold',}}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={() => {}}>
          <Text style={{fontWeight: 'bold'}}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
