/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import {navigationRef} from '../../../App';

const SplashScreen1 = () => {
  setTimeout(() => {
    navigationRef.navigate('Splash3');
  }, 3000);
  return <View style={{flex: 1, backgroundColor: '#EC4850'}} />;
};

export default SplashScreen1;
