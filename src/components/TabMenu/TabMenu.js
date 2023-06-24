import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../../config/color';
import {height, width} from '../../config/dimension';
import ScrollContainer from '../ScrollComponent';

const TabMenu = () => {
  return <ScrollContainer />;
};

export default TabMenu;

const styles = StyleSheet.create({
  tabmenuConatiner: {
    backgroundColor: color.primary,
    height: height * 0.075,
    width: width,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
});
