import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Alert,
} from 'react-native';

import {Colors} from '../../styles';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: 400,

  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  toggleModeButton: {
    marginTop: 8,
    backgroundColor: Colors.darkBlue,
    padding: 12,
    height: 42,
    width: 100,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.purple,
  },
  toggleModeText: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
  },
  searchButton: {
    margin: 8,
    backgroundColor: Colors.darkBlue,
    padding: 16,
    height: 48,
    width: 70,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.purple,
  },
  searchText: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

Geocoder.init('AIzaSyD9mrcLUNoo95K_UT2Rgjy-T6oqQH57bME');

const HomeView = ({navigation}) => {
  const [address, onChangeText] = useState('');
  const [mapType, changeMapType] = useState('standard');
  const [location, setLocation] = useState({
    latitude: 41.5025072,
    longitude: -81.6746268,
    latitudeDelta: 1.015,
    longitudeDelta: 1.0121,
  });
  const [markers, setMarkers] = useState([]);

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          ref={(mapView) => {
            _mapView = mapView;
          }}
          style={styles.map}
          mapType={mapType}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: location.latitudeDelta,
            longitudeDelta: location.longitudeDelta,
          }}
          onPress={(e) => {
            setLocation({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            });
            setMarkers([
              ...markers,
              {
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude
              },
            ]);
          }}>
          {markers.map((marker, index) => (
            <Marker key={index} coordinate={marker} />
          ))}
        </MapView>
      </View>

      <View style={{marginTop: 40}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              borderColor: 'gray',
              borderWidth: 3,
              borderColor: Colors.purple,
              height: 48,
              width: 300,
              marginLeft: 8,
              borderRadius: 3,
              backgroundColor: Colors.primary
            }}
            onChangeText={(text) => onChangeText(text)}
            value={address}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              Geocoder.from(address)
                .then((json) => {
                  var location = json.results[0].geometry.location;
                  setLocation({
                    latitude: location.lat,
                    longitude: location.lng,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                  });
                })
                .catch((error) => console.warn(error));
            }}>
            <Text style={styles.searchText}>Go!</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 40
          }}>
          <TouchableOpacity
            style={styles.toggleModeButton}
            onPress={() => {
              Geolocation.getCurrentPosition((info) =>
                setLocation({
                  latitude: info.coords.latitude,
                  longitude: info.coords.longitude,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }),  error => Alert.alert('Error', JSON.stringify(error)),
                {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
              );
            }}>
            <Text style={styles.toggleModeText}>Position</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.toggleModeButton}
            onPress={() => changeMapType('standard')}>
            <Text style={styles.toggleModeText}>Map</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.toggleModeButton}
            onPress={() => changeMapType('satellite')}>
            <Text style={styles.toggleModeText}>Satellite</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeView;
