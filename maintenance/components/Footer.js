import React from 'react';
import {Dimensions, Image, Pressable, StyleSheet, View} from "react-native";

import MaintenanceImg from "../assets/images/mobile-maintenance2.png";
import HomeImg from "../assets/images/mobile-home.png";
import MapImg from "../assets/images/mobile-map.png";
import ProfileImg from "../assets/images/mobile-profile.png";
import MaintenanceImgSelected from "../assets/images/mobile-maintenance.png";
import HomeImgSelected from "../assets/images/mobile-home-selected.png";
import MapImgSelected from "../assets/images/mobile-map-selected.png";
import ProfileImgSelected from "../assets/images/mobile-profile-selected.png";

import {Responsive} from "../helpers/Responsive";

const HEIGHT = Dimensions.get('window').height;

const Footer = ({selected, onChange}) => {
  return (
    <View style={styles.footer}>
      <Pressable
        style={selected === 'complaint' ? {borderBottomColor: '#228693', borderBottomWidth: 2, height: '60%'} : {}}
        onPress={() => onChange('complaint')}
      >
        <Image
          source={selected === 'complaint' ? MaintenanceImgSelected : MaintenanceImg}
          style={selected === 'complaint' ? styles.footer.icon_selected : styles.footer.icon}
        />
      </Pressable>
      <Pressable
        style={selected === 'home' ? {borderBottomColor: '#228693', borderBottomWidth: 2, height: '60%'} : {}}
        onPress={() => onChange('home')}
      >
        <Image
          source={selected === 'home' ? HomeImgSelected : HomeImg}
          style={selected === 'home' ? styles.footer.icon_selected : styles.footer.icon}
        />
      </Pressable>
      <Pressable
        style={selected === 'map' ? {borderBottomColor: '#228693', borderBottomWidth: 2, height: '60%'} : {}}
        onPress={() => onChange('map')}
      >
        <Image
          source={selected === 'map' ? MapImgSelected : MapImg}
          style={styles.footer.icon2}
        />
      </Pressable>
      <Pressable
        style={selected === 'profile' ? {borderBottomColor: '#228693', borderBottomWidth: 2, height: '60%'} : {}}
        onPress={() => onChange('profile')}
      >
        <Image
          source={selected === 'profile' ? ProfileImgSelected : ProfileImg}
          style={styles.footer.icon2}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: Responsive(9, HEIGHT),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderLeftRadius: 20,
    borderRightRadius: 20,
    borderColor: 'lightgray',
    borderWidth: 1,
    icon: {
      width: 25,
      height: 25,
    },
    icon2: {
      width: 25,
      height: 30,
    },
    icon_selected: {
      width: 25,
      height: 25,
    },
    icon2_selected: {
      width: 25,
      height: 30,
    },
  },
});

export default Footer;
