import React from 'react';
import {Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Button} from "@rneui/themed";
import {StackActions} from "@react-navigation/native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import BackBtn from "../assets/images/BackBtn.png";
import ForgotPasswordBanner from "../assets/images/ForgotPasswordBanner.png";

import {Responsive} from "../helpers/Responsive";

// const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const CheckYourMail = ({navigation}) => {
  return (
    <KeyboardAwareScrollView
      style={styles.main}
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={true}
    >
      <StatusBar hidden={false} backgroundColor={'#228693'}/>
      <View style={styles.main.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.main.header.touchable}>
          <Image source={BackBtn} style={styles.main.header.touchable.logo}/>
          <Text style={styles.main.header.touchable.txt}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main.banner}>
        <Image source={ForgotPasswordBanner} style={styles.main.banner.bannerImg}/>
      </View>
      <View style={styles.main.title}>
        <Text style={styles.main.title.txt}>Check your mail</Text>
      </View>
      <View style={styles.main.description}>
        <Text style={styles.main.description.txt}>
          We have sent a password recover instructions to your email.
        </Text>
      </View>
      <View style={styles.main.last}>
        <Button
          title={'Open email app'}
          containerStyle={{width: '100%', marginTop: 10, padding: 0,}}
          titleStyle={{fontWeight: 'bold', fontSize: 18,}}
          buttonStyle={{backgroundColor: '#228693', borderRadius: 10, padding: 15,}}
          // onPress={() => navigation.dispatch(StackActions.replace('CheckYourMail'))}
        />
      </View>
      <TouchableOpacity
        style={styles.main.skip}
        onPress={() => navigation.dispatch(StackActions.replace('Login'))}
      >
        <Text style={styles.main.skip.txt}>
          Skip, I'll confirm later
        </Text>
      </TouchableOpacity>
      <View style={styles.main.error}>
        <Text style={styles.main.error.txt}>
          Did not receive the email? Check your spam folder, or
          <TouchableOpacity onPress={() => navigation.dispatch(StackActions.replace('ForgotPassword'))}>
            <Text style={styles.main.error.txt.special}> try another email address</Text>
          </TouchableOpacity>
        </Text>
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
      touchable: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        logo: {
          width: 10,
          height: 16,
        },
        txt: {
          marginLeft: 5,
          fontSize: 15,
          fontWeight: 'bold',
          color: 'black',
        },
      },
    },
    banner: {
      height: Responsive(25, HEIGHT),
      marginHorizontal: 30,
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bannerImg: {
        width: '55%',
        height: '90%',
      },
    },
    title: {
      height: Responsive(15, HEIGHT),
      marginHorizontal: 30,
      backgroundColor: 'white',
      txt: {
        marginRight: 50,
        fontSize: 40,
        fontWeight: '900',
        color: '#042434',
      },
    },
    description: {
      height: Responsive(10, HEIGHT),
      marginHorizontal: 30,
      backgroundColor: 'white',
      txt: {
        fontSize: 18,
        fontWeight: '300',
        color: '#707070',
      },
    },
    last: {
      marginHorizontal: 30,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    skip: {
      marginHorizontal: 30,
      marginVertical: 30,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      txt: {
        color: '#707070',
        borderBottomWidth: 1,
        borderColor: '#707070',
      },
    },
    error: {
      marginHorizontal: 30,
      marginTop: 90,
      txt: {
        textAlign: 'center',
        color: '#707070',
        special: {
          color: '#228693',
        },
      },
    },
  },
});

export default CheckYourMail;
