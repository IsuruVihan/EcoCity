import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
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
      <Image source={Logo} style={{width: 270, height: 270}} />
    </View>
  );
}

export default LoadingScreen1;
