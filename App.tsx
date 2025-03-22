import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen.tsx';
import AppNavigator from './navigation/Navigator.tsx'; // Tus Tabs

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={LoginScreen} />
                <Stack.Screen name="AppNavigator" component={AppNavigator} options={{gestureEnabled:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
