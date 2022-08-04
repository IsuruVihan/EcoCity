import React, {useContext} from 'react';
import {Dimensions, StyleSheet, Text, View} from "react-native";
import {Button} from "@rneui/base";
import Spinner from "react-native-loading-spinner-overlay/src";

import {AuthContext} from "../context/AuthContext";
import {Responsive} from "../helpers/Responsive";

const HEIGHT = Dimensions.get('window').height;

const Welcome = () => {
  const {loading, loggedUser, logout} = useContext(AuthContext);

  return (
    <View>
      <Spinner visible={loading}/>
      <View style={styles.body}>
        <Text>Welcome {loggedUser.email}</Text>
        <Button onPress={logout} title={'Logout'}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: Responsive(80, HEIGHT),
  },
});

export default Welcome;
