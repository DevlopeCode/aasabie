/* eslint-disable react-native/no-inline-styles */
import {FlatList, ImageBackground, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale, vs} from 'react-native-size-matters';
import R from '../../../../res/R';
import TextC from '../../../../components/Text';
import {ChoiceData, DealData} from '../res/rawData';
import {navigationRef} from '../../../../../App';

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
          font="bold"
          style={{
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
          font="bold"
          style={{
            fontSize: scale(10),
            color: R.color.dark.black,
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
        font="bold"
        color={R.color.dark.white}
        style={{fontSize: scale(13)}}>
        22:00:30 hr left
      </TextC>
    </TouchableOpacity>
  </TouchableOpacity>
);

const ListHeaderComponet = () => (
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
      <TextC font="bold" style={{color: '#EC303A'}}>
        Deal of the day
      </TextC>
      <TouchableOpacity
        onPress={() => navigationRef.current.navigate('DealOftheDay')}>
        <TextC
          font="bold"
          style={{
            color: R.color.dark.black,
            fontSize: scale(9),
          }}>
          See more
        </TextC>
      </TouchableOpacity>
    </View>
  </View>
);
export const DealofTheday = ({
  data = DealData,
  ListHeader = ListHeaderComponet,
}) => (
  <View style={{marginVertical: verticalScale(10), alignItems: 'center'}}>
    <FlatList
      data={data}
      ListHeaderComponent={ListHeader}
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


const SummerDealItem = ({item, index}) => (
  <TouchableOpacity activeOpacity={1} style={{ marginLeft:moderateScale(16), backgroundColor:'white', borderRadius:11,paddingVertical:vs(7)}} >
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
          font="bold"
          style={{
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
        // backgroundColor:'pink',
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
          font="bold"
          style={{
            fontSize: scale(10),
            color: R.color.dark.black,
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
        font="bold"
        color={R.color.dark.white}
        style={{fontSize: scale(13)}}>
        22:00:30 hr left
      </TextC>
    </TouchableOpacity>
  </TouchableOpacity>
);
export const SummerDealofTheday = ({
  data = DealData,
  ListHeader = ListHeaderComponet,
}) => (
  <View style={{marginVertical: verticalScale(10), alignItems: 'center'}}>
    <FlatList
      data={data}
      style={{marginLeft:-moderateScale(16)}}
      ListHeaderComponent={ListHeader}
      // DealItem
      renderItem={SummerDealItem}
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