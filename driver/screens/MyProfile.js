import React, {useContext} from 'react';
import {Text, View} from "react-native";
import Spinner from "react-native-loading-spinner-overlay/src";
import {Button} from "@rneui/base";
import {AuthContext} from "../context/AuthContext";

const MyProfile = () => {
  const {loading, loggedUser, logout} = useContext(AuthContext);

  return (
    <View>
      <Spinner visible={loading}/>
      <View>
        <Text>Welcome {loggedUser.email}</Text>
        <Button onPress={logout} title={'Logout'}/>
      </View>
    </View>
  );
}
export default MyProfile;
