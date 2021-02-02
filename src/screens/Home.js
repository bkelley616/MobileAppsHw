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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 100,
    backgroundColor: Colors.blue,
    borderRadius: 5,
    margin: 2.5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    alignSelf: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  inputContainer: {
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',

  },
  inputLabel: {
  },
  inputText: {
    borderBottomColor: Colors.blue,
    borderBottomWidth: 1,
    width: 200,
    marginLeft: 30,
  },
});

const HomeView = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <SafeAreaView>
      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>User Name:</Text>
          <TextInput style={styles.inputText} editable maxLength={40} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password:</Text>
          <TextInput style={styles.inputText} editable maxLength={40} />
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            tintColors={{true: Colors.green, false: Colors.darkBlue}}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Remember Password</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={{fontWeight: 'bold'}}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
