import { View, Text, Image } from 'react-native';

import styles from './styles.jsx'
export default function MovieCard({movie}) {
    
    
    return (

       <View style={styles.container}>
           <Text style={styles.title}>{movie.title}</Text>
            <Image style={styles.image}   source={
                movie.poster_path 
                ? {uri: `https://image.tmdb.org/t/p/w342${movie.poster_path}`} 
                :(
                    <Text>Não temos a imagem ainda</Text>
                )
                } />
                   
        </View>
    )
}