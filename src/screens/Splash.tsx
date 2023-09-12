import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Animation from '../../assets/animation.json';
import { CommonActions, useNavigation } from '@react-navigation/native';

const size = Dimensions.get('window').width * 0.5
export interface SplashScreenProps{

}
const SplashScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            //aqui eu estou apagndo a pilha de tels para o usuáro não conseguir voltar para a tela de splash 
            navigation.dispatch(CommonActions.reset({
                index:0,
                routes: [{name:'Home'}]
            }))
        }, 4000);
    }, [])

    return(
        <View style={styles.container}>
            <LottieView source={Animation} style={{width: size, height: size}} autoPlay loop resizeMode='contain'/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default SplashScreen;
