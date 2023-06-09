/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import R from '../../../../res/R';
import {LocalPcked} from '../../../Home/HomeScreen';
import TextC from '../../../../components/Text';

const HandyPicked = () => {
  return (
    <FlatList
      data={LocalPcked}
      numColumns={3}
      style={{marginVertical: verticalScale(10)}}
      ListHeaderComponent={() => (
        <View
          style={{
            height: verticalScale(40),
            paddingHorizontal: scale(20),
            justifyContent: 'center',
          }}>
          <TextC style={{fontWeight: 'bold', color: '#EC303A'}}>
            Handpicked by top influencers
          </TextC>
        </View>
      )}
      ItemSeparatorComponent={
        <View
          style={{
            height: moderateScale(15),
          }}
        />
      }
      renderItem={({item}) => (
        <View
          style={{
            height: verticalScale(130),
            width: moderateScale(92),
            marginLeft: 20,
            backgroundColor: 'white',
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.2,
            shadowRadius: 5.62,
            elevation: 7,
            borderRadius: scale(10),
            overflow: 'hidden',
          }}>
          <Image
            source={item.image}
            style={{height: verticalScale(90), width: '100%'}}
          />
          <View style={{padding: scale(5)}}>
            <TextC style={{fontSize: 12}}>Sling bag</TextC>
            <TextC
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: R.color.dark.black,
              }}>
              Explore Now
            </TextC>
          </View>
        </View>
      )}
    />
  );
};

export default HandyPicked;

const styles = StyleSheet.create({});
