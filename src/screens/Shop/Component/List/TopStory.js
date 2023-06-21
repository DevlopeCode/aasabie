/* eslint-disable react-native/no-inline-styles */
import {Dimensions, FlatList, Image, View} from 'react-native';
import React from 'react';
import {
  moderateScale,
  scale,
  verticalScale,
  vs,
} from 'react-native-size-matters';
import TextC from '../../../../components/Text';
import {LocalSory} from '../res/rawData';
import R from '../../../../res/R';
export const TopStory = () => (
  <View style={{width: Dimensions.get('window').width, alignItems: 'center'}}>
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
        <TextC font="bold" variant="h5" color="#EC303A">
          TOP STORIES BY VENDOR
        </TextC>
        <Image
          source={require('../../../../assets/images/new.png')}
          style={{
            height: vs(20),
            width: vs(20),
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
          font="bold"
          variant="h5"
          style={{
            color: R.color.dark.black,
            textTransform: 'uppercase',
            // fontSize: scale(15),
          }}>
          view all
        </TextC>
      </View>
    </View>
    <FlatList
      data={LocalSory}
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{
        width: moderateScale(330),
      }}
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
            marginLeft: scale(10),
            borderRadius: scale(10),
            overflow: 'hidden',
          }}>
          <Image
            source={item.image}
            style={{
              height: verticalScale(50),
              width: verticalScale(50),
              borderRadius: verticalScale(45),
              overflow: 'hidden',
            }}
          />
        </View>
      )}
    />
  </View>
);
