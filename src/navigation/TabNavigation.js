/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */

/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import ProfileScreen from '../screens/Profile/Profile';
import {SvgXml} from 'react-native-svg';
import CartIcon from '../assets/TabMenuIcons/CartIcon';
import Explore from '../assets/TabMenuIcons/Explore';
import HomeIcon from '../assets/TabMenuIcons/HomeIcon';
import PlusIcon from '../assets/TabMenuIcons/PlusIcon';
import Profile from '../assets/TabMenuIcons/Profile';
import Shop from '../assets/TabMenuIcons/Shop';
import WishList from '../assets/TabMenuIcons/WishList';
import {StyleSheet} from 'react-native';
import {color} from '../config/color';
import {scale, vs} from 'react-native-size-matters';
import {verticalScale} from 'react-native-size-matters';
import {BottomBar, categortTabIcon} from '../assets/SVG';
import HomeScreen from '../screens/Home/HomeScreen';
import {navigationRef} from '../../App';
import ExploreScreen from '../screens/Explore';
import CategoryScreen from '../screens/Category';
import CartScreen from '../screens/Cart';
import NewPostScreen from '../screens/NewPost';
import ShopStack from './ShopStack';
import WishListScreen from '../screens/WishList';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          lazy: true,
          tabBarStyle: {
            position: 'absolute',
            elevation: 0,
            borderTopWidth: 0,
            bottom: -scale(57),
          },
          tabBarItemStyle: {display: 'none'},
        }}>
        <Tab.Screen
          name="HomeStack"
          // HomeScreen
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{height: verticalScale(20)}}>
                <View style={styles.icon}>
                  <HomeIcon inFocus={focused} />
                </View>
                <Text style={styles.iconText}>Home</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          // ExploreScreen
          component={ExploreScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Pressable
                style={{height: verticalScale(20)}}
                onPress={() => {
                  navigationRef.current.getCurrentRoute().name != 'Shop'
                    ? navigationRef.current.navigate('Explore')
                    : navigationRef.current.navigate('Category');
                }}>
                <View style={styles.icon}>
                  {navigationRef.current.getCurrentRoute().name != 'Shop' ? (
                    <Explore inFocus={focused} />
                  ) : (
                    <SvgXml xml={categortTabIcon} />
                  )}
                </View>
                <Text style={styles.iconText}>
                  {navigationRef.current.getCurrentRoute().name != 'Shop'
                    ? 'Explore'
                    : 'Category'}
                </Text>
              </Pressable>
            ),
          }}
        />
        <Tab.Screen
          name="Category"
          // CategoryScreen
          component={CategoryScreen}
          options={{
            tabBarItemStyle: {display: 'none'},

            tabBarIcon: ({focused}) => (
              <Pressable style={{height: verticalScale(20)}}>
                <View style={styles.icon}>
                  {navigationRef.current.getCurrentRoute().name != 'Shop' ? (
                    <Explore inFocus={focused} />
                  ) : (
                    <SvgXml xml={categortTabIcon} />
                  )}
                </View>
                <Text style={styles.iconText}>
                  {navigationRef.current.getCurrentRoute().name != 'Shop'
                    ? 'Explore'
                    : 'Category'}
                </Text>
              </Pressable>
            ),
          }}
        />
        <Tab.Screen
          name="plus"
          // NewPostScreen
          component={NewPostScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Pressable
                style={styles.centericon}
                onPress={() => {
                  navigationRef.current.getCurrentRoute().name != 'Shop'
                    ? navigationRef.current.navigate('plus')
                    : navigationRef.current.navigate('cart');
                }}>
                <View style={[styles.icon, styles.centerIconContainer]}>
                  {navigationRef.current.getCurrentRoute().name != 'Shop' ? (
                    <PlusIcon inFocus={focused} />
                  ) : (
                    <View style={styles.icon}>
                      <CartIcon colour={'black'} />
                    </View>
                  )}
                </View>
              </Pressable>
            ),
          }}
        />

        <Tab.Screen
          name={'cart'}
          // CartScreen
          component={CartScreen}
          options={{
            tabBarItemStyle: {display: 'none'},
            tabBarIcon: ({focused}) => (
              <Pressable style={styles.centericon}>
                <View style={[styles.icon, styles.centerIconContainer]}>
                  {navigationRef.current.getCurrentRoute().name != 'Shop' ? (
                    <PlusIcon inFocus={focused} />
                  ) : (
                    <View style={styles.icon}>
                      <CartIcon colour={'black'} />
                    </View>
                  )}
                </View>
              </Pressable>
            ),
          }}
        />

        <Tab.Screen
          name="Wishlist"
          // ProfileScreen
          component={WishListScreen}
          options={{
            tabBarItemStyle: {display: 'none'},
            tabBarIcon: ({focused}) => (
              <Pressable style={{height: verticalScale(20)}}>
                <Pressable onPress={e => e.preventDefault()}>
                  <View style={styles.icon}>
                    <WishList inFocus={focused} />
                  </View>
                </Pressable>
                <Text style={styles.iconText}>WishList</Text>
              </Pressable>
            ),
          }}
        />

        <Tab.Screen
          name="Shop"
          // ShopStack
          component={ShopStack}
          options={{
            tabBarIcon: ({focused}) => (
              <Pressable
                style={{height: verticalScale(20)}}
                onPress={() => {
                  navigationRef.current.getCurrentRoute().name != 'Shop'
                    ? navigationRef.current.navigate('Shop')
                    : navigationRef.current.navigate('Wishlist');
                }}>
                {navigationRef.current.getCurrentRoute().name != 'Shop' ? (
                  <View style={styles.icon}>
                    <Shop inFocus={focused} />
                  </View>
                ) : (
                  <View style={styles.icon}>
                    <WishList colour={'white'} />
                  </View>
                )}
                <Text style={styles.iconText}>
                  {navigationRef.current.getCurrentRoute().name == 'Shop'
                    ? 'Wishlist'
                    : 'Shop'}
                </Text>
              </Pressable>
            ),
          }}
        />
        {/* )} */}
        <Tab.Screen
          name="Profile"
          // ProfileScreen
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{height: verticalScale(20)}}>
                <View style={styles.icon}>
                  <Profile inFocus={focused} />
                </View>
                <Text style={styles.iconText}>Profile</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
      {/* <View style={{height:80, backgroundColor:'red', position:'absolute', left:0, right:0, bottom:0}} ></View> */}
    </View>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  iconText: {
    color: color.background,
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  icon: {
    alignItems: 'center',
    height: vs(40),
    justifyContent: 'center',
  },

  centericon: {
    position: 'absolute',
    bottom: 15,
    marginLeft: -40,
    height: 50,
    width: 50,
    borderRadius: 40,
    backgroundColor: color.background,
    elevation: 2,
  },
  centerIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
