import React, {useState} from 'react';
import {Dimensions, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {Button} from "@rneui/themed";

import BackBtn from "../assets/images/BackBtn.png";
import ForgotPasswordBanner from "../assets/images/ForgotPasswordBanner.png";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import {Responsive} from "../helpers/Responsive";

// const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
    <KeyboardAwareScrollView
      style={styles.main}
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={true}
    >
      <StatusBar hidden={false} backgroundColor={'#228693'} />
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
        <Text style={styles.main.title.txt}>Forgot Password?</Text>
      </View>
      <View style={styles.main.description}>
        <Text style={styles.main.description.txt}>
          Don't worry! it happens. Please enter the email address associated with your account.
        </Text>
      </View>
      <View style={styles.main.inputSet}>
        <Text style={styles.main.inputSet.label}>Email</Text>
        <View style={styles.main.inputSet.txtField}>
          <View style={styles.main.inputSet.txtField.icon}>
            <FontAwesome5 name={'at'} color={'#BFDDDE'} size={20} thin/>
          </View>
          <View style={styles.main.inputSet.txtField.enterEmail}>
            <TextInput
              onChangeText={setEmail}
              value={email}
              style={styles.main.inputSet.txtField.enterEmail.txtInput}
            />
          </View>
        </View>
      </View>
      <View style={styles.main.last}>
        <Button
          title={'Submit'}
          containerStyle={{width: '100%', marginTop: 10, padding: 0,}}
          titleStyle={{fontWeight: 'bold', fontSize: 18,}}
          buttonStyle={{backgroundColor: '#228693', borderRadius: 10, padding: 15,}}
        />
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
        marginRight: 40,
        fontSize: 40,
        fontWeight: '900',
        color: '#042434',
      },
    },
    description: {
      height: Responsive(10, HEIGHT),
      marginHorizontal: 30,
      marginBottom: 30,
      backgroundColor: 'white',
      txt: {
        fontSize: 18,
        fontWeight: '300',
        color: '#707070',
      },
    },
    inputSet: {
      marginHorizontal: 30,
      label: {
        color: '#075061',
        fontWeight: '500',
      },
      txtField: {
        borderBottomWidth: 1,
        borderBottomColor: '#7CB6B8',
        height: 40,
        padding: 0,
        display: 'flex',
        flexDirection: 'row',
        icon: {
          padding: 0,
          height: '100%',
          width: '10%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        },
        enterEmail: {
          height: '100%',
          width: '90%',
          txtInput: {
            color: '#7CB6B8',
            fontSize: 15,
          },
        },
      },
    },
    last: {
      marginHorizontal: 30,
      marginTop: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});

export default ForgotPassword;
