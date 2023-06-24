/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ms, s, vs} from 'react-native-size-matters';
import TextC from '../../../../components/Text';
import {SvgXml} from 'react-native-svg';
import {ForwardIcon} from '../../../../assets/SVG';

const BottomBanner = () => {
  return (
    <View style={{paddingHorizontal: s(15), marginBottom: 200}}>
      <LinearGradient
        start={{x: 0.3, y: 0.5}}
        end={{x: 0.37, y: 0}}
        locations={[0.5, 0.5]}
        useAngle={true}
        angle={155}
        colors={['#B81A54', '#DA7298']}
        style={{
          height: vs(130),
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: vs(2),
          }}>
          <Image
            source={require('../../../../assets/images/twoheart.png')}
            style={{width: ms(120), height: ms(120), marginRight: vs(20)}}
          />
          <View>
            <TextC
              font="bold"
              color="white"
              variant="h4"
              numberOfLines={2}
              style={{textTransform: 'uppercase', width: ms(150)}}>
              tWO HEARTS FASHION STORE
            </TextC>
            <TouchableOpacity
              style={{
                backgroundColor: '#EC303A',
                width: ms(100),
                alignItems: 'center',
                borderRadius: vs(4),
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TextC
                font="bold"
                color="white"
                variant="h5"
                style={{textTransform: 'uppercase', marginRight: vs(6)}}>
                visit store
              </TextC>
              <SvgXml xml={ForwardIcon('white')} />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default BottomBanner;

const styles = StyleSheet.create({});
