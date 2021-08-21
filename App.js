import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import songsReducer from './src/Redux/reducer/index';
import {createStore} from 'redux';
import {HomePage} from './src/Pages';
import FavouriteSongs from './src/Pages/FavouriteSongs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const store = createStore(songsReducer);
const Tab = createBottomTabNavigator();

const settings = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'Favourites') {
      iconName = focused ? 'star' : 'star-outline';
    }

    return <Icon name={iconName} size={size} color={color} />;
  },
  tabBarStyle: {
    backgroundColor: '#191932',
    borderTopWidth: 0,
  },
  tabBarActiveTintColor: '#FFF',
  tabBarInactiveTintColor: 'gray',
  headerShown: false,
});

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={settings}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Favourites" component={FavouriteSongs} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
