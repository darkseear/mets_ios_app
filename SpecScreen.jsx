import { useNavigation } from '@react-navigation/core';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react'
import { Button, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getSpecOneAsinc } from './api/api';
import CustomButton from './components/components_kit/customButton/CustomButton';
import CustomButtonBack from './components/components_kit/customButtonBack/CustomButtonBack';
import Loading from './components/loading/Loading';
import placeholder from './images/placeholder_image.png';

function SpecScreen({ navigation, route}) {

    const [specState, setSpecState] = useState([])
    const [photoState, setPhotoState] = useState(0)

    useEffect(()=>{
        route.params.lot_id && 
        route.params.lot_id !== null &&
         getSpecOneAsinc(route.params.lot_id ).then((resp)=>{
             setSpecState(resp)
         })
    }, [])

    return (
        <SafeAreaView style={{ height:'100%' }}>
            <CustomButtonBack/>
            
                    {
                        specState &&
                        Array.isArray(specState) && specState!==undefined && specState !== null ?
                        <ScrollView style={ style.spec__container }>
                        {
                            specState.map((item)=> <View key={item.lot_id}> 
                            <View style={ style.spec__photoContainer }>
                                {
                                        item.foto && item.foto.length>0 ?<View  style={ style.spec__photo }>
                                                <ImageBackground source={{ uri: 'https://m-ets.ru/' + item.foto[photoState]}} style={{ flex:1 }} resizeMode="contain"> 
                                                
                                                </ImageBackground>
                                            </View>
                                        :
                                        <View style={ style.spec__photo2 }>
                                            <ImageBackground source={ placeholder } style={{ flex:1 }} resizeMode="contain"> 
                                            
                                            </ImageBackground>
                                        </View>
                                }
                                
                                
                                {  item.foto && Array.isArray(item.foto) && item.foto.length >0 && <ScrollView style={{width:"100%", height:'30%'}} horizontal>
                                    {
                                        item.foto && Array.isArray(item.foto) ?
                                        item.foto.map( (photo, index) =>  <TouchableOpacity key={photo} style={{marginRight:10 }} onPress={()=>setPhotoState(index)}>
                                            <View style={{ height:105, width:105 }}>
                                                <ImageBackground source={{ uri: 'https://m-ets.ru/' + photo}} style={{ flex:1 }} resizeMode="cover"> 
                                                
                                                </ImageBackground>
                                            </View>
                                            </TouchableOpacity>)
                                        :
                                        <ImageBackground source={ placeholder } style={{ flex:1 }} resizeMode="contain"> 
                                        
                                        </ImageBackground>
                                    } 
                                </ScrollView>
                                }
                                
                            </View>
                            <View style={ style.spec__decription }>
                                <Text style={style.spec__header_boldText}>
                                    { item.search_category_names }
                                </Text>
                            </View>
                            <View style={ style.spec__decription }>
                                <Text style={ style.spec__header_text }>
                                    Описание:
                                </Text>
                                <Text style={ style.spec__text }>
                                    { item.goods_description  }
                                </Text>
                            </View>
                            <View style={ style.spec__decription }>
                                <Text style={ style.spec__header_text }>
                                    Цена:
                                </Text>
                                <Text style={ style.spec__text } style={{ fontSize:28, color:'#3c6292' }}>
                                    { item.curr_price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' }) } 
                                </Text>
                            </View>
                            <View>
                                <CustomButton titleButton="Купить" myWidth="100%" press = {`https://m-ets.ru/generalView?id=${item.competition_id}#lot${item.lotnumber}`}/>
                                {/* <CustomButton titleButton="Подписаться на обновления" myWidth="100%"/> */}
                            </View>

                        </View>
                        )
                        }
                             
                        </ScrollView>
                           
                        : 
                        <View style={{ flex:1 }}>
                            
                                <Loading/>
                            
                        </View>
                            
                    }
        </SafeAreaView>
    )
}

export default SpecScreen


const style = StyleSheet.create({
    button_color:{
        color:'red'
    },

    spec__container:{
        paddingLeft:10,
        paddingRight:10,
    },

    spec__decription:{
        width:'100%',
        minHeight:50,
        borderBottomWidth: 1,
        borderBottomColor:'blue',
        paddingBottom:10,
        paddingTop:10
    },

    spec__header_text:{
        fontSize:22,
        textTransform:'uppercase',
        paddingBottom:5
    },

    spec__text: {
        fontSize:16
    },

    spec__header_boldText:{
        fontSize:28,
        textTransform:'uppercase',
        fontStyle:'normal',
        fontWeight:'bold'
    },

    spec__photoContainer:{
        width:'100%',
        height: 300,
        padding:10
    },

    spec__photo:{
        width:'100%',
        height:'70%',
        borderColor:'#ebebeb',
        borderWidth:1,
        borderRadius:5
    },

    spec__photo2:{
        width:'100%',
        height:'100%',
        borderColor:'#ebebeb',
        borderWidth:1,
        borderRadius:5
    }
})
