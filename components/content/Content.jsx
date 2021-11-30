import axios from 'axios'
import React from 'react'
import { ScrollView , View, StyleSheet, Text, Button} from 'react-native'
import Categories from '../categories/Categories'
import MapSearch from '../map/MapSearch'
import Spec from '../spec/Spec'
import SpecButton from '../spec/specButton/SpecButton'
import Platform from '../platform/Platform'
import Nv from '../nv/Nv'
import { getSpecAsinc } from '../../api/api'

export default function Content(props) {

    const [test, setTest] = React.useState([])
    
    // const URL = "http://bocharov-stage.dvlg.ru/"
    const URL = "http://m-ets.ru/"
 
    React.useEffect(()=>{
        // getSpec()
        getSpecAsinc().then((resp)=>{
            setTest(resp)
        })
    }, [])

    return ( 
       <ScrollView style={{ minHeight:500, width: '100%', }}>
           <View style={{ width: '100%' }}>
                
                <Spec navigation={props.navigation} arrImg={test} siriOnClick={props.siriOnClick}/> 
                <SpecButton siriClickButton={props.siriOnClick}/>
                <MapSearch siriOnClick={props.siriOnClick}/>
                <Categories siriOnClick={props.siriOnClick} />
                <Platform siriOnClick={props.siriOnClick}/>
                <Nv/>

           </View>
       </ScrollView>
    )
}

