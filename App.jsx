import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MovieCard from './src/components/movieCard';
import { useMovieData } from './src/hooks/useMovieData'
import WatchProviders from './src/components/watchProviders';


export default function App() {
  const { handleMovie, loading, movieData } = useMovieData();

  if(loading) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <MovieCard details={movieData.details} movie={movieData.movie} />

      <View style={styles.whereToWatch}>
        <Text style={styles.providersLabel}>Onde assistir?</Text>
        <WatchProviders providers={movieData.providers} />
      </View>  
 <TouchableOpacity
          onPress={ handleMovie }
          activeOpacity={0.6}
          style={{
            backgroundColor: "#444b42ff",
            width: 200,
            alignItems: "center",
            padding: 20,
            borderRadius: 14
          }}
        >
          <Text style={{ color: "#fff", fontSize: 22, fontWeight: "600" }}>
            Já assisti
          </Text>
        </TouchableOpacity>
        
      <StatusBar style="inverted" />
    </View>
  );
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1a1d',
    paddingTop: 80,
    paddingHorizontal: 24,
    gap: 20,
  },

  whereToWatch: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    gap: 8,
  },

  providersLabel: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff"
  },
});

