import React, {useState} from 'react';
import { StyleSheet,  Text, Image,  View , ScrollView, Button, _View, SafeAreaView, BackHandler, TouchableOpacity, ImageBackground} from 'react-native';
import {WebView} from 'react-native-webview';
import Content from './components/content/Content';

import logo_mets from './images/logo-mets.png';
import logo_facebook from './images/social__network/facebook.png';
import logo_instagram from './images/social__network/instagram.png';
import logo_telegram from './images/social__network/telegram.png';
import logo_youtube from './images/social__network/YouTube.png';
import logo_tiktok from './images/social__network/TikTok_wine.png';

import menu_home from './images/menu_ico/home.png';
import menu_catalog from './images/menu_ico/catalog.png';
import menu_search from './images/menu_ico/search.png';
import menu_feedback from './images/menu_ico/feedback.png';
import menu_profile from './images/menu_ico/profile.png';

import { StatusBar } from 'expo-status-bar';

// import { StackNavigator } from 'react-navigation';
import Loading from './components/loading/Loading';


// const RootSteck = createStackNavigator(
//   {
//     App: App
//   }
// )

const MetsView = (props) => {

  const WEBVIEW_REF = React.useRef(null);
  const [state, setState] = React.useState();

  const webs = null;

  const handleBackButton = () => {
    WEBVIEW_REF.current.goBack();
    return true;
  }

  React.useEffect(()=>{
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return ()=>{
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    }
  }, [])

  // const onClickBack = () => {

  //         // check to see if it is possible to go back
  //         let canGoBack = this.props.navigation.canGoBack();
  //         // handle what we do it we can/cannot go back
  //         if (canGoBack) {
  //           this.props.navigation.goBack();
  //         } else {
  //           this.doSomething();
  //         }
    
  // }
  // onNavigationStateChange = { ()=>{
        //   // let canGoBack = this.props.navigation.canGoBack();
        //   // handle what we do it we can/cannot go back
        //   // if (canGoBack) {
        //     goBack();
        //   // } else {
        //   //   this.doSomething();
        //   // }
        // } }

  return(
    <>
     <StatusBar 
            hidden
            animated={true}
            // backgroundColor="grey"
          />
    <WebView  
        ref={ WEBVIEW_REF } 
        allowsBackForwardNavigationGestures
       
        style={styles.container}
        source={props.siri ? props.siri : { uri: 'https://m-ets.ru/' }}
        // injectedJavaScriptAfterContentLoaded={runFirst}
        // injectedJavaScriptBeforeContentLoaded={func}
        autoManageStatusBarEnabled={true}
        startInLoadingState={true}
        javaScriptEnabled={true}
        javaScriptEnabledAndroid={true}
        renderLoading={() => {return <Loading/>}}
        mixedContentMode={'compatibility'}
        // onShouldStartLoadWithRequest={(request) => {
        //   // Only allow navigating within this website
        //   return request.url.startsWith('https://m-ets.ru');
        // }}
     
        />
    </>
  );
}

const FooterApp = () => {
  
  return (
                  <View style={{ backgroundColor: '#232e3f', width: '100%', minHeight: 100 }}>
                
                      <View style={{ marginBottom:10 , marginTop:20}}>
                          <Text style={ styles.footer__text} >
                            Наш телефон:
                          </Text>
                          <Text style={ styles.footer__text_bold }>
                            8 800 555 7001
                          </Text>
                      </View>

                      <View style={{ marginBottom:10 }}>
                          <Text style={ styles.footer__text }>
                            Наша почта:
                          </Text>
                          <Text style={ styles.footer__text_bold }>
                            mail@m-ets.ru
                          </Text>
                      </View>

                      <View style={{ width:'100%', textAlign:'center', marginBottom:10}}>
                          <Text style={ styles.footer__text }>
                            Мы в социальных сетях:
                          </Text>
                          <View style={{  width:'100%',  flexDirection: 'row', justifyContent: 'center', marginTop:10}}>
                          
                            <Image source={ logo_youtube } style={{ width: 50, height: 30, margin:7, marginTop:17}}/>
                            <Image source={ logo_instagram } style={{ width: 50, height: 50, margin:7}}/>
                            <Image source={ logo_telegram } style={{ width: 50, height: 50, margin:7}}/>
                            <Image source={ logo_facebook } style={{ width: 50, height: 50, margin:7}}/>
                            <Image source={ logo_tiktok } style={{ width: 50, height: 50, margin:7}}/>

                          </View>
                      </View>

                      <View style={{ marginBottom:30, marginTop:0 }}>
                        <Text style={ styles.footer__text }>
                        © 2010 - 2021 ООО «МЭТС»
                        </Text>
                        <Text style={ styles.footer__text }>
                        302030, Россия, г. Орел, ул. Новосильская, д. 11, пом. 4
                        </Text>
                      </View>

                  </View>
  )

}

const NavigationPanel = ({siriOnClick, cheked, cheked2, cheked3, cheked4, cheked5}) => {
  return (
    
    <View style={styles.menu__bottom}>
      <TouchableOpacity  onPress={()=>{siriOnClick({uri:"https://m-ets.ru/"}) }}>
        {/* <View style={ !cheked ? styles.button__offCheck : styles.button__onCheck }> */}
        <View  style={ !cheked ? {width:36, height:32, opacity: 1} : styles.button__onCheck }>
          <ImageBackground source={menu_home} style={{ flex:1 }} resizeMode="contain">
            
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{ siriOnClick({uri:"https://m-ets.ru/search"}) }}>
        <View  style={ !cheked2 ? styles.button__offCheck : styles.button__onCheck }>
          <ImageBackground source={menu_search} style={{ flex:1 }} resizeMode="contain">
            
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{ siriOnClick({uri:"https://m-ets.ru/KvaSpis"}) }}>
        <View  style={ !cheked3 ? styles.button__offCheck : styles.button__onCheck}>
          <ImageBackground source={menu_catalog} style={{ flex:1 }} resizeMode="contain">
            
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{ siriOnClick({uri:"https://m-ets.ru/cabinet"}) }}>
        <View style={ !cheked4 ? styles.button__offCheck : styles.button__onCheck}>
          <ImageBackground source={menu_profile} style={{ flex:1 }} resizeMode="contain">
            
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{ siriOnClick({uri:"https://m-ets.ru/page/feedback"}) }} >
        <View style={ !cheked5 ?  styles.button__offCheck : styles.button__onCheck}>
          <ImageBackground source={menu_feedback} style={{ flex:1 }} resizeMode="contain">
            
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>

  )
}

export default function App() {


  // const [ loadingApp, setLoadingApp ] = useState(false)

  const [state, setStateS] = useState(false);
  const [siri, setSiri] = useState(null);

  const [cheked, setCheked] = useState(false);
  const [cheked2, setCheked2] = useState(false);
  const [cheked3, setCheked3] = useState(false);
  const [cheked4, setCheked4] = useState(false);
  const [cheked5, setCheked5] = useState(false);

  const siriOnClick = (siri) => {
    setSiri(siri);
    setStateS(!state);
  }

  // if(!loadingApp) {
  //   return (
  //     <AppLoading  onFinish={setLoadingApp(!loadingApp)}/>
  //   )
  // }

  return (

      <>
     
        {/* <SafeAreaView  >
           <StatusBar 
            animated={true}
            backgroundColor="grey"
          /> */}
            {

              !state ?
              <>
                <StatusBar 
                hidden
                animated={true}
                  // backgroundColor="grey"
                />
              <View style={{ width: '100%', minHeight:'100%' , flexDirection:'column', alignItems:'center', justifyContent:'center', position:'relative'}}>
                <View style={ styles.header_flex }>
                    <Image source={ logo_mets } style={{  width: 120, height: 35}}/>
                  </View>
                  
                <ScrollView pointerEvents="auto" style={{ width:'100%',  maxWidth:1024, marginBottom: 60}}>

                  <Content siriOnClick={siriOnClick} />                

                  <FooterApp />

                </ScrollView>
                    
                <NavigationPanel siriOnClick={siriOnClick} cheked={cheked} cheked={cheked2} cheked3={cheked3} cheked4={cheked4} cheked5={cheked5}/>

              </View>

              </>
              :
              <MetsView siri={siri} />

            } 
        {/* </SafeAreaView > */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    overflow:'scroll'
  },

  button_container:{
    width: '100%',
    height: 55, 
    paddingTop: 10
  },

  my_button:{
    width: 100,
    height: 50
  },

  header_flex:{
    width: '100%', 
    alignItems: 'center',
    height:55,
    paddingTop:12,
    top:0,
  },
  
  footer:{
    backgroundColor: '#232e3f', 
    width: '100%',
    minHeight: 100, 
  },

  footer__text: {
    color: '#fff',
    textAlign:'center'
  },

  footer__text_bold:{
    color: '#fff',
    textAlign:'center',
    fontSize: 20,
  },

  menu__bottom: {
    shadowColor: 'black',
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: -5},
    shadowRadius: 20,
    elevation:1,
    width:'100%', 
    height:60, 
    backgroundColor:'#f4f6f8', 
    position:'absolute', 
    bottom:25, 
    alignItems:'center', 
    justifyContent:'space-between', 
    flexDirection:'row',
    paddingTop:12,
    paddingBottom:12,
    paddingLeft:20, 
    paddingRight:20
  },

  button__offCheck: {
    width:36, 
    height:32, 
    opacity:0.3
  },

  button__onCheck:{
    width:36, 
    height:32, 
    opacity:0.3, 
    backgroundColor:'#d2dbe2', 
    borderRadius:5
  }
  
});
