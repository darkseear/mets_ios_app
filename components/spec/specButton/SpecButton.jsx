import React from 'react'
import { Button, View, TouchableOpacity } from 'react-native'

function SpecButton(props) {
    return (
       
             <View style={{ width: '100%', alignItems:'center', marginTop:10 }}>
                <View style={{ width:290 }}>
                    <Button onPress = { ()=>props.siriClickButton({uri: "https://m-ets.ru/special_offers"})  } color='#5b85f1' title={'Все спецпредложения '} />
                </View>
            </View>
    )
}

export default SpecButton
