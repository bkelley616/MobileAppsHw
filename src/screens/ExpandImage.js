import React, {useState, useEffect} from 'react';
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

const ExpandImageView = ({route, navigation}) => {
  const {url} = route.params; 
  return (
    <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'  }}><Image source = {{uri: url}}
    style = {{ width: 350, height: 350 , resizeMode: 'contain'}}
    /></View>
  );
};

export default ExpandImageView;