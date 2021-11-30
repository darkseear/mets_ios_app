import { useNavigation } from '@react-navigation/core'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import books from '../../images/books.png'
import court from '../../images/court.png'
import meeting from '../../images/meeting.png'

function Platform() {

    const navigation = useNavigation()

    return (
        <View style={{ marginTop:20 }}>
            
            <TouchableOpacity  onPress={()=> navigation.navigate('MetsWebview', {metsParams: ['https://m-ets.ru/edu']}) } style={{ paddingRight:10, paddingLeft:10 }}>
                <View>
                    <LinearGradient style={ styles.platform_parts} colors={[ 'rgba(217,227,254,0.5)' , 'rgba(255,255,255,0.35)', ' rgba(255,255,255,0.75)', 'rgba(232,238,255,0.9)']}>
                        <View style={{  width:75, height:75}}>
                            <ImageBackground source={ books } style={styles.image} resizeMode="cover">
                                </ImageBackground>
                        </View>
                        <View style={{ paddingLeft:40 , width:220, alignItems:'flex-start', justifyContent:"center"  }}>
                            <Text>
                                ПЕРЕЙТИ НА ПОРТАЛ ОБУЧЕНИЕ
                            </Text>
                         </View> 
                     </LinearGradient>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('MetsWebview', {metsParams: ['https://m-ets.ru/page/legal']}) } style={{ paddingRight:10, paddingLeft:10 }}>
                <View >
                    <LinearGradient style={ styles.platform_parts} colors={[ 'rgba(217,227,254,0.5)' , 'rgba(255,255,255,0.35)', ' rgba(255,255,255,0.75)', 'rgba(232,238,255,0.9)']}>
                        <View style={{  width:75, height:75}}>
                            <ImageBackground source={ court } style={styles.image} resizeMode="cover">
                                </ImageBackground>
                        </View>
                        <View style={{ paddingLeft:40 , width:220, alignItems:'flex-start', justifyContent:"center"  }}>
                            <Text>
                                ПРАВОВАЯ ИНФОРМАЦИЯ
                            </Text>
                        </View>
                    </LinearGradient>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('MetsWebview', {metsParams: ['https://meetings.m-ets.ru/']}) } style={{ paddingRight:10, paddingLeft:10 }}>
                <View>
                    <LinearGradient style={ styles.platform_parts} colors={[ 'rgba(217,227,254,0.5)' , 'rgba(255,255,255,0.35)', ' rgba(255,255,255,0.75)', 'rgba(232,238,255,0.9)']}>
                        <View style={{  width:75, height:75}}>
                            <ImageBackground source={ meeting } style={styles.image} resizeMode="cover">
                                </ImageBackground>
                        </View>
                        <View style={{ paddingLeft:40 , width:220, alignItems:'flex-start', justifyContent:"center"  }}>
                            <Text>
                                ПЕРЕЙТИ НА ЭЛЕКТРОННУЮ ПЛОЩАДКУ ДЛЯ ПРОВЕДЕНИЯ СОБРАНИЙ КРЕДТООВ
                            </Text>
                        </View>
                    </LinearGradient>
                </View>
           </TouchableOpacity>


        </View>
    )
}

export default Platform

const styles = StyleSheet.create({
    platform_parts:{
        flexDirection:'row',
        marginBottom:15,
        borderRadius:5,
        padding:20,
        width:'100%', 
        maxWidth:800,
        height:125,
        backgroundColor: 'linear-gradient(to bottom, rgba(217,227,254,0.5), rgba(255,255,255,0.35), rgba(255,255,255,0.75), rgba(232,238,255,0.9))'
    }
    ,

    image: {
        flex: 1, 
        justifyContent: 'center',
        borderRadius: 25
    }
})
