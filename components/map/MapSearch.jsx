import React from 'react'
import { Button, ImageBackground, View, Text, TouchableOpacity } from 'react-native'
import map__banner from '../../images/map__banner-min.jpg'

function MapSearch(props) {
    return (
        <>
            <TouchableOpacity onPress={()=> props.siriOnClick({uri: 'https://m-ets.ru/map'}) }>
                <View style={{ width:'100%', height:120, marginTop:20, marginBottom:20 }}>
                    <ImageBackground source={ map__banner } resizeMode="cover" style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{ width:'100%', height:'100%', justifyContent: 'center', alignItems: 'center'}}>
                                <View style={{ height:30 }}>
                                    <Text>
                                        ПОИСК ОБЪЕКТОВ НЕДВИЖИМОСТИ
                                    </Text>
                                </View>
                                <View>
                                    <Button onPress={()=>{ props.siriOnClick({uri: 'https://m-ets.ru/map'})} } title={'НАЙТИ НА КАРТЕ'} />
                                </View>
                            </View>
                    </ImageBackground>
                </View>  
            </TouchableOpacity>
        </>
    )
}

export default MapSearch
