import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './App';
import Mahasiswa from './Mahasiswa';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { WebView } from 'react-native-webview';
import Createdata from './Createdata';
import Datamahasiswa from './Listdata';
import Editdata from './Editdata';
function HomeScreen() {
  return (
    <Createdata />
  );
}

function DataMahasiswaScreen() {
  return (
    <Datamahasiswa />
  );
}

function EditScreen() {
  return (
    <Editdata/>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tambah" component={HomeScreen} 
      options={{ headerShown: false,
        tabBarIcon: ({ color }) => (
          <FontAwesomeIcon icon={faPlusCircle} color={color} size={20} />
        ),}}/>
        <Tab.Screen name="Mahasiswa" component={DataMahasiswaScreen}  options={{ headerShown: true,
        tabBarIcon: ({ color }) => (
          <FontAwesomeIcon icon={faUserGraduate} color={color} size={20} />
        ),}}/>

      <Tab.Screen name="Edit" component={EditScreen}  options={{ headerShown: false,
        tabBarIcon: ({ color }) => (
          <FontAwesomeIcon icon={faUserPen} color={color} size={20} />
        ),}}/>

      </Tab.Navigator>
    </NavigationContainer>
  );

}