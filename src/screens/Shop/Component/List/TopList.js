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
  s,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import R from '../../../../res/R';
import { useFetch } from '../../../../requests/requestHook';
import { ActivityIndicator } from 'react-native-paper';
import { hp } from '../../../../components/Responsive';


const TopListItem = ({item}) => (
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
        height: verticalScale(220),
        borderRadius: scale(8),
        overflow: 'hidden',
        backgroundColor: '#FFF',
      }}>
      <Image
        source={item.image}
        style={{
          width: '100%',
          height: verticalScale(120),
          resizeMode: 'cover',
          overflow: 'hidden',
          marginVertical: 10,
        }}
      />
      <View
        style={{
          width: moderateScale(130),
          alignItems: 'center',
          // justifyContent: 'center',
        }}>
        <TextC
          font="semibold"
          numberOfLines={2}
          style={{
            fontSize: scale(10),
            color: R.color.dark.black1,
          }}>
          {item.title}
        </TextC>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextC
            font="semibold"
            variant="h6"
            style={{
              // fontSize: scale(13),
              color: R.color.dark.black,
              paddingRight: s(10),
            }}>
            {item.price}
          </TextC>
          <TextC
            font="semibold"
            variant="small"
            style={{
              color: R.color.dark.gray2,
              textDecorationLine: 'line-through',
            }}>
            {item.offprice}
          </TextC>
          <TextC
            font="semibold"
            variant="h6"
            style={{
              color: R.color.dark.black1,
            }}>
            ({item.offpercentage} Off)
          </TextC>
        </View>
        <TouchableOpacity
          style={{
            width: moderateScale(120),
            height: verticalScale(20),
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: scale(5),
          }}>
          <TextC
            font="semibold"
            style={{
              fontSize: scale(10),
              textTransform: 'uppercase',
            }}>
            Add Item
          </TextC>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export const TopList = () => {
const [topTenSold]= useFetch('products/best-sellings')
console.log(topTenSold,'topTenSoldtopTenSoldtopTenSold')
// https://www.aasabie.com/api/v1/products/best-sellings

  return(
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
            font="bold"
            variant="h5"
            color="#EC303A"
            style={{
              textTransform: 'uppercase',
            }}>
            TOP 10 mOST SOLD PRODUCTS THIS WEEK
          </TextC>
        </View>
      </View>
      
      {topTenSold==='loading'?<ActivityIndicator   color="#EC303A" style={{marginBottom:hp(5), marginTop:hp(4)}} />: <FlatList
        // data={TopData}
        data={topTenSold}
        renderItem={TopListItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        style={{
          // height: verticalScale(100),
          width: moderateScale(330),
        }}
        ItemSeparatorComponent={
          <View
            style={{
              width: moderateScale(15),
            }}
          />
        }
        horizontal
        contentContainerStyle={{
          // paddingHorizontal: 10,
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
      /> }
      {/**/}
    </View>
  )
};
