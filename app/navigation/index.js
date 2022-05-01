import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import TimelineScreen from '../screens/Timeline';
import { navigationRef } from './RootNavigation';
import AddEntryScreen from '../screens/Entry';
import IconBasic from '../components/Icon';
import { StyleConstants } from '../utils/GenericStyles';
import { Platform } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function renderTabScreens() {
  const renderScreenOptions = ({ route }) => ({
    tabBarIcon: ({ color }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = 'home';
      } else if (route.name === 'Timeline') {
        iconName = 'timeline';
      }

      return <IconBasic color={color} name={iconName} fontSize={20} />;
    },
  });

  return (
    <Tab.Navigator
      screenOptions={renderScreenOptions}
      tabBarOptions={{
        style: {
          backgroundColor: StyleConstants.color.$PRIMARY,
          borderTopWidth: 0,
          ...Platform.select({
            android: {
              height: 60,
              paddingBottom: 8,
            },
          }),
        },
        activeTintColor: 'white',
        labelStyle: {
          fontWeight: '800',
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Timeline" component={TimelineScreen} />
    </Tab.Navigator>
  );
}

const Navigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Tabs" component={renderTabScreens} />
          <Stack.Screen name="AddEntry" component={AddEntryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigator;
