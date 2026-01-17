import { View, Text, Image } from 'react-native';
import NoPoster from '../../assets/no-poster.png'
import styles from './styles.jsx'
import { MovieInfo } from './MovieInfo/index.jsx';

export default function MovieCard({movie, details}) {
    
    return (
        <View style={styles.container}>
            <Image 
                style={movie.poster_path? styles.image : styles.noPoster}   
                source={
                    movie.poster_path 
                    ? {uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                    : NoPoster
                } 
                resizeMode='cover'
            />       
            <MovieInfo>
                <View style={styles.infoBox}>
                    <Text style={styles.info}>{details.rating}</Text>
                    <Text style={styles.infoLabel}>Rating</Text>
                </View>
            </MovieInfo>
            <MovieInfo>
                <View style={styles.infoBox}>
                    <Text style={styles.info}>{details.duration}</Text>
                    <Text style={styles.infoLabel}>Duração</Text>
                </View>
            </MovieInfo>
            <MovieInfo>
                <View style={styles.infoBox}>
                    <Text style={styles.info}>{details.release}</Text>
                    <Text style={styles.infoLabel}>Ano</Text>
                </View>
            </MovieInfo>
        </View>
    )
}