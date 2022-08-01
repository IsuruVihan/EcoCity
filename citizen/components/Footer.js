import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";

import ComplaintsImg from "../assets/images/mobile-complaints.png";
import HomeImg from "../assets/images/mobile-home.png";
import MapImg from "../assets/images/mobile-map.png";
import ProfileImg from "../assets/images/mobile-profile.png";
import ComplaintsImgSelected from "../assets/images/mobile-complaints-selected.png";
import HomeImgSelected from "../assets/images/mobile-home-selected.png";
import MapImgSelected from "../assets/images/mobile-map-selected.png";
import ProfileImgSelected from "../assets/images/mobile-profile-selected.png";

import {Responsive} from "../helpers/Responsive";

const HEIGHT = Dimensions.get('window').height;

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Image source={ComplaintsImgSelected} style={styles.footer.icon}/>
      <Image source={HomeImgSelected} style={styles.footer.icon}/>
      <Image source={MapImgSelected} style={styles.footer.icon}/>
      <Image source={ProfileImgSelected} style={styles.footer.icon}/>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: Responsive(8, HEIGHT),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 2,
    icon: {
      // borderColor: 'red',
      // borderWidth: 1,
      width: '6%',
      height: '60%',
    },
  },
});

export default Footer;
