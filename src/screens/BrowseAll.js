import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Button,
  SafeAreaView,
  TextInput,
  FlatList,
  Alert,
  ToastAndroid,
  TouchableOpacityBase
} from 'react-native';

const styles = StyleSheet.create({
  headerText: {
    margin: 16,
    textAlign: 'center',
    fontSize: 32,
    paddingBottom: 16,
  },
  crudButton: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
    backgroundColor: Colors.blue,
    borderRadius: 5,
    padding: 8,
    height: 50
  },
  firstCrudText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center'
  },
  crudText: {
    fontSize: 22,
    fontWeight: 'bold',

  },
});

var RNFS = require('react-native-fs');
import RNFetchBlob from 'react-native-fetch-blob'


const test = async () => {
  
  // user has completed product tour_end
  try {
    const uriContent = 'content://com.example.provider.Books/books'

    console.log(await RNFS.stat(uriContent));




   // const uriComponents = uriContent.split('/')
   // const fileNameAndExtension = uriComponents[uriComponents.length - 1]
  //  const destPath = `${RNFS.TemporaryDirectoryPath}/${fileNameAndExtension}`
   // await RNFS.copyFile(uriContent, destPath)




    //const path = RNFS.DownloadDirectoryPath + uriContent
    //console.log(await RNFS.stat(path));
  } catch (error) {
    console.log(error);
  }
};



import {Colors} from '../../styles';

const BrowseAllView = ({navigation}) => {

  test()
  

 
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flex: 4}}>
        <FlatList
        data={{}}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
        </View>
        <View
          style={{
            borderBottomColor: Colors.purple,
            borderBottomWidth:  3,  
          }}
        />
        <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={styles.firstCrudText}>Sort:</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity
            style={styles.crudButton}
            onPress={() => navigation.navigate('BrowseAllView')}>
            <Text style={styles.crudText}>Ascending</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.crudButton}
            onPress={() => navigation.navigate('SearchView')}>
            <Text style={styles.crudText}>Descending</Text>
          </TouchableOpacity>
        </View>
       
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BrowseAllView;
