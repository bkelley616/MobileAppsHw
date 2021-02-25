import React, {useState, useEffect, useRef} from 'react';
import {Surface, Shape} from '@react-native-community/art';

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
  Animated,
} from 'react-native';

import {Colors} from '../../styles';
import * as Progress from 'react-native-progress';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  progressContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 100,
  },
  startButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 200,
    backgroundColor: Colors.green,
    borderRadius: 10,
    margin: 15,
  },
  pauseButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 200,
    backgroundColor: Colors.red,
    borderRadius: 10,
    margin: 15,
  },
  restartButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 200,
    backgroundColor: Colors.purple,
    borderRadius: 10,
    margin: 15,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

//helper function to allow progress state to update correctly
function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

const FadeOutView = (props) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

const HomeView = ({navigation}) => {
  const [progress, setProgress] = useState(0.0);
  const [running, setRunning] = useState(false);

  useInterval(() => {
    if (running && progress < 100) {
      setProgress(progress + Math.random() * 0.01);
    }
  }, 100);

  const startService = () => {
    setRunning(true);
  };

  const pauseService = () => {
    setRunning(false);
  };

  const restartService = () => {
    setRunning(false);
    setProgress(0.0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={running ? {opacity: 0.5} : {opacity: 1.0}}>
          <TouchableOpacity
            style={styles.startButton}
            onPress={startService}
            disabled={running}>
            <Text style={styles.buttonText}>Start Service</Text>
          </TouchableOpacity>
        </View>
        <View style={!running ? {opacity: 0.5} : {opacity: 1.0}}>
          <TouchableOpacity
            style={styles.pauseButton}
            onPress={pauseService}
            disabled={!running}
            activeOpacity={0}>
            <Text style={styles.buttonText}>Pause Service</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.restartButton} onPress={restartService}>
          <Text style={styles.buttonText}>Restart Service</Text>
        </TouchableOpacity>
      </View>
      {running ? (
        <FadeInView style={styles.progressContainer}>
          <Progress.Bar progress={progress} width={350} height={15} />
        </FadeInView>
      ) : (
        <FadeOutView style={styles.progressContainer}>
          <Progress.Bar progress={progress} width={350} height={15} />
        </FadeOutView>
      )}
    </View>
  );
};

export default HomeView;
