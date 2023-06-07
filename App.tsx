/* eslint-disable react-native/no-inline-styles */
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
/* eslint-disable react/react-in-jsx-scope */
import 'react-native-gesture-handler';

import {useEffect, useState} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import Auth from './src';
import {UserContext} from './src/contexts/UserContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isUserLoggedInAsGuest, setIsUserLoggedInAsGuest] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);

  // useEffect(() => {
  //   Font.loadAsync({
  //     Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
  //     PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  //     PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
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
            <Auth />
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
