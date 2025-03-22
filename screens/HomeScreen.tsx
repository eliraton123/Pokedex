import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {ActivityIndicator} from 'react-native';

interface Pokemon {
  name: string;
  image: string;
  url: string;
}

const HomeScreen = ({navigation}: any) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get(
            'https://pokeapi.co/api/v2/pokemon?limit=50',
        );
        const pokemonData = response.data.results.map(
            (pokemon: {name: string; url: string}) => ({
              name: pokemon.name,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                  pokemon.url.split('/')[6]
              }.png`,
              url: pokemon.url,
            }),
        );
        setPokemons(pokemonData);
        setFilteredPokemons(pokemonData);
      } catch (error) {
        console.error('Error fetching pokemons:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    const filtered = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredPokemons(filtered);
  }, [searchQuery, pokemons]);

  if (loading) {
    return (
        <ActivityIndicator size="large" color="#FF4500" style={styles.loader} />
    );
  }

  return (
      <View style={styles.container}>
        <TextInput
            style={styles.searchInput}
            placeholder="Buscar pokemon..."
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
        />
        <FlatList
            data={filteredPokemons}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('PokemonDetails', {url: item.url})
                    }>
                  <View style={styles.card}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Image source={{uri: item.image}} style={styles.image} />
                  </View>
                </TouchableOpacity>
            )}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 0.2,
  },
  image: {
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  searchInput: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius:10,
  },
});

export default HomeScreen;
