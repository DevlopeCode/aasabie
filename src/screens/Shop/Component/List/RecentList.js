/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {TopData} from '../res/rawData';
import TextC from '../../../../components/Text';
import {
  moderateScale,
  ms,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import R from '../../../../res/R';
import {navigate} from '../../../../utils/navigationServices';

const RecentListItem = ({item}) => (
  <TouchableOpacity
    onPress={() => navigate('ProductDetail', item)}
    style={{
      padding: 10,
      backgroundColor: '#FFF',
      borderRadius: scale(8),
    }}>
    <View
      style={{
        borderRadius: scale(8),
        overflow: 'hidden',
        backgroundColor: '#FFF',
      }}>
      <Image
        source={item.image}
        style={{
          width: ms(135),
          height: verticalScale(140),
          resizeMode: 'cover',
          overflow: 'hidden',
        }}
      />
      <View style={{width: ms(135)}}>
        <TextC
          numberOfLines={2}
          font="medium"
          variant="h6"
          color={R.color.dark.black1}>
          {item.title}
        </TextC>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <TextC font="bold" color={R.color.dark.black} variant="h5">
            {item.price}
          </TextC>
          <TextC font="semibold" color={R.color.dark.gray2} variant="h6">
            {item.offprice}
          </TextC>
          <TextC font="semibold" color={R.color.dark.red} variant="h6">
            ({item.offpercentage} Off)
          </TextC>
        </View>
      </View>
    </View>
  </TouchableOpacity>
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
        <TextC font="bold" color="#EC303A" variant="h5">
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
            width: moderateScale(1),
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
