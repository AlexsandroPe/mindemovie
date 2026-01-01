import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, Text, View, Animated, TouchableOpacity} from 'react-native';
import MovieCard from './src/components/movieCard';


const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzA1MGY4NDQ2OTI3ODFjNmQ3MzgyODJiMDlhNTBmNiIsIm5iZiI6MTc2NzAzODY4NC4wNDcwMDAyLCJzdWIiOiI2OTUyZGVkYzQwMTk0ZDU3MmE0YWQ4YjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.br_x8K-3LM1QtNim3-kfwqO81h9C_QTlDIMak9WQVR8"

export default function App() {
  const [list, setDado] = useState()
  const [already, setAlready] = useState()
  const page = Math.floor(Math.random() * 501)
  useEffect(() => { 
    fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}`, {
      headers:{
        Authorization: `Bearer ${TOKEN}`
      }
    }).then(response => {
      return response.json();
    }).then(data => {
      
      console.log(data.results.length);
      // console.log(Object.keys(data));
      const randomMovie = Math.floor(Math.random() * data.results.length);

      setDado(data.results[randomMovie]);
    }).catch(error => {
      console.error(error);
    })
  }, [already])

  if (!list) {
  return (
    <View  style={styles.container}>
      <Text>Carregando filme...</Text>
    </View>
  );
}
  
  return (
    <ImageBackground blurRadius={10}  source={{uri: `https://image.tmdb.org/t/p/w342${list.poster_path}`}} resizeMode='cover' style={styles.container}>
      <MovieCard movie={list} />
      <View style={{}}>
        <TouchableOpacity onPress={() => setAlready(!already)} activeOpacity={0.6} style={{ elevation: 18, backgroundColor: "#444b42ff", width: 200, alignItems: "center", padding: 20, borderRadius: 14}}>
          <Text style={{color: "#fff", fontSize: 22, fontWeight: "600"}}>Já assisti</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="inverted" />
    </ImageBackground>
  );
} 

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

  }
});
