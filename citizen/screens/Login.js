import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {MdAlternateEmail} from 'react-icons/md';

import Logo2 from '../assets/images/Logo2.png';
import Banner from '../assets/images/Banner.png';

const Login = () => {
  return (
    <View style={styles.main}>
      <View style={styles.main.header}>
        <Image source={Logo2} style={styles.main.header.logo} />
      </View>
      <View style={styles.main.banner}>
        <Image source={Banner} style={styles.main.banner.bannerImg} />
      </View>
      <View style={styles.main.title}>
        <Text style={styles.main.title.titleTxt}>Login</Text>
      </View>
      <View style={styles.main.form}>

        <View style={styles.main.form.inputSet}>
          <Text style={styles.main.form.inputSet.label}>
            Email
          </Text>
          <View style={styles.main.form.inputSet.txtField}>
            <View style={styles.main.form.inputSet.txtField.icon}>
              <MdAlternateEmail />
            </View>
            <View style={styles.main.form.inputSet.txtField.enterEmail}>

            </View>
          </View>
        </View>

      </View>
      <View style={styles.main.divider}></View>
      <View style={styles.main.options}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    header: {
      height: '10%',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingLeft: 30,
      backgroundColor: 'white',
      logo: {
        width: 70,
        height: 35,
        backgroundColor: 'white',
      },
    },
    banner: {
      height: '25%',
      marginHorizontal: 30,
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bannerImg: {
        width: '55%',
        height: '100%',
      },
    },
    title: {
      borderWidth: 2,
      borderColor: 'orange',
      height: '10%',
      marginHorizontal: 30,
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      titleTxt: {
        color: 'black',
        fontWeight: '900',
        fontSize: 35,
      },
    },
    form: {
      borderWidth: 2,
      borderColor: 'green',
      height: '40%',
      marginHorizontal: 30,
      backgroundColor: 'white',
      inputSet: {
        borderWidth: 2,
        borderColor: 'red',
        label: {
          borderWidth: 2,
          borderColor: 'blue',
          color: '#075061',
          fontWeight: '500',
        },
        txtField: {
          borderWidth: 2,
          borderColor: 'black',
          height: 40,
          display: 'flex',
          flexDirection: 'row',
          icon: {
            flexGrow: 1,
            borderWidth: 2,
            borderColor: 'pink',
          },
          enterEmail: {
            flexGrow: 11,
            borderWidth: 2,
            borderColor: 'pink',
          },
        },
      },
    },
    divider: {
      borderWidth: 2,
      borderColor: 'black',
      height: '5%',
      marginHorizontal: 30,
      backgroundColor: 'white',
    },
    options: {
      borderWidth: 2,
      borderColor: 'pink',
      height: '10%',
      marginHorizontal: 30,
      backgroundColor: 'white',
    },
  },
});

export default Login;
