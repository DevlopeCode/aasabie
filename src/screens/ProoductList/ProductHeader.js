/* eslint-disable react-native/no-inline-styles */
import {Image, View} from 'react-native';
import React from 'react';
import {scale, vs} from 'react-native-size-matters';
import {SvgXml} from 'react-native-svg';
import {BackArrowSvg, CartSVG, Serch} from '../../assets/SVG';
import TextC from '../../components/Text';
import R from '../../res/R';
export const ProductHeader = ({title}) => {
  return (
    <View
      style={{
        backgroundColor: '#EC4850',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scale(20),
        paddingVertical: vs(10),
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <SvgXml xml={BackArrowSvg('white', 20, 15)} />
        <TextC
          font="bold"
          color={R.color.dark.white}
          style={{paddingLeft: scale(10)}}>
          {title}
        </TextC>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '27%',
          justifyContent: 'space-around',
        }}>
        <SvgXml xml={Serch('white', 20, 20)} />
        <Image
          source={require('../../assets/images/mic.png')}
          style={{
            height: 20,
            width: 20,
            resizeMode: 'contain',
          }}
        />
        <SvgXml xml={CartSVG('', 20, 20)} />
      </View>
    </View>
  );
};
