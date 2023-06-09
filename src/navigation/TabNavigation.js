/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import ProfileScreen from '../screens/Profile/Profile';
import {Path, Svg, SvgXml} from 'react-native-svg';
import CartIcon from '../assets/TabMenuIcons/CartIcon';
import Explore from '../assets/TabMenuIcons/Explore';
import HomeIcon from '../assets/TabMenuIcons/HomeIcon';
import PlusIcon from '../assets/TabMenuIcons/PlusIcon';
import Profile from '../assets/TabMenuIcons/Profile';
import Shop from '../assets/TabMenuIcons/Shop';
import WishList from '../assets/TabMenuIcons/WishList';
import {HomeStack} from './HomeStack';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {color} from '../config/color';
import {height} from '../config/dimension';
import {login} from '../utils/apis/api';
import ShopScreen from '../screens/Shop';
import {moderateScale, scale} from 'react-native-size-matters';
import {verticalScale} from 'react-native-size-matters';
import {BottomBar} from '../assets/SVG';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  const [shopActive, setShopActive] = React.useState(false);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          lazy: true,
          tabBarStyle: {
            position: 'absolute',
            elevation: 0,
            borderTopWidth: 0,
            // paddingHorizontal: 20,
            bottom: scale(30),
          },
          tabBarBackground: () => <SvgXml xml={BottomBar} />,
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{height: verticalScale(20)}}>
                <TouchableWithoutFeedback
                  onPress={e => {
                    setShopActive(false);
                    e.preventDefault();
                  }}>
                  <View style={styles.icon}>
                    <HomeIcon inFocus={focused} />
                  </View>
                </TouchableWithoutFeedback>
                <Text style={styles.iconText}>Home</Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Explore"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{height: verticalScale(20)}}>
                <TouchableWithoutFeedback
                  onPress={e => {
                    setShopActive(false);
                    e.preventDefault();
                  }}>
                  <View style={styles.icon}>
                    <Explore inFocus={focused} />
                  </View>
                </TouchableWithoutFeedback>
                <Text style={styles.iconText}>Explore</Text>
              </View>
            ),
          }}
        />

        {shopActive ? (
          <Tab.Screen
            name="plus"
            component={HomeStack}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={styles.centericon}>
                  <View style={[styles.icon, styles.centerIconContainer]}>
                    <TouchableWithoutFeedback>
                      <CartIcon inFocus={focused} />
                    </TouchableWithoutFeedback>
                  </View>
                </View>
              ),
            }}
          />
        ) : (
          <Tab.Screen
            name="cart"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={styles.centericon}>
                  <TouchableWithoutFeedback>
                    <View style={[styles.icon, styles.centerIconContainer]}>
                      <PlusIcon inFocus={focused} />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              ),
            }}
          />
        )}
        {shopActive ? (
          <Tab.Screen
            name="Wishlist"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={{height: verticalScale(20)}}>
                  <TouchableWithoutFeedback onPress={e => e.preventDefault()}>
                    <View style={styles.icon}>
                      <WishList inFocus={focused} />
                    </View>
                  </TouchableWithoutFeedback>
                  <Text style={styles.iconText}>WishList</Text>
                </View>
              ),
            }}
          />
        ) : (
          <Tab.Screen
            name="Shop"
            component={ShopScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={{height: verticalScale(20)}}>
                  <TouchableWithoutFeedback
                    onPress={e => {
                      setShopActive(true);
                      e.preventDefault();
                    }}>
                    <View style={styles.icon}>
                      <Shop inFocus={focused} />
                    </View>
                  </TouchableWithoutFeedback>
                  <Text style={styles.iconText}>Shop</Text>
                </View>
              ),
            }}
          />
        )}

        <Tab.Screen
          name="Profile"
          component={HomeStack}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{height: verticalScale(20)}}>
                <TouchableWithoutFeedback
                  onPress={e => {
                    setShopActive(false);
                    e.preventDefault();
                  }}>
                  <View style={styles.icon}>
                    <Profile inFocus={focused} />
                  </View>
                </TouchableWithoutFeedback>
                <Text style={styles.iconText}>Profile</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  iconText: {
    color: color.background,
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  icon: {
    alignItems: 'center',
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
