/* eslint-disable react/react-in-jsx-scope */

import 'react-native-gesture-handler';

import {useState} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import Auth from './src';
import {UserContext} from './src/contexts/UserContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isUserLoggedInAsGuest, setIsUserLoggedInAsGuest] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);

  // useEffect(() => {
  //   Font.loadAsync({
  //     Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
  //     PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  //     Poppins-Bold: require('./assets/fonts/Poppins-Bold.ttf'),
  //   }).then(() => {
  //     setIsFontLoaded(true);
  //   });
  // }, []);

  //if(!isFontLoaded) return null;

  if (!isFontLoaded) {
    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <UserContext.Provider
          value={{
            isUserLoggedIn,
            setIsUserLoggedIn,
            isUserLoggedInAsGuest,
            setIsUserLoggedInAsGuest,
          }}>
          <View style={styles.container}>
            <StatusBar />
            <NavigationContainer ref={navigationRef}>
              <Auth />
            </NavigationContainer>
          </View>
        </UserContext.Provider>
      </GestureHandlerRootView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
