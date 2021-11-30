import React from 'react'
import { Image,Text, View , _View } from 'react-native';
import loading_gif from '../../images/loader.gif';

function Loading() {
    return (
        <View style={{ width:'100%', height: '100%', minHeight:230, backgroundColor:'white', opacity:0.8, justifyContent:'center', alignItems:'center' }}>
            {/* <Text style={{ fontSize:30 }}>
            Loading.....
            </Text> */}
            <Image source={ loading_gif }/>
        </View>
    )
}

export default Loading;