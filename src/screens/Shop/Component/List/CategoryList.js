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
import {
  moderateScale,
  scale,
  verticalScale,
  vs,
} from 'react-native-size-matters';
import R from '../../../../res/R';
import {CategoryListData} from '../res/rawData';
import navigationServices from '../../../../utils/navigationServices';

export const CategoryList = () => (
  <View
    style={{
      height: verticalScale(100),
      width: Dimensions.get('window').width,
      alignItems: 'center',
    }}>
    <View
      style={{
        marginHorizontal: scale(20),
        width: '100%',
        paddingHorizontal: scale(18),
      }}>
      <TextC font="bold" variant="h5" style={{color: R.color.dark.red}}>
        PRODUCT CATEGORIES
      </TextC>
    </View>
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={CategoryListData}
      horizontal
      style={{
        height: verticalScale(90),
        width: moderateScale(330),
      }}
      contentContainerStyle={{
        alignItems: 'center',
      }}
      ItemSeparatorComponent={
        <View
          style={{
            width: moderateScale(10),
          }}
        />
      }
      renderItem={({index, item}) => (
        <TouchableOpacity
          onPress={() => navigationServices.navigate('ApparelScrren')}
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={item.image}
            style={{
              height: vs(50),
              width: vs(50),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: scale(10),
            }}
          />
          <TextC font="bold" variant="small">
            {item.title}
          </TextC>
        </TouchableOpacity>
      )}
    />
  </View>
);
