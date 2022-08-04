import React, {useContext} from 'react';
import Toast from "react-native-toast-message";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {AuthContext} from "../context/AuthContext";

import SplashLoadingView from "./SplashLoadingView";
import LoadingScreen1 from "./LoadingScreen1";
import LoadingScreen2 from "./LoadingScreen2";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import CheckYourMail from "./CheckYourMail";
import NavigatorTab from "./NavigatorTab";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {loggedUser, splashLoading} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator defaultScreenOptions={LoadingScreen1}>
        {splashLoading ? (
          <Stack.Screen name="SplashLoadingScreen" options={{headerShown: false}} component={SplashLoadingView}/>
        ) : (
          loggedUser.accessToken ? (
            <Stack.Screen name="Welcome" options={{headerShown: false}} component={NavigatorTab}/>
          ) : (
            <>
              <Stack.Screen name="LoadingScreen1" options={{headerShown: false}} component={LoadingScreen1}/>
              <Stack.Screen name="LoadingScreen2" options={{headerShown: false}} component={LoadingScreen2}/>
              <Stack.Screen name="Login" options={{headerShown: false}} component={Login}/>
              <Stack.Screen name="ForgotPassword" options={{headerShown: false}} component={ForgotPassword}/>
              <Stack.Screen name="CheckYourMail" options={{headerShown: false}} component={CheckYourMail}/>
            </>
          )
        )}
      </Stack.Navigator>
      <Toast/>
    </NavigationContainer>
  );
}

export default Navigation;
