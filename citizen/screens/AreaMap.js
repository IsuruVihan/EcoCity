import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback
} from "react-native";
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Geolocation from "@react-native-community/geolocation";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";

import AllHub from '../assets/images/mobile-all-hubs-resized.png';
import AssignedHub from '../assets/images/mobile-assigned-hubs-resized.png';
import UnavailableHub from '../assets/images/mobile-unavailable-hubs-resized.png';
import MC from "../assets/images/MC_resized.png";

import {API_TOKEN} from "@env";
import {Responsive} from "../helpers/Responsive";
import {getGarbageHubDetails} from "../api/AreaMap";
import {AuthContext} from "../context/AuthContext";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {Dialog} from "@rneui/themed";
import {Button} from "@rneui/base";
import FileComplaintImg from "../assets/images/file-complaint.png";
import SelectDropdown from "react-native-select-dropdown";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const MC_LOCATION = {latitude: 6.915770, longitude: 79.863721,};
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const AreaMap = () => {
  const {loggedUser} = useContext(AuthContext);

  const [hubs, setHubs] = useState([]);
  const [filteredHubs, setFilteredHubs] = useState([]);

  const [routingLocation, setRoutingLocation] = useState(MC_LOCATION);
  const [myLocation, setMyLocation] = useState(MC_LOCATION);

  const [findComponentVisible, setFindComponentVisible] = useState(false);
  const [paperWeight, setPaperWeight] = useState("Any");
  const [glassWeight, setGlassWeight] = useState("Any");
  const [plasticWeight, setPlasticWeight] = useState("Any");
  const [organicWeight, setOrganicWeight] = useState("Any");

  useEffect(() => {
    getMyLocation();
    garbageHubs();
    // {
    //   "Bins": [
    //     {"GarbageHubId": 1, "bintype": "Organic", "garbagelevel": "0%", "garbageweight": 0, "id": 1, "methane": 1000, "temperature": 25.6},
    //     {"GarbageHubId": 1, "bintype": "Plastic", "garbagelevel": "25%", "garbageweight": 1.2, "id": 2, "methane": 1020, "temperature": 25.4},
    //     {"GarbageHubId": 1, "bintype": "Paper", "garbagelevel": "50%", "garbageweight": 1.5, "id": 3, "methane": 980, "temperature": 25.5},
    //     {"GarbageHubId": 1, "bintype": "Glass", "garbagelevel": "75%", "garbageweight": 5.8, "id": 4, "methane": 995, "temperature": 25.5}
    //   ],
    //   "id": 1,
    //   "latitude": 6.915829,
    //   "longitude": 79.859268,
    //   "status": "Active"
    // }
    // console.log(1);
  }, []);

  useEffect(() => {
    filterHubs();
    // console.log(2);
  }, [hubs]);

  const refresh = () => {
    getMyLocation();
    garbageHubs();
    filterHubs();
  }

  const getMyLocation = () => {
    Geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      setMyLocation({
        latitude: crd.latitude,
        longitude: crd.longitude,
      });
    }, (err) => {
      console.log(err);
    });
  }

  const garbageHubs = () => {
    getGarbageHubDetails(loggedUser)
      .then((hubs) => {
        setHubs(hubs.data.hubs);
        // console.log(hubs.data.hubs[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const filterHubs = () => {
    let tempHubs = [];
    if(hubs.length === 0)
      return;
    // User selection
    let actualWeights = {
      paper: paperWeight === "Any" ? 0 : parseInt(paperWeight.split(' ')[1].split('k')[0]),
      glass: glassWeight === "Any" ? 0 : parseInt(glassWeight.split(' ')[1].split('k')[0]),
      plastic: plasticWeight === "Any" ? 0 : parseInt(plasticWeight.split(' ')[1].split('k')[0]),
      organic: organicWeight === "Any" ? 0 : parseInt(organicWeight.split(' ')[1].split('k')[0]),
    };
    console.log("ACTUAL WEIGHTS: ", actualWeights);
    loop:
    for (let i = 0; i < hubs.length; i++) {
      for (let j = 0; j < hubs[i].Bins.length; j++) {
        switch (hubs[i].Bins[j].bintype) {
          case "Paper":
            if (((actualWeights.paper/20) * 100) > (100 - parseInt(hubs[i].Bins[j].garbagelevel.split('%')[0]))) {
              console.log("PAPER: (i = ", i, ") (j = ", j, ") || AVAILABLE: ", 100 - parseInt(hubs[i].Bins[j].garbagelevel.split('%')[0]), " || REQUIRED: ", (actualWeights.paper/20) * 100);
              continue loop;
            }
            break;
          case "Glass":
            if (((actualWeights.glass/60) * 100) > (100 - parseInt(hubs[i].Bins[j].garbagelevel.split('%')[0]))) {
              console.log("GLASS: (i = ", i, ") (j = ", j, ") || AVAILABLE: ", 100 - parseInt(hubs[i].Bins[j].garbagelevel.split('%')[0]), " || REQUIRED: ", (actualWeights.glass/60) * 100);
              continue loop;
            }
            break;
          case "Plastic":
            if (((actualWeights.plastic/40) * 100) > (100 - parseInt(hubs[i].Bins[j].garbagelevel.split('%')[0]))) {
              console.log("PLASTIC: (i = ", i, ") (j = ", j, ") || AVAILABLE: ", 100 - parseInt(hubs[i].Bins[j].garbagelevel.split('%')[0]), " || REQUIRED: ", (actualWeights.plastic/40) * 100);
              continue loop;
            }
            break;
          case "Organic":
            if (((actualWeights.organic/80) * 100) > (100 - parseInt(hubs[i].Bins[j].garbagelevel.split('%')[0]))) {
              console.log("ORGANIC: (i = ", i, ") (j = ", j, ") || AVAILABLE: ", 100 - parseInt(hubs[i].Bins[j].garbagelevel.split('%')[0]), " || REQUIRED: ", (actualWeights.organic/80) * 100);
              continue loop;
            }
            break;
        }
      }
      tempHubs.push(hubs[i]);
    }
    console.log("TEMP HUBS: ", tempHubs.length);
    setFilteredHubs(tempHubs);
  }

  const FindComponent = () => {
    const InputSetComponent = (label, weightSet, btnTxt, selectMethod, selectedValue) => {
      return <View style={styles.areaMap.createComplaintModal.content.inputSet}>
        <Text style={styles.areaMap.createComplaintModal.content.inputSet.label}>{label}</Text>
        <SelectDropdown
          data={weightSet}
          defaultValue="Any"
          defaultButtonText={btnTxt}
          onSelect={(selectedItem) => selectMethod(selectedItem)}
          buttonTextAfterSelection={(selectedItem) => selectedItem}
          rowTextForSelection={(item) => item}
          buttonStyle={{
            width: '100%',
            height: Responsive(5, HEIGHT),
            borderWidth: 2,
            borderColor: '#E8F5F6',
            borderRadius: 10,
            marginVertical: 3,
            backgroundColor: 'white',
          }}
          buttonTextStyle={{fontSize: 12, color: '#707070', backgroundColor: 'white',}}
          dropdownStyle={{backgroundColor: 'white', height: Responsive(20, HEIGHT), borderRadius: 10,}}
          rowStyle={{
            height: Responsive(5, HEIGHT),
            paddingVertical: 5,
            borderBottomColor: '#E8F5F6',
            borderBottomWidth: 1,
          }}
          rowTextStyle={{color: '#7CB6B8', fontSize: 15,}}
          renderDropdownIcon={() => <Ionicons name={'caret-down-circle'} color="#7CB6B8"/>}
          dropdownIconPosition="right"
        />
      </View>;
    }

    return (
      <Dialog
        isVisible={findComponentVisible}
        onBackdropPress={() => setFindComponentVisible(false)}
        style={styles.areaMap.createComplaintModal}
      >
        <View style={styles.areaMap.createComplaintModal.title}>
          <Text style={styles.areaMap.createComplaintModal.title.txt}>Find a Garbage hub</Text>
        </View>
        <View style={styles.areaMap.createComplaintModal.imageContainer}>
          <Image source={FileComplaintImg} style={styles.areaMap.createComplaintModal.imageContainer.img}/>
        </View>
        <View style={styles.areaMap.createComplaintModal.content}>
          {InputSetComponent('Paper',
            ["< 1kg", "< 5kg", "< 10kg", "< 15kg", "< 20kg", "Any"],
            'Paper weight',
            setPaperWeight,
            paperWeight
          )}
          {InputSetComponent('Glass',
            ["< 1kg", "< 15kg", "< 30kg", "< 45kg", "< 60kg", "Any"],
            'Glass weight',
            setGlassWeight,
            glassWeight
          )}
          {InputSetComponent('Plastic',
            ["< 1kg", "< 10kg", "< 20kg", "< 30kg", "< 40kg", "Any"],
            'Plastic weight',
            setPlasticWeight,
            plasticWeight
          )}
          {InputSetComponent('Organic',
            ["< 1kg", "< 20kg", "< 40kg", "< 60kg", "< 80kg", "Any"],
            'Organic weight',
            setOrganicWeight,
            organicWeight)}
        </View>
        <View style={styles.areaMap.createComplaintModal.last}>
          <TouchableOpacity
            style={styles.areaMap.createComplaintModal.last.btn1}
            onPress={() => filterHubs()}
          >
            <Text style={styles.areaMap.createComplaintModal.last.btn1.txt}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areaMap.createComplaintModal.last.btn2}>
            <Text style={styles.areaMap.createComplaintModal.last.btn2.txt}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Dialog>
    );
  }

  const CalloutComponent = (hub) => {
    return (
      <Callout style={styles.areaMap.sec3.map.callout}>
        <View style={styles.areaMap.sec3.map.callout.container}>
          <View style={styles.areaMap.sec3.map.callout.container.group1}>
            <Text style={styles.areaMap.sec3.map.callout.container.group1.label}>Hub Id: </Text>
            <Text style={styles.areaMap.sec3.map.callout.container.group1.data}>{hub.id}</Text>
          </View>
          <Text style={styles.areaMap.sec3.map.callout.container.binTitle}>Bin details</Text>
          {hub.Bins.map((bin) => {
            return <View style={styles.areaMap.sec3.map.callout.container.bin}>
              <View style={
                bin.bintype === "Paper" ? styles.areaMap.sec3.map.callout.container.bin.sec1 :
                  bin.bintype === "Plastic" ? styles.areaMap.sec3.map.callout.container.bin4.sec1 :
                    bin.bintype === "Organic" ? styles.areaMap.sec3.map.callout.container.bin3.sec1 :
                      styles.areaMap.sec3.map.callout.container.bin2.sec1
                }
              >
                <Text style={
                  bin.bintype === "Paper" ? styles.areaMap.sec3.map.callout.container.bin.sec1.part1 :
                    bin.bintype === "Plastic" ? styles.areaMap.sec3.map.callout.container.bin4.sec1.part1 :
                      bin.bintype === "Organic" ? styles.areaMap.sec3.map.callout.container.bin3.sec1.part1 :
                        styles.areaMap.sec3.map.callout.container.bin2.sec1.part1
                }>
                  <FontAwesomeIcons name={'trash-o'} size={20}/>
                </Text>
                <Text style={
                  bin.bintype === "Paper" ? styles.areaMap.sec3.map.callout.container.bin.sec1.part2 :
                    bin.bintype === "Plastic" ? styles.areaMap.sec3.map.callout.container.bin4.sec1.part2 :
                      bin.bintype === "Organic" ? styles.areaMap.sec3.map.callout.container.bin3.sec1.part2 :
                        styles.areaMap.sec3.map.callout.container.bin2.sec1.part2
                }>{bin.bintype}</Text>
              </View>
              <View style={styles.areaMap.sec3.map.callout.container.bin.sec2}>
                <View style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec}>
                  <Text style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec.label}>Filled: </Text>
                  <Text style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec.data}>{bin.garbagelevel}</Text>
                </View>
                {/*<View style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec}>*/}
                {/*  <Text style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec.label}>Humidity: </Text>*/}
                {/*  <Text style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec.data}>4%</Text>*/}
                {/*</View>*/}
                <View style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec}>
                  <Text style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec.label}>Temp: </Text>
                  <Text style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec.data}>{bin.temperature} C</Text>
                </View>
                <View style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec}>
                  <Text style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec.label}>Methane: </Text>
                  <Text style={styles.areaMap.sec3.map.callout.container.bin.sec2.sec.data}>{bin.methane} ppm</Text>
                </View>
              </View>
            </View>;
          })}
        </View>
      </Callout>
    );
  }

  return (
    <View style={styles.areaMap}>
      {FindComponent()}
      <TouchableOpacity style={styles.areaMap.sec1} onPress={() => refresh()}>
        <Text style={styles.areaMap.sec1.txt}>Garbage Hubs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.areaMap.sec2} onPress={() => refresh()}>
        <View style={styles.areaMap.sec2.legend}>
          <Image style={styles.areaMap.sec2.legend.img} source={AllHub}/>
          <Text style={styles.areaMap.sec2.legend.txt}>Available</Text>
        </View>
        <View style={styles.areaMap.sec2.legend}>
          <Image style={styles.areaMap.sec2.legend.img} source={AssignedHub}/>
          <Text style={styles.areaMap.sec2.legend.txt}>Repairing (Unavailable)</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.areaMap.sec3}>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          // region={{
          //   latitude: 6.915770,
          //   longitude: 79.863721,
          //   latitudeDelta: 1,
          //   longitudeDelta: 1,
          // }}
          minZoomLevel={12}
          maxZoomLevel={20}
          style={styles.areaMap.sec3.map}
        >
          {filteredHubs.map((hub, idx) => {
            if (hub.status === 'Unavailable')
              return <Marker
                key={idx}
                onPress={() => setRoutingLocation({latitude: hub.latitude, longitude: hub.longitude})}
                coordinate={{latitude: hub.latitude, longitude: hub.longitude}}
                image={AssignedHub}
              >
                {CalloutComponent(hub)}
              </Marker>;
            return <Marker
              key={idx}
              onPress={() => setRoutingLocation({latitude: hub.latitude, longitude: hub.longitude})}
              coordinate={{latitude: hub.latitude, longitude: hub.longitude}}
              image={AllHub}
            >
              {CalloutComponent(hub)}
            </Marker>;
          })}
          <Marker coordinate={MC_LOCATION} image={MC}/>
          {/*<MapViewDirections*/}
          {/*  origin={myLocation}*/}
          {/*  destination={routingLocation}*/}
          {/*  apikey={API_TOKEN}*/}
          {/*  strokeWidth={4}*/}
          {/*  strokeColor="#228693"*/}
          {/*  mode={"DRIVING"}*/}
          {/*/>*/}
        </MapView>
      </View>
      <View style={styles.areaMap.sec4}>
        <TouchableOpacity
          style={styles.areaMap.sec4.btn1}
          onPress={() => setFindComponentVisible(true)}
        >
          <Text style={styles.areaMap.sec4.btn1.txt}>
            Paper({paperWeight}), Glass({glassWeight}), Plastic({plasticWeight}), Organic({organicWeight})
          </Text>
        </TouchableOpacity>
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
      justifyContent: 'space-around',
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
      flex: 9,
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
    sec4: {
      width: '100%',
      flex: 1,
      paddingTop: 4,
      btn1: {
        // marginRight: 10,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 8,
        backgroundColor: '#228693',
        txt: {
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          fontSize: 12,
        },
      },
    },
    createComplaintModal: {
      title: {
        txt: {
          color: '#042434',
          fontWeight: '700',
          fontSize: 18,
        },
      },
      imageContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 10,
        img: {
          width: Responsive(30, WIDTH),
          height: Responsive(20, WIDTH),
        },
      },
      content: {
        inputSet: {
          paddingVertical: 5,
          padding: 0,
          label: {
            color: '#042434',
          },
        },
      },
      last: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        btn1: {
          marginRight: 10,
          borderRadius: 5,
          paddingHorizontal: 20,
          paddingVertical: 8,
          backgroundColor: '#228693',
          txt: {
            color: 'white',
            fontWeight: 'bold',
          },
        },
        btn2: {
          borderWidth: 1,
          borderColor: '#E9E8EF',
          borderRadius: 5,
          paddingHorizontal: 20,
          paddingVertical: 8,
          txt: {
            color: '#228693',
            fontWeight: 'bold',
          },
        }
      },
    },

  },
});

export default AreaMap;
