import {View, Text} from 'react-native';
import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SignInScreen from '../screens/Auth/SignInScreen';
import SplashScreen3 from '../screens/splash/SplashScreen3';
import SplashScreen4 from '../screens/splash/SplashScreen4';
import SignUpScreen from '../screens/Auth/SignUpScreen';
const UserAuthStack = () => {
  const Stack = createStackNavigator();

  const options = {
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options} initialRouteName="Splash3">
        <Stack.Screen name="Splash3" component={SplashScreen3} />
        <Stack.Screen name="Splash4" component={SplashScreen4} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UserAuthStack;
