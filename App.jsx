import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import MovieCard from './src/components/movieCard';
import { getMovieProvider, getRandomMovie } from './src/services/tmdbServices';
export default function App() {
  const [movie, setMovie] = useState(null)
  const [isWatched, setIsWatched] = useState(false)
  const [providers, setProviders] = useState([]);

  useEffect(() => { 
    async function loadMovie() {
        const randomMovie = await getRandomMovie();
        setMovie(randomMovie);
        const movieProviders = await getMovieProvider(randomMovie.id);

        if(Object.hasOwn(movieProviders, "message")) {
          setProviders([])
          return
        }

        let provs = Object.values(movieProviders).filter(opt => opt !== null).flat();
        setProviders(provs);
    }
    loadMovie();
  }, [isWatched])

  if (!movie) {
    return (
      <View  style={styles.container}>
        <Text>Carregando filme...</Text>
      </View>
    );
  }
  
  return (
    <ImageBackground blurRadius={10}  source={{uri: `https://image.tmdb.org/t/p/w342${movie.poster_path}`}} resizeMode='cover' style={styles.container}>
      <MovieCard movie={movie} />

      {
        providers.length === 0
        ? (<Text>Filme não disponível no Brasil</Text>)
        : (
            <FlatList 
              data={providers}
              renderItem={({item}) => (
              <View>
                <Image source={{uri: `https://image.tmdb.org/t/p/original${item}`}} style={{borderRadius: 12, height: 100, width: 100}} />
              </View>
            )}
            contentContainerStyle={{gap: 20}}
            horizontal
        />
        )
      }
      
      <View style={{}}>
        <TouchableOpacity onPress={() => setIsWatched(!isWatched)}  activeOpacity={0.6} style={{ elevation: 18, backgroundColor: "#444b42ff", width: 200, alignItems: "center", padding: 20, borderRadius: 14}}>
          <Text style={{color: "#fff", fontSize: 22, fontWeight: "600"}}>Já assisti</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="inverted" />
    </ImageBackground>
  );
} 
// 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 46,
    gap: 50,
    paddingHorizontal: 24,
    justifyContent: "center",
    backgroundColor: '#b6b6b6ff',
    alignItems: 'center',
  },
  heading: {
    backgroundColor: "#000000a6",
    fontSize: 28,
    borderRadius: 18,
    fontWeight: "600",
    paddingHorizontal: 26,
    textAlign: "center",
    color: "#f0f0ff",
  },
});
