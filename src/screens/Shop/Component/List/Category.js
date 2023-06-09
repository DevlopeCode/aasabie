/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {CategoryData} from '../res/rawData';
import {Dimensions, FlatList, TouchableOpacity, View} from 'react-native';
import {verticalScale, moderateScale, scale} from 'react-native-size-matters';
import TextC from '../../../../components/Text';
import {SvgXml} from 'react-native-svg';
import R from '../../../../res/R';

export const Category = () => (
  <View
    style={{
      height: verticalScale(50),
      width: Dimensions.get('screen').width,
      alignItems: 'center',
    }}>
    <FlatList
      data={CategoryData}
      showsHorizontalScrollIndicator={false}
      horizontal
      ItemSeparatorComponent={
        <View
          style={{
            width: moderateScale(5),
          }}
        />
      }
      style={{
        backgroundColor: '#FFACB1',
      }}
      renderItem={CartegoryItem}
    />
  </View>
);
const CartegoryItem = ({item}) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: scale(10),
        overflow: 'hidden',
        height: verticalScale(50),
        width: verticalScale(41),
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{height: scale(20), width: scale(20)}}>
        {item.image && <SvgXml xml={item.image} />}
      </View>
      <TextC
        numberOfLines={1}
        style={{
          fontSize: scale(11),
          fontWeight: 'bold',
          color: R.color.dark.white,
        }}
        children={item.title}
      />
    </TouchableOpacity>
  );
};
