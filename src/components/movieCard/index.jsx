import { View, Text } from 'react-native';
import { Image } from "expo-image"
import NoPoster from '../../assets/no-poster.png'
import styles from './styles.js'
import { MovieInfo } from './movieInfo/index'
import { CalendarDays, Star, Clock} from "lucide-react-native";

export default function MovieCard({movie, details}) {
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{movie.title}</Text>

            <View style={styles.movieMetaDatas}>
                <Image 
                    style={movie.poster_path? styles.image : styles.noPoster}   
                    source={
                        movie.poster_path 
                        ? `https://image.tmdb.org/t/p/original${movie.poster_path}` 
                        : NoPoster
                    } 
                />
                
                <View style={styles.metaDatas}>
                    <MovieInfo>
                        <View style={styles.infoBox}>
                            <Star color="#FA8226" />
                            <Text style={styles.info}>{details.rating}</Text>
                            <Text style={styles.infoLabel}>Nota</Text>
                        </View>
                    </MovieInfo>
                
                    <MovieInfo>
                        <View style={styles.infoBox}>
                            <Clock color="#FA8226" />
                            <Text style={styles.info}>{details.duration}</Text>
                            <Text style={styles.infoLabel}>Duração</Text>
                        </View>
                    </MovieInfo>

                    <MovieInfo>
                        <View style={styles.infoBox}>
                            <CalendarDays color="#FA8226" />
                            <Text style={styles.info}>{details.release}</Text>
                            <Text style={styles.infoLabel}>Lançamento</Text>
                        </View>
                    </MovieInfo>
                </View>
            </View>
        </View>
    )
}