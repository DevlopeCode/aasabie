/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {wp} from '../../../components/Responsive';
import {vs} from 'react-native-size-matters';
import {SvgXml} from 'react-native-svg';
import {ArrowLeft_red} from '../../../assets/SVG';
import TextC from '../../../components/Text';
// ArrowLeft_red

const Header = () => {
  return (
    <View
      style={{
        height: vs(40),
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <SvgXml xml={ArrowLeft_red} />
      <TextC color="red" font="medium" variant="h3">
        My oupons
      </TextC>
      <View />
    </View>
  );
};
export default function MyCoupons() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <FlatList
        data={[1, 2, 3, , 4, 5, 5, 343, 4, 34, 34, 34]}
        renderItem={({item, index}) => (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#F1F1F1',
              borderRadius: 7,
              paddingVertical: 19,
              paddingHorizontal: 15,
              marginVertical: 9,
              marginHorizontal: wp(4),
              alignItems: 'center',
            }}>
            <View style={{flex: 1}}>
              <Text style={{fontSize: vs(13)}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text
                style={{
                  marginTop: 8,
                  fontFamily: 'Poppins-Regular',
                  fontSize: vs(11),
                }}>
                10% off on every first purchase
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#EC303A',
                paddingVertical: vs(10),
                paddingHorizontal: 16,
                borderRadius: 5,
              }}>
              <Text
                style={{color: 'white', fontSize: vs(10), fontWeight: 'bold'}}>
                FIRSTPICK50
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});