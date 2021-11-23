import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import logo_mets from '../../images/logo-mets.png';

export default function Header() {
    return (
        <>
            <View style={ styles.header_flex }>
                <Image source={ logo_mets } style={{  width: 120, height: 35}}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create ({
    header_flex:{
        width: '100%', 
        alignItems: 'center',
        height:55,
        paddingTop:12,
        top:0,
    }
})