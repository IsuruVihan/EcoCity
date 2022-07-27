import React, {useEffect, useState} from 'react';
import {Text, View} from "react-native";
import {Button} from "@rneui/base";
import {RemoveAsyncStorageItem} from "../helpers/RemoveAsyncStorageItem";
import {GetAsyncStorageItem} from "../helpers/GetAsyncStorageItem";
import {StackActions} from "@react-navigation/native";

const Welcome = ({navigation}) => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    console.log("Welcome");
    GetAsyncStorageItem('LOGGED_IN_USER')
      .then((user) => {
        console.log("LOGGED IN USER: ", user);
        if (user) {
          setLoggedUser(JSON.parse(user));
        } else {
          setLoggedUser(null);
          return navigation.dispatch(StackActions.replace('Login'));
        }
      })
      .catch((error) => {
        console.log("LOGGED IN USER ERROR: ", error);
      });
  }, []);

  const logout = () => {
    RemoveAsyncStorageItem('LOGGED_IN_USER')
      .then(() => {
        setLoggedUser(null);
        return navigation.dispatch(StackActions.replace('Login'));
      })
      .catch((error) => {
        console.log("LOGOUT USER ERROR: ", error);
      });
  }

  return (
    <View>
      <Text>Welcome</Text>
      <Button onPress={logout} title={'Logout'}/>
    </View>
  );
}

export default Welcome;
