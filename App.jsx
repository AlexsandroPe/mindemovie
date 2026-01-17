import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import MovieCard from './src/components/movieCard';
import { getMovieDetails, getMovieProvider, getRandomMovie } from './src/services/tmdbServices';
import { formatTime } from './src/utils/formatTime';
import { formatDate } from './src/utils/formatDate';

export default function App() {
  const [movie, setMovie] = useState(null)
  const [isWatched, setIsWatched] = useState(false)
  const [providers, setProviders] = useState([]);
  const [details, setDetails] = useState({});
  useEffect(() => { 
    async function loadMovie() {
      try{
        const randomMovie = await getRandomMovie();
        setMovie(randomMovie);
        
        const movieDetails = await getMovieDetails(randomMovie.id);

        setDetails({
          release: formatDate(movieDetails['release_date']),
          duration: formatTime(movieDetails['runtime']),
          rating: movieDetails['vote_average'],
        })
        
        const movieProviders = await getMovieProvider(randomMovie.id);

        if(!movieProviders.br) {
          setProviders([]);
          return
        }

        const provs = Object.values(movieProviders).filter((opt) => typeof opt != "boolean").flatMap(providerArray => providerArray)
        console.log(provs);
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
      <View style={{paddingHorizontal: 12}}>
        <MovieCard movie={movie} details={details}/>
      </View>
      
      <View style={styles.movieDetails}>
        <Text style={styles.movieTitle}>{movie.title}</Text>
        <Text>Onde assistir?</Text>
        {
          providers.length === 0
          ? (<Text style={{fontWeight: "bold", fontSize: 22, color: "#b8b7b7"}}>Filme não disponível no Brasil</Text>)
          : (

            <View style={{height: 100, width: "100%"}}>
            
              <FlatList
                data={providers}
                renderItem={({ item }) => (
                  <View>
                    <Image
                      source={{ uri: `https://image.tmdb.org/t/p/original${item['logo_path']}` }}
                      style={{ borderRadius: 12, height: 80, width: 80}}
                    />
                  </View>
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
  movieTitle: {
    fontSize: 28,
    fontWeight: "600",
    fontStyle: "italic",
    textAlign: "center",
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

