import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {SvgXml} from 'react-native-svg';
import {BackSVG} from '../../assets/SVG';

const BackArrowCircle = ({size, color}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handleBackPress}>
      <SvgXml xml={BackSVG} />
    </TouchableOpacity>
  );
};

export default BackArrowCircle;
