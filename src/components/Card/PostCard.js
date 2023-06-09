/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import TextC from '../Text';
import {
  BookMarkBlankSVG,
  CardImgGirl,
  CardOptionSvg,
  HeartOutline,
  PinkHeartSVG,
  SendSVG,
} from '../../assets/SVG';
import R from '../../res/R';
import {color} from '../../config/color';

export const PostCard = () => (
  <View style={styles.cardContainer}>
    <View
      style={{
        height: verticalScale(40),
        flexDirection: 'row',
        padding: scale(5),
      }}>
      <View
        style={{
          width: '50%',
          height: verticalScale(40),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <SvgXml xml={CardImgGirl} />
        <View style={{paddingLeft: scale(10)}}>
          <TextC font="black" variant="title2" color={R.color.dark.black}>
            Camila
          </TextC>
          <TextC font="black" variant="title3" color={R.color.dark.gray3}>
            Mexico City, Mexico
          </TextC>
        </View>
      </View>
      <View
        style={{
          width: '50%',
          height: verticalScale(40),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <SvgXml xml={CardOptionSvg} />
      </View>
    </View>
    <View
      style={{
        height: verticalScale(300),
        marginVertical: verticalScale(10),
      }}>
      <Image
        style={{
          height: '100%',
          width: '100%',
          resizeMode: 'cover',
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.19,
          shadowRadius: 5.62,
          elevation: 6,
          borderRadius: scale(10),
          backgroundColor: 'white',
        }}
        source={require('../../assets/images/FunnyPost.png')}
      />
    </View>
    <View
      style={{
        flexDirection: 'row',
        height: verticalScale(30),
      }}>
      <View
        style={{
          width: '60%',
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: moderateScale(75),
            height: verticalScale(30),
            backgroundColor: R.color.dark.gray5,
            borderRadius: scale(20),
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <SvgXml xml={PinkHeartSVG} />
          <TextC color={R.color.dark.black} style={{fontWeight: 'bold'}}>
            7.4 K
          </TextC>
        </View>
        <View
          style={{
            width: moderateScale(75),
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            style={{height: scale(20), width: scale(20)}}
            source={require('../../assets/images/BlankMsg.png')}
          />
          <TextC font="bold" variant="title1" color={R.color.dark.black}>
            164
          </TextC>
        </View>
        <View
          style={{
            width: moderateScale(75),

            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingRight: scale(20),
          }}>
          <SvgXml xml={SendSVG} />
        </View>
      </View>
      <View
        style={{
          width: '40%',
          // backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <SvgXml xml={BookMarkBlankSVG} />
      </View>
    </View>
    <View
      style={{
        flexDirection: 'row',
        height: verticalScale(40),
        // backgroundColor: 'red',
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '80%',
          // backgroundColor: 'aqua',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{
              uri: 'https://www.shutterstock.com/image-photo/closeup-photo-amazing-short-hairdo-260nw-1617540484.jpg',
            }}
            style={{
              height: scale(20),
              width: scale(20),
              borderRadius: scale(10),
              position: 'absolute',
              marginLeft: 12,
              borderWidth: 2,
              borderColor: R.color.dark.gray1,
            }}
          />
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/1410391090/photo/crystal-globe-putting-on-moss.jpg?s=2048x2048&w=is&k=20&c=x6u5kEmJsZuQtdrSzyV7X-raq6-3194fXU9VqSAwnsc=',
            }}
            style={{
              height: scale(20),
              width: scale(20),
              borderRadius: scale(10),
              position: 'relative',
              marginRight: 10,
              borderWidth: 2,
              borderColor: R.color.dark.gray1,
            }}
          />
          <Image
            source={{
              uri: 'https://www.shutterstock.com/image-photo/thoughtful-young-woman-on-color-260nw-2101624702.jpg',
            }}
            style={{
              height: scale(20),
              width: scale(20),
              borderRadius: scale(10),

              borderWidth: 2,
              borderColor: R.color.dark.gray1,
            }}
          />
        </View>
        <TextC
          variant="title3"
          font="regular"
          color={R.color.dark.black}
          style={{fontSize: 10, marginLeft: scale(8)}}>
          Aaron, Hank Adams, John, William...
        </TextC>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '20%',
          // backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            width: moderateScale(40),
            height: scale(20),
            backgroundColor: R.color.dark.gray5,
            borderRadius: scale(15),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextC
            variant="title3"
            color={R.color.dark.black}
            style={{fontSize: 10}}>
            More
          </TextC>
        </View>
      </View>
    </View>
    <TextC variant="h5" font="regular" style={{fontSize: 10}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
      libero et velit interdum, ac aliquet odio mattis.
    </TextC>
    <TouchableOpacity>
      <TextC variant="h5" font="regular" color={'#FF6D00'}>
        View all 39 comments
      </TextC>
    </TouchableOpacity>
    <View
      style={{
        flexDirection: 'row',
        // backgroundColor: 'red',
        height: verticalScale(15),
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '60%',
          justifyContent: 'space-between',
        }}>
        <TextC
          color={R.color.dark.black}
          variant="h5"
          font="regular"
          style={{fontSize: 10, fontWeight: 'bold'}}>
          Maryam milani
        </TextC>
        <TextC
          variant="h5"
          font="regular"
          style={{fontSize: 10}}
          color={R.color.dark.gray3}>
          Very powerful and melody!
        </TextC>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '40%',
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <SvgXml xml={HeartOutline} />
      </View>
    </View>
    <TextC variant="h5" font="regular" style={{fontSize: 10}}>
      11 hours ago
    </TextC>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    alignItems: 'center',
  },
  cardContainer: {
    width: moderateScale(330),
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    padding: scale(10),
    marginBottom: scale(20),
  },
});
