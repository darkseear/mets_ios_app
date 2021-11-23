import React, { useEffect } from 'react'
import { ScrollView, View, Text } from 'react-native'
import Loading from '../loading/Loading'
import SpecParts from './specParts/SpecParts'

function Spec({ navigation, arrImg, siriOnClick }) {

    const [state, setState] = React.useState(false);
    // const arrImg = [ {id:1, uri: "https://m-ets.ru/static/69823.jpg"}, {id:2, uri: "https://m-ets.ru/static/67229.jpg"}, {id:3, uri: "https://m-ets.ru/static/69823.jpg"} ]
    const Load = () => {
        setTimeout(()=>{ setState(true)}, 1000);
    }

    return (
    <>
            {!arrImg ?
            <View style={{ flex: 1, flexDirection:'row', width:'100%', padding: 5 , height: 235}}>
                <Loading/>  
            </View>
            :
            <ScrollView horizontal={true} scrollEventThrottle={16}>
                <View style={{ flex: 1, flexDirection:'row', width:'100%', padding: 5 , }}>
                        {
                            arrImg && arrImg.map((item)=> <SpecParts siriOnClick={siriOnClick} key={item.id} lots_id={ item.lot_id } uri={ { uri: item.url } } uriImage={{ uri: 'https://m-ets.ru/' + item.img_url}} /> )
                        }
                </View> 
            </ScrollView>    
                    }
    </>
          )  
    
}

export default Spec
