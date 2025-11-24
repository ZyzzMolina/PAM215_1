import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import Home from './screens/home';
import Profile from './screens/profile';
import Settings from './screens/settings';
import Duser from './screens/Duser';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="MainProfile" 
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Duser" 
        component={Duser}
        options={{ 
          title: 'Detalles',
          headerStyle: {
            backgroundColor: '#ffffffff',
          },
          headerTintColor: '#0400ffff',
          headerTitleStyle: {
            fontWeight: '600',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007BFF',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            paddingBottom: 5,
            height: 60,
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileStack}
          options={({ route }) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? 'MainProfile';
            return {
              headerShown: false,
              tabBarStyle: routeName === 'Duser' 
                ? { display: 'none' }
                : { paddingBottom: 5, height: 60 }
            };
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={Settings}
          options={{ headerShown: false }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}