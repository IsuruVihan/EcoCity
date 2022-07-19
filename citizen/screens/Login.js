import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableHighlight} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {CheckBox, Button, Icon} from "@rneui/themed";

import Logo2 from '../assets/images/Logo2.png';
import Banner from '../assets/images/Banner.png';
import FacebookLogo from '../assets/images/facebook.png';
import GoogleLogo from '../assets/images/google.png';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.main}>
      <View style={styles.main.header}>
        <Image source={Logo2} style={styles.main.header.logo}/>
      </View>
      <View style={styles.main.banner}>
        <Image source={Banner} style={styles.main.banner.bannerImg}/>
      </View>
      <View style={styles.main.title}>
        <Text style={styles.main.title.titleTxt}>Login</Text>
      </View>
      <View style={styles.main.form}>
        <View style={styles.main.form.inputSet}>
          <Text style={styles.main.form.inputSet.label}>Email</Text>
          <View style={styles.main.form.inputSet.txtField}>
            <View style={styles.main.form.inputSet.txtField.icon}>
              <FontAwesome5 name={'at'} color={'#BFDDDE'} size={20} thin/>
            </View>
            <View style={styles.main.form.inputSet.txtField.enterEmail}>
              <TextInput
                onChangeText={setEmail}
                value={email}
                style={styles.main.form.inputSet.txtField.enterEmail.txtInput}
              />
            </View>
          </View>
        </View>
        <View style={styles.main.form.inputSet2}>
          <Text style={styles.main.form.inputSet2.label}>Password</Text>
          <View style={styles.main.form.inputSet2.txtField}>
            <View style={styles.main.form.inputSet2.txtField.icon}>
              <FontAwesome5 name={'unlock'} color={'#BFDDDE'} size={20} thin/>
            </View>
            <View style={styles.main.form.inputSet2.txtField.enterEmail}>
              <TextInput
                onChangeText={setPassword}
                value={password}
                secureTextEntry={!showPassword}
                style={styles.main.form.inputSet2.txtField.enterEmail.txtInput}
              />
            </View>
            <View style={styles.main.form.inputSet2.txtField.icon2}>
              <FontAwesome5
                onPress={() => setShowPassword(!showPassword)}
                name={showPassword ? 'eye-slash' : 'eye'}
                color={'#BFDDDE'}
                size={20}
                thin
              />
            </View>
          </View>
        </View>
        <View style={styles.main.form.set3}>
          <CheckBox
            checked={rememberMe}
            onPress={() => setRememberMe(!rememberMe)}
            checkedColor="#7CB6B8"
            containerStyle={{marginLeft: 0, marginRight: 0, marginTop: 0, marginBottom: 0, paddingLeft: 0,}}
            size={30}
            textStyle={{color: "#7CB6B8", fontWeight: '100',}}
            title="Remember me"
            uncheckedColor="#7CB6B8"
          />
          <Text
            style={styles.main.form.set3.forgotPassword}
            onPress={() => navigation.navigate('ForgotPassword')}
          >Forgot password?</Text>
        </View>
        <View style={styles.main.form.last}>
          <Button
            title={'Sign In'}
            containerStyle={{width: '100%', marginTop: 10, padding: 0,}}
            titleStyle={{fontWeight: 'bold', fontSize: 18,}}
            buttonStyle={{backgroundColor: '#228693', borderRadius: 5, padding: 15,}}
          />
        </View>
      </View>
      <View style={styles.main.divider}>
        <Icon name='ios-remove-outline' type='ionicon' color='#075061'/>
        <Text style={styles.main.divider.signTxt}> Or Sign in with </Text>
        <Icon name='ios-remove-outline' type='ionicon' color='#075061'/>
      </View>
      <View style={styles.main.options}>
        <TouchableHighlight style={styles.main.options.touch}>
          <View style={styles.main.options.touch.view}>
            <Image source={GoogleLogo} style={styles.main.options.touch.view.img}/>
            <Text style={styles.main.options.touch.view.txt}>Google</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.main.options.touch}>
          <View style={styles.main.options.touch.view}>
            <Image source={FacebookLogo} style={styles.main.options.touch.view.img}/>
            <Text style={styles.main.options.touch.view.txt}>Facebook</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    height: '100%',
    display: 'flex',
    header: {
      height: 60,
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
      height: 180,
      marginHorizontal: 30,
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bannerImg: {
        width: '60%',
        height: '100%',
      },
    },
    title: {
      height: 60,
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
      height: 300,
      marginHorizontal: 30,
      backgroundColor: 'white',
      inputSet: {
        marginTop: 20,
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
      inputSet2: {
        marginTop: 20,
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
          icon2: {
            borderLeftWidth: 1,
            borderLeftColor: '#BFDDDE',
            padding: 0,
            height: '90%',
            width: '10%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
          },
          enterEmail: {
            height: '100%',
            width: '80%',
            txtInput: {
              color: '#7CB6B8',
              fontSize: 15,
            },
          },
        },
      },
      set3: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        forgotPassword: {
          color: '#7CB6B8',
          borderBottomWidth: 1,
          borderBottomColor: '#7CB6B8',
        },
      },
      last: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    divider: {
      height: 60,
      marginHorizontal: 30,
      marginTop: 20,
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      signTxt: {
        color: '#075061',
        fontWeight: 'bold',
      },
    },
    options: {
      height: 80,
      marginHorizontal: 30,
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      touch: {
        borderWidth: 1,
        borderColor: '#BFDDDE',
        borderRadius: 10,
        backgroundColor: '#EDFBFC',
        height: '100%',
        width: '49%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        view: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          img: {
            width: 35,
            height: 35,
            marginRight: 4,
          },
          txt: {
            color: '#075061',
            marginLeft: 4,
          },
        },
      },
    },
  },
});

export default Login;
