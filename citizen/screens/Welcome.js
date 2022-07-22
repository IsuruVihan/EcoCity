import React from 'react';
import {Text, View} from "react-native";
import {Button} from "@rneui/base";
import auth from "@react-native-firebase/auth";

const Welcome = () => {
  // Logout
  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  return (
    <View>
      <Text>Welcome</Text>
      <Button onPress={logout} title={'Logout'}/>
    </View>
  );
}

export default Welcome;
