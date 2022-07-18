import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoadingScreen1 from "./screens/LoadingScreen1";
import LoadingScreen2 from "./screens/LoadingScreen2";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen1">
        <Stack.Screen name="LoadingScreen1" component={LoadingScreen1} />
        <Stack.Screen name="LoadingScreen2" component={LoadingScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
