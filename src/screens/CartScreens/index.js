import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Cart from './Cart';
import AddDeliveryAddress from './AddDeliveryAddress';
import PaymentMethod from './PaymentMethod';
const CartStack = createStackNavigator();
const CartScreens = () => {
  return (
    <CartStack.Navigator initialRouteName="AddDeliveryAddress">
      <CartStack.Screen component={Cart} name="CartListScreen" />
      <CartStack.Screen
        component={AddDeliveryAddress}
        name="AddDeliveryAddress"
      />
      <CartStack.Screen component={PaymentMethod} name="PaymentMethod" />
    </CartStack.Navigator>
  );
};

export default CartScreens;

const styles = StyleSheet.create({});
