import React, {useEffect, useState} from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const SearchScreen = ({navigation, route}) => {
    const movie = route.params.movie;
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://www.omdbapi.com/?apikey=4803e151&t=${movie.title}`);
        xhr.send();
        xhr.onload = () => {
            if(xhr.status === 200){
                let response = JSON.parse(xhr.response);
                console.log(response);
                setMovieDetails(response);
            }else{
                console.log(`HTTP Request Failed ${xhr.status}`);
            }
        };
        xhr.onerror = () => {
            console.log("Error");
        };
    }, []);
    return ( 
        movieDetails?.Title ? <View style={styles.mainView}>
            <Text style={styles.movieTitleView}>{movieDetails?.Title}</Text>
            <Text style={styles.movieReleaseView}>{movieDetails?.Released}</Text>
            <Text style={styles.moviePlotView}>{movieDetails?.Plot}</Text>
        </View> : 
        <View><Text style={styles.movieTitleView}>No movie found!</Text></View>

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
});

export default SearchScreen;