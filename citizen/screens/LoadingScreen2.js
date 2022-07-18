import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import { StackActions } from '@react-navigation/native';

const LoadingScreen2 = ({navigation}) => {
  useEffect(() => {
    setTimeout(
      () => navigation.dispatch(StackActions.replace('Login')),
      1000
    );
  }, []);

  return (
    <View>
      <Text>Loading screen 2</Text>
    </View>
  );
}

export default LoadingScreen2;
