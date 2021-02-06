import React, {useContext} from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import {ContactsContext} from '../Context';

import {Colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 10,
  },
  item: {
    paddingLeft: 20,
    paddingTop: 15,
    fontSize: 25,
    alignSelf: 'center',
    width: '100%',
  },
});

const HomeView = ({navigation}) => {
  const [contacts] = useContext(ContactsContext);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 25,
            }}>
            Contact List:
          </Text>

          <FlatList
            style={{
              borderWidth: 2,
              borderRadius: 5,
              borderColor: Colors.purple,
              width: '100%',
            }}
            data={contacts}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ContactDetails', {
                    enteredName: item.key,
                    enteredNumber: item.number,
                    enteredEmail: item.email,
                  });
                }}>
                <Text style={styles.item}>{item.key}</Text>
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity
            style={{
              marginTop: 40,
              backgroundColor: Colors.blue,
              borderRadius: 5,
              padding: 10,
            }}
            onPress={() => {
              navigation.navigate('AddContacts');
            }}
            underlayColor="#fff">
            <Text
              style={{
                fontSize: 25,
              }}>
              Add Contact
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
