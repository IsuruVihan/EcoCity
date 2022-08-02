import React, {useContext, useState} from 'react';
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

  const [selectedLink, setSelectedLink] = useState('home');

  return (
    <View>
      <Spinner visible={loading}/>
      <Header email={loggedUser.email}/>
      <View style={styles.body}>
        <Text>Welcome {loggedUser.email}</Text>
        <Button onPress={logout} title={'Logout'}/>
      </View>
      <Footer selected={selectedLink} onChange={setSelectedLink}/>
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
