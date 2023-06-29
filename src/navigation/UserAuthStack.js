import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import SignInScreen from '../screens/Auth/SignInScreen';
import SplashScreen3 from '../screens/splash/SplashScreen3';
import SplashScreen4 from '../screens/splash/SplashScreen4';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import SignInWithNumber from '../screens/Auth/SignInWithNumber';
import SplashScreen2 from '../screens/splash/SplashScreen2';
import TabNavigation from './TabNavigation';

const UserAuthStack = () => {
  const Stack = createStackNavigator();

  const options = {
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };

  return (
    <Stack.Navigator screenOptions={options} initialRouteName="Splash2">
      <Stack.Screen name="Splash2" component={SplashScreen2} />
      <Stack.Screen name="Splash3" component={SplashScreen3} />
      <Stack.Screen name="Splash4" component={SplashScreen4} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignInWithNumber" component={SignInWithNumber} />
      <Stack.Screen name="Dashbord" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default UserAuthStack;
