import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {height, width} from '../../config/dimension';
import {color} from '../../config/color';
import MenuIcon from './MenuIcon';
import NotificationIcon from './NotificationIcon';
import {SvgXml} from 'react-native-svg';
import {MessageSVG} from '../../assets/SVG';
const TopBar = () => {
  return (
    <View style={styles.TopBarConatiner}>
      <MenuIcon />

      <Text style={styles.topBarTitle}>Aasabie</Text>

      <View style={styles.topBarOptionsConatiner}>
        <NotificationIcon newNotification={true} />
        <SvgXml xml={MessageSVG} color={'red'} />
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  TopBarConatiner: {
    width: width,
    height: height * 0.075,
    paddingHorizontal: width * 0.05,
    backgroundColor: color.background,
    position: 'absolute',
    top: 25,
    left: 0,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    zIndex: 100,
  },
  topBarTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: color.primary,

    position: 'absolute',
    left: width * 0.5,
    transform: [{translateX: -50}],
  },
  topBarOptionsConatiner: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: width * 0.025,
  },
});
