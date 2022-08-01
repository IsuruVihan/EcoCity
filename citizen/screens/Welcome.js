import React, {useContext} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from "react-native";
import {Button} from "@rneui/base";
import Spinner from "react-native-loading-spinner-overlay/src";

import Header from "../components/Header";
import Footer from "../components/Footer";

import {AuthContext} from "../context/AuthContext";
import {Responsive} from "../helpers/Responsive";

const HEIGHT = Dimensions.get('window').height;

const Welcome = ({navigation}) => {
  const {loading, loggedUser, logout} = useContext(AuthContext);

  return (
    <View>
      <Spinner visible={loading}/>
      <Header email={loggedUser.email}/>
      <View style={styles.body}>
        <Text>Welcome {loggedUser.email}</Text>
        <Button onPress={logout} title={'Logout'}/>
      </View>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: Responsive(81, HEIGHT),
    borderColor: 'red',
    borderWidth: 2,
  },
});

export default Welcome;
