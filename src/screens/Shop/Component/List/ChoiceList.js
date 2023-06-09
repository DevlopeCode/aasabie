/* eslint-disable react-native/no-inline-styles */
import {FlatList, ImageBackground, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import R from '../../../../res/R';
import TextC from '../../../../components/Text';
import {ChoiceData} from '../res/rawData';

const ChoiceItem = ({item, index}) => (
  <TouchableOpacity>
    <ImageBackground
      source={item.image}
      style={{
        height: verticalScale(90),
        width: moderateScale(150),
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginHorizontal: scale(8),
      }}
      imageStyle={{height: verticalScale(90), width: moderateScale(150)}}>
      <View
        style={{
          height: verticalScale(30),
          width: moderateScale(60),
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextC
          style={{
            fontWeight: 'bold',
            color: R.color.dark.white,
            fontSize: scale(12),
          }}>
          {item.title}
        </TextC>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

export const ChoiceList = () => (
  <View style={{marginVertical: verticalScale(10), alignItems: 'center'}}>
    <View
      style={{
        height: verticalScale(40),
        paddingHorizontal: scale(20),
        justifyContent: 'center',
        width: '100%',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextC style={{fontWeight: 'bold', color: '#EC303A'}}>
          CHOOSE YOUR CHOICE
        </TextC>
      </View>
    </View>
    <FlatList
      data={ChoiceData}
      renderItem={ChoiceItem}
      showsHorizontalScrollIndicator={false}
      numColumns={2}
      ItemSeparatorComponent={
        <View
          style={{
            height: moderateScale(15),
          }}
        />
      }
    />
  </View>
);
