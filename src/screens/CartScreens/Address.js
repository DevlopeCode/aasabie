import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {wp, hp} from '../../components/Responsive';
import StepIndicator from 'react-native-step-indicator';
import ScrollContainer from '../../components/ScrollComponent';
import {Header} from '../Profile/MyCoupons/MyCoupons';
import Accordion from 'react-native-collapsible/Accordion';
import {vs} from 'react-native-size-matters';
import {SvgXml} from 'react-native-svg';
import {AddIcon} from '../../assets/SVG';
import Cart from './Cart';
import {StepCounter} from './Cart';

export default function Address() {
  return (
    <ScrollContainer header={<Header title="Address" />}>
      <View style={{flex: 1, backgroundColor: 'white', paddingBottom: 100}}>
        <StepCounter />
        <View
          style={{
            height: 50,
            backgroundColor: '#F1F1F1',
            marginTop: 30,
            paddingLeft: wp(6),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <SvgXml xml={AddIcon} />
          <Text
            style={{
              fontWeight: '400',
              marginLeft: 13,
              color: '#EC303A',
              fontSize: vs(12),
            }}>
            Add New Address
          </Text>
        </View>
        <View
          style={{
            elevation: 5,
            backgroundColor: 'white',
            paddingBottom: 30,
            paddingHorizontal: wp(6),
            paddingTop: hp(3),
          }}>
          <Text style={{fontSize: vs(13), fontWeight: '900'}}>
            Robert Willson
          </Text>
          <Text style={{marginTop: hp(1), fontSize:vs(12), color:'black', fontWeight:'400'}}>1234 NW Bobcat Lane,</Text>
          <Text style={{marginTop: 2, fontSize:vs(12), color:'black'}}>St. Robert,</Text>
          <Text style={{marginTop: 2, fontSize:vs(12), color:'black'}}>MO 65584-5678,</Text>
          <Text style={{marginTop: 11, fontSize:vs(12), color:'black'}}>+91 5584-5678,</Text>
          <Text
            style={{
              marginTop: 8,
              color: '#EC303A',
              fontSize: vs(11),
              fontWeight: '500',
            }}>
            Edit
          </Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
              borderRadius: 7,
              marginTop: 35,
            }}>
            <Text
              style={{paddingVertical: 15, color: 'white', fontWeight: '700'}}>
              Deliver to this Address
            </Text>
          </View>
        </View>
      </View>
    </ScrollContainer>
  );
}
