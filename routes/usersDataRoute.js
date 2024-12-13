import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../screens/Profile';
import UsersScreen from '../screens/UsersScreen';

const Stack = createStackNavigator();

const UsersData = () => {
  return (
    <NavigationContainer> {/* Tambahkan NavigationContainer di sini */}
      <Stack.Navigator initialRouteName="UserScreen">
        <Stack.Screen name="UserScreen" component={UsersScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UsersData;
