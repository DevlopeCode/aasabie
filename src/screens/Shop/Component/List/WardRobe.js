/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import TextC from '../../../../components/Text';
import R from '../../../../res/R';
import {OfferData, RobData} from '../res/rawData';
import LinearGradient from 'react-native-linear-gradient';
const HeadContain = () => (
  <View
    style={{
      height: verticalScale(80),
      backgroundColor: '#F4E8FF',
      justifyContent: 'flex-end',
    }}>
    <View
      style={{
        height: verticalScale(60),
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TextC
        style={{
          color: '#EC303A',
          fontWeight: '600',
          fontSize: scale(15),
        }}>
        EVERYDAY WARDROBE
      </TextC>
      <TextC
        style={{
          color: R.color.dark.black,
          fontWeight: '700',
          fontSize: scale(18),
        }}>
        Staples that elevate your wardrobe
      </TextC>
    </View>
  </View>
);

const ItemSlider = () => (
  <FlatList
    data={RobData}
    horizontal
    showsHorizontalScrollIndicator={false}
    ItemSeparatorComponent={
      <View
        style={{
          width: moderateScale(20),
        }}
      />
    }
    style={{width: moderateScale(310), marginVertical: verticalScale(20)}}
    renderItem={({item}) => (
      <TouchableOpacity
        style={{width: moderateScale(120), height: verticalScale(180)}}>
        <ImageBackground
          source={item.image}
          style={{
            height: verticalScale(175),
            width: moderateScale(140),
            justifyContent: 'flex-end',
          }}
          imageStyle={{height: verticalScale(150), width: moderateScale(120)}}>
          <View
            style={{
              height: verticalScale(25),
              backgroundColor: '#EC303A',
              width: moderateScale(120),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextC
              style={{
                fontSize: scale(12),
                fontWeight: 'bold',
                color: R.color.dark.white,
              }}>
              {item.title}
            </TextC>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    )}
  />
);

const OfferSlider = () => (
  <>
    <View
      style={{
        height: verticalScale(18),
        paddingHorizontal: scale(15),
        justifyContent: 'center',
        width: '100%',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextC
          style={{
            fontWeight: 'bold',
            color: '#EC303A',
            textTransform: 'uppercase',
          }}>
          Special Offers
        </TextC>
      </View>
    </View>
    <FlatList
      data={OfferData}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={
        <View
          style={{
            width: moderateScale(10),
          }}
        />
      }
      style={{
        width: moderateScale(310),
        marginVertical: verticalScale(20),
        height: verticalScale(100),
        marginBottom: verticalScale(30),
      }}
      horizontal
      renderItem={({item}) => (
        <Pressable
          style={{
            width: moderateScale(210),
            paddingHorizontal: scale(8),
            height: verticalScale(100),
          }}>
          <Image
            source={item.image}
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: scale(10),
              backgroundColor: 'red',
            }}
          />
          <LinearGradient
            colors={['#0F0001', 'rgba(217, 217, 217, 0)', 'transparent']}
            useAngle={true}
            angle={90}
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'flex-start',
              position: 'absolute',
              borderRadius: scale(10),
            }}>
            <View
              style={{
                height: '100%',
                justifyContent: 'center',
                paddingLeft: scale(20),
              }}>
              <TextC style={{color: R.color.dark.white, fontWeight: 'bold'}}>
                {item.title}
              </TextC>
              <TextC
                style={{
                  color: R.color.dark.white,
                  fontWeight: '200',
                  fontSize: scale(10),
                }}>
                {item.subtitle}
              </TextC>
              <View
                style={{
                  width: moderateScale(80),
                  height: verticalScale(20),
                  borderRadius: scale(20),
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: scale(10),
                }}>
                <TextC
                  style={{
                    color: '#EC303A',
                    fontWeight: 'bold',
                    fontSize: scale(10),
                  }}>
                  SHOP NOW
                </TextC>
              </View>
            </View>
          </LinearGradient>
        </Pressable>
      )}
    />
  </>
);
const WardRobe = () => {
  return (
    <View style={{alignItems: 'center', backgroundColor: '#F4E8FF'}}>
      <HeadContain />
      <ItemSlider />
      <OfferSlider />
    </View>
  );
};

export default WardRobe;

const styles = StyleSheet.create({});
