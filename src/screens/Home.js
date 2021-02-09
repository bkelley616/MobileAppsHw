import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Button,
} from 'react-native';

import {Colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 10,
  },
  smallImage: {
    marginBottom: 25,
    width: 75,
    height: 75,
  },
  largeImage: {
    width: 250,
    height: 250,
  },
});

const HomeView = ({navigation}) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#D8DEE9',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingTop: 25,
          }}>
          <TouchableOpacity onPress={() => setImageIndex(1)}>
            <Image
              source={require('../assets/images/butterfly.jpg')}
              style={styles.smallImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setImageIndex(2)}>
            <Image
              source={require('../assets/images/windows.jpg')}
              style={styles.smallImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setImageIndex(3)}>
            <Image
              source={require('../assets/images/android.jpg')}
              style={styles.smallImage}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 3,
          backgroundColor: '#E5E9F0',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {imageIndex === 1 && (
          <Image
            source={require('../assets/images/butterfly.jpg')}
            style={styles.largeImage}
          />
        )}

        {imageIndex === 2 && (
          <Image
            source={require('../assets/images/windows.jpg')}
            style={styles.largeImage}
          />
        )}

        {imageIndex === 3 && (
          <Image
            source={require('../assets/images/android.jpg')}
            style={styles.largeImage}
          />
        )}
      </View>
    </View>
  );
};

export default HomeView;
