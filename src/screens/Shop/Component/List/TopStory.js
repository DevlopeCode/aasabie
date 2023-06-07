/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import TextC from '../../../../components/Text';
import {LocalSory} from '../res/rawData';
import R from '../../../../res/R';

export const TopStory = () => (
  <>
    <View
      style={{
        height: verticalScale(40),
        paddingHorizontal: scale(20),
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <TextC
          style={{fontWeight: 'bold', color: '#EC303A', fontSize: scale(15)}}>
          TOP STORIES BY VENDOR
        </TextC>
        <Image
          source={require('../../../../assets/images/new.png')}
          style={{
            height: scale(30),
            width: scale(30),
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <TextC
          style={{
            fontWeight: 'bold',
            color: R.color.dark.black,
            textTransform: 'uppercase',
            fontSize: scale(15),
          }}>
          view all
        </TextC>
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
