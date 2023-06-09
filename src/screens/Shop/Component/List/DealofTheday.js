/* eslint-disable react-native/no-inline-styles */
import {FlatList, ImageBackground, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import R from '../../../../res/R';
import TextC from '../../../../components/Text';
import {ChoiceData, DealData} from '../res/rawData';

const DealItem = ({item, index}) => (
  <TouchableOpacity>
    <ImageBackground
      source={item.image}
      style={{
        height: verticalScale(110),
        width: moderateScale(150),
        // justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginHorizontal: scale(8),
        padding: scale(6),
      }}
      imageStyle={{height: verticalScale(110), width: moderateScale(150)}}>
      <View
        style={{
          height: verticalScale(20),
          width: moderateScale(70),
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: scale(20),
          //   position: 'absolute',
        }}>
        <TextC
          style={{
            fontWeight: 'bold',
            color: R.color.dark.white,
            fontSize: scale(10),
          }}>
          1 day left
        </TextC>
      </View>
    </ImageBackground>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: moderateScale(150),
        marginHorizontal: scale(8),
        height: verticalScale(60),
        justifyContent: 'space-between',
      }}>
      <View style={{width: '70%'}}>
        <TextC
          numberOfLines={2}
          style={{fontSize: scale(8.5), color: R.color.dark.black}}>
          {item.title}
        </TextC>
        <TextC style={{fontSize: scale(10), color: '#EC303A'}}>
          ({item.offpercentage} Off)
        </TextC>
      </View>
      <View style={{width: '30%'}}>
        <TextC
          style={{
            fontSize: scale(10),
            color: R.color.dark.black,
            fontWeight: 'bold',
          }}>
          {item.price}
        </TextC>
        <TextC
          style={{
            fontSize: scale(8),
            color: R.color.dark.gray2,
            textDecorationLine: 'line-through',
          }}>
          {item.offprice}
        </TextC>
      </View>
    </View>
    <TouchableOpacity
      style={{
        height: verticalScale(30),
        width: moderateScale(150),
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: scale(8),
        padding: scale(5),
        backgroundColor: '#7FAA39',
        borderRadius: scale(10),
      }}>
      <TextC
        color={R.color.dark.white}
        style={{fontWeight: 'bold', fontSize: scale(13)}}>
        22:00:30 hr left
      </TextC>
    </TouchableOpacity>
  </TouchableOpacity>
);

export const DealofTheday = () => (
  <View style={{marginVertical: verticalScale(10), alignItems: 'center'}}>
    <View
      style={{
        height: verticalScale(40),
        paddingHorizontal: scale(20),
        justifyContent: 'center',
        width: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TextC style={{fontWeight: 'bold', color: '#EC303A'}}>
          Deal of the day
        </TextC>
        <TextC
          style={{
            fontWeight: 'bold',
            color: R.color.dark.black,
            fontSize: scale(9),
          }}>
          See more
        </TextC>
      </View>
    </View>
    <FlatList
      data={DealData}
      renderItem={DealItem}
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
