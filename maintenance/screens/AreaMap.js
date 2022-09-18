import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from "react-native";
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Geolocation from "@react-native-community/geolocation";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";

import AllHub from '../assets/images/mobile-all-hubs-resized.png';
import AssignedHub from '../assets/images/mobile-assigned-hubs-resized.png';
import MC from "../assets/images/MC_resized.png";

import {API_TOKEN} from "@env";
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

  const CalloutComponent1 = () => {
    return (
      <Callout style={{width: Responsive(50, WIDTH), borderRadius: 10, padding: 0,}}>
        <View style={{display: 'flex', flexDirection: 'column', paddingHorizontal: 5, backgroundColor: 'white',}}>
          <View style={{display: 'flex', flexDirection: 'row', marginVertical: 3,}}>
            <Text style={{flex: 4, color: '#042434', fontWeight: '600',}}>Hub Id: </Text>
            <Text style={{flex: 8, textAlign: 'justify'}}>2852</Text>
          </View>
          <Text style={{color: '#042434', fontWeight: '600', marginVertical: 3,}}>Bin details</Text>
          <View style={{display: 'flex', flexDirection: 'row', marginVertical: 4,}}>
            <View style={{flex: 4, display: 'flex', flexDirection: 'column', padding: 5, backgroundColor: '#E1F0FF', borderRadius: 5, marginRight: 10,}}>
              <Text style={{color: '#008BD1', flex: 2, textAlign: 'center', textAlignVertical: 'center',}}>
                <FontAwesomeIcons name={'trash-o'} size={20}/>
              </Text>
              <Text style={{color: '#008BD1', flex: 1, textAlign: 'center', textAlignVertical: 'center',}}>Glass</Text>
            </View>
            <View style={{flex: 8, display: 'flex', flexDirection: 'column',}}>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Filled: </Text>
                <Text style={{flex: 4}}>45%</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Humidity: </Text>
                <Text style={{flex: 4}}>4%</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Temp: </Text>
                <Text style={{flex: 4}}>28 C</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Methane: </Text>
                <Text style={{flex: 4}}>55%</Text>
              </View>
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', marginVertical: 4,}}>
            <View style={{flex: 4, display: 'flex', flexDirection: 'column', padding: 5, backgroundColor: '#FFF6E9', borderRadius: 5, marginRight: 10,}}>
              <Text style={{color: '#FF9900', flex: 2, textAlign: 'center', textAlignVertical: 'center',}}>
                <FontAwesomeIcons name={'trash-o'} size={20}/>
              </Text>
              <Text style={{color: '#FF9900', flex: 1, textAlign: 'center', textAlignVertical: 'center',}}>Paper</Text>
            </View>
            <View style={{flex: 8, display: 'flex', flexDirection: 'column',}}>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Filled: </Text>
                <Text style={{flex: 4}}>45%</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Humidity: </Text>
                <Text style={{flex: 4}}>4%</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Temp: </Text>
                <Text style={{flex: 4}}>28 C</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Methane: </Text>
                <Text style={{flex: 4}}>55%</Text>
              </View>
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', marginVertical: 4,}}>
            <View style={{flex: 4, display: 'flex', flexDirection: 'column', padding: 5, backgroundColor: '#E0F8E3', borderRadius: 5, marginRight: 10,}}>
              <Text style={{color: '#00C186', flex: 2, textAlign: 'center', textAlignVertical: 'center',}}>
                <FontAwesomeIcons name={'trash-o'} size={20}/>
              </Text>
              <Text style={{color: '#00C186', flex: 1, textAlign: 'center', textAlignVertical: 'center',}}>Organic</Text>
            </View>
            <View style={{flex: 8, display: 'flex', flexDirection: 'column',}}>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Filled: </Text>
                <Text style={{flex: 4}}>45%</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Humidity: </Text>
                <Text style={{flex: 4}}>4%</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Temp: </Text>
                <Text style={{flex: 4}}>28 C</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Methane: </Text>
                <Text style={{flex: 4}}>55%</Text>
              </View>
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', marginVertical: 4,}}>
            <View style={{flex: 4, display: 'flex', flexDirection: 'column', padding: 5, backgroundColor: 'pink', borderRadius: 5, marginRight: 10,}}>
              <Text style={{color: 'red', flex: 2, textAlign: 'center', textAlignVertical: 'center',}}>
                <FontAwesomeIcons name={'trash-o'} size={20}/>
              </Text>
              <Text style={{color: 'red', flex: 1, textAlign: 'center', textAlignVertical: 'center',}}>Plastic</Text>
            </View>
            <View style={{flex: 8, display: 'flex', flexDirection: 'column',}}>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Filled: </Text>
                <Text style={{flex: 4}}>45%</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Humidity: </Text>
                <Text style={{flex: 4}}>4%</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Temp: </Text>
                <Text style={{flex: 4}}>28 C</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Methane: </Text>
                <Text style={{flex: 4}}>55%</Text>
              </View>
            </View>
          </View>
        </View>
      </Callout>
    );
  }

  const CalloutComponent2 = () => {
    return (
      <Callout style={{width: Responsive(50, WIDTH), borderRadius: 10, padding: 0,}}>
        <View style={{display: 'flex', flexDirection: 'column', paddingHorizontal: 5, backgroundColor: 'white',}}>
          <View style={{display: 'flex', flexDirection: 'row', marginVertical: 3,}}>
            <Text style={{flex: 4, color: '#042434', fontWeight: '600',}}>Hub Id: </Text>
            <Text style={{flex: 8, textAlign: 'justify'}}>2852</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'column', color: '#042434', fontWeight: '600', marginVertical: 3,}}>
            <Text style={{color: '#042434', fontWeight: '600',}}>Description: </Text>
            <Text style={{textAlign: 'justify'}}>Lid doesn't open tapping the NFC card. Need to fix this issue immediately.</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'column', marginVertical: 3,}}>
            <Text style={{color: '#042434', fontWeight: '600',}}>Timestamp: </Text>
            <Text style={{textAlign: 'justify'}}>9/17/2022 12:43:00</Text>
          </View>
          <Text style={{color: '#042434', fontWeight: '600', marginVertical: 3,}}>Bin details</Text>
          <View style={{display: 'flex', flexDirection: 'row', marginVertical: 4,}}>
            <View style={{flex: 4, display: 'flex', flexDirection: 'column', padding: 5, backgroundColor: '#E1F0FF', borderRadius: 5, marginRight: 10,}}>
              <Text style={{color: '#008BD1', flex: 2, textAlign: 'center', textAlignVertical: 'center',}}>
                <FontAwesomeIcons name={'trash-o'} size={20}/>
              </Text>
              <Text style={{color: '#008BD1', flex: 1, textAlign: 'center', textAlignVertical: 'center',}}>Glass</Text>
            </View>
            <View style={{flex: 8, display: 'flex', flexDirection: 'column',}}>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Filled: </Text>
                <Text style={{flex: 4}}>45%</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Humidity: </Text>
                <Text style={{flex: 4}}>4%</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Temp: </Text>
                <Text style={{flex: 4}}>28 C</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Methane: </Text>
                <Text style={{flex: 4}}>55%</Text>
              </View>
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', marginVertical: 4,}}>
            <View style={{flex: 4, display: 'flex', flexDirection: 'column', padding: 5, backgroundColor: '#FFF6E9', borderRadius: 5, marginRight: 10,}}>
              <Text style={{color: '#FF9900', flex: 2, textAlign: 'center', textAlignVertical: 'center',}}>
                <FontAwesomeIcons name={'trash-o'} size={20}/>
              </Text>
              <Text style={{color: '#FF9900', flex: 1, textAlign: 'center', textAlignVertical: 'center',}}>Paper</Text>
            </View>
            <View style={{flex: 8, display: 'flex', flexDirection: 'column',}}>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Filled: </Text>
                <Text style={{flex: 4}}>45%</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Humidity: </Text>
                <Text style={{flex: 4}}>4%</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Temp: </Text>
                <Text style={{flex: 4}}>28 C</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Methane: </Text>
                <Text style={{flex: 4}}>55%</Text>
              </View>
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', marginVertical: 4,}}>
            <View style={{flex: 4, display: 'flex', flexDirection: 'column', padding: 5, backgroundColor: '#E0F8E3', borderRadius: 5, marginRight: 10,}}>
              <Text style={{color: '#00C186', flex: 2, textAlign: 'center', textAlignVertical: 'center',}}>
                <FontAwesomeIcons name={'trash-o'} size={20}/>
              </Text>
              <Text style={{color: '#00C186', flex: 1, textAlign: 'center', textAlignVertical: 'center',}}>Organic</Text>
            </View>
            <View style={{flex: 8, display: 'flex', flexDirection: 'column',}}>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Filled: </Text>
                <Text style={{flex: 4}}>45%</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Humidity: </Text>
                <Text style={{flex: 4}}>4%</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Temp: </Text>
                <Text style={{flex: 4}}>28 C</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Methane: </Text>
                <Text style={{flex: 4}}>55%</Text>
              </View>
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', marginVertical: 4,}}>
            <View style={{flex: 4, display: 'flex', flexDirection: 'column', padding: 5, backgroundColor: 'pink', borderRadius: 5, marginRight: 10,}}>
              <Text style={{color: 'red', flex: 2, textAlign: 'center', textAlignVertical: 'center',}}>
                <FontAwesomeIcons name={'trash-o'} size={20}/>
              </Text>
              <Text style={{color: 'red', flex: 1, textAlign: 'center', textAlignVertical: 'center',}}>Plastic</Text>
            </View>
            <View style={{flex: 8, display: 'flex', flexDirection: 'column',}}>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Filled: </Text>
                <Text style={{flex: 4}}>45%</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Humidity: </Text>
                <Text style={{flex: 4}}>4%</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Temp: </Text>
                <Text style={{flex: 4}}>28 C</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row',}}>
                <Text style={{flex: 8, color: '#042434',}}>Methane: </Text>
                <Text style={{flex: 4}}>55%</Text>
              </View>
            </View>
          </View>
        </View>
      </Callout>
    );
  }

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
                {CalloutComponent2()}
              </Marker>;
            return <Marker
              key={idx}
              onPress={() => setRoutingLocation({latitude: hub.latitude, longitude: hub.longitude})}
              coordinate={{latitude: hub.latitude, longitude: hub.longitude}}
              image={AllHub}
            >
              {CalloutComponent1()}
            </Marker>;
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
