import React, {useState, useEffect} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";
import Geolocation from '@react-native-community/geolocation';

import ViewComplaint from '../../assets/images/view-complaint.png';
import Hub from '../../assets/images/mobile-unavailable-hubs-resized.png';
import MC from '../../assets/images/MC_resized.png';

import {Responsive} from "../../helpers/Responsive";
import {API_TOKEN} from "@env";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const MC_LOCATION = {latitude: 6.915770, longitude: 79.863721,}

const OngoingScreen = () => {
  const [hubLocation, setHubLocation] = useState({
    latitude: 6.915829,
    longitude: 79.859268,
  });
  const [myLocation, setMyLocation] = useState({});

  useEffect(() => {
    Geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      setMyLocation({
        latitude: crd.latitude,
        longitude: crd.longitude,
      });
    }, (err) => {
      console.log(err);
    });
  }, []);

  return (
    <View style={styles.ongoingScreen}>
      <View style={styles.ongoingScreen.sec1}>
        <Image source={ViewComplaint} style={styles.ongoingScreen.sec1.leftSec}/>
        <View style={styles.ongoingScreen.sec1.rightSec}>
          <View style={styles.ongoingScreen.sec1.rightSec.txtContainer}>
            <Text style={styles.ongoingScreen.sec1.rightSec.txtContainer.label}>Job ID: </Text>
            <Text style={styles.ongoingScreen.sec1.rightSec.txtContainer.value}>12</Text>
          </View>
          <View style={styles.ongoingScreen.sec1.rightSec.txtContainer}>
            <Text style={styles.ongoingScreen.sec1.rightSec.txtContainer.label}>Hub ID: </Text>
            <Text style={styles.ongoingScreen.sec1.rightSec.txtContainer.value}>CMB-7-133</Text>
          </View>
          <View style={styles.ongoingScreen.sec1.rightSec.txtContainer}>
            <Text style={styles.ongoingScreen.sec1.rightSec.txtContainer.label}>Description: </Text>
            <Text style={styles.ongoingScreen.sec1.rightSec.txtContainer.value}>Lid doesn't open</Text>
          </View>
        </View>
      </View>
      <View style={styles.ongoingScreen.sec2}>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={{
            latitude: 6.915770,
            longitude: 79.863721,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
          minZoomLevel={1}
          maxZoomLevel={20}
          style={styles.ongoingScreen.sec2.map}
        >
          <Marker coordinate={MC_LOCATION} image={MC}/>
          <Marker coordinate={hubLocation} image={Hub}/>
          {/*<MapViewDirections*/}
          {/*  origin={MC_LOCATION}*/}
          {/*  destination={hubLocation}*/}
          {/*  apikey={'AIzaSyAyeY6NS2TUD_y-4sqIzqfmcI5K9IyfNqw'}*/}
          {/*  strokeWidth={4}*/}
          {/*  strokeColor="#228693"*/}
          {/*  mode={"WALKING"}*/}
          {/*/>*/}
          <MapViewDirections
            origin={myLocation}
            destination={hubLocation}
            apikey={API_TOKEN}
            strokeWidth={4}
            strokeColor="#228693"
            mode={"WALKING"}
          />
        </MapView>
      </View>
      <View style={styles.ongoingScreen.sec3}>
        <TouchableOpacity
          style={styles.ongoingScreen.sec3.btn}
          // onPress={() => setViewJobModalOpen(false)}
        >
          <Text style={styles.ongoingScreen.sec3.btn.txt}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ongoingScreen.sec3.btn2}
          // onPress={() => startJob(viewedJob.id)}
        >
          <Text style={styles.ongoingScreen.sec3.btn2.txt}>Complete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ongoingScreen: {
    // borderWidth: 2,
    // borderColor: 'red',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    sec1: {
      // borderWidth: 2,
      // borderColor: 'blue',
      flex: 2,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      leftSec: {
        // borderWidth: 2,
        // borderColor: 'black',
        width: Responsive(18, WIDTH),
        height: Responsive(18, WIDTH),
      },
      rightSec: {
        // borderWidth: 2,
        // borderColor: 'black',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        txtContainer: {
          display: 'flex',
          flexDirection: 'row',
          label: {
            fontWeight: '700',
            color: '#042434',
          },
          value: {
            color: '#042434',
          },
        },
      },
    },
    sec2: {
      // borderWidth: 2,
      // borderColor: 'green',
      flex: 9,
      map: {
        width: '100%',
        height: '100%',
      },
    },
    sec3: {
      // borderWidth: 2,
      // borderColor: 'orange',
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      btn: {
        paddingVertical: 3,
        paddingHorizontal: 6,
        borderWidth: 2,
        borderColor: '#E9E8EF',
        borderRadius: 5,
        backgroundColor: 'white',
        marginHorizontal: 10,
        width: Responsive(25, WIDTH),
        height: Responsive(10, WIDTH),
        txt: {
          textAlign: 'center',
          textAlignVertical: 'center',
          color: '#228693',
          height: '100%',
          fontWeight: '600',
        },
      },
      btn2: {
        paddingVertical: 3,
        paddingHorizontal: 6,
        borderRadius: 5,
        backgroundColor: '#228693',
        marginHorizontal: 10,
        width: Responsive(25, WIDTH),
        height: Responsive(10, WIDTH),
        txt: {
          textAlign: 'center',
          textAlignVertical: 'center',
          color: 'white',
          height: '100%',
          fontWeight: '600',
        },
      },
    },
  },
});

export default OngoingScreen;
