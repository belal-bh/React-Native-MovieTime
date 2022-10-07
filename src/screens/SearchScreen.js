import React, {useEffect, useState} from "react";
import { Button, View, Text, StyleSheet, Image } from "react-native";

const SearchScreen = ({navigation, route}) => {
    const movie = route.params.movie;
    const [movieDetails, setMovieDetails] = useState(null);
    const [defaultMessage, setDefaultMessage] = useState('Loading...');

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://www.omdbapi.com/?apikey=4803e151&t=${movie.title}`);
        xhr.send();
        xhr.onload = () => {
            if(xhr.status === 200){
                let response = JSON.parse(xhr.response);
                console.log(response);
                setMovieDetails(response);

                // If movie not found 
                if(response?.Error) setDefaultMessage('No movie found!');
            }else{
                console.log(`HTTP Request Failed ${xhr.status}`);
                setDefaultMessage('No movie found!');
            }
        };
        xhr.onerror = () => {
            console.log("Error");
            setDefaultMessage('No movie found!');
        };
    }, []);
    return ( 
        movieDetails?.Title ? <View style={styles.mainView}>
            <Text style={styles.movieTitleView}>{movieDetails?.Title}</Text>
            <Text style={styles.movieReleaseView}>{movieDetails?.Released}</Text>
            {movieDetails?.Poster && <Image
                style={styles.posterImage}
                source={{
                uri: movieDetails?.Poster,
                }}
            />}
            <Text style={styles.moviePlotView}>{movieDetails?.Plot}</Text>
        </View> : 
        <View style={styles.mainView}><Text style={styles.movieTitleView}>{defaultMessage}</Text></View>

    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    movieTitleView: {
        fontSize: 20,
        textAlign: 'center',
        color: 'orange',
    },
    movieReleaseView: {
        fontSize: 16,
        marginBottom: 10,
    },
    moviePlotView: {
        textAlign: 'left',
        padding: 5,
        fontSize: 15,
    },
    posterImage: {
        width: 200,
        height: 250,
        resizeMode: 'stretch'
    }
});

export default SearchScreen;