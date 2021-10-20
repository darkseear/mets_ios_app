import axios from 'axios'
import React from 'react'
import { ScrollView , View, StyleSheet, Text, Button} from 'react-native'
import Categories from '../categories/Categories'
import MapSearch from '../map/MapSearch'
import Spec from '../spec/Spec'
import SpecButton from '../spec/specButton/SpecButton'
import Platform from '../platform/Platform'
import Nv from '../nv/Nv'

export default function Content(props) {

    const [test, setTest] = React.useState(null)
    
    // const URL = "http://bocharov-stage.dvlg.ru/"
    const URL = "http://m-ets.ru/"
 
    React.useEffect(()=>{
        // getSpec()
        getSpecAsinc();
    }, [])

    function getSpec(){
        let ok = "ok"
        axios.get(URL + 'getAppData?act=top_torgi')
                    .then(resp=>{
                        // arr = resp.data.results
                        if(resp)  {
                            console.log(resp.data.results)
                            setTest((prev) => prev = resp.data.results)
                        }
                    })  
    }

    const getSpecAsinc =  async () => {
        try{
            const resp = await fetch(URL + 'getAppData?act=top_torgi');
            const json = await resp.json();
            setTest(json.results);
        } catch (error){
            console.log(error)
        } 
    }
    

    return ( 
       <ScrollView style={{ minHeight:500, width: '100%', }}>
           <View style={{ width: '100%' }}>
                
                <Spec arrImg={test} siriOnClick={props.siriOnClick}/> 
                <SpecButton siriClickButton={props.siriOnClick}/>
                <MapSearch siriOnClick={props.siriOnClick}/>
                <Categories siriOnClick={props.siriOnClick} />
                <Platform siriOnClick={props.siriOnClick}/>
                <Nv/>

                {/* <View style={{ width:"100%", height:500 }}>
                    <Button title={'hello-you'} onPress={()=>{
                        getSpec()
                    }}/>
                    
                    {
                        
                        test ? test.map((item)=> <Text key={item.id}> {item.date_create} </Text> ) : <Text> Загрузка данных, пожалуйста подождите... </Text>
     
                    }
                </View> */}

           </View>
       </ScrollView>
    )
}

