import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";

import Logo2 from '../assets/images/Logo2.png';
import {Responsive} from "../helpers/Responsive";

const HEIGHT = Dimensions.get('window').height;

const Header = ({email}) => {
  return (
    <View style={styles.header}>
      <View style={styles.header.imageContainer}>
        <Image style={styles.header.imageContainer.image} source={Logo2}/>
      </View>
      <View style={styles.header.titleContainer}>
        <Text style={styles.header.titleContainer.title}>{email}</Text>
      </View>
      <View style={styles.header.imageContainer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: Responsive(8, HEIGHT),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderBottomColor: 'lightgray',
    // borderBottomWidth: 1,
    backgroundColor: 'white',
    imageContainer: {
      height: '100%',
      width: '20%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      image: {
        width: '70%',
        height: '60%',
      },
    },
    titleContainer: {
      display: 'flex',
      justifyContent: 'center',
      title: {
        color: '#042434',
      },
    },
  },
});

export default Header;
