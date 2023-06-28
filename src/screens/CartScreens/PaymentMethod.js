/* eslint-disable react-native/no-inline-styles */
import {Text, View, ScrollView} from 'react-native';
import React from 'react';
import {wp, hp} from '../../components/Responsive';
import {Header} from '../Profile/MyCoupons/MyCoupons';
import {vs} from 'react-native-size-matters';
import {StepCounter} from './Cart';

const AccordionComponent = ({title, style}) => {
  return (
    <View
      style={{
        height: vs(42),
        borderBottomWidth: 1,
        justifyContent: 'center',
        borderBottomColor: '#e6e6e6',
        ...style,
      }}>
      <Text style={{fontWeight: '500'}}> {title}</Text>
    </View>
  );
};

const RowLable = ({title, style}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 23,
      ...style,
    }}>
    <Text style={{fontSize: vs(9)}}>{title}</Text>
    <View
      style={{height: 1, backgroundColor: '#e6e6e6', flex: 1, marginLeft: 10}}
    />
  </View>
);

export default function PaymentMethod() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header title="Payment Method" />
      <ScrollView>
        <StepCounter />
        <View style={{paddingHorizontal: wp(6)}}>
          <Text
            style={{
              marginTop: hp(3),
              color: 'black',
              fontSize: vs(12),
              fontWeight: '500',
            }}>
            Select Payment Method
          </Text>
          <RowLable title="PAY ONLINE" />

          <AccordionComponent title="UPI (Google Pay/PhonePe)" />
          <AccordionComponent title="Wallet" />
          <AccordionComponent title="Debit/Credit Card" />
          <AccordionComponent
            style={{borderBottomWidth: 0}}
            title="Net Banking"
          />
          <RowLable style={{marginTop: 3}} title="PAY IN CASH" />
          <AccordionComponent
            style={{borderBottomWidth: 0}}
            title="Cash on Delivery"
          />
          <View
            style={{
              height: 13,
              backgroundColor: '#F5F6FA',
              borderTopWidth: 2,
              borderTopColor: '#eef0f6',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 12,
            }}>
            <View>
              <Text
                style={{
                  marginBottom: vs(7),
                  fontSize: vs(13),
                  fontWeight: '600',
                }}>
                Reselling the order?
              </Text>
              <Text style={{fontSize: vs(10)}}>
                Click on 'Yes' to add Final Price
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  justifyContent: 'center',
                  borderRadius: 30,
                  borderWidth: 1,
                }}>
                <Text style={{paddingHorizontal: 8, paddingVertical: 4}}>
                  No
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  borderRadius: 30,
                  borderWidth: 1,
                  marginLeft: 8,
                }}>
                <Text style={{paddingHorizontal: 8, paddingVertical: 4}}>
                  Yes
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{height: 13, backgroundColor: '#F5F6FA', marginTop: 15}}
          />
          <Text style={{marginTop: 10}}>Price Detail (3 Items)</Text>
          <View
            style={{
              height: vs(37),
              borderBottomWidth: 1,
              borderBottomColor: '#e6e6e6',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>Total Product Price</Text>
            <Text style={{textAlign: 'right'}}>+ 791</Text>
          </View>

          <View
            style={{
              height: vs(37),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: vs(13), color: 'black'}}>Order Total</Text>
            <Text style={{textAlign: 'right'}}>+ 791</Text>
          </View>
          <View style={{backgroundColor: 'pink', borderRadius: 4}}>
            <Text
              style={{
                paddingVertical: 8,
                fontSize: vs(9),
                textAlign: 'center',
              }}>
              Clicking on Continue will not deduct any money
            </Text>
          </View>
        </View>
        <View style={{height: 140}} />
      </ScrollView>

      <View
        style={{
          height: 90,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'white',
          elevation: 10,
          borderColor: '#d9d9d9',
          borderTopWidth: 0.8,
          borderLeftWidth: 0.5,
          borderRightWidth: 0.5,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: wp(5),
        }}>
        <View>
          <Text style={{fontSize: vs(16), fontWeight: '900'}}>Rs. 1287</Text>
          <Text style={{color: '#EC303A', fontWeight: '500', marginTop: 4}}>
            View Price Details
          </Text>
        </View>
        <View style={{backgroundColor: '#EC303A', borderRadius: 9}}>
          <Text
            style={{
              paddingVertical: 17,
              fontWeight: '400',
              paddingHorizontal: 45,
              color: 'white',
            }}>
            Continue
          </Text>
        </View>
      </View>
    </View>
  );
}
