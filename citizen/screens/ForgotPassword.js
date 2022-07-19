import React from 'react';
import {Text, View} from "react-native";

const ForgotPassword = ({navigation}) => {
  return (
    <View>
      <Text>Forgot password</Text>
      <Text onPress={() => navigation.goBack()}>Back to login</Text>
    </View>
  );
}

export default ForgotPassword;
