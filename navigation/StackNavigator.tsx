import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen.tsx';
import PokemonDetailScreen from '../screens/PokemonDetailScreen.tsx';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PokemonList" component={HomeScreen} options={{ title:'Pokemones' }} />
            <Stack.Screen name="PokemonDetails" component={PokemonDetailScreen} options={{ title: 'Pokémon Details' }} />
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;
