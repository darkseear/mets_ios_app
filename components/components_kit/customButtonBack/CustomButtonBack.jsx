import { useNavigation } from "@react-navigation/core"
import React from "react"
import { Button, View } from "react-native"

const  CustomButtonBack = () => {

    const navigation = useNavigation()

    return (
        <View style={{ height:30 ,zIndex:10 }}>
            <View style={{ position:'absolute', paddingLeft:10 }}>
                <Button 
                    title="Назад"
                    onPress={ () => navigation.goBack()}
                />
            </View>
        </View>
    ) 
}

export default CustomButtonBack