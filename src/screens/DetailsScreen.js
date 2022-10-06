import React, {useEffect} from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const DetailsScreen = ({navigation, route}) => {
    console.log(route);
    const movie = route.params.movie;
    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://www.omdbapi.com/?apikey=4803e151&t=Star+Wars&y=1977');
        xhr.send();
        xhr.onload = () => {
            if(xhr.status === 200){
                console.log(xhr.responseText);
            }else{
                console.log(`HTTP Request Failed ${xhr.status}`);
            }
        };
        xhr.onerror = () => {
            console.log("Error");
        };
    }, []);
    return (
        <View style={styles.mainView}>
            <Text style={{fontSize: 20}}>{movie.title} ({movie.release})</Text>
            <Text style={{fontSize: 100}}>{movie.screenNumber}</Text>
            <Button 
                title="More Details" 
                onPress={() => {
                    movie.screenNumber = (movie.screenNumber + 1);
                    navigation.push('Details_to_Details', {movie})}}
            />
            <Button 
                title="Go Back Home" 
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default DetailsScreen;