import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './components/header/Header';
import MetsScreen from './components/SreensComponents/mets_screen/MetsScreen';
import HomeScreen from './HomeScreen';
import Spec2 from './Spec2';
import SpecScreen from './SpecScreen';

const Stack = createNativeStackNavigator();

function App_1() {

    return (
        <SafeAreaProvider>
            {/* <HomeScreen/> */} 
            <NavigationContainer >
                    <Stack.Navigator screenOptions={{ headerShown: false }}>     
                        <Stack.Screen
                            name="HomeScreen"
                            component={HomeScreen}
                        />
                        <Stack.Screen 
                            name="SpecScreen"
                            component={ SpecScreen }
                        />
                        <Stack.Screen 
                            name="MetsWebview"
                            component={ MetsScreen }
                        />
                    </Stack.Navigator>
                </NavigationContainer>
         </SafeAreaProvider>
    )
}

export default App_1
