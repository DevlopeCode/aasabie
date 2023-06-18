import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShopScreen from '../screens/Shop';
import DealsOfTheDayScreen from '../screens/Deals';
import Apparel from '../screens/Apparel/Apparel';
import CategoryItemScreen from '../screens/Category/CategoryItemScreen';
import ProductListScreen from '../screens/ProoductList';
import SummerScreen from '../screens/Shop/SummerScreen';
const ShopStackS = createStackNavigator();

const ShopStack = () => {
  return (
    <ShopStackS.Navigator
      initialRouteName="Shop"
      screenOptions={{headerShown: false}}>
      <ShopStackS.Screen name="Shop" component={ShopScreen} />
      <ShopStackS.Screen
        name="DealOftheDay"
        component={DealsOfTheDayScreen}
        options={{presentation: 'card'}}
      />
      <ShopStackS.Screen name="ApparelScrren" component={CategoryItemScreen} />
      <ShopStackS.Screen
        name="ProductListScreen"
        component={ProductListScreen}
      />
      <ShopStackS.Screen name="SummerScreen" component={SummerScreen} />
    </ShopStackS.Navigator>
  );
};

export default ShopStack;

const styles = StyleSheet.create({});
