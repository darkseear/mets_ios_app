import React from 'react'
import { StyleSheet, Text, Image,  View , ScrollView, Button, _View, SafeAreaView, BackHandler, TouchableOpacity, ImageBackground} from 'react-native';
import logo from '../../images/bank_logo_sprites.png'
import sberbank from '../../images/acredit/sberbank.png'
import vtb from '../../images/acredit/vtb.png'
import trast from '../../images/acredit/trast.png'
import bankmoscov from '../../images/acredit/bankmoscov.png'
import mosoblbank from '../../images/acredit/mosoblbank.png'
import vozrozdenie from '../../images/acredit/vozrozdenie.png'
import rossselhoz from '../../images/acredit/rossselhoz.png'
import psb from '../../images/acredit/psb.png'
import interkomercBank from '../../images/acredit/interkomercBank.png'
import iMoneyBank from '../../images/acredit/iMoneyBank.png'
import bank_bfg from '../../images/acredit/bank_bfg.png'
import absolut_bank from '../../images/acredit/absolut_bank.png'
import web_rf from '../../images/acredit/web_rf.png'
import rosbank from '../../images/acredit/rosbank.png'
import sovcom_bank from '../../images/acredit/sovcom_bank.png'


export default function Nv() {
    return (
        <>  
            <View style={{ justifyContent:'center',alignItems:'center' }}>
               <Text style={{ fontSize:24 }}>
                    Нас выбирают:
                </Text> 
            </View>
            <View style={ styles.container }>
                <View style={ [styles.nv7, styles.nv] } >
                    <ImageBackground source={ sberbank } style={{ flex:1 }} resizeMode="cover">

                    </ImageBackground>
                </View>
                <View style={ [styles.nv8, styles.nv] } >
                    <ImageBackground source={ vtb } style={{ flex:1 }} resizeMode="cover">

                    </ImageBackground>
                </View>
                <View style={ [styles.nv15, styles.nv] } >
                    <ImageBackground source={ trast } style={{ flex:1 }} resizeMode="cover">

                    </ImageBackground>
                </View>
                <View style={ [styles.nv9, styles.nv] } >
                    <ImageBackground source={ bankmoscov } style={{ flex:1 }} resizeMode="cover">

                    </ImageBackground>
                </View>
                <View style={ [styles.nv1, styles.nv] } >
                    <ImageBackground source={ mosoblbank } style={{ flex:1 }} resizeMode="cover">

                    </ImageBackground>
                </View>
                <View style={ [styles.nv2, styles.nv] } >
                    <ImageBackground source={ vozrozdenie } style={{ flex:1 }} resizeMode="cover">

                    </ImageBackground>
                </View>
                <View style={ [styles.nv3, styles.nv] } >
                    <ImageBackground source={ rossselhoz } style={{ flex:1 }} resizeMode="cover">

                    </ImageBackground>
                </View>
                <View style={ [styles.nv4, styles.nv] } >
                    <ImageBackground source={ psb } style={{ flex:1 }} resizeMode="cover">

                    </ImageBackground>
                </View>
                <View style={ [styles.nv5, styles.nv] } >
                    <ImageBackground source={ interkomercBank } style={{ flex:1 }} resizeMode="cover">

                    </ImageBackground>
                </View>
                <View style={ [styles.nv6, styles.nv] } >
                    <ImageBackground source={ iMoneyBank } style={{ flex:1 }} resizeMode="cover">

                    </ImageBackground>
                </View>
                <View style={ [styles.nv10, styles.nv] } >
                    <ImageBackground source={ bank_bfg } style={{ flex:1 }} resizeMode="cover">

                    </ImageBackground>
                </View>
                <View style={ [styles.nv11, styles.nv] } >
                    <ImageBackground source={ absolut_bank } style={{ flex:1 }} resizeMode="cover">

                    </ImageBackground>
                </View>
                <View style={ [styles.nv12, styles.nv] } >
                    <ImageBackground source={ web_rf } style={{ flex:1 }} resizeMode="cover">

                    </ImageBackground>
                </View>
                <View style={ [styles.nv13, styles.nv] } >
                    <ImageBackground source={ rosbank } style={{ flex:1 }} resizeMode="cover">

                    </ImageBackground>
                </View>
                <View style={ [styles.nv14, styles.nv] } >
                    <ImageBackground source={ sovcom_bank } style={{ flex:1 }} resizeMode="cover">

                    </ImageBackground>
                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'center'  
    },

    nv:{
        margin: 10,
        width: 120,
        height: 110
    },

    nv1:{
        
    },

    nv2:{

    },

    nv3:{

    },

    nv4:{

    },

    nv5:{

    },

    nv6:{

    },

    nv7:{
        
    },

    nv8:{

    },

    nv9:{

    },

    nv10:{

    },

    nv11:{

    },

    nv12:{

    },

    nv13:{

    },

    nv14:{

    },

    nv15:{

    }
})

