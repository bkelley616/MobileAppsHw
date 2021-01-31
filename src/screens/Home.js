import React, { useContext }  from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { ContactsContext } from "../Context";


import { Colors } from '../../styles'



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 22
  },
  item: {
    padding: 20,
    fontSize: 25,
    alignSelf: 'center',
    width: '100%',
  },
})

const HomeView = ({ navigation }) => {

  const [contacts] = useContext(ContactsContext);



  let contactList = [
    {key: 'Dan', number: "(111) 111-1111", email: "example@test.com"},
    {key: 'Dominic', number: "(222) 222-2222", email: "example@test.com"},
    {key: 'Jackson', number: "(333) 333-5555", email: "example@test.com"},
    {key: 'James', number: "(555) 555-5555", email: "example@test.com"},
    ]
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
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
              width: '100%'
            }}
            data={contacts}
            renderItem={({ item }) => <Text style={styles.item}>{item.key}:{"\n\t"}{item.number}{"\n\t"}{item.email}</Text>} />

          <TouchableOpacity
            style={{
              marginTop: 40,
              backgroundColor: Colors.blue,
              borderRadius: 5,
              padding: 10
            }}
            onPress={() => {
              
              navigation.navigate('AddContacts')}}
            underlayColor='#fff'>
            <Text style={{
              fontSize: 25,
            }}>Add Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeView
