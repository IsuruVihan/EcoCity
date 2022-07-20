import React from 'react';
import {Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import BackBtn from "../assets/images/BackBtn.png";
import {Responsive} from "../helpers/Responsive";

// const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ForgotPassword = ({navigation}) => {
  return (
    <KeyboardAwareScrollView
      style={styles.main}
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={true}
    >
      <StatusBar hidden={false} backgroundColor={'#228693'} />
      <View style={styles.main.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{backgroundColor: 'white'}}>
          <Image source={BackBtn} style={styles.main.header.logo}/>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
    display: 'flex',
    header: {
      height: Responsive(10, HEIGHT),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingLeft: 30,
      logo: {
        width: 10,
        height: 16,
      },
    },
  },
});

export default ForgotPassword;
