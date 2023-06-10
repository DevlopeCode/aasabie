/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {SvgXml} from 'react-native-svg';
import {
  CardImgGirl,
  PlayButtonSVG,
  SendOutline,
  VerfiedGreen,
} from '../../assets/SVG';
import R from '../../res/R';
import TextC from '../Text';

const ReelsHoriZontal = () => {
  return (
    <ImageBackground
      imageStyle={{
        height: verticalScale(350),
        resizeMode: 'cover',
        borderRadius: scale(15),
      }}
      source={require('../../assets/images/Real1.png')}
      style={styles.cardContainer}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 2, padding: scale(10)}}>
          <TouchableOpacity
            style={{
              height: verticalScale(25),
              width: moderateScale(60),
              backgroundColor: R.color.dark.white,
              borderRadius: scale(15),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextC font="bold" style={{color: R.color.dark.black}}>
              Reels
            </TextC>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <SvgXml xml={PlayButtonSVG} />
        </TouchableOpacity>
        <View
          style={{
            flex: 2,
            // backgroundColor: 'black',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: verticalScale(50),
              //   backgroundColor: 'red',
              width: '100%',
              paddingHorizontal: scale(10),
            }}>
            <View
              style={{
                width: '80%',
                //  backgroundColor: 'white'
              }}>
              <View
                style={{
                  height: verticalScale(50),
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View>
                  <SvgXml xml={CardImgGirl} />
                  <SvgXml
                    xml={VerfiedGreen}
                    style={{
                      position: 'absolute',
                      marginLeft: scale(30),
                      marginTop: -scale(3),
                    }}
                  />
                </View>
                <View style={{paddingLeft: scale(10)}}>
                  <TextC
                    font="medium"
                    variant="title2"
                    color={R.color.dark.white}>
                    Andrew Daniel
                  </TextC>
                  <TextC
                    font="medium"
                    variant="title3"
                    color={R.color.dark.white}>
                    VFX Artist
                  </TextC>
                </View>
              </View>
            </View>
            <View
              style={{
                width: '20%',
                // backgroundColor: 'aqua',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <SvgXml xml={SendOutline} />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ReelsHoriZontal;

const styles = StyleSheet.create({
  cardContainer: {
    width: moderateScale(260),
    height: verticalScale(350),
    borderRadius: scale(15),
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // padding: scale(10),
  },
});
