import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Button, View, TouchableOpacity } from 'react-native'
import CustomButton from '../../components_kit/customButton/CustomButton'

function SpecButton(props) {

    const navigation = useNavigation()

    return (
       
             <View style={{ width: '100%', alignItems:'center', marginTop:10, paddingLeft:5, paddingRight:5 }}>
                <View style={{ width:'100%' }}>
                    <CustomButton titleButton="ВСЕ СПЕЦПРЕДЛОЖЕНИЯ" myWidth={"100%"} press={`https://m-ets.ru/special_offers`}/>
                    {/* <Button onPress={ ()=> navigation.navigate('MetsWebview', {metsParams: [`https://m-ets.ru/special_offers`] })} color='#5b85f1' title={'Все спецпредложения '} /> */}
                </View>
            </View>
    )
}

export default SpecButton
