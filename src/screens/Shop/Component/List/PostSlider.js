/* eslint-disable react-native/no-inline-styles */
import {Dimensions, Image} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {moderateScale, scale} from 'react-native-size-matters';

export const PostSlider = () => (
  <Carousel
    loop
    width={Dimensions.get('window').width}
    height={moderateScale(250)}
    autoPlay={true}
    data={[...new Array(6).keys()]}
    scrollAnimationDuration={1000}
    mode="parallax"
    renderItem={({index}) => (
      <Image
        source={require('../../../../assets/images/HomeSlider.png')}
        style={{
          height: '100%',
          width: '98%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: scale(10),
        }}
      />
    )}
  />
);
