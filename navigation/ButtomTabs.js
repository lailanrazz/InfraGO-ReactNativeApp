import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/HomeScreen';
import UsersScreen from '../screens/UsersScreen';
import Personal from '../screens/Personal';
import { WebView } from 'react-native-webview';

const formInput = 'https://lailanrazz.github.io/DataKerusakanJalan/';
const webMap = 'https://lailanrazz.github.io/DataKerusakanJalan/map.html';

function Homescreen() {
    return <HomeScreen />;
}

function Mapscreen() {
    return <WebView source={{ uri: webMap }} />;
}

function Addscreen() {
    return <WebView source={{ uri: formInput }} />;
}

function Usersscreen() {
    return <UsersScreen />;
}

function Personalscreen() {
    return <Personal />;
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    borderRadius: 20,
                    height: 65,
                    backgroundColor: '#19673d', // Warna hijau tua untuk tabBar
                    borderColor: '#ffdf39',
                    borderWidth: 2,
                },
            }}>
            <Tab.Screen
                name="Home"
                component={Homescreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: focused ? '#ffdf39' : '#19673d',
                                width: 55,
                                height: 55,
                                borderRadius: 30,
                            }}>
                            <FontAwesome5
                                name="home"
                                size={size}
                                style={{ color: focused ? '#19673d' : '#fff' }}
                            />
                            <Text
                                style={{
                                    color: focused ? '#19673d' : '#fff',
                                    fontSize: 10,
                                }}>
                                Home
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Map"
                component={Mapscreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: focused ? '#ffdf39' : '#19673d',
                                width: 55,
                                height: 55,
                                borderRadius: 30,
                            }}>
                            <FontAwesome5
                                name="map-marker-alt"
                                size={size}
                                style={{ color: focused ? '#19673d' : '#fff' }}
                            />
                            <Text
                                style={{
                                    color: focused ? '#19673d' : '#fff',
                                    fontSize: 10,
                                }}>
                                Map
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Add"
                component={Addscreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: focused ? '#ffdf39' : '#19673d',
                                width: 55,
                                height: 55,
                                borderRadius: 30,
                                top: -30,
                                borderColor: '#fff',
                                borderWidth: 1,
                            }}>
                            <FontAwesome5
                                name="plus"
                                size={size}
                                style={{ color: focused ? '#19673d' : '#fff' }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="User"
                component={Usersscreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: focused ? '#ffdf39' : '#19673d',
                                width: 55,
                                height: 55,
                                borderRadius: 30,
                            }}>
                            <FontAwesome5
                                name="users"
                                size={size}
                                style={{ color: focused ? '#19673d' : '#fff' }}
                            />
                            <Text
                                style={{
                                    color: focused ? '#19673d' : '#fff',
                                    fontSize: 10,
                                }}>
                                List Data
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Users"
                component={Personalscreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: focused ? '#ffdf39' : '#19673d',
                                width: 55,
                                height: 55,
                                borderRadius: 30,
                            }}>
                            <FontAwesome5
                                name="user"
                                size={size}
                                style={{ color: focused ? '#19673d' : '#fff' }}
                            />
                            <Text
                                style={{
                                    color: focused ? '#19673d' : '#fff',
                                    fontSize: 10,
                                }}>
                                About me
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default MyTabs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#19673d',
    },
});
