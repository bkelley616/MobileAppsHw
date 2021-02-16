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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});

function extractImages(html) {
  var imageUrls = [];
  var re = /<img [^>]+? src="?([^"\s]+)/g;
  html.replace(re, function (m, p1) {
    imageUrls.push(p1);
  });
  return imageUrls;
}

const HomeView = ({navigation}) => {
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [url, onChangeText] = React.useState('');

  if (!loaded && url) {
    fetch(url)
      .then((resp) => {
        return resp.text();
      }).catch((e) => {
        console.log(e)
        setImages([])
      })
      .then((html) => {
        console.log('running')
        setImages(extractImages(html));
      })
      .catch((e) => {
        console.log(e)
        setImages([])
      });
    setLoaded(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: 24,
          marginBottom: 32,
          borderBottomWidth: 4,
          padding: 8,
          borderColor: Colors.purple,
        }}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            width: '100%',
          }}
          onChangeText={(text) => onChangeText(text)}
          value={url}
        />
        <TouchableOpacity
          onPress={() => {
            setLoaded(false);
          }}
          style={{
            backgroundColor: Colors.green,
            borderRadius: 5,
            width: '80%',
            alignItems: 'center',
            margin: 8,
          }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
            }}>
            Scrape For Images
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={images}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              margin: 8,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ExpandImage', {url: item});
              }}>
              <Image style={styles.imageThumbnail} source={{uri: item}} />
            </TouchableOpacity>
          </View>
        )}
        numColumns={3}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};

export default HomeView;
