/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DownArrowSVG} from '../../assets/SVG';
import TextC from '../../components/Text';
import {SvgXml} from 'react-native-svg';
import {ms, scale, vs} from 'react-native-size-matters';

const FilterItem = ({title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingHorizontal: scale(8),
        borderRadius: scale(5),
        marginRight: 10,
      }}>
      <TextC font="regular" style={{marginRight: ms(10), fontSize: vs(12)}}>
        {title}
      </TextC>
      <SvgXml xml={DownArrowSVG} />
    </View>
  );
};
const FilterList = () => {
  return (
    <View
      style={{
        backgroundColor: '#E6E6E6',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scale(10),
        paddingVertical: vs(14),
        justifyContent: 'space-between',
      }}>
      <FilterItem title="Sort" />
      <FilterItem title="Brand" />
      <FilterItem title="Price" />
      <FilterItem title="Filter" />
    </View>
  );
};

export default FilterList;

const styles = StyleSheet.create({});
