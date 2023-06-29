/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {wp, hp} from '../../components/Responsive';
import {Header} from '../Profile/MyCoupons/MyCoupons';
import {vs} from 'react-native-size-matters';
import {StepCounter} from '../CartScreens/Cart';
import {navigate} from '../../utils/navigationServices';

const InputComponent = props => {
  return (
    <View {...props}>
      <Text style={{fontSize: vs(12), color: '#1D1E20', fontWeight: '500'}}>
        {props?.title}
      </Text>
      <TextInput
        placeholderTextColor={'#8F959E'}
        placeholder={props?.placeholder}
        style={{
          backgroundColor: '#F5F6FA',
          borderRadius: 11,
          marginTop: vs(8),
          paddingLeft: 18,
          color: 'black',
        }}
      />
    </View>
  );
};

export default function AddDeliveryAddress({route}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, backgroundColor: 'white', paddingBottom: 100}}>
        <Header title="Add Delivery Address" />
        <StepCounter count={route.params} />
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
            placeholder="+91-800 301 0108"
            style={{marginTop: hp(2)}}
          />
          <InputComponent
            title="Address"
            placeholder="43, Electronics City Phase 1, Electronic City"
            style={{marginTop: hp(2)}}
          />
          <Text
            style={{
              marginTop: hp(3),
              fontSize: vs(11),
              fontWeight: '500',
              color: '#1D1E20',
            }}>
            Save as primary address
          </Text>
          <TouchableOpacity onPress={() => navigate('PaymentMethod', 2)}>
            <Text
              style={{
                backgroundColor: '#EC303A',
                borderRadius: 7,
                color: 'white',
                textAlign: 'center',
                paddingVertical: 15,
                marginTop: 140,
                fontSize: vs(12.5),
              }}>
              Save Address and Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
