/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ListRegion from './src/components/ListRegion';
import ShowMap from './src/components/ShowMap';
console.disableYellowBox = true;

const MainNavigator = createStackNavigator({
  ListRegionNav: {
    screen: ListRegion,    
  },
  ShowMapNav: {
    screen: ShowMap,  
  },
});

const App = createAppContainer(MainNavigator);

export default App;
