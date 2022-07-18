import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import { StackActions } from '@react-navigation/native';

const LoadingScreen1 = ({navigation}) => {
  useEffect(() => {
    setTimeout(
      () => navigation.dispatch(StackActions.replace('LoadingScreen2')),
      1000
    );
  }, []);

  return (
    <View>
      <Text>Loading screen 1</Text>
    </View>
  );
}

export default LoadingScreen1;
