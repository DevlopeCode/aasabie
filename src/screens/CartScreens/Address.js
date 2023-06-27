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
  import {CartArrowUp, CartArrowDown, DeleteIcon} from '../../assets/SVG';
  import Cart from './Cart';
  import {StepCounter} from './Cart';
  
  export default function HomeScreen() {
    return (
      <ScrollContainer header={<Header title="Address" />}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <StepCounter />
          <View
            style={{
              height: 50,
              backgroundColor: 'pink',
              marginTop: 20,
              justifyContent: 'center',
              paddingLeft: wp(6),
            }}>
            <Text>Add New Address</Text>
          </View>
         <View  style={{paddingHorizontal:wp(6), marginTop:hp(3)}} >
         <Text style={{fontSize:vs(12), fontWeight:'900'}}>Robert Willson</Text>
          <Text style={{marginTop:hp(1)}} >1234 NW Bobcat Lane,</Text>
          <Text style={{marginTop:2}} >St. Robert,</Text>
          <Text style={{marginTop:2}} >MO 65584-5678,</Text>
          <Text style={{marginTop:2}} >+91 5584-5678,</Text>
          <Text style={{marginTop:3}} >Edit</Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
              borderRadius: 7,
              marginTop:hp(2)
            }}>
            <Text style={{paddingVertical: 11, color:'white', fontWeight:'900'}}>Deliver to this Address</Text>
          </View>
         </View>
        </View>
      </ScrollContainer>
    );
  }
  