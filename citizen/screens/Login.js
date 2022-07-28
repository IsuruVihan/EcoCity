import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Button, CheckBox} from "@rneui/themed";
import Toast from 'react-native-toast-message';
import {StackActions} from "@react-navigation/native";

import Logo2 from '../assets/images/Logo2.png';
import Banner from '../assets/images/Banner.png';

import {Responsive} from "../helpers/Responsive";
import {getLoggedInUser, loginUser} from "../api/Login";
import {SetAsyncStorageItem} from "../helpers/SetAsyncStorageItem";
import {GetAsyncStorageItem} from "../helpers/GetAsyncStorageItem";
import {RemoveAsyncStorageItem} from "../helpers/RemoveAsyncStorageItem";

// const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  const [initialized, setInitialized] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    console.log("Login");
    GetAsyncStorageItem('LOGGED_IN_USER')
      .then((user) => {
        setLoggedUser(JSON.parse(user));
        console.log("LOGGED IN USER: ", loggedUser);
        if (loggedUser) {
          getLoggedInUser(loggedUser.accessToken, loggedUser.refreshToken)
            .then((res) => {
              if (res.data.email) {
                if (res.data.newAccessToken && res.data.newRefreshToken) {
                  let tempUser = {
                    email: res.data.email,
                    accessToken: res.data.newAccessToken,
                    refreshToken: res.data.newRefreshToken,
                  };
                  SetAsyncStorageItem('LOGGED_IN_USER', JSON.stringify(tempUser))
                    .then(() => {
                      setLoggedUser(tempUser);
                      Toast.show({
                        type: 'success',
                        text1: 'Welcome back!',
                        topOffset: 10,
                      });
                      return navigation.dispatch(StackActions.replace('Welcome'));
                    })
                    .catch((error4) => {
                      console.log("ERROR 4: ", error4);
                    });
                }
              } else {
                RemoveAsyncStorageItem('LOGGED_IN_USER')
                  .then(() => {
                    setLoggedUser(null);
                    Toast.show({
                      type: 'error',
                      text1: 'Please login',
                      topOffset: 10,
                    });
                  })
                  .catch((error3) => {
                    console.log("ERROR 3: ", error3);
                  });
              }
            })
            .catch((error2) => {
              console.log("ERROR 2: ", error2);
            });
        }
      })
      .catch((error1) => {
        console.log("ERROR 1: ", error1);
      });
  }, []);

  const login = () => {
    if (email.length === 0 || password.length === 0) {
      return Toast.show({
        type: 'error',
        text1: 'Incomplete user credentials',
        text2: 'Please insert email and password',
        topOffset: 10,
      });
    }
    const formData = {
      email: email,
      password: password
    };
    loginUser(formData)
      .then((res) => {
        Toast.show({
          type: 'success',
          text1: res.data.message,
          topOffset: 10,
        });
        const newUser = {
          email: res.data.email,
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
        };
        SetAsyncStorageItem('LOGGED_IN_USER', JSON.stringify(newUser))
          .then(() => {
            setLoggedUser(newUser);
            return navigation.dispatch(StackActions.replace('Welcome'));
          })
          .catch((error) => {
            console.log("LOGIN ERROR: ", error);
          });
      })
      .catch((error) => {
        console.log("LOGIN ERROR: ", error);
        Toast.show({
          type: 'error',
          text1: error.response.data.message,
          topOffset: 10,
        });
      });
  }

  return (
    <KeyboardAwareScrollView
      style={styles.main}
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={true}
    >
      <StatusBar hidden={false} backgroundColor={'#228693'}/>
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
                secureTextEntry={showPassword}
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
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.main.form.set3.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.main.form.last}>
          <Button
            title={'Sign In'}
            containerStyle={{width: '100%', marginTop: 10, padding: 0,}}
            titleStyle={{fontWeight: 'bold', fontSize: 18,}}
            buttonStyle={{backgroundColor: '#228693', borderRadius: 10, padding: 15,}}
            onPress={login}
          />
        </View>
      </View>
      {/*<View style={styles.main.divider}>*/}
      {/*  <Icon name='ios-remove-outline' type='ionicon' color='#075061'/>*/}
      {/*  <Text style={styles.main.divider.signTxt}> Or Sign in with </Text>*/}
      {/*  <Icon name='ios-remove-outline' type='ionicon' color='#075061'/>*/}
      {/*</View>*/}
      {/*<View style={styles.main.options}>*/}
      {/*  <TouchableOpacity style={styles.main.options.touch}*/}
      {/*                    onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!')).catch((error) => console.log("ERROR: ", error))}>*/}
      {/*    <View style={styles.main.options.touch.view}>*/}
      {/*      <Image source={GoogleLogo} style={styles.main.options.touch.view.img}/>*/}
      {/*      <Text style={styles.main.options.touch.view.txt}>Google</Text>*/}
      {/*    </View>*/}
      {/*  </TouchableOpacity>*/}
      {/*  <TouchableOpacity style={styles.main.options.touch}>*/}
      {/*    <View style={styles.main.options.touch.view}>*/}
      {/*      <Image source={FacebookLogo} style={styles.main.options.touch.view.img}/>*/}
      {/*      <Text style={styles.main.options.touch.view.txt}>Facebook</Text>*/}
      {/*    </View>*/}
      {/*  </TouchableOpacity>*/}
      {/*</View>*/}
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
      height: Responsive(20, HEIGHT),
      marginHorizontal: 30,
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bannerImg: {
        width: '50%',
        height: '100%',
      },
    },
    title: {
      height: Responsive(10, HEIGHT),
      marginHorizontal: 30,
      marginTop: 40,
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
      height: Responsive(40, HEIGHT),
      marginHorizontal: 30,
      backgroundColor: 'white',
      inputSet: {
        marginTop: 10,
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
        marginTop: 10,
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
      height: Responsive(5, HEIGHT),
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
      height: Responsive(10, HEIGHT),
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
