import React from 'react'
import { ScrollView, View, Image, Text, ImageBackground, TouchableOpacity , StyleSheet } from 'react-native'


function SpecParts({ uriImage, uri, siriOnClick }) {

    return (
        <TouchableOpacity  onPress ={()=>  siriOnClick(uri)}>
            <View style={styles.image_parts}>
                <ImageBackground source={ uriImage } imageStyle={{ borderRadius: 6}} style={styles.image}  resizeMode="cover">
                        {/* <Text>
                            Какой то текст для фона 
                        </Text> */}
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