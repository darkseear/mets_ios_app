import React from 'react'
import {WebView} from 'react-native-webview'
import { StyleSheet,  Text, Image,  View , ScrollView, Button, _View, BackHandler, TouchableOpacity, ImageBackground, SafeAreaViewBase} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loading from '../../loading/Loading';
import { useNavigation } from '@react-navigation/core';

const MetsScreen = (props) => {
    const WEBVIEW_REF = React.useRef (null);
    const [state, setState] = React.useState();
    const navigation = useNavigation()

    let press = props.route.params !== undefined && props.route.params.metsParams !== undefined && props.route.params.metsParams !== null ? press = String(props.route.params.metsParams) : "";
    
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

   

    let showShared = `
    if(document.getElementById('share-content_block')){
        document.getElementById('share-content_block').removeAttribute('hidden');
    
    
    var shareButton = document.getElementById('share-btn');
    shareButton.removeAttribute('onclick');
    shareButton.addEventListener('click', function () {

        // Проверка поддержки navigator.share
        if (navigator.share) {
            console.log("Congrats! Your browser supports Web Share API")

            // navigator.share принимает объект с URL, title или text
            navigator.share({
                    title: "",
                    text: window.location.href,
                    url: window.location.href
                })
                .then(function () {
                    console.log("Shareing successfull")
                })
                .catch(function () {
                    console.log("Sharing failed")
                })

        } else {
            console.log("Sorry! Your browser does not support Web Share API")
        }
    })
    }
    `
  
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
      <SafeAreaView style={{ flex:1, marginBottom:0}}>
          <WebView  
              ref={ WEBVIEW_REF } 
              allowsBackForwardNavigationGestures
              style={styles.container}
              source={ press && press !== undefined && !!press ? { uri: press } : { uri: 'https://m-ets.ru/' }}
              // injectedJavaScriptAfterContentLoaded={runFirst}
              // injectedJavaScriptBeforeContentLoaded={func}
              injectedJavaScript={ showShared }
              autoManageStatusBarEnabled={true}
              startInLoadingState={true}
              javaScriptEnabled={true}
              javaScriptEnabledAndroid={true}
              renderLoading={() => {return <Loading/>}}
              mixedContentMode={'compatibility'}
              onMessage={ ()=>{} }
              //   originWhitelist={ !['https://m-ets.ru']}
              // onShouldStartLoadWithRequest={(request) => {
              //   // Only allow navigating within this website
              //   return request.url.startsWith('https://m-ets.ru');
              // }}
          />
      </SafeAreaView>
    );
  }

export default MetsScreen


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      overflow:'scroll'
    },
})