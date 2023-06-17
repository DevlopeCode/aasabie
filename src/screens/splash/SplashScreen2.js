/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {useEffect} from 'react';
import TextC from '../../components/Text';
import R from '../../res/R';
import navigationServices from '../../utils/navigationServices';
import {SvgXml} from 'react-native-svg';
import {Applogo} from '../../assets/SVG/Applogo';
import {scale} from 'react-native-size-matters';
const SplashScreen2 = () => {
  useEffect(() => {
    let timer = setTimeout(() => {
      navigationServices.replace('Splash3');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#EC4850',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <SvgXml xml={Applogo} />
      <TextC
        font="bold"
        variant="buttonText"
        style={{textTransform: 'uppercase', fontSize: scale(40)}}
        color={R.color.dark.white}>
        Aasabie
      </TextC>
    </View>
  );
};

export default SplashScreen2;
