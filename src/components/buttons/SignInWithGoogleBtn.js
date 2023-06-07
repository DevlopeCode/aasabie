import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
// import Constants from 'expo-constants';
// import {useFonts} from 'expo-font';
// import * as Google from 'expo-auth-session/providers/google';
// import * as WebBrowser from 'expo-web-browser';
// import * as AuthSession from 'expo-auth-session';
// import auth from '@react-native-firebase/auth';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';

async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  // await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  // // Get the users ID token
  // const {idToken} = await GoogleSignin.signIn();
  // // Create a Google credential with the token
  // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  // // Sign-in the user with the credential
  // return auth().signInWithCredential(googleCredential);
}
// WebBrowser.maybeCompleteAuthSession();

// const EXPO_REDIRECT_PARAMS = {
//   useProxy: true,
//   projectNameForProxy: '@username/myapp',
// };
// const NATIVE_REDIRECT_PARAMS = {native: 'com.company.aasabie.app://'};
// const REDIRECT_PARAMS =
//   Constants.appOwnership === 'expo'
//     ? EXPO_REDIRECT_PARAMS
//     : NATIVE_REDIRECT_PARAMS;
// const redirectUri = AuthSession.makeRedirectUri(REDIRECT_PARAMS);

const SignInWithGoogleButton = ({mode}) => {
  // const ThisMode = mode;
  // const [token, setToken] = useState('');
  // const [socialData, setUserInfo] = useState(null);
  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   androidClientId: Constants.manifest.extra.googleSignIn.androidClientId,
  //   iosClientId: Constants.manifest.extra.googleSignIn.iosClientId,
  // });
  // const [fontsLoaded] = useFonts({
  //   PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf'),
  // });

  // const signIn = async () => {
  //   promptAsync(REDIRECT_PARAMS);
  // };

  // useEffect(() => {
  //   if (response?.type === 'success') {
  //     setToken(response.authentication.accessToken);
  //     getUserInfo();
  //   }
  // }, [response, token]);

  // const getUserInfo = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://www.googleapis.com/userinfo/v2/me',
  //       {
  //         headers: {Authorization: `Bearer ${token}`},
  //       },
  //     );

  //     const user = await response.json();
  //     setUserInfo(user);
  //     console.log(user);
  //   } catch (error) {
  //     // Add your own error handler here
  //   }
  // };

  return (
    <TouchableOpacity
    // onPress={onGoogleButtonPress}
    >
      <View style={styles.button}>
        <Image
          source={require('../../assets/google_logo.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>Sign in with Google</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'PoppinsBold',
  },
});

export default SignInWithGoogleButton;

// import React from 'react';
// import { View, StyleSheet,Dimensions, TouchableOpacity, Text, Image } from 'react-native';
// // import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
// import { useFonts } from 'expo-font';
// const {width,height}=Dimensions.get("window")

// const SignInWithGoogleButton = ({mode}) => {
//   const ThisMode=mode;
//   const [fontsLoaded] = useFonts({
//     'PoppinsBold': require('../../assets/fonts/PoppinsBold.ttf'),
//   });
//   const signInWithGoogle = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const { idToken, user } = await GoogleSignin.signIn();
//       console.log(user);
//       // TODO: Handle successful sign-in
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         // user cancelled the sign-in flow
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         // operation (e.g. sign-in) is in progress already
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         // play services not available or outdated
//       } else {
//         // some other error occurred
//       }
//     }
//   };

//   return (
//     <TouchableOpacity onPress={signInWithGoogle}>
//       <View style={{...styles.button,width:mode==1?width:width}}>
//         <Image
//           source={require('../../assets/google_logo.png')}
//           style={styles.logo}
//         />
//         <Text style={styles.text}>Sign in with Google</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     height: 50,
//     flexDirection:"row",
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     margin: 10,
//   },
//   logo: {
//     width: 24,
//     height: 24,
//     marginRight: 8,
//   },
//   text: {
//     color: '#000',
//     fontSize: 16,
//     fontWeight: '600',
//     fontFamily:"PoppinsBold"

//   },
// });

// export default SignInWithGoogleButton;
