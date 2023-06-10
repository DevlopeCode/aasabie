/* eslint-disable react-native/no-inline-styles */
import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import ReelsHoriZontal from '../../../../components/Card/RealsHoriZontal';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import TextC from '../../../../components/Text';
import R from '../../../../res/R';
const PickMart = () => {
  return (
    <View
      style={{
        marginVertical: scale(20),
        width: Dimensions.get('screen').width,
        alignItems: 'center',
      }}>
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
          <TextC font="bold" style={{color: '#EC303A', fontSize: scale(15)}}>
            HOT ON PICKMART
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
            font="bold"
            style={{
              color: R.color.dark.black,
              textTransform: 'uppercase',
              fontSize: scale(15),
            }}>
            view all
          </TextC>
        </View>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={[1, 2, 3, 4]}
        renderItem={ReelsHoriZontal}
        style={{
          height: verticalScale(380),
          // paddingHorizontal: scale(20),
          width: moderateScale(330),
        }}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        ItemSeparatorComponent={
          <View
            style={{
              width: moderateScale(15),
            }}
          />
        }
      />
    </View>
  );
};

export default PickMart;

const styles = StyleSheet.create({});
