import {
    FlatList,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
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
  import {StepCounter} from '../CartScreens/Cart';
  
  const InputComponent = props => {
    return (
      <View {...props}>
        <Text style={{fontSize: vs(12), color: 'black'}}>{props?.title}</Text>
        <TextInput
          placeholder={props?.placeholder}
          style={{
            backgroundColor: 'yellow',
            borderRadius: 11,
            marginTop: vs(8),
            paddingLeft: 14,
          }}
        />
      </View>
    );
  };
  
  export default function HomeScreen() {
    return (
      <ScrollContainer header={<Header title="Add Delivery Address" />}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <StepCounter />
          <View style={{paddingHorizontal: wp(6)}}>
            <InputComponent
              title="Name"
              placeholder="Hemendra Mali"
              style={{marginTop: hp(5)}}
            />
            <View style={{flexDirection: 'row', marginTop: hp(2)}}>
              <InputComponent
                title="Country"
                placeholder="India"
                style={{width: wp(42.2)}}
              />
              <InputComponent
                title="City"
                placeholder="Bangalore"
                style={{width: wp(42.2), marginLeft: wp(4)}}
              />
            </View>
            <InputComponent
              title="Phone Number"
              placeholder="+91 7869441522"
              style={{marginTop: hp(2)}}
            />
            <InputComponent
              title="Address"
              placeholder="43, Electronics City Phase 1, Electronic City"
              style={{marginTop: hp(2)}}
            />
            <Text style={{marginTop: hp(2)}}>Save as primary address</Text>
          </View>
        </View>
      </ScrollContainer>
    );
  }
  
  const styles = StyleSheet.create({});