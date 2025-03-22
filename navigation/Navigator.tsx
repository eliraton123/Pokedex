import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './StackNavigator.tsx';
import ProfileScreen from '../screens/ProfileScreen.tsx';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Pokedex"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>🏠</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>👤</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;