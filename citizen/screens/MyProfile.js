import React, {useContext} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Spinner from "react-native-loading-spinner-overlay/src";
import {Button} from "@rneui/base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import FeatherIcons from "react-native-vector-icons/Feather";

import {AuthContext} from "../context/AuthContext";
import {Responsive} from "../helpers/Responsive";

import HouseImg from '../assets/images/house-profile.png';

const HEIGHT = Dimensions.get('window').height;

const MyProfile = () => {
  const {loading, loggedUser, logout} = useContext(AuthContext);

  const openModals = (label) => {
    console.log("OPEN: ", label);
  }

  const Link = (iconType, iconName, label) => {
    return (
      <TouchableOpacity style={styles.myProfile.links.section} onPress={() => openModals(label)}>
        <View style={styles.myProfile.links.section.box1}>
          {iconType === 'feather' && <FeatherIcons name={iconName} size={25} color={'#042434'}/>}
          {iconType === 'material' && <MaterialIcons name={iconName} size={25} color={'#042434'}/>}
        </View>
        <View style={styles.myProfile.links.section.box2}>
          <Text style={styles.myProfile.links.section.box2.txt}>{label}</Text>
        </View>
        <View style={styles.myProfile.links.section.box3}>
          <FeatherIcons name={'chevron-right'} size={25} color={'#042434'}/>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.myProfile}>
      <View style={styles.myProfile.space}/>
      <View style={styles.myProfile.topic}>
        <Text style={styles.myProfile.topic.txt}>My Profile</Text>
      </View>
      <View style={styles.myProfile.space}/>
      <View style={styles.myProfile.status}>
        <View style={styles.myProfile.status.first}>
          <Image source={HouseImg} style={styles.myProfile.status.first.img}/>
        </View>
        <View style={styles.myProfile.status.second}>
          <Text style={styles.myProfile.status.second.txt1}>Welcome</Text>
          <View style={styles.myProfile.status.second.container}>
            <Text style={styles.myProfile.status.second.container.name}>Isuru Harischandra</Text>
            <Octicons
              name={'dot-fill'}
              size={25}
              color={'#00C186'}
              style={styles.myProfile.status.second.container.icon}
            />
          </View>
          <Text style={styles.myProfile.status.second.txt2}>Citizen ID: 1234</Text>
        </View>
        <View style={styles.myProfile.status.third}>
          <MaterialIcons name={'logout'} size={25} color={'#075061'} onPress={logout}/>
        </View>
      </View>
      <View style={styles.myProfile.space}/>
      <View style={styles.myProfile.links}>
        {Link('feather', 'user', 'Profile')}
        {Link('feather', 'settings', 'Settings')}
        {Link('material', 'nfc', 'My NFC Tags')}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  myProfile: {
    // borderWidth: 2,
    // borderColor: 'orange',
    height: Responsive(83, HEIGHT),
    paddingHorizontal: 10,
    space: {
      // borderWidth: 2,
      // borderColor: 'red',
      height: '2%',
    },
    topic: {
      // borderWidth: 2,
      // borderColor: 'red',
      height: '8%',
      display: 'flex',
      justifyContent: 'center',
      txt: {
        // borderWidth: 2,
        // borderColor: 'green',
        color: '#042434',
        fontSize: 30,
        fontWeight: '600',
      },
    },
    status: {
      borderTopWidth: 2,
      borderTopColor: '#BFDDDE',
      borderBottomWidth: 2,
      borderBottomColor: '#BFDDDE',
      height: '20%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      first: {
        // borderWidth: 2,
        // borderColor: 'blue',
        width: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        img: {
          height: '60%',
          width: '60%',
        },
      },
      second: {
        // borderWidth: 2,
        // borderColor: 'blue',
        width: '60%',
        display: 'flex',
        justifyContent: 'center',
        txt1: {
          color: '#949494',
          fontSize: 15,
        },
        container: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          name: {
            color: '#042434',
            fontSize: 20,
            fontWeight: '500',
            // borderWidth: 2,
            // borderColor: 'blue',
          },
          icon: {
            marginLeft: 3,
            // borderWidth: 2,
            // borderColor: 'blue',
          },
        },
        txt2: {
          color: '#042434',
          fontSize: 12,
        },
      },
      third: {
        // borderWidth: 2,
        // borderColor: 'blue',
        width: '10%',
        display: 'flex',
        justifyContent: 'center',
      },
    },
    links: {
      // borderWidth: 2,
      // borderColor: 'red',
      height: '66%',
      section: {
        // borderWidth: 2,
        // borderColor: 'blue',
        height: '18%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10,
        box1: {
          // borderWidth: 2,
          // borderColor: 'green',
          width: '10%',
        },
        box2: {
          // borderWidth: 2,
          // borderColor: 'green',
          width: '50%',
          txt: {
            color: '#042434',
            fontSize: 18,
            fontWeight: '500',
          },
        },
        box3: {
          // borderWidth: 2,
          // borderColor: 'green',
          width: '10%',
        },
      },
    },
  },
});

export default MyProfile;
