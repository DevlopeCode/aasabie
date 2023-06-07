/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, View} from 'react-native';
import React from 'react';
import TextC from '../../../../components/Text';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import R from '../../../../res/R';
import {CategoryListData} from '../res/rawData';
export const CategoryList = () => (
  <View style={{height: verticalScale(150)}}>
    <View style={{marginHorizontal: scale(20)}}>
      <TextC style={{fontWeight: 'bold', color: R.color.dark.red}}>
        PRODUCT CATEGORIES
      </TextC>
    </View>
    <FlatList
      data={CategoryListData}
      horizontal
      style={{
        height: verticalScale(100),
        paddingHorizontal: scale(20),
      }}
      contentContainerStyle={{
        alignItems: 'center',
      }}
      ItemSeparatorComponent={
        <View
          style={{
            width: moderateScale(20),
          }}
        />
      }
      renderItem={({index, item}) => (
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={item.image}
            style={{
              height: scale(80),
              width: scale(80),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: scale(10),
            }}
          />
          <TextC
            style={{
              fontWeight: 'bold',
              color: R.color.dark.black,
              fontSize: scale(13),
            }}>
            {item.title}
          </TextC>
        </View>
      )}
    />
  </View>
);
