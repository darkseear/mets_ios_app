import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Button, ImageBackground, View, Text, TouchableOpacity } from 'react-native'
import map__banner from '../../images/map__banner-min.jpg'
import CustomButton from '../components_kit/customButton/CustomButton'

function MapSearch(props) {

    const navigation = useNavigation()

    return (
        <>
            <TouchableOpacity onPress={()=> navigation.navigate('MetsWebview', {metsParams: ['https://m-ets.ru/map']}) }>
                <View style={{ width:'100%', height:120, marginTop:20, marginBottom:20 }}>
                    <ImageBackground source={ map__banner } resizeMode="cover" style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{ width:'100%', height:'100%', justifyContent: 'center', alignItems: 'center'}}>
                                <View style={{ height:30 }}>
                                    <Text>
                                        ПОИСК ОБЪЕКТОВ НЕДВИЖИМОСТИ
                                    </Text>
                                </View>
                                <View style={{ width:'100%', alignItems:'center'}}>
                                    <CustomButton myWidth={200} titleButton='НАЙТИ НА КАРТЕ' pass={'https://m-ets.ru/map'}/>
                                    {/* <Button onPress={()=> navigation.navigate('MetsWebview', {metsParams: ['https://m-ets.ru/map']}) }  title={'НАЙТИ НА КАРТЕ'} /> */}
                                </View>
                            </View>
                    </ImageBackground>
                </View>  
            </TouchableOpacity>
        </>
    )
}

export default MapSearch
