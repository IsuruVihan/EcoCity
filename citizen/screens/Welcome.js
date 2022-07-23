import React from 'react';
import {Text, View} from "react-native";
import {Button} from "@rneui/base";
import auth from "@react-native-firebase/auth";
import {useDispatch, useSelector} from "react-redux";

import {logout} from '../redux/features/user.feature';
import {StackActions} from "@react-navigation/native";

const Welcome = ({navigation}) => {
  const dispatch = useDispatch();

  let userState = useSelector((state) => {
    return state['user'];
  });
  let {user} = userState;

  // Logout
  const userLogout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        dispatch(logout());
        navigation.dispatch(StackActions.replace('Login'));
      });
  }

  return (
    <View>
      <Text>Welcome {user}</Text>
      <Button onPress={userLogout} title={'Logout'}/>
    </View>
  );
}

export default Welcome;
