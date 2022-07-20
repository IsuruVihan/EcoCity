import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {StackActions} from '@react-navigation/native';

import LoadingScreen2Img from '../assets/images/LoadingScreen2.png';

const LoadingScreen2 = ({navigation}) => {
  useEffect(() => {
    setTimeout(
      () => navigation.dispatch(StackActions.replace('Login')),
      1000
    );
  }, []);

  return (
    <View style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Image source={LoadingScreen2Img} style={{width: '100%', height: '100%'}} />
    </View>
  );
}

export default LoadingScreen2;
