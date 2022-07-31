import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";

import Logo2 from '../assets/images/Logo2.png';
import {Responsive} from "../helpers/Responsive";

const HEIGHT = Dimensions.get('window').height;

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.header.imageContainer}>
        <Image style={styles.header.imageContainer.image} source={Logo2}/>
      </View>
      <View style={styles.header.titleContainer}>
        <Text style={styles.header.titleContainer.title}>Welcome</Text>
      </View>
      <View style={styles.header.imageContainer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderColor: 'red',
    borderWidth: 2,
    width: '100%',
    height: Responsive(8, HEIGHT),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    imageContainer: {
      borderColor: 'green',
      borderWidth: 2,
      height: '100%',
      width: '20%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      image: {
        // borderColor: 'blue',
        // borderWidth: 2,
        width: '70%',
        height: '60%',
      },
    },
    title: {
      borderColor: 'blue',
      borderWidth: 2,
      display: 'flex',
      justifyContent: 'center',
    },
  },
});

export default Header;
