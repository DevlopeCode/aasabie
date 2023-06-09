/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import TextC from '../../../../components/Text';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import R from '../../../../res/R';
import {CategoryListData} from '../res/rawData';

export const CategoryList = () => (
  <View
    style={{
      height: verticalScale(150),
      width: Dimensions.get('window').width,
      alignItems: 'center',
    }}>
    <View
      style={{
        marginHorizontal: scale(20),
        width: '100%',
        paddingHorizontal: scale(18),
      }}>
      <TextC style={{fontWeight: 'bold', color: R.color.dark.red}}>
        PRODUCT CATEGORIES
      </TextC>
    </View>
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={CategoryListData}
      horizontal
      style={{
        height: verticalScale(100),
        width: moderateScale(330),
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
        <TouchableOpacity
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
        </TouchableOpacity>
      )}
    />
  </View>
);
