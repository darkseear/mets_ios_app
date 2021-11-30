import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, ImageBackground, TouchableOpacity , StyleSheet } from 'react-native'

function SpecParts({ uriImage, lots_id, uri }) {

    const navigation = useNavigation()

    return (
        <TouchableOpacity  onPress ={()=>  lots_id ? navigation.navigate('SpecScreen', {lot_id : [lots_id]} ) : navigation.navigate('MetsWebview', {metsParams: [`https://m-ets.ru/${uri}`]})  }>
            <View style={styles.image_parts}>
                <ImageBackground source={ uriImage } imageStyle={{ borderRadius: 6}} style={styles.image}  resizeMode="cover">
                </ImageBackground>
            </View>  
        </TouchableOpacity >            
    )
}

export default SpecParts


const styles = StyleSheet.create({
    image_parts: {
        width:300,
        height:230,
        marginRight: 10,
        borderRadius: 5
    },

    image: {
        flex: 1, 
        justifyContent: 'center',
        borderRadius: 25
    }
})