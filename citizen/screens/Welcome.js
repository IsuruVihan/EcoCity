import React, {useContext} from 'react';
import {Text, View} from "react-native";
import {Button} from "@rneui/base";
import Spinner from "react-native-loading-spinner-overlay/src";

import Header from "../components/Header";

import {AuthContext} from "../context/AuthContext";

const Welcome = ({navigation}) => {
  const {loading, loggedUser, logout} = useContext(AuthContext);

  return (
    <View>
      <Spinner visible={loading}/>
      <Header email={loggedUser.email}/>
      <Text>Welcome {loggedUser.email}</Text>
      <Button onPress={logout} title={'Logout'}/>
    </View>
  );
}

export default Welcome;
