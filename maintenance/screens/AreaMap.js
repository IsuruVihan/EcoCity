import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from "react-native";
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import AllHub from '../assets/images/mobile-all-hubs-resized.png';
import AssignedHub from '../assets/images/mobile-assigned-hubs-resized.png';
import MC from "../assets/images/MC_resized.png";

import {API_TOKEN} from "@env";
import Geolocation from "@react-native-community/geolocation";
import {Responsive} from "../helpers/Responsive";

const MC_LOCATION = {latitude: 6.915770, longitude: 79.863721,}
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const AreaMap = () => {
  const [hubLocations, setHubLocations] = useState([{
    latitude: 6.915829,
    longitude: 79.859268,
    assigned: true,
  }, {
    latitude: 6.916829,
    longitude: 79.858268,
    assigned: false,
  }, {
    latitude: 6.917829,
    longitude: 79.857268,
    assigned: false,
  },]);
  const [routingLocation, setRoutingLocation] = useState(MC_LOCATION);
  const [myLocation, setMyLocation] = useState(MC_LOCATION);

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
    <View style={styles.areaMap}>
      <View style={styles.areaMap.sec1}>
        <Text style={styles.areaMap.sec1.txt}>Garbage Hubs</Text>
      </View>
      <View style={styles.areaMap.sec2}>
        <View style={styles.areaMap.sec2.legend}>
          <Image style={styles.areaMap.sec2.legend.img} source={AllHub}/>
          <Text style={styles.areaMap.sec2.legend.txt}>Other garbage hubs</Text>
        </View>
        <View style={styles.areaMap.sec2.legend}>
          <Image style={styles.areaMap.sec2.legend.img} source={AssignedHub}/>
          <Text style={styles.areaMap.sec2.legend.txt}>Assigned garbage hubs</Text>
        </View>
      </View>
      <View style={styles.areaMap.sec3}>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={{
            latitude: 6.915770,
            longitude: 79.863721,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
          minZoomLevel={12}
          maxZoomLevel={20}
          style={styles.areaMap.sec3.map}
        >
          {hubLocations.map((hub, idx) => {
            if (hub.assigned)
              return <Marker
                key={idx}
                onPress={() => setRoutingLocation({latitude: hub.latitude, longitude: hub.longitude})}
                coordinate={{latitude: hub.latitude, longitude: hub.longitude}}
                image={AssignedHub}
              >
                <Callout style={{backgroundColor: 'red'}}>
                  <View>
                    <Text>Hub ID:</Text>
                    <Text>172</Text>
                  </View>
                </Callout>
              </Marker>;
            return <Marker
              key={idx}
              onPress={() => setRoutingLocation({latitude: hub.latitude, longitude: hub.longitude})}
              coordinate={{latitude: hub.latitude, longitude: hub.longitude}}
              image={AllHub}
            />;
          })}
          <Marker coordinate={MC_LOCATION} image={MC}/>
          <MapViewDirections
            origin={myLocation}
            destination={routingLocation}
            apikey={API_TOKEN}
            strokeWidth={4}
            strokeColor="#228693"
            mode={"WALKING"}
          />
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  areaMap: {
    // borderColor: 'red',
    // borderWidth: 2,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    sec1: {
      // borderColor: 'blue',
      // borderWidth: 2,
      width: '100%',
      flex: 0.7,
      txt: {
        color: '#042434',
        textAlignVertical: 'center',
        fontSize: 25,
        fontWeight: '600',
        height: '100%',
      },
    },
    sec2: {
      // borderColor: 'blue',
      // borderWidth: 2,
      width: '100%',
      flex: 0.7,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      legend: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        img: {
          width: 25,
          height: 25,
        },
        txt: {
          color: '#042434',
          height: '100%',
          textAlignVertical: 'center',
        },
      },
    },
    sec3: {
      // borderColor: 'blue',
      // borderWidth: 2,
      width: '100%',
      flex: 10,
      map: {
        width: '100%',
        height: '100%',
      },
    },
  },
});

export default AreaMap;
