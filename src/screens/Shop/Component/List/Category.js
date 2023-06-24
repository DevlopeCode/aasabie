/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {CategoryData} from '../res/rawData';
import {
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {verticalScale, moderateScale, scale} from 'react-native-size-matters';
import TextC from '../../../../components/Text';
import {SvgXml} from 'react-native-svg';
import R from '../../../../res/R';
import {useBaseUrl} from '../../../../contexts/storeState';
import {useFetch} from '../../../../requests/requestHook';
import {ActivityIndicator} from 'react-native-paper';
import { useCategories } from '../../../../contexts/storeState';


export const Category = () => {
  const setCategory = useCategories(state => state.setHomeCategories);
  const [data] = useFetch('products/home-categories', setCategory);

  return (
    <View
      style={{
        height: verticalScale(50),
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        backgroundColor: '#FFACB1',
      }}>
      {data === 'loading' ? (
        <ActivityIndicator size={20} color="white" style={{marginTop: '5%'}} />
      ) : (
        <FlatList
          data={data}
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
          renderItem={detail => <CartegoryItem {...detail} />}
        />
      )}
    </View>
  );
};

const CartegoryItem = ({item}) => {
  const URL = useBaseUrl(state => state.url);
  const IMG_URL = URL?.base_urls?.category_image_url + '/' + item?.icon;

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
        <Image
          source={{uri: IMG_URL}}
          style={{height: 17, width: 17, resizeMode: 'contain'}}
        />
      </View>
      <TextC
        numberOfLines={1}
        font="bold"
        style={{
          fontSize: scale(11),
          color: R.color.dark.white,
        }}
        children={item?.name}
      />
    </TouchableOpacity>
  );
};
