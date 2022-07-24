import React from 'react';
import {Text, View} from "react-native";
import {Button} from "@rneui/base";
import {useDispatch, useSelector} from "react-redux";

import {logoutReducer} from '../redux/features/user.feature';
import {StackActions} from "@react-navigation/native";

const Welcome = ({navigation}) => {
  const dispatch = useDispatch();

  let userState = useSelector((state) => {
    return state['user'];
  });
  let {user} = userState;

  // Logout
  const userLogout = () => {
    // dispatch(logoutReducer());
    // return navigation.dispatch(StackActions.replace('Login'));
  }

  return (
    <View>
      <Text>Welcome {user.accessToken}</Text>
      <Button onPress={userLogout} title={'Logout'}/>
    </View>
  );
}

export default Welcome;
