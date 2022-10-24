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

  const CalloutComponent = (toBeCollected) => {
    return (
      <Callout style={styles.areaMap.sec3.map.callout}>
        <View style={styles.areaMap.sec3.map.callout.container}>
          <View style={styles.areaMap.sec3.map.callout.container.group1}>
            <Text style={styles.areaMap.sec3.map.callout.container.group1.label}>Hub Id: </Text>
            <Text style={styles.areaMap.sec3.map.callout.container.group1.data}>2852</Text>
          </View>
          {toBeCollected && <>
            <View style={styles.areaMap.sec3.map.callout.container.group2}>
              <Text style={styles.areaMap.sec3.map.callout.container.group2.label}>Garbage to be Collected: </Text>
              <Text style={styles.areaMap.sec3.map.callout.container.group2.data}>Glass</Text>
            </View>
            <View style={styles.areaMap.sec3.map.callout.container.group3}>
              <Text style={styles.areaMap.sec3.map.callout.container.group3.label}>Timestamp: </Text>
              <Text style={styles.areaMap.sec3.map.callout.container.group3.data}>9/17/2022 12:43:00</Text>
            </View>
          </>}
          <Text style={styles.areaMap.sec3.map.callout.container.binTitle}>Bin details</Text>
          <View style={styles.areaMap.sec3.map.callout.container.bin}>
            <View style={styles.areaMap.sec3.map.callout.container.bin.sec1}>
              <Text style={styles.areaMap.sec3.map.callout.container.bin.sec1.part1}>
                <FontAwesomeIcons name={'trash-o'} size={20}/>
              </Text>
              <Text style={styles.areaMap.sec3.map.callout.container.bin.sec1.part2}>Glass</Text>
            </View>
            <View style={styles.areaMap.sec3.map.callout.container.bin.sec2}>
              <View style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec}>
                <Text style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec.label}>Filled: </Text>
                <Text style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec.data}>45%</Text>
              </View>
              <View style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec}>
                <Text style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec.label}>Humidity: </Text>
                <Text style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec.data}>4%</Text>
              </View>
              <View style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec}>
                <Text style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec.label}>Temp: </Text>
                <Text style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec.data}>28 C</Text>
              </View>
              <View style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec}>
                <Text style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec.label}>Methane: </Text>
                <Text style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec.data}>55%</Text>
              </View>
            </View>
          </View>
          <View style={styles.areaMap.sec3.map.callout.container.bin2}>
            <View style={styles.areaMap.sec3.map.callout.container.bin2.sec1}>
              <Text style={styles.areaMap.sec3.map.callout.container.bin2.sec1.part1}>
                <FontAwesomeIcons name={'trash-o'} size={20}/>
              </Text>
              <Text style={styles.areaMap.sec3.map.callout.container.bin2.sec1.part2}>Glass</Text>
            </View>
            <View style={styles.areaMap.sec3.map.callout.container.bin2.sec2}>
              <View style={styles.areaMap.sec3.map.callout.container.bin2.sec2.sec}>
                <Text style={styles.areaMap.sec3.map.callout.container.bin2.sec2.sec.label}>Filled: </Text>
                <Text style={styles.areaMap.sec3.map.callout.container.bin2.sec2.sec.data}>45%</Text>
              </View>
              <View style={styles.areaMap.sec3.map.callout.container.bin2.sec2.sec}>
                <Text style={styles.areaMap.sec3.map.callout.container.bin2.sec2.sec.label}>Humidity: </Text>
                <Text style={styles.areaMap.sec3.map.callout.container.bin2.sec2.sec.data}>4%</Text>
              </View>
              <View style={styles.areaMap.sec3.map.callout.container.bin2.sec2.sec}>
                <Text style={styles.areaMap.sec3.map.callout.container.bin2.sec2.sec.label}>Temp: </Text>
                <Text style={styles.areaMap.sec3.map.callout.container.bin2.sec2.sec.data}>28 C</Text>
              </View>
              <View style={styles.areaMap.sec3.map.callout.container.bin2.sec2.sec}>
                <Text style={styles.areaMap.sec3.map.callout.container.bin2.sec2.sec.label}>Methane: </Text>
                <Text style={styles.areaMap.sec3.map.callout.container.bin2.sec2.sec.data}>55%</Text>
              </View>
            </View>
          </View>
          <View style={styles.areaMap.sec3.map.callout.container.bin3}>
            <View style={styles.areaMap.sec3.map.callout.container.bin3.sec1}>
              <Text style={styles.areaMap.sec3.map.callout.container.bin3.sec1.part1}>
                <FontAwesomeIcons name={'trash-o'} size={20}/>
              </Text>
              <Text style={styles.areaMap.sec3.map.callout.container.bin3.sec1.part2}>Glass</Text>
            </View>
            <View style={styles.areaMap.sec3.map.callout.container.bin3.sec2}>
              <View style={styles.areaMap.sec3.map.callout.container.bin3.sec2.sec}>
                <Text style={styles.areaMap.sec3.map.callout.container.bin3.sec2.sec.label}>Filled: </Text>
                <Text style={styles.areaMap.sec3.map.callout.container.bin3.sec2.sec.data}>45%</Text>
              </View>
              <View style={styles.areaMap.sec3.map.callout.container.bin3.sec2.sec}>
                <Text style={styles.areaMap.sec3.map.callout.container.bin3.sec2.sec.label}>Humidity: </Text>
                <Text style={styles.areaMap.sec3.map.callout.container.bin3.sec2.sec.data}>4%</Text>
              </View>
              <View style={styles.areaMap.sec3.map.callout.container.bin3.sec2.sec}>
                <Text style={styles.areaMap.sec3.map.callout.container.bin3.sec2.sec.label}>Temp: </Text>
                <Text style={styles.areaMap.sec3.map.callout.container.bin3.sec2.sec.data}>28 C</Text>
              </View>
              <View style={styles.areaMap.sec3.map.callout.container.bin3.sec2.sec}>
                <Text style={styles.areaMap.sec3.map.callout.container.bin3.sec2.sec.label}>Methane: </Text>
                <Text style={styles.areaMap.sec3.map.callout.container.bin3.sec2.sec.data}>55%</Text>
              </View>
            </View>
          </View>
          <View style={styles.areaMap.sec3.map.callout.container.bin4}>
            <View style={styles.areaMap.sec3.map.callout.container.bin4.sec1}>
              <Text style={styles.areaMap.sec3.map.callout.container.bin4.sec1.part1}>
                <FontAwesomeIcons name={'trash-o'} size={20}/>
              </Text>
              <Text style={styles.areaMap.sec3.map.callout.container.bin4.sec1.part2}>Glass</Text>
            </View>
            <View style={styles.areaMap.sec3.map.callout.container.bin4.sec2}>
              <View style={styles.areaMap.sec3.map.callout.container.bin4.sec2.sec}>
                <Text style={styles.areaMap.sec3.map.callout.container.bin4.sec2.sec.label}>Filled: </Text>
                <Text style={styles.areaMap.sec3.map.callout.container.bin4.sec2.sec.data}>45%</Text>
              </View>
              <View style={styles.areaMap.sec3.map.callout.container.bin4.sec2.sec}>
                <Text style={styles.areaMap.sec3.map.callout.container.bin4.sec2.sec.label}>Humidity: </Text>
                <Text style={styles.areaMap.sec3.map.callout.container.bin4.sec2.sec.data}>4%</Text>
              </View>
              <View style={styles.areaMap.sec3.map.callout.container.bin4.sec2.sec}>
                <Text style={styles.areaMap.sec3.map.callout.container.bin4.sec2.sec.label}>Temp: </Text>
                <Text style={styles.areaMap.sec3.map.callout.container.bin4.sec2.sec.data}>28 C</Text>
              </View>
              <View style={styles.areaMap.sec3.map.callout.container.bin4.sec2.sec}>
                <Text style={styles.areaMap.sec3.map.callout.container.bin4.sec2.sec.label}>Methane: </Text>
                <Text style={styles.areaMap.sec3.map.callout.container.bin4.sec2.sec.data}>55%</Text>
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
                {CalloutComponent(true)}
              </Marker>;
            return <Marker
              key={idx}
              onPress={() => setRoutingLocation({latitude: hub.latitude, longitude: hub.longitude})}
              coordinate={{latitude: hub.latitude, longitude: hub.longitude}}
              image={AllHub}
            >
              {CalloutComponent(false)}
            </Marker>;
          })}
          <Marker coordinate={MC_LOCATION} image={MC}/>
          <MapViewDirections
            origin={myLocation}
            destination={routingLocation}
            apikey={API_TOKEN}
            strokeWidth={4}
            strokeColor="#228693"
            mode={"DRIVING"}
          />
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  areaMap: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    sec1: {
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
      width: '100%',
      flex: 10,
      map: {
        width: '100%',
        height: '100%',
        callout: {
          width: Responsive(50, WIDTH),
          borderRadius: 10,
          padding: 0,
          container: {
            display: 'flex',
            flexDirection: 'column',
            paddingHorizontal: 5,
            backgroundColor: 'white',
            group1: {
              display: 'flex',
              flexDirection: 'row',
              marginVertical: 3,
              label: {
                flex: 4,
                color: '#042434',
                fontWeight: '600',
              },
              data: {
                flex: 8,
                textAlign: 'justify',
              },
            },
            group2: {
              display: 'flex',
              flexDirection: 'column',
              color: '#042434',
              fontWeight: '600',
              marginVertical: 3,
              label: {
                flex: 4,
                color: '#042434',
                fontWeight: '600',
              },
              data: {
                flex: 8,
                textAlign: 'justify',
              },
            },
            group3: {
              display: 'flex',
              flexDirection: 'column',
              marginVertical: 3,
              label: {
                color: '#042434',
                fontWeight: '600',
              },
              data: {
                textAlign: 'justify',
              },
            },
            binTitle: {
              color: '#042434',
              fontWeight: '600',
              marginVertical: 3,
            },
            bin: {
              display: 'flex',
              flexDirection: 'row',
              marginVertical: 4,
              sec1: {
                flex: 4,
                display: 'flex',
                flexDirection: 'column',
                padding: 5,
                backgroundColor: '#E1F0FF',
                borderRadius: 5,
                marginRight: 10,
                part1: {
                  color: '#008BD1',
                  flex: 2,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                },
                part2: {
                  color: '#008BD1',
                  flex: 1,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                },
              },
              sec2: {
                flex: 8,
                display: 'flex',
                flexDirection: 'column',
                sec: {
                  display: 'flex',
                  flexDirection: 'row',
                  label: {
                    flex: 8,
                    color: '#042434',
                  },
                  data: {
                    flex: 4,
                  },
                },
              },
            },
            bin2: {
              display: 'flex',
              flexDirection: 'row',
              marginVertical: 4,
              sec1: {
                flex: 4,
                display: 'flex',
                flexDirection: 'column',
                padding: 5,
                backgroundColor: '#FFF6E9',
                borderRadius: 5,
                marginRight: 10,
                part1: {
                  color: '#FF9900',
                  flex: 2,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                },
                part2: {
                  color: '#FF9900',
                  flex: 1,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                },
              },
              sec2: {
                flex: 8,
                display: 'flex',
                flexDirection: 'column',
                sec: {
                  display: 'flex',
                  flexDirection: 'row',
                  label: {
                    flex: 8,
                    color: '#042434',
                  },
                  data: {
                    flex: 4,
                  },
                },
              },
            },
            bin3: {
              display: 'flex',
              flexDirection: 'row',
              marginVertical: 4,
              sec1: {
                flex: 4,
                display: 'flex',
                flexDirection: 'column',
                padding: 5,
                backgroundColor: '#E0F8E3',
                borderRadius: 5,
                marginRight: 10,
                part1: {
                  color: '#00C186',
                  flex: 2,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                },
                part2: {
                  color: '#00C186',
                  flex: 1,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                },
              },
              sec2: {
                flex: 8,
                display: 'flex',
                flexDirection: 'column',
                sec: {
                  display: 'flex',
                  flexDirection: 'row',
                  label: {
                    flex: 8,
                    color: '#042434',
                  },
                  data: {
                    flex: 4,
                  },
                },
              },
            },
            bin4: {
              display: 'flex',
              flexDirection: 'row',
              marginVertical: 4,
              sec1: {
                flex: 4,
                display: 'flex',
                flexDirection: 'column',
                padding: 5,
                backgroundColor: 'pink',
                borderRadius: 5,
                marginRight: 10,
                part1: {
                  color: 'red',
                  flex: 2,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                },
                part2: {
                  color: 'red',
                  flex: 1,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                },
              },
              sec2: {
                flex: 8,
                display: 'flex',
                flexDirection: 'column',
                sec: {
                  display: 'flex',
                  flexDirection: 'row',
                  label: {
                    flex: 8,
                    color: '#042434',
                  },
                  data: {
                    flex: 4,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
});

export default AreaMap;
