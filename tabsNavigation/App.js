import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// App.js - Esto es correcto, NO lo cambies a react-native-vector-icons
import { Ionicons } from '@expo/vector-icons';
import Home from './screens/home';
import Profile from './screens/profile';
import Settings from './screens/settings';

const Tab = createBottomTabNavigator();

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
          component={Profile}
          options={{ headerShown: false }}
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