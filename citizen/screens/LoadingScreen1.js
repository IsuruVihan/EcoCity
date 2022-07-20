import React, {useEffect} from 'react';
import {View, Image, StatusBar} from 'react-native';
import {StackActions} from '@react-navigation/native';

import Logo from "../assets/images/Logo.png";

const LoadingScreen1 = ({navigation}) => {
  useEffect(() => {
    setTimeout(
      () => navigation.dispatch(StackActions.replace('LoadingScreen2')),
      1000
    );
  }, []);

  return (
    <View style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar hidden={false} backgroundColor={'#228693'}/>
      <Image source={Logo} style={{width: 270, height: 270}}/>
    </View>
  );
}

export default LoadingScreen1;
