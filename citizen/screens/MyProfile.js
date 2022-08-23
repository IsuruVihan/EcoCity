import React, {useContext, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, TextInput} from "react-native";
import {Dialog, Switch} from "@rneui/themed";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import FeatherIcons from "react-native-vector-icons/Feather";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import FontAwesome5Icons from "react-native-vector-icons/FontAwesome5";
import Slider from '@react-native-community/slider';
import Feather from "react-native-vector-icons/Feather";
import {Button} from "@rneui/base";

import {AuthContext} from "../context/AuthContext";
import {Responsive} from "../helpers/Responsive";

import HouseImg from '../assets/images/house-profile.png';
import NFCImg from '../assets/images/nfc-tag.png';

const HEIGHT = Dimensions.get('window').height;

const MyProfile = () => {
  const {loading, loggedUser, logout} = useContext(AuthContext);

  const [isVisibleSettingsModal, setIsVisibleSettingsModal] = useState(false);
  const [darkModeOn, setDarkModeOn] = useState(false);
  const [fontSize, setFontSize] = useState(10);

  const [isVisibleProfileDetailsModal, setIsVisibleProfileDetailsModal] = useState(false);
  const [homeId, setHomeId] = useState('#1234');
  const [firstName, setFirstName] = useState('Isuru');
  const [lastName, setLastName] = useState('Harischandra');
  const [nic, setNic] = useState('992462698v');
  const [address, setAddress] = useState('634/21, Athurugiriya');
  const [email, setEmail] = useState('isuruvihan@gmail.com');
  const [currentPassword, setCurrentPassword] = useState('Isuru@123');
  const [newPassword, setNewPassword] = useState('Isuru@123');

  const [isVisibleNFCModal, setIsVisibleNFCModal] = useState(false);

  const openModals = (label) => {
    switch (label) {
      case "Profile":
        setIsVisibleProfileDetailsModal(true);
        break;
      case "Settings":
        setIsVisibleSettingsModal(true);
        break;
      case "My NFC Tags":
        setIsVisibleNFCModal(true);

    }
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

  const SettingsModal = () => {
    return (
      <Dialog
        overlayStyle={{
          width: '100%',
          marginTop: 'auto',
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          paddingTop: 60,
          paddingBottom: 40,
          paddingHorizontal: 50,
        }}
        isVisible={isVisibleSettingsModal}
        onBackdropPress={() => setIsVisibleSettingsModal(false)}
        style={styles.myProfile.settings}
      >
        <View style={styles.myProfile.settings.linkRow}>
          <View style={styles.myProfile.settings.linkRow.column}>
            <Feather name={'globe'} size={25} color={'#042434'}/>
            <Text style={styles.myProfile.settings.linkRow.column.txt}>Language</Text>
          </View>
          <View style={styles.myProfile.settings.linkRow.column}>
            <TouchableOpacity style={styles.myProfile.settings.linkRow.column.container}>
              <Text style={styles.myProfile.settings.linkRow.column.container.langTxt}>English</Text>
              <FeatherIcons name={'chevron-right'} size={18} color={'#6F6F6F'}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.myProfile.settings.linkRow}>
          <View style={styles.myProfile.settings.linkRow.column}>
            <Feather name={'moon'} size={25} color={'#042434'}/>
            <Text style={styles.myProfile.settings.linkRow.column.txt}>Dark Mode</Text>
          </View>
          <View style={styles.myProfile.settings.linkRow.column}>
            <Switch value={darkModeOn} color={'#228693'} onValueChange={() => setDarkModeOn(!darkModeOn)}/>
          </View>
        </View>
        <View style={styles.myProfile.settings.linkRow}>
          <View style={styles.myProfile.settings.linkRow.column}>
            <FontAwesomeIcons name={'font'} size={25} color={'#042434'}/>
            <Text style={styles.myProfile.settings.linkRow.column.txt}>Font Size</Text>
          </View>
          <View style={styles.myProfile.settings.linkRow.column}>
            <FontAwesome5Icons name={'font'} color={'black'}/>
            <Slider
              style={styles.myProfile.settings.linkRow.column.slider}
              minimumValue={1}
              maximumValue={10}
              onValueChange={(value) => setFontSize(Math.floor(value))}
              thumbTintColor='#228693'
            />
            <FontAwesome5Icons name={'font'} color={'black'} size={25}/>
          </View>
        </View>
      </Dialog>
    );
  }

  const ProfileDetailsModal = () => {
    const Item = (label, onChange, value, secure) => {
      return (
        <View style={styles.myProfile.profile.section.item}>
          <View style={styles.myProfile.profile.section.item.part1}>
            <Text style={styles.myProfile.profile.section.item.part1.label}>{label}</Text>
            <TextInput
              style={styles.myProfile.profile.section.item.part1.field}
              onChangeText={onChange}
              value={value}
              secureTextEntry={secure}
            />
          </View>
          <View style={styles.myProfile.profile.section.item.part2}>
            <MaterialIcons size={20} color={'#AFCACB'} name={'done'}/>
          </View>
        </View>
      );
    }

    return (
      <Dialog
        isVisible={isVisibleProfileDetailsModal}
        style={styles.myProfile.profile}
      >
        <View style={styles.myProfile.profile.first}>
          <MaterialIcons
            size={25}
            color={'black'}
            name={'chevron-left'}
            onPress={() => setIsVisibleProfileDetailsModal(false)}
          />
          <Text style={styles.myProfile.profile.first.txt}>EDIT PROFILE</Text>
          <MaterialIcons size={25} color={'black'} name={'done'}/>
        </View>
        <View style={styles.myProfile.profile.space}/>
        <View style={styles.myProfile.profile.section}>
          <Text style={styles.myProfile.profile.section.topic}>PUBLIC INFORMATION</Text>
          {Item('Home ID', setHomeId, homeId, false)}
          {Item('First Name', setFirstName, firstName, false)}
          {Item('Last Name', setLastName, lastName, false)}
          {Item('NIC', setNic, nic, false)}
          {Item('Address', setAddress, address, false)}
          {Item('Email', setEmail, email, false)}
        </View>
        <Button title="Save" buttonStyle={styles.myProfile.profile.section.btn}/>
        <View style={styles.myProfile.profile.space}/>
        <View style={styles.myProfile.profile.section}>
          <Text style={styles.myProfile.profile.section.topic}>PASSWORD</Text>
          {Item('Current Password', setCurrentPassword, currentPassword, true)}
          {Item('New Password', setNewPassword, newPassword, true)}
        </View>
        <Button title="Change Password" buttonStyle={styles.myProfile.profile.section.btn}/>
      </Dialog>
    );
  }

  const NFCTagsModal = () => {
    return (
      <Dialog
        isVisible={isVisibleNFCModal}
        style={styles.myProfile.nfc}
      >
        <View style={styles.myProfile.nfc.first}>
          <MaterialIcons
            size={25}
            color={'black'}
            name={'chevron-left'}
            onPress={() => setIsVisibleNFCModal(false)}
          />
          <Text style={styles.myProfile.nfc.first.txt}>MY NFC TAGS</Text>
          <MaterialIcons size={25} color={'black'} name={'done'}/>
        </View>
        {/*<View style={styles.myProfile.nfc.space}/>*/}
        <View>
          <Text style={styles.myProfile.nfc.topic}>NFC Tags</Text>
        </View>
        <View style={styles.myProfile.nfc.card}>
          <View style={styles.myProfile.nfc.card.section1}>
            <Image source={NFCImg} style={styles.myProfile.nfc.card.section1.img}/>
          </View>
          <View style={styles.myProfile.nfc.card.section2}>
            <Text style={styles.myProfile.nfc.card.section2.first}>ID</Text>
            <Text style={styles.myProfile.nfc.card.section2.second}>#12345</Text>
          </View>
          <View style={styles.myProfile.nfc.card.section2}>
            <Text style={styles.myProfile.nfc.card.section2.first}>Status</Text>
            <Text style={styles.myProfile.nfc.card.section2.second}>Active</Text>
          </View>
        </View>
      </Dialog>
    );
  }

  return (
    <View style={styles.myProfile}>
      {SettingsModal()}
      {ProfileDetailsModal()}
      {NFCTagsModal()}
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
    settings: {
      linkRow: {
        // borderColor: 'red',
        // borderWidth: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 12,
        column: {
          // borderColor: 'blue',
          // borderWidth: 2,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          txt: {
            marginLeft: 10,
            fontSize: 18,
            color: '#042434',
          },
          container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            langTxt: {
              marginRight: 5,
              color: '#6F6F6F',
              fontSize: 18,
            },
          },
          slider: {
            width: Responsive(12, HEIGHT),
          },
        },
      },
    },
    profile: {
      first: {
        borderBottomColor: '#BFDDDE',
        borderBottomWidth: 2,
        height: Responsive(5, HEIGHT),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        icon: {

        },
        txt: {
          color: '#042434',
          fontSize: 15,
        },
      },
      section: {
        // borderColor: 'blue',
        // borderWidth: 2,
        topic: {
          color: '#707070',
          fontWeight: '600',
          marginVertical: 5,
          fontSize: 12,
        },
        item: {
          borderColor: '#E8F5F6',
          borderWidth: 2,
          marginBottom: 5,
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 5,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          part1: {
            label: {
              // borderColor: 'orange',
              // borderWidth: 2,
              color: '#707070',
              fontSize: 12,
            },
            field: {
              // borderColor: 'orange',
              // borderWidth: 2,
              padding: 0,
              color: '#042434',
            },
          },
          part2: {
            // borderColor: 'orange',
            // borderWidth: 2,
          },
        },
        btn: {
          backgroundColor: '#228693',
          borderRadius: 10,
        },
      },
      space: {
        height: '2%',
      },
    },
    nfc: {
      first: {
        borderBottomColor: '#BFDDDE',
        borderBottomWidth: 2,
        height: Responsive(5, HEIGHT),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        icon: {

        },
        txt: {
          color: '#042434',
          fontSize: 15,
        },
      },
      space: {
        height: '2%',
      },
      topic: {
        color: '#707070',
        fontWeight: '600',
        marginVertical: 5,
        fontSize: 12,
      },
      card: {
        borderColor: '#E8F5F6',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#E8F5F6',
        height: Responsive(8, HEIGHT),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        section1: {
          borderColor: 'white',
          borderWidth: 2,
          borderRadius: 10,
          backgroundColor: 'white',
          width: '25%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 1,
          img: {
            width: Responsive(6, HEIGHT),
            height: Responsive(2, HEIGHT),
          },
        },
        section2: {
          // borderColor: 'orange',
          // borderWidth: 2,
          first: {
            fontSize: 12,
            color: '#042434',
          },
          second: {
            fontSize: 12,
            color: '#7CB6B8',
          },
        },
      },
    },
  },
});

export default MyProfile;
