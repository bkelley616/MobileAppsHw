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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  questionText: {
    fontSize: 24,
    textAlign: 'center',
    margin: 20,
  },
  trueButton: {
    backgroundColor: Colors.green,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: 50,
    width: 150,
  },
  falseButton: {
    backgroundColor: Colors.red,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: 50,
    width: 150,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
  },
  actionButton: {
    backgroundColor: Colors.purple,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 50,
    width: 100,
    margin: 10
  },
  actionText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checkText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
});

const HomeView = ({navigation}) => {

  const [questions, setQuestions] = useState([{title: 'Canberra is the capital of Australia.', answer: true}, {title: 'The Pacific Ocean is larger than the Atlantic Ocean.', answer: true}, 
  {title: 'The Suez Canal connects the Red Sea and the Indian Ocean.', answer: false}, {title: 'The source of the Nile River is in Egypt.', answer: false},
  {title: 'The source of the Nile River is in Egypt.', answer: true}, {title: 'Lake Baikal is the world\'s oldest and deepest freshwater lake.', answer: true}]);
  const [index, setIndex] = useState(0);
  const [checkAnswer, setCheckAnswer] = useState(0);
  const [backCount, setBackCount] = useState(0);

  const selectFalse = () => {
    questions[index].answer === false ? setCheckAnswer(1) : setCheckAnswer(-1)
  };
  const selectTrue = () => {
    questions[index].answer === true ? setCheckAnswer(1) : setCheckAnswer(-1)
  };
  const back = () => {
    setCheckAnswer(0)
    setBackCount(1)
    setIndex(index - 1)
  };

  const next = () => {
    setCheckAnswer(0)
    setBackCount(0)
    setIndex(index + 1)
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.question}>
        <Text style={styles.questionText}>
          {questions[index].title}
          {'\n\n'}
        <Text style={styles.checkText}>{ checkAnswer === 1 ? 'Correct! :)' : checkAnswer === -1 ? 'Incorrect! :(' : null}</Text>
        </Text>
      </TouchableOpacity>
      <View style={{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center',
        margin: 16
      }}>
      <TouchableOpacity style={styles.falseButton} onPress={selectFalse}>
        <Text style={styles.actionText}>
          False
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.trueButton} onPress={selectTrue}>
        <Text style={styles.actionText}>
          True
        </Text>
      </TouchableOpacity>
      </View>
      <View style={{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center',
        margin: 16
      }}>
      <View style={index - 1 < 0 || backCount > 0  ? {opacity: 0.5} :{opacity: 1.0}}>
      <TouchableOpacity style={styles.actionButton} onPress={back} disabled={index - 1 < 0 || backCount > 0}>
        <Text style={styles.actionText}>
        {'<<'} Back
        </Text>
      </TouchableOpacity>
      </View>
      <View style={index + 1 > questions.length - 1 ? {opacity: 0.5} :{opacity: 1.0}}>
      <TouchableOpacity style={styles.actionButton} onPress={next} disabled={index + 1 > questions.length - 1}>
        <Text style={styles.actionText}>
          Next {'>>'}
        </Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default HomeView;
