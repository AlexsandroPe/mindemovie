import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MovieCard from "../../components/movieCard";
import { useMovieData } from "../../hooks/useMovieData"
import WatchProviders from '../../components/watchProviders';
import { SafeAreaView } from 'react-native-safe-area-context';


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
    <SafeAreaView  style={styles.container}>
      <MovieCard details={movieData.details} movie={movieData.movie} />

      <View style={styles.whereToWatch}>
        <Text style={styles.providersLabel}>Onde assistir?</Text>
        <WatchProviders providers={movieData.providers} />
      </View>  
      <TouchableOpacity
        onPress={handleMovie}
        activeOpacity={0.6}
        style={styles.button}
      >
        <Text style={styles.buttonTitle}>
          Já assisti
        </Text>
      </TouchableOpacity>

      <StatusBar style="inverted" />
    </SafeAreaView>
  );
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1a1d',
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

  button: {
    backgroundColor: "#FA8226",
    width: 306,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 40,
    alignSelf: "center",
    marginTop: 50
  },
  buttonTitle:{ 
    width: "100%",
    textAlign: "center",
    color: "#fff", 
    fontSize: 20, 
    fontWeight: "600" 
  },
});

