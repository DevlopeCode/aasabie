/* eslint-disable react-native/no-inline-styles */
// ! THESE FILES ARE TEMPORY AND If YOU WANT CAN DELETE THEM NUT MAKE SURE TO REPLACE IT WITH YOUR OWN FILES

import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {height, width} from '../../config/dimension';
import ScrollContainer from '../../components/ScrollComponent';
import {
  moderateScale,
  moderateVerticalScale,
  vs,
} from 'react-native-size-matters';
import {CameraIcon} from '../../assets/SVG';
import {SvgXml} from 'react-native-svg';
import {
  AccountInformation,
  MyOrders,
  MyCart,
  ShippingAddress,
  Myreviews,
  Coupons,
  CardsAndWallet,
  HelpCenter,
} from '../../assets/SVG';
import {TouchableRipple} from 'react-native-paper';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import MyCoupons from './MyCoupons/MyCoupons';
import AccountInfo from './AccountInformation/AccountInformation';
import {Logout} from '../../assets/SVG';
import {Header} from './MyCoupons/MyCoupons';

const RowLable = ({title, Icon, onPress}) => (
  <TouchableRipple
    onPress={onPress}
    rippleColor="#f2f2f2"
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#F1F1F1',
      height: moderateVerticalScale(44),
    }}>
    <>
      <SvgXml xml={Icon} />
      <Text style={{marginLeft: '3%', fontSize: vs(11)}}>{title}</Text>
    </>
  </TouchableRipple>
);

const Profile = ({navigation}) => {
  return (
    <ScrollContainer header={<Header title="Profile" />}>
      <View style={styles.container}>
        <View
          style={{
            alignSelf: 'center',
            marginTop: '5%',
            height: moderateScale(100),
            width: moderateScale(100),
            borderRadius: moderateScale(55),
          }}>
          <View
            style={{
              flex: 1,
              borderRadius: moderateScale(55),
              overflow: 'hidden',
            }}>
            <Image
              source={{
                uri: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <View
            style={{
              position: 'absolute',
              height: '31%',
              width: '31%',
              borderRadius: 30,
              backgroundColor: '#FFEFF0',
              bottom: '-15%',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SvgXml xml={CameraIcon} />
          </View>
        </View>
        <View style={{flex: 1, paddingLeft: '7%', paddingTop: '10%'}}>
          <RowLable
            Icon={AccountInformation}
            title={'Account Information'}
            onPress={() => navigation.navigate('AccountInformation')}
          />
          <RowLable Icon={MyOrders} title={'My Orders'} />
          <RowLable Icon={MyCart} title={'My Cart'} />
          <RowLable Icon={ShippingAddress} title={'Shipping Address'} />
          <RowLable Icon={Myreviews} title={'My Reviews'} />
          <RowLable
            Icon={Coupons}
            title={'Coupons'}
            onPress={() => navigation.navigate('MyCoupons')}
          />
          <RowLable Icon={CardsAndWallet} title={'Cards & Wallet'} />
          <RowLable Icon={HelpCenter} title={'Help Center'} />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: '10%',
              marginLeft: '-8%',
            }}>
            <SvgXml xml={Logout} />
            <Text>Logout</Text>
          </View>
        </View>
      </View>
    </ScrollContainer>
  );
};

const Stack = createStackNavigator();

const ProfileStack = () => {
  const options = {
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };

  return (
    <Stack.Navigator screenOptions={options} initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="MyCoupons" component={MyCoupons} />
      <Stack.Screen
        name="AccountInformation"
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {color: 'red'},
        }}
        component={AccountInfo}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    minHeight: height,
    backgroundColor: 'white',
  },
});
