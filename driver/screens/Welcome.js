import React, {useContext} from 'react';
import {Text, View} from "react-native";
import {Button} from "@rneui/base";
import Spinner from "react-native-loading-spinner-overlay/src";

import {AuthContext} from "../context/AuthContext";

const Welcome = ({navigation}) => {
  const {loading, loggedUser, logout} = useContext(AuthContext);

  return (
    <View>
      <Spinner visible={loading}/>
      <Text>Welcome {loggedUser.email}</Text>
      <Button onPress={logout} title={'Logout'}/>
    </View>
  );
}

export default Welcome;
