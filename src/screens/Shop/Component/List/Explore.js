/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {ExploreData} from '../res/rawData';
import TextC from '../../../../components/Text';
import R from '../../../../res/R';
const Explore = () => {
  return (
    <FlatList
      data={ExploreData}
      contentContainerStyle={{alignItems: 'center'}}
      style={{marginVertical: scale(20)}}
      ListHeaderComponent={
        <View
          style={{
            height: verticalScale(40),
            paddingHorizontal: scale(20),
            justifyContent: 'center',
            width: moderateScale(355),
          }}>
          <TextC font="bold" color="#EC303A" variant="h5">
            EXPLORE
          </TextC>
        </View>
      }
      renderItem={({index, item}) => (
        <View
          style={{
            height: verticalScale(40),
            backgroundColor: index % 2 == 0 ? '#F3878D' : '#EC303A',
            width: moderateScale(320),
            flexDirection: index % 2 == 0 ? 'row' : 'row-reverse',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: scale(20),
          }}>
          <View
            style={{
              width: moderateScale(200),
              alignItems: index % 2 == 0 ? 'flex-start' : 'flex-end',
            }}>
            <TextC transform="uppercase" color={R.color.dark.white} font="bold">
              {item.title}
            </TextC>
          </View>

          <Image
            source={item.image}
            style={{
              width: moderateScale(100),
              height: verticalScale(30),
              resizeMode: 'center',
            }}
          />
        </View>
      )}
      ItemSeparatorComponent={
        <View
          style={{
            height: moderateScale(15),
          }}
        />
      }
    />
  );
};

export default Explore;

const styles = StyleSheet.create({});
