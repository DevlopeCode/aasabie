/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {SvgXml} from 'react-native-svg';
import {Serch} from '../../assets/SVG';
import R from '../../res/R';

const SearchBar = () => {
  return (
    <View
      style={{
        height: verticalScale(40),
        width: '100%',
        alignItems: 'center',
        position: 'relative',
        marginTop: '25%',
      }}>
      <View
        style={{
          height: verticalScale(30),
          width: moderateScale(300),
          borderWidth: 1,
          borderColor: R.color.dark.red,
          flexDirection: 'row',
          borderRadius: scale(20),
          alignItems: 'center',
        }}>
        <View style={{width: scale(40), alignItems: 'center'}}>
          <SvgXml xml={Serch} />
        </View>
        <TextInput
          style={{width: '90%', padding: 0, margin: 0}}
          placeholder="Search on The Pickmart"
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
