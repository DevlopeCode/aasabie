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
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

export const navigationRef = createNavigationContainerRef();

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isUserLoggedInAsGuest, setIsUserLoggedInAsGuest] = useState(false);
  console.warn = () => {};
  console.error =()=>{}
  // console.log =()=>{}
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <UserContext.Provider
        value={{
          isUserLoggedIn,
          setIsUserLoggedIn,
          isUserLoggedInAsGuest,
          setIsUserLoggedInAsGuest,
        }}>
        <QueryClientProvider client={queryClient}>
          <View style={styles.container}>
            <StatusBar />
            <NavigationContainer ref={navigationRef}>
              <Auth />
            </NavigationContainer>
          </View>
        </QueryClientProvider>
      </UserContext.Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
