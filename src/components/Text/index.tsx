import React from 'react';

import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';

import {useTheme} from '@react-navigation/native';
import R from '../../res/R';

const TextC = (props: ITextProps) => {
  const {colors}: any = useTheme();

  const {
    variant = 'title2',
    color = colors.fontPrimary,
    style = {},
    font = 'regular',
    gutterBottom = 0,
    gutterTop = 0,
    gutterLeft = 0,
    gutterRight = 0,
    align = 'auto',
    alignVertical = 'auto',
    transform = 'none',
    ...restProps
  } = props;
  const defaultStyles = styles[variant];
  return (
    <Text
      style={{
        ...styles[font],
        ...defaultStyles,
        color,
        textAlign: align,
        textAlignVertical: alignVertical,
        marginBottom: R.unit.scale(gutterBottom),
        marginTop: R.unit.scale(gutterTop),
        marginLeft: R.unit.scale(gutterLeft),
        marginRight: R.unit.scale(gutterRight),
        textTransform: transform,
        ...style,
      }}
      {...restProps}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: R.unit.scale(30),
  },
  title: {
    fontSize: R.unit.scale(18),
  },
  title2: {
    fontSize: R.unit.scale(16),
  },
  title3: {
    fontSize: R.unit.scale(14),
  },
  title4: {
    fontSize: R.unit.scale(13),
  },
  content: {
    fontSize: R.unit.scale(12),
  },
  content2: {
    fontSize: R.unit.scale(10),
  },
  content3: {
    fontSize: R.unit.scale(13),
  },
  small: {
    fontSize: R.unit.scale(8),
  },
  h0: {
    fontSize: R.unit.scale(27),
  },
  h1: {
    fontSize: R.unit.scale(24),
  },
  h2: {
    fontSize: R.unit.scale(22),
  },
  h3: {
    fontSize: R.unit.scale(20),
  },
  h4: {
    fontSize: R.unit.scale(18),
  },
  h5: {
    fontSize: R.unit.scale(13),
  },
  h6: {
    fontSize: R.unit.scale(10),
  },
  h7: {
    fontSize: R.unit.scale(16),
  },
  buttonText: {
    fontSize: R.unit.scale(18),
  },
  light: {
    fontFamily: R.font.Light,
  },
  regular: {
    fontFamily: R.font.Regular,
  },
  bold: {
    fontFamily: R.font.Bold,
  },
  italic: {
    fontFamily: R.font.Italic,
  },
  medium: {
    fontFamily: R.font.Medium,
  },
  black: {
    fontFamily: R.font.Black,
  },
});

/*
title - 18dp - main top title
title2 - 16dp will be used in tab or section
title3 - 14dp will be used in tab or section
small - 8dp below title small gray text
content - 12 dp , black
content2 - 10 dp, black
h1 - 32dp
h2 - 24dp
h3 - 18dp
h4 - 16dp
h5 - 13dp
h6 - 10dp
buttonText - 12dp
*/

export interface ITextProps extends TextProps {
  children?: any;
  variant?:
    | 'heading'
    | 'title'
    | 'title2'
    | 'title3'
    | 'title4'
    | 'content'
    | 'content2'
    | 'content3'
    | 'small'
    | 'h6'
    | 'h5'
    | 'h4'
    | 'h3'
    | 'h2'
    | 'h1'
    | 'h0'
    | 'buttonText';
  style?: TextStyle;

  // util
  color?: string;
  font?: 'light' | 'regular' | 'italic' | 'bold' | 'medium' | 'black';
  gutterBottom?: number;
  gutterTop?: number;
  gutterLeft?: number;
  gutterRight?: number;
  opactity?: number;
  fontStyle?: 'normal' | 'italic';
  fontWeight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | 'normal'
    | 'bold';
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  alignVertical?: 'auto' | 'top' | 'bottom' | 'center';
}

export default TextC;
