import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'


import LoadingScreen1 from "./screens/LoadingScreen1";
import LoadingScreen2 from "./screens/LoadingScreen2";
import Login from "./screens/Login";
import ForgotPassword from "./screens/ForgotPassword";
import CheckYourMail from "./screens/CheckYourMail";
import Welcome from "./screens/Welcome";

import { store } from './redux/store';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="LoadingScreen1">
          <Stack.Screen name="LoadingScreen1" options={{headerShown: false}} component={LoadingScreen1}/>
          <Stack.Screen name="LoadingScreen2" options={{headerShown: false}} component={LoadingScreen2}/>
          <Stack.Screen name="Login" options={{headerShown: false}} component={Login}/>
          <Stack.Screen name="ForgotPassword" options={{headerShown: false}} component={ForgotPassword}/>
          <Stack.Screen name="CheckYourMail" options={{headerShown: false}} component={CheckYourMail}/>
          <Stack.Screen name="Welcome" options={{headerShown: false}} component={Welcome}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
