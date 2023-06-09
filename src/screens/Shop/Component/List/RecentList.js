/* eslint-disable react-native/no-inline-styles */
import {Dimensions, FlatList, Image, View} from 'react-native';
import React from 'react';
import {TopData} from '../res/rawData';
import TextC from '../../../../components/Text';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import R from '../../../../res/R';

const RecentListItem = ({item}) => (
  <View
    style={{
      alignItems: 'center',
      width: moderateScale(150),
      height: verticalScale(220),
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2,
      backgroundColor: '#FFF',
      borderRadius: scale(8),
    }}>
    <View
      style={{
        width: moderateScale(135),
        // marginRight: 10,
        height: verticalScale(200),
        borderRadius: scale(8),
        overflow: 'hidden',
        backgroundColor: '#FFF',
      }}>
      <Image
        source={item.image}
        style={{
          width: '100%',
          height: verticalScale(140),
          resizeMode: 'cover',
          overflow: 'hidden',
          marginVertical: 10,
        }}
      />
      <View style={{width: moderateScale(130), alignItems: 'center'}}>
        <TextC
          numberOfLines={2}
          style={{
            fontSize: scale(10),
            fontWeight: '700',
            color: R.color.dark.black1,
          }}>
          {item.title}
        </TextC>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <TextC
            style={{
              fontSize: scale(13),
              fontWeight: '700',
              color: R.color.dark.black,
            }}>
            {item.price}
          </TextC>
          <TextC
            style={{
              fontSize: scale(10),
              fontWeight: '700',
              color: R.color.dark.gray2,
            }}>
            {item.offprice}
          </TextC>
          <TextC
            style={{
              fontSize: scale(10),
              fontWeight: '700',
              color: R.color.dark.red,
            }}>
            ({item.offpercentage} Off)
          </TextC>
        </View>
      </View>
    </View>
  </View>
);

export const RecentList = () => (
  <View
    style={{
      marginVertical: verticalScale(10),
      alignItems: 'center',
      width: Dimensions.get('screen').width,
    }}>
    <View
      style={{
        height: verticalScale(40),
        paddingHorizontal: scale(20),
        justifyContent: 'center',
        width: '100%',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextC
          style={{
            fontWeight: 'bold',
            color: '#EC303A',
            textTransform: 'uppercase',
          }}>
          Recently Viewed
        </TextC>
      </View>
    </View>
    <FlatList
      data={TopData}
      style={{
        width: moderateScale(330),
      }}
      renderItem={RecentListItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={
        <View
          style={{
            width: moderateScale(15),
          }}
        />
      }
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingVertical: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        backgroundColor: '#FFF',
        //   backgroundColor: 'red',
      }}
    />
  </View>
);
