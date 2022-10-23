import React, {useState, useEffect} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";
import Geolocation from '@react-native-community/geolocation';
import {CheckBox, Dialog} from "@rneui/themed";

import Hub from '../../assets/images/mobile-unavailable-hubs-resized.png';
import Hub2 from '../../assets/images/mobile-all-hubs-resized.png';
import MC from '../../assets/images/MC_resized.png';
import OrganicHub from '../../assets/images/organic.png';
import PaperHub from '../../assets/images/paper.png';
import PlasticHub from '../../assets/images/plastic.png';
import GlassHub from '../../assets/images/glass.png';

import {Responsive} from "../../helpers/Responsive";
import {API_TOKEN} from "@env";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const MC_LOCATION = {latitude: 6.915770, longitude: 79.863721,}

const OngoingScreen = () => {
  const [myLocation, setMyLocation] = useState({});
  const [refresh, setRefresh] = useState(0);
  const [showIncompleteError, setShowIncompleteError] = useState(false);
  const [resetConfirm, setResetConfirm] = useState(false);
  const [hubType, setHubType] = useState('Organic');
  const [garbageHubs, setGarbageHubs] = useState([
    {id: 23, collected: false, location: {latitude: 6.915129, longitude: 79.851268,},},
    {id: 47, collected: true, location: {latitude: 6.916539, longitude: 79.855258,},},
    {id: 38, collected: false, location: {latitude: 6.917959, longitude: 79.859238,},},
    {id: 84, collected: true, location: {latitude: 6.917959, longitude: 79.857238,},},
    {id: 39, collected: true, location: {latitude: 6.917259, longitude: 79.858238,},},
    {id: 66, collected: false, location: {latitude: 6.914959, longitude: 79.850238,},},
    {id: 37, collected: false, location: {latitude: 6.918959, longitude: 79.853238,},},
  ]);

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

  const updateHubStatus = (index, status) => {
    let tempGarbageHubs = garbageHubs;
    tempGarbageHubs[index].collected = !status;
    setGarbageHubs(tempGarbageHubs);
    setRefresh(refresh + 1);
  }

  const handleOnClickComplete = () => {
    if (garbageHubs.some((hub) => hub.collected === false))
      setShowIncompleteError(true);
  }

  const handleOnClickReset = () => {
    console.log("hello");
    setResetConfirm(true);
  }

  const IncompleteJobErrorModal = () => {
    return (
      <Dialog
        isVisible={showIncompleteError}
        onBackdropPress={() => setShowIncompleteError(false)}
        style={styles.ongoingScreen.errorModal}
        overlayStyle={{
          borderRadius: 30,
        }}
      >
        <View style={styles.ongoingScreen.errorModal.sec1}>
          <Text style={styles.ongoingScreen.errorModal.sec1.txt}>Cannot complete the job</Text>
        </View>
        <View style={styles.ongoingScreen.errorModal.sec2}>
          <Text style={styles.ongoingScreen.errorModal.sec2.txt}>
            You have some uncollected garbage hubs. Try again after you collect them.
          </Text>
        </View>
        <View style={styles.ongoingScreen.errorModal.sec3}>
          <TouchableOpacity
            style={styles.ongoingScreen.errorModal.sec3.btn}
            onPress={() => setShowIncompleteError(false)}
          >
            <Text style={styles.ongoingScreen.errorModal.sec3.btn.txt}>Ok</Text>
          </TouchableOpacity>
        </View>
      </Dialog>
    );
  }

  const ResetJobConfirmModal = () => {
    return (
      <Dialog
        isVisible={resetConfirm}
        onBackdropPress={() => setResetConfirm(false)}
        style={styles.ongoingScreen.resetModal}
        overlayStyle={{
          borderRadius: 30,
        }}
      >
        <View style={styles.ongoingScreen.resetModal.sec1}>
          <Text style={styles.ongoingScreen.resetModal.sec1.txt}>Confirm reset job</Text>
        </View>
        <View style={styles.ongoingScreen.resetModal.sec2}>
          <Text style={styles.ongoingScreen.resetModal.sec2.txt}>
            Are you sure that you want to reset the job?
          </Text>
        </View>
        <View style={styles.ongoingScreen.resetModal.sec3}>
          <TouchableOpacity
            style={styles.ongoingScreen.resetModal.sec3.btn}
            onPress={() => setResetConfirm(false)}
          >
            <Text style={styles.ongoingScreen.resetModal.sec3.btn.txt}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ongoingScreen.resetModal.sec3.btn}
            // onPress={() => setShowIncompleteError(false)}
          >
            <Text style={styles.ongoingScreen.resetModal.sec3.btn.txt}>Reset</Text>
          </TouchableOpacity>
        </View>
      </Dialog>
    );
  }

  return (
    <View style={styles.ongoingScreen}>
      {IncompleteJobErrorModal()}
      {ResetJobConfirmModal()}
      <View style={styles.ongoingScreen.sec1}>
        {hubType === 'Paper' && <Image source={PaperHub} style={styles.ongoingScreen.sec1.leftSec}/>}
        {hubType === 'Glass' && <Image source={GlassHub} style={styles.ongoingScreen.sec1.leftSec}/>}
        {hubType === 'Plastic' && <Image source={PlasticHub} style={styles.ongoingScreen.sec1.leftSec}/>}
        {hubType === 'Organic' && <Image source={OrganicHub} style={styles.ongoingScreen.sec1.leftSec}/>}
        <View style={styles.ongoingScreen.sec1.rightSec}>
          {garbageHubs.slice(0, 4).map((hub, idx) => {
            return <View key={idx} style={styles.ongoingScreen.sec1.rightSec.txtContainer}>
              <Text style={styles.ongoingScreen.sec1.rightSec.txtContainer.label}>HUB-ID: {hub.id}</Text>
              <CheckBox
                checked={hub.collected}
                onPress={() => updateHubStatus(idx, hub.collected)}
                checkedColor="black"
                containerStyle={{
                  marginLeft: 0, marginRight: 0, marginTop: 0, marginBottom: 0, paddingTop: -10, paddingBottom: -10,
                }}
                size={20}
                uncheckedColor="black"
              />
            </View>
          })}
        </View>
        {garbageHubs.length > 4 && <View style={styles.ongoingScreen.sec1.rightSec}>
          {garbageHubs.slice(4, garbageHubs.length + 1).map((hub, idx) => {
            return <View key={idx} style={styles.ongoingScreen.sec1.rightSec.txtContainer}>
              <Text style={styles.ongoingScreen.sec1.rightSec.txtContainer.label}>HUB-ID: {hub.id}</Text>
              <CheckBox
                checked={hub.collected}
                onPress={() => updateHubStatus(idx + 4, hub.collected)}
                checkedColor="black"
                containerStyle={{
                  marginLeft: 0, marginRight: 0, marginTop: 0, marginBottom: 0, paddingTop: -10, paddingBottom: -10,
                }}
                size={20}
                uncheckedColor="black"
              />
            </View>
          })}
        </View>}
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
          minZoomLevel={12}
          maxZoomLevel={20}
          style={styles.ongoingScreen.sec2.map}
        >
          <Marker coordinate={MC_LOCATION} image={MC}/>
          {garbageHubs.map((hub, idx) => {
            return hub.collected ?
              <Marker key={idx} coordinate={hub.location} image={Hub2} title={"HUB-ID: " + hub.id}/> :
              <Marker key={idx} coordinate={hub.location} image={Hub} title={"HUB-ID: " + hub.id}/>;
          })}
          {/*<Marker coordinate={hubLocation} image={Hub}/>*/}
          {/*<MapViewDirections*/}
          {/*  origin={MC_LOCATION}*/}
          {/*  destination={hubLocation}*/}
          {/*  apikey={'AIzaSyAyeY6NS2TUD_y-4sqIzqfmcI5K9IyfNqw'}*/}
          {/*  strokeWidth={4}*/}
          {/*  strokeColor="#228693"*/}
          {/*  mode={"WALKING"}*/}
          {/*/>*/}
          {/*<MapViewDirections*/}
          {/*  origin={myLocation}*/}
          {/*  destination={hubLocation}*/}
          {/*  apikey={API_TOKEN}*/}
          {/*  strokeWidth={4}*/}
          {/*  strokeColor="#228693"*/}
          {/*  mode={"WALKING"}*/}
          {/*/>*/}
        </MapView>
      </View>
      <View style={styles.ongoingScreen.sec3}>
        <TouchableOpacity
          style={styles.ongoingScreen.sec3.btn}
          onPress={() => handleOnClickReset()}
        >
          <Text style={styles.ongoingScreen.sec3.btn.txt}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ongoingScreen.sec3.btn2}
          onPress={() => handleOnClickComplete()}
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
      flex: 2,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      leftSec: {
        width: Responsive(18, WIDTH),
        height: Responsive(18, WIDTH),
      },
      rightSec: {
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
    errorModal: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      sec1: {
        txt: {
          textAlign: 'center',
          fontWeight: '600',
          fontSize: 18,
          color: '#228693',
        },
      },
      sec2: {
        borderBottomWidth: 2,
        borderBottomColor: '#BFDDDE',
        paddingVertical: 15,
        txt: {
          textAlign: 'center',
          fontSize: 15,
          color: '#707070',
        },
      },
      sec3: {
        paddingVertical: 15,
        btn: {
          width: '100%',
          txt: {
            textAlign: 'center',
            fontSize: 15,
            color: '#228693',
          },
        },
      },
    },
    resetModal: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      sec1: {
        txt: {
          textAlign: 'center',
          fontWeight: '600',
          fontSize: 18,
          color: '#228693',
        },
      },
      sec2: {
        borderBottomWidth: 2,
        borderBottomColor: '#BFDDDE',
        paddingVertical: 15,
        txt: {
          textAlign: 'center',
          fontSize: 15,
          color: '#707070',
        },
      },
      sec3: {
        paddingVertical: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        btn: {
          width: '100%',
          txt: {
            textAlign: 'center',
            fontSize: 15,
            color: '#228693',
          },
        },
      },
    },
  },
});

export default OngoingScreen;
