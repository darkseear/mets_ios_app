import { useNavigation } from '@react-navigation/core'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

    const CustomButton = ({ titleButton="Button",press ,myWidth=200, myHeight=50, myBackColor1='#5b85f1', myBackColor2='#2c4fa1', myBorderRadius=5 , myColor='white'}) => {
        
        const navigation = useNavigation()
        
        return  (
            <TouchableOpacity onPress={ ()=> navigation.navigate('MetsWebview', {metsParams: [press] })}>
                    <LinearGradient colors={[myBackColor1, myBackColor2]} style={{ marginBottom:5, marginTop:5, width: myWidth, height: myHeight,borderRadius: myBorderRadius, justifyContent:'center', alignItems:'center'  }}>
                        <Text style={{ fontSize:20 , color:myColor, }}>
                            {titleButton}
                        </Text>
                    </LinearGradient> 
            </TouchableOpacity>
        )
    }


export default CustomButton

const styles = StyleSheet.create({

})
