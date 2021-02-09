import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  FlatList,
} from 'react-native';

import {Colors} from '../../styles';

const HomeView = ({navigation}) => {
  const [linkAddress, setLinkAddress] = useState('');
  const [savedBookmarks, setSavedBookmarks] = useState([]);
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => {
      navigation.navigate('WebView', {
        webAddress: item,
      });
    }}
      style={{
        margin: 8,
        alignItems: 'center',
        padding: 8,
        borderRadius: 5,
        backgroundColor: '#8FBCBB',
      }}>
      <Text style={{fontSize: 20}}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{alignItems: 'center', padding: 16}}>
        <Text style={{fontSize: 32}}>Bookmarks:</Text>
      </View>
      <View
        style={{
          flex: 4,
          flexDirection: 'column',
          borderWidth: 5,
          margin: 8,
          borderRadius: 2,
          borderColor: Colors.purple,
          marginBottom: 16,
        }}>
        <FlatList
          data={savedBookmarks}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={{flex: 1.25, flexDirection: 'column'}}>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={{
              flex: 4,
              alignItems: 'stretch',
              margin: 8,
              borderColor: Colors.blue,
              borderWidth: 3,
              borderRadius: 2,
              fontSize: 20,
            }}
            onChangeText={(text) => setLinkAddress(text)}
            value={linkAddress}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('WebView', {
                webAddress: linkAddress,
              });
            }}
            style={{
              flex: 1,
              backgroundColor: Colors.green,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 8,
              padding: 4,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>submit</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => setSavedBookmarks([...savedBookmarks, linkAddress])}
            style={{
              height: 50,
              backgroundColor: Colors.purple,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 4,
              margin: 8,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Add to Bookmarks!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeView;
