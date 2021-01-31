import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {Colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 22,
  },
  item: {
    padding: 20,
    fontSize: 25,
    alignSelf: 'center',
    width: '100%',
  },
  inputButton: {
    backgroundColor: Colors.blue,
    borderRadius: 5,
    padding: 10,
    margin: 3,
  },
  inputSpaceButton: {
    backgroundColor: Colors.darkBlue,
    borderRadius: 5,
    padding: 10,
    margin: 5,
    width: '70%',
  },
  inputButtonNumber: {
    backgroundColor: Colors.purple,
    borderRadius: 5,
    padding: 8,
    margin: 2,
  },
  inputButtonDelete: {
    backgroundColor: Colors.red,
    borderRadius: 5,
    padding: 10,
    margin: 5,
    width: '20%',
  },
  keyboardText: {
    fontSize: 25,
    textAlign: 'center',
  },
});

const HomeView = ({navigation}) => {
  const [text, setText] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <Text
          style={{
            fontSize: 25,
            marginBottom: 25,
          }}>
          Notes:
        </Text>
        <ScrollView
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 25,

              marginBottom: 25,
            }}>
            {text}
          </Text>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
          <TouchableOpacity
            style={styles.inputButtonNumber}
            onPress={() => {
              setText(text + '0');
            }}>
            <Text style={styles.keyboardText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButtonNumber}
            onPress={() => {
              setText(text + '1');
            }}>
            <Text style={styles.keyboardText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButtonNumber}
            onPress={() => {
              setText(text + '2');
            }}>
            <Text style={styles.keyboardText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButtonNumber}
            onPress={() => {
              setText(text + '3');
            }}>
            <Text style={styles.keyboardText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButtonNumber}
            onPress={() => {
              setText(text + '4');
            }}>
            <Text style={styles.keyboardText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButtonNumber}
            onPress={() => {
              setText(text + '5');
            }}>
            <Text style={styles.keyboardText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButtonNumber}
            onPress={() => {
              setText(text + '6');
            }}>
            <Text style={styles.keyboardText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButtonNumber}
            onPress={() => {
              setText(text + '7');
            }}>
            <Text style={styles.keyboardText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButtonNumber}
            onPress={() => {
              setText(text + '8');
            }}>
            <Text style={styles.keyboardText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButtonNumber}
            onPress={() => {
              setText(text + '9');
            }}>
            <Text style={styles.keyboardText}>9</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            //flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'a');
            }}>
            <Text style={styles.keyboardText}>a</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'b');
            }}>
            <Text style={styles.keyboardText}>b</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'c');
            }}>
            <Text style={styles.keyboardText}>c</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'd');
            }}>
            <Text style={styles.keyboardText}>d</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'e');
            }}>
            <Text style={styles.keyboardText}>e</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'f');
            }}>
            <Text style={styles.keyboardText}>f</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'g');
            }}>
            <Text style={styles.keyboardText}>g</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'h');
            }}>
            <Text style={styles.keyboardText}>h</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'i');
            }}>
            <Text style={styles.keyboardText}>i</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'j');
            }}>
            <Text style={styles.keyboardText}>j</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'k');
            }}>
            <Text style={styles.keyboardText}>k</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'l');
            }}>
            <Text style={styles.keyboardText}>l</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'm');
            }}>
            <Text style={styles.keyboardText}>m</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'n');
            }}>
            <Text style={styles.keyboardText}>n</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'o');
            }}>
            <Text style={styles.keyboardText}>o</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'p');
            }}>
            <Text style={styles.keyboardText}>p</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'q');
            }}>
            <Text style={styles.keyboardText}>q</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'r');
            }}>
            <Text style={styles.keyboardText}>r</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 's');
            }}>
            <Text style={styles.keyboardText}>s</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 't');
            }}>
            <Text style={styles.keyboardText}>t</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'u');
            }}>
            <Text style={styles.keyboardText}>u</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'v');
            }}>
            <Text style={styles.keyboardText}>v</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'w');
            }}>
            <Text style={styles.keyboardText}>w</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'x');
            }}>
            <Text style={styles.keyboardText}>x</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'y');
            }}>
            <Text style={styles.keyboardText}>y</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => {
              setText(text + 'z');
            }}>
            <Text style={styles.keyboardText}>z</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
          <TouchableOpacity
            style={styles.inputSpaceButton}
            onPress={() => {
              setText(text + ' ');
            }}>
            <Text style={styles.keyboardText}>Space</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButtonDelete}
            onPress={() => {
              setText(text.slice(0, -1));
            }}>
            <Text style={styles.keyboardText}>Del</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
