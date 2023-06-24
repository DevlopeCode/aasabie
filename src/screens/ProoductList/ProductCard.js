/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {scale, vs} from 'react-native-size-matters';
import {SvgXml} from 'react-native-svg';
import {HeartOulineSvg, NegociationSVG, ShareSvg} from '../../assets/SVG';
import TextC from '../../components/Text';
import R from '../../res/R';
import {navigationRef} from '../../../App';

const CardLeft = ({Active}) => {
  return (
    <>
      {Active ? (
        <TouchableOpacity
          onPress={() => navigationRef.navigate('ProductDetail')}
          style={{
            width: scale(30),
            backgroundColor: '#FFAFB4',
            alignItems: 'baseline',
            justifyContent: 'space-between',
          }}>
          <TextC
            numberOfLines={1}
            style={styles.verticalText}
            font="bold"
            color="#EC303A"
            variant="h6">
            Negotiation Available
          </TextC>
          <View
            style={{width: '100%', alignItems: 'center', marginBottom: vs(10)}}>
            <SvgXml xml={NegociationSVG} />
          </View>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            width: scale(30),
            backgroundColor: 'transparent',
            alignItems: 'baseline',
            justifyContent: 'space-between',
          }}
        />
      )}
    </>
  );
};

const CardRight = ({Active}) => {
  return (
    <View
      style={{
        width: scale(35),
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: '45%',
          paddingVertical: vs(10),
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: vs(20),
            width: vs(20),
            backgroundColor: 'white',
            borderRadius: scale(10),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <SvgXml xml={HeartOulineSvg} />
        </View>
        <View
          style={{
            height: vs(20),
            width: vs(20),
            backgroundColor: 'white',
            borderRadius: scale(10),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <SvgXml xml={ShareSvg} />
        </View>
      </View>
    </View>
  );
};
export const ProductCard = ({index}) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: 'https://www.aasabie.com/storage/app/public/product/2023-06-12-6486d4945067d.png',
        }}
        imageStyle={styles.image}
        style={[
          styles.image,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            overflow: 'hidden',
          },
        ]}>
        <CardLeft Active={index % 2 == 0} />
        <CardRight Active={index % 2 != 0} />
      </ImageBackground>
      <View style={{width: '100%'}}>
        <TextC
          font="medium"
          color={R.color.dark.black}
          numberOfLines={2}
          variant="content3">
          MANIAC Solid Slim Fit Trousers For Women
        </TextC>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextC font="bold" color={R.color.dark.black} variant="h5">
            Rs.499
          </TextC>
          <TextC font="bold" color={R.color.dark.gray3} variant="h6">
            Rs.799
          </TextC>
          <TextC font="bold" color={R.color.dark.red} variant="h6">
            (30% Off)
          </TextC>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#EC4850',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: vs(5),
            paddingVertical: vs(1),
            marginVertical: vs(10),
          }}>
          <TextC font="bold" color="white" variant="h5">
            ADD TO CART
          </TextC>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 5,

    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: vs(150),
    borderRadius: 5,
  },
  containerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticalText: {
    transform: [{rotate: '90deg'}],
    width: vs(150),
    top: vs(77),
    right: scale(67),
  },
});
