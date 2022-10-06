import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const ImageScreen = ({navigation, route}) => {
    console.log(route);
    return (
        <View style={styles.mainView}>
            <Text>Image Screen</Text>
            <Button 
                title="Go to Details" 
                onPress={() => console.log("GO to details")}
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

export default ImageScreen;