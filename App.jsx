import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import MovieCard from './src/components/movieCard';
import { getMovieProvider, getRandomMovie } from './src/services/tmdbServices';

export default function App() {
  const [movie, setMovie] = useState(null)
  const [isWatched, setIsWatched] = useState(false)
  const [providers, setProviders] = useState([]);

  useEffect(() => { 
    async function loadMovie() {
      try{
        const randomMovie = await getRandomMovie();
        setMovie(randomMovie);
        const movieProviders = await getMovieProvider(randomMovie.id);

        if(Object.hasOwn(movieProviders, "message") ) {
          setProviders([])
          return
        }

        let provs = Object.values(movieProviders).filter(opt => opt !== null).flat();
        setProviders(provs);
      } catch(error){
          console.error(error)
      }
       
    }
    loadMovie();
  }, [isWatched])

  if (!movie) {
    return (
      <View  style={styles.loading}>
        <Text>Carregando filme...</Text>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <MovieCard movie={movie}/>
      
      <View style={styles.movieDetails}>
        <Text>{movie.title}</Text>
        {
          providers.length === 0
          ? (<Text>Filme não disponível no Brasil</Text>)
          : (

            <View style={{height: 100, width: "100%"}}>
            
              <FlatList
                data={providers}
                renderItem={({ item }) => (
                  <Image
                    source={{ uri: `https://image.tmdb.org/t/p/original${item}` }}
                    style={{ borderRadius: 12, height: 80, width: 80}}
                  />
                )}
          
                style={{
                  width: "100%",
                }}
                contentContainerStyle={{ 
                  paddingHorizontal: 24,
                  paddingVertical: 20,
                  alignItems: "center",
                  gap: 30,
                }}
                showsHorizontalScrollIndicator={false}
                horizontal
              />
            
            </View>
            
          )
        }

        <TouchableOpacity
          onPress={() => setIsWatched(!isWatched)}
          activeOpacity={0.6}
          style={{
            elevation: 18,
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
      </View>
      
      <StatusBar style="inverted" />
    </View>
  );
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1a1d',
    paddingTop: 50,
    gap: 40,
  },
  
  loading: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

 movieDetails: {
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50,
  width: "100%",
  padding: 10,
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "space-between", 
  gap: 24,                      
},

});

