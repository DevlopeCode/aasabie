/* eslint-disable react/no-unstable-nested-components */

/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Touchable, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {DealofTheday} from '../Shop/Component/List/DealofTheday';
import {DealData} from '../Shop/Component/res/rawData';
import {navigationRef} from '../../../App';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import TextC from '../../components/Text';
import R from '../../res/R';
import {SvgXml} from 'react-native-svg';
import {BackArrowSvg} from '../../assets/SVG';
import color from '../../res/color';
import navigationServices from '../../utils/navigationServices';

const DealsOfTheDayScreen = () => {
  const ListHeaderComponet = () => (
    <View
      style={{
        height: verticalScale(40),
        paddingHorizontal: scale(10),
        justifyContent: 'center',
        width: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigationServices.goBack()}
          style={{width: moderateScale(30)}}>
          <SvgXml xml={BackArrowSvg()} />
        </TouchableOpacity>

        <TextC font="bold" style={{color: '#EC303A'}}>
          Deal of the day
        </TextC>
      </View>
    </View>
  );
  return (
    <View style={{flex: 1, backgroundColor: color.dark.white}}>
      <Header />
      <DealofTheday
        data={[...DealData, ...DealData, ...DealData]}
        ListHeader={ListHeaderComponet}
      />
    </View>
  );
};

export default DealsOfTheDayScreen;

const styles = StyleSheet.create({});
