import React from "react";
import { StyleSheet, View, Text } from "react-native";

export interface HomeProps{

}

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <Text>HomeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default HomeScreen;