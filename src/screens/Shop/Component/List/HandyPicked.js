/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  moderateScale,
  ms,
  s,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import R from '../../../../res/R';
import {LocalPcked} from '../../../Home/HomeScreen';
import TextC from '../../../../components/Text';

const HandyPicked = () => {
  return (
    <FlatList
      data={LocalPcked}
      numColumns={3}
      style={{paddingHorizontal: s(13)}}
      ListHeaderComponent={() => (
        <View
          style={{
            height: verticalScale(40),
            justifyContent: 'center',
          }}>
          <TextC font="bold" style={{color: '#EC303A'}}>
            HandPicked by top influencers
          </TextC>
        </View>
      )}
      renderItem={({item}) => (
        <View
          style={{
            height: verticalScale(135),

            margin: 5,
            backgroundColor: 'white',
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.2,
            shadowRadius: 5.62,
            elevation: 5,
            borderRadius: scale(10),
            overflow: 'hidden',
          }}>
          <Image
            source={item.image}
            style={{height: verticalScale(85), width: ms(100)}}
          />
          <View style={{padding: scale(5)}}>
            <TextC font="regular" variant="h6">
              Sling bag
            </TextC>
            <TextC font="bold" variant="h5" color={R.color.dark.black}>
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
