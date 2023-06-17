import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {height, width} from '../../config/dimension';
import {color} from '../../config/color';
import {SvgXml} from 'react-native-svg';
import {MessageSVG} from '../../assets/SVG';
import NotificationIcon from '../TopBar/NotificationIcon';
import MenuIcon from '../TopBar/MenuIcon';
import {ms, vs} from 'react-native-size-matters';
const Header = ({style}) => {
  return (
    <View style={[styles.TopBarConatiner, style]}>
      <MenuIcon />

      <Text style={styles.topBarTitle}>Aasabie</Text>

      <View style={styles.topBarOptionsConatiner}>
        <NotificationIcon newNotification={true} />
        <SvgXml xml={MessageSVG} color={'red'} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  TopBarConatiner: {
    width: width,
    height: vs(50),
    paddingHorizontal: ms(20),
    backgroundColor: color.background,
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
