/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import TextC from '../../../../components/Text';
import {LocalSory} from '../res/rawData';

export const TopStory = () => (
  <>
    <View
      style={{
        height: verticalScale(40),
        paddingHorizontal: scale(20),
        justifyContent: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextC style={{fontWeight: 'bold', color: '#EC303A'}}>
          TOP STORIES BY VENDOR
        </TextC>
        <Image
          source={require('../../../../assets/images/new.png')}
          style={{
            height: scale(30),
            width: scale(30),
            marginLeft: scale(10),
          }}
        />
      </View>
    </View>
    <FlatList
      data={LocalSory}
      horizontal
      ItemSeparatorComponent={
        <View
          style={{
            width: moderateScale(5),
          }}
        />
      }
      renderItem={({item}) => (
        <View
          style={{
            marginLeft: 20,
            borderRadius: scale(10),
            overflow: 'hidden',
          }}>
          <Image
            source={item.image}
            style={{
              height: verticalScale(60),
              width: verticalScale(60),
              borderRadius: verticalScale(45),
              overflow: 'hidden',
            }}
          />
        </View>
      )}
    />
  </>
);
