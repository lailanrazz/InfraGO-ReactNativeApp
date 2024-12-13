/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './screens/Login';
//import App from './App';
import App from './routes/routes';
//import App from './navigation/ButtomTabs';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
