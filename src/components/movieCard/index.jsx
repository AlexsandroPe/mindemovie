import { View, Text, Image } from 'react-native';
import NoPoster from '../../assets/no-poster.png'
import styles from './styles.jsx'
import { MovieInfo } from './MovieInfo/index.jsx';
import { formatTime } from '../../utils/formatTime.js';
import { getMovieDetails } from '../../services/tmdbServices.js';
import { useEffect, useState } from 'react';
export default function MovieCard({movie}) {
    
    const [details, setDetails] = useState([]);

    useEffect(() => {
        async function loadMovieDetails() { 
            const data = await getMovieDetails(movie.id); 
            console.log(data.vote_average)
            setDetails(data);
        }
        loadMovieDetails();
        console.log(details)
    }, []);

    return (
        <View style={styles.container}>
              <Image 
                style={movie.poster_path ? styles.image : styles.noPoster}   
                source={
                    movie.poster_path 
                    ? {uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                    : NoPoster
                } 
                resizeMode='cover'
            />       
            <MovieInfo>
                <Text style={styles.info} >{details.vote_average}</Text>
                <Text style={{color: "#4b585c"}}>Rating</Text>
            </MovieInfo>
            <MovieInfo>
                <Text style={styles.info}>{details.release_date }</Text>
                <Text style={{color: "#4b585c"}}></Text>
            </MovieInfo>
            <MovieInfo>
                <Text style={styles.info}>{formatTime(details.runtime)}</Text>
                <Text style={{color: "#4b585c"}}>Rating</Text>
            </MovieInfo>
        </View>
    )
}