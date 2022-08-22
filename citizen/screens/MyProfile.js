import React, {useContext} from 'react';
import {Dimensions, StyleSheet, Text, View} from "react-native";
import Spinner from "react-native-loading-spinner-overlay/src";
import {Button} from "@rneui/base";

import {AuthContext} from "../context/AuthContext";
import {Responsive} from "../helpers/Responsive";

const HEIGHT = Dimensions.get('window').height;

const MyProfile = () => {
  const {loading, loggedUser, logout} = useContext(AuthContext);

  return (
    <View style={styles.myProfile}>
      <View style={styles.myProfile.space}/>
      <View style={styles.myProfile.topic}>
        <Text style={styles.myProfile.topic.txt}>My Profile</Text>
      </View>
      <View style={styles.myProfile.space}/>
      <View style={styles.myProfile.status}></View>
      <View style={styles.myProfile.links}></View>
      {/*<Spinner visible={loading}/>*/}
      {/*<View>*/}
      {/*  <Text>Welcome {loggedUser.email}</Text>*/}
      {/*  <Button onPress={logout} title={'Logout'}/>*/}
      {/*</View>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  myProfile: {
    borderWidth: 2,
    borderColor: 'orange',
    height: Responsive(83, HEIGHT),
    paddingHorizontal: 10,
    space: {
      borderWidth: 2,
      borderColor: 'red',
      height: '2%',
    },
    topic: {
      borderWidth: 2,
      borderColor: 'red',
      height: '8%',
      display: 'flex',
      justifyContent: 'center',
      txt: {
        borderWidth: 2,
        borderColor: 'green',
        color: '#042434',
        fontSize: 30,
        fontWeight: '700',
      },
    },
    status: {
      borderWidth: 2,
      borderColor: 'red',
      height: '20%',
    },
    links: {
      borderWidth: 2,
      borderColor: 'red',
      height: '68%',
    },
  },
});

export default MyProfile;
