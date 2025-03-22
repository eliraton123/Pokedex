import { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import axios from 'axios';

interface PokemonDetail {
  id: number;
  name: string;
  height: any;
  weight: any;
  base_experience: number;
  sprites: any;
  types?: any[];
}

const PokemonDetailsScreen = ({ route }: any) => {
  const { url } = route.params;
  const [pokemon, setPokemon] = useState<PokemonDetail>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(url);
        setPokemon(response.data);
      } catch (error) {
        console.error('Error fetching pokemon details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [url]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#FF4500" />
      </View>
    );
  }


  return (
    <ScrollView style={styles.container}>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: pokemon?.sprites.other['official-artwork'].front_default }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Altura:</Text>
          <Text style={styles.infoValue}>{pokemon?.height / 10} m</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Peso:</Text>
          <Text style={styles.infoValue}>{pokemon?.weight / 10} kg</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Exp Base:</Text>
          <Text style={styles.infoValue}>{pokemon?.base_experience}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  infoContainer: {
    padding: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  infoLabel: {
    fontSize: 16,
    color: '#555',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PokemonDetailsScreen;