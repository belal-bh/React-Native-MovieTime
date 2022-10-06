import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput } from "react-native";

const HomeScreen = ({navigation, route}) => {
    console.log(route);
    const [text, onChangeText] = useState('');
    return (
        <View style={styles.mainView}>
            <TextInput
                style={styles.input}
                onChangeText={text => onChangeText(text)}
                value={text}
            />
            <TouchableOpacity 
                style={styles.touchableSearchView}
                onPress={()=> navigation.navigate('Home_to_Search', { movie: {
                    title: text,
                }})}
            >
                <View><Text style={styles.touchableSearchText}>Search Movie</Text></View>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.touchableView}
                onPress={()=> navigation.navigate('Home_to_Details', { movie: {
                    title: "Star Wars",
                    release: 1977,
                    screenNumber: 1,
                }})}
            >
                <View><Text style={styles.touchableText}>Star Wars</Text></View>
            </TouchableOpacity>
            <TouchableHighlight 
                style={styles.touchableView} 
                onPress={()=> navigation.navigate('Home_to_Details', { movie: {
                    title: "Black Panther",
                    release: 2018,
                    screenNumber: 1,
                }})}
            >
                <View><Text style={styles.touchableText}>Black Panther</Text></View>
            </TouchableHighlight>
            <TouchableHighlight 
                style={styles.touchableView}
                onPress={()=> navigation.navigate('Home_to_Details', { movie: {
                    title: "The Matrix",
                    release: 1999,
                    screenNumber: 1,
                }})}
            >
                <View><Text style={styles.touchableText}>The Matrix</Text></View>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    touchableView: {
        marginBottom: 30,
        width: 150,
        height: 50,
        alignItems:'center',
        backgroundColor: 'orange',
        borderWidth: 5,
        borderRadius: 10,
    },
    touchableText: {
        textAlign: 'center',
        paddingTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    touchableSearchView: {
        marginBottom: 25,
        width: 150,
        height: 50,
        alignItems:'center',
        backgroundColor: 'red',
        borderWidth: 0,
        borderRadius: 5,
    },
    touchableSearchText: {
        textAlign: 'center',
        paddingTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    input: {
        height: 40,
        width: '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center',
        color: '#000',
    }
});

export default HomeScreen;