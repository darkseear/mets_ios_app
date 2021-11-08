import React from 'react'
import { Text, View , TouchableOpacity ,StyleSheet, ScrollView} from 'react-native'

function Categories(props) {

    // const arrCategoriesTitle = [   { id:1, title: "Автомобили и спецтезхника" },
    //                 { id:2, title: "Недвижимость для личных целей" }, 
    //                 { id:3, title:"Недвижимость для бизнеса" },
    //                 { id:4, title: "Земельные участки" },
    //                 { id:5, title: "Земельные участки" },
    //                 { id:6, title: "Прочее" }  ]

    return (
        <>
            <Text style={{ textAlign:'center', fontSize: 16 , marginBottom:12 }}>
                Категории:
            </Text>
                
                    <ScrollView horizontal={true} >
                        <View style={{ flex: 0.1, flexDirection:'row', width:'100%', padding: 5 }}>
                            <TouchableOpacity  onPress ={()=> props.siriOnClick({uri: 'https://m-ets.ru/KvaSpis?g=1'}) } style={ styles.categories_parts } >
                                <View  >
                                    <Text style={ styles.categories_parts_text }>
                                        Автомобили и спецтезхника
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity    onPress  ={()=> props.siriOnClick({uri: 'https://m-ets.ru/KvaSpis?g=2'}) } style={ styles.categories_parts }> 
                                <View>
                                    <Text style={ styles.categories_parts_text }>
                                        Недвижимость для личных целей
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity  onPress  ={()=> props.siriOnClick({uri: 'https://m-ets.ru/KvaSpis?g=3'}) } style={ styles.categories_parts }>
                                <View>
                                    <Text style={ styles.categories_parts_text }>
                                        Недвижимость для бизнеса
                                    </Text>
                                </View>
                            </TouchableOpacity> 

                            <TouchableOpacity onPress ={()=> props.siriOnClick({uri: 'https://m-ets.ru/KvaSpis?g=4'}) } style={ styles.categories_parts }>   
                            <View  >
                                <Text style={ styles.categories_parts_text }>
                                    Земельные участки
                                </Text>
                            </View>
                           </TouchableOpacity>

                            <TouchableOpacity onPress  ={()=> props.siriOnClick({uri: 'https://m-ets.ru/KvaSpis?g=5'}) } style={ styles.categories_parts }>
                                <View>
                                    <Text style={ styles.categories_parts_text }>
                                    Земельные участки
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress  ={()=> props.siriOnClick({uri: 'https://m-ets.ru/KvaSpis?g=5'}) } style={ styles.categories_parts }>
                                <View >
                                    <Text style={ styles.categories_parts_text }>
                                        Прочее
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
        </>
    )
}

export default Categories


const styles = StyleSheet.create({
    categories:{
        width:'100%',
        alignItems:'center',
    },
    categories_container:{
        padding:5,
        width: '100%',
        flexDirection:'row', 
    },
    categories_parts:{
        borderStyle: 'solid',
        borderColor:'#2c4fa1',
        borderWidth: 4,
        borderRadius: 5,
        minWidth:280,
        height: 70,
        marginRight: 5,
        justifyContent:'center',
        alignContent:'space-between',
        shadowRadius: 3,
        padding:5,
        backgroundColor:'linearGradient(to bottom, rgba(217,227,254,0.5), rgba(255,255,255,0.35), rgba(255,255,255,0.75), rgba(232,238,255,0.9))'
    },
    categories_parts_text:{
        textAlign:'center',
        color:'#2c4fa1',
        fontSize: 12,
        fontStyle:'normal',
        fontWeight:'bold',
        textTransform:'uppercase',
        width:'100%'        
    }
})