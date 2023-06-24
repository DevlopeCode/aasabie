/* eslint-disable react-native/no-inline-styles */
import {FlatList, ImageBackground, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import R from '../../../../res/R';
import TextC from '../../../../components/Text';
import {ChoiceData} from '../res/rawData';
import { useCategories } from '../../../../contexts/storeState';
import { useBaseUrl } from '../../../../contexts/storeState';

const ChoiceItem = ({item, index}) => {
  const bannerBashUrl = useBaseUrl(state=>state.url)
  const IMG_BACKGROUND = bannerBashUrl?.base_urls?.category_image_url+'/'+item?.icon

  return(
    <TouchableOpacity>
      <ImageBackground
        source={{uri:IMG_BACKGROUND}}
        style={{
          height: verticalScale(80),
          width: moderateScale(150),
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginHorizontal: scale(8),
        }}
        imageStyle={{height: verticalScale(80), width: moderateScale(150)}}>
        <View
          style={{
            height: verticalScale(30),
            width: moderateScale(60),
            backgroundColor: '#DF4444',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextC numberOfLines={1} font="bold" variant="h5" color={R.color.dark.white}>
            {item?.name}
          </TextC>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
};

export const ChoiceList = () => {

const chooseCategory = useCategories(state=>state.home_categories)
console.log(chooseCategory,'=======>')

  return(
    <View style={{marginVertical: verticalScale(10), alignItems: 'center'}}>
      <View
        style={{
          height: verticalScale(40),
          paddingHorizontal: scale(20),
          justifyContent: 'center',
          width: '100%',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextC font="bold" variant="h5" color="#EC303A">
            CHOOSE YOUR CHOICE
          </TextC>
        </View>
      </View>
      <FlatList
        data={chooseCategory}
        renderItem={(_details)=><ChoiceItem {..._details} />}
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
  )
};
