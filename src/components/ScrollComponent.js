import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';
import React, {
  useEffect,
  useRef,

} from 'react';
import {color} from '../config/color';
import { verticalScale, moderateScale} from 'react-native-size-matters';

import {useNavigation} from '@react-navigation/native';
import HomeIcon from '../assets/TabMenuIcons/HomeIcon';
import {vs} from 'react-native-size-matters';
import Explore from '../assets/TabMenuIcons/Explore';
import {SvgXml} from 'react-native-svg';
import {categortTabIcon} from '../assets/SVG';
import WishList from '../assets/TabMenuIcons/WishList';
import Profile from '../assets/TabMenuIcons/Profile';
import PlusIcon from '../assets/TabMenuIcons/PlusIcon';
import CartIcon from '../assets/TabMenuIcons/CartIcon';

const CONTAINER_HEIGHT = 80;

const IconComponent = ({Icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={{flex: 1}}>
      <Icon />
    </TouchableOpacity>
  );
};

const BottomTab = () => {
  const {navigate} = useNavigation();

  return (
    <View style={{height: CONTAINER_HEIGHT, flexDirection: 'row'}}>
      <Image
        source={require('../assets/images/bottom_layer.png')}
        style={{height: '100%', width: '100%', resizeMode: 'stretch'}}
      />
      <View
        style={{
          height: CONTAINER_HEIGHT,
          width: '100%',
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
          flexDirection: 'row',
        }}>
        <IconComponent
          onPress={() => {
            navigate('HomeStack');
          }}
          Icon={() => (
            <View style={{height: verticalScale(20)}}>
              <View
                style={{
                  alignItems: 'center',
                  height: vs(40),
                  justifyContent: 'center',
                }}>
                <HomeIcon inFocus={true} />
              </View>
              <Text
                style={{
                  color: color.background,
                  fontSize: 12,
                  textAlign: 'center',
                  fontFamily: 'Poppins-Bold',
                }}>
                Home
              </Text>
            </View>
          )}
        />

        <IconComponent
          onPress={() => {
            navigate('Explore');
          }}
          Icon={() => (
            <View style={{height: verticalScale(20)}}>
              <View
                style={{
                  alignItems: 'center',
                  height: vs(40),
                  justifyContent: 'center',
                }}>
                {true ? (
                  <Explore inFocus={true} />
                ) : (
                  <SvgXml xml={categortTabIcon} />
                )}
              </View>
              <Text
                style={{
                  color: color.background,
                  fontSize: 12,
                  textAlign: 'center',
                  fontFamily: 'Poppins-Bold',
                }}>
                {true ? 'Explore' : 'Category'}
              </Text>
            </View>
          )}
        />
        {/* <View style={{flex: 1, backgroundColor: 'pink'}}></View> */}
        <View
          style={{
            flex: 1,
            marginTop: -55,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigate('plus');
            }}
            activeOpacity={0.8}
            style={{
              height: moderateScale(50),
              width: moderateScale(50),
              // backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: moderateScale(40),
            }}>
            <View
              style={{
                // position: 'absolute',
                // bottom: 15,
                // marginLeft: -40,
                height: 50,
                width: 50,
                borderRadius: 40,
                backgroundColor: color.background,
                elevation: 2,
              }}
              onPress={() => {
                // navigationRef.current.getCurrentRoute().name != 'Shop'
                //   ? navigationRef.current.navigate('plus')
                //   : navigationRef.current.navigate('cart');
              }}>
              <View
                style={[
                  {
                    alignItems: 'center',
                    height: vs(40),
                    justifyContent: 'center',
                  },
                  {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}>
                {true ? (
                  <PlusIcon inFocus={true} />
                ) : (
                  <View
                    style={{
                      alignItems: 'center',
                      height: vs(40),
                      justifyContent: 'center',
                    }}>
                    <CartIcon colour={'black'} />
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <IconComponent
          onPress={() => {
            navigate('Wishlist');
          }}
          Icon={() => (
            <View style={{height: verticalScale(20)}}>
              <View onPress={e => e.preventDefault()}>
                <View
                  style={{
                    alignItems: 'center',
                    height: vs(40),
                    justifyContent: 'center',
                  }}>
                  <WishList inFocus={false} />
                </View>
              </View>
              <Text
                style={{
                  color: color.background,
                  fontSize: 12,
                  textAlign: 'center',
                  fontFamily: 'Poppins-Bold',
                }}>
                WishList
              </Text>
            </View>
          )}
        />

        <IconComponent
          onPress={() => {
            navigate('Profile');
          }}
          Icon={() => (
            <View style={{height: verticalScale(20)}}>
              <View
                style={{
                  alignItems: 'center',
                  height: vs(40),
                  justifyContent: 'center',
                }}>
                <Profile inFocus={true} />
              </View>
              <Text
                style={{
                  color: color.background,
                  fontSize: 12,
                  textAlign: 'center',
                  fontFamily: 'Poppins-Bold',
                }}>
                Profile
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const ScrollContainer = ({children}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const offsetAnim = useRef(new Animated.Value(0)).current;

  const clampedScroll = Animated.diffClamp(
    Animated.add(
      scrollY.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolateLeft: 'clamp',
      }),
      offsetAnim,
    ),
    0,
    CONTAINER_HEIGHT,
  );
  var _clampedScrollValue = 0;
  var _offsetValue = 0;
  var _scrollValue = 0;
  useEffect(() => {
    scrollY.addListener(({value}) => {
      const diff = value - _scrollValue;
      _scrollValue = value;
      _clampedScrollValue = Math.min(
        Math.max(_clampedScrollValue + diff, 0),
        CONTAINER_HEIGHT,
      );
    });
    offsetAnim.addListener(({value}) => {
      _offsetValue = value;
    });
  }, []);

  var scrollEndTimer = null;
  const onMomentumScrollBegin = () => {
    clearTimeout(scrollEndTimer);
  };
  const onMomentumScrollEnd = () => {
    const toValue =
      _scrollValue > CONTAINER_HEIGHT &&
      _clampedScrollValue > CONTAINER_HEIGHT / 2
        ? _offsetValue + CONTAINER_HEIGHT
        : _offsetValue - CONTAINER_HEIGHT;

    Animated.timing(offsetAnim, {
      toValue,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const onScrollEndDrag = () => {
    scrollEndTimer = setTimeout(onMomentumScrollEnd, 250);
  };

  const bottomTabTranslate = clampedScroll.interpolate({
    inputRange: [0, CONTAINER_HEIGHT],
    outputRange: [0, CONTAINER_HEIGHT * 2],
    extrapolate: 'clamp',
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    view: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: CONTAINER_HEIGHT,
    },
    header: {
      borderBottomRightRadius: 16,
      borderBottomLeftRadius: 16,
      marginHorizontal: 4,
    },
    bottomBar: {
      borderTopRightRadius: 16,
      borderTopLeftRadius: 16,
      marginHorizontal: 4,
    },
    contentContainerStyle: {
      paddingTop: CONTAINER_HEIGHT,
      marginTop: 8,
    },
    rowContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    item: {
      marginHorizontal: 10,
      marginBottom: 12,
      elevation: 6,
      borderRadius: 16,
    },
    title: {
      fontSize: 16,
      fontWeight: '700',
    },
    caption: {
      color: 'blue',
    },
    image: {
      height: 300,
      width: null,
      marginBottom: 1,
      marginHorizontal: 16,
      borderRadius: 16,
    },
    bottomView: {
      alignItems: 'center',
      flexDirection: 'row',
      padding: 16,
    },
    content: {
      alignItems: 'center',
      flexDirection: 'row',
      marginHorizontal: 16,
      paddingVertical: 8,
    },
    textContainer: {
      marginHorizontal: 16,
    },
    avatar: {
      height: 35,
      width: 35,
      borderRadius: 20,
      backgroundColor: 'pink',
    },
    rowView: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    icon: {
      marginHorizontal: 10,
    },
  });

  const SCREEN = [
    'Explore',
    'Category',
    'plus',
    'cart',
    'Wishlist',
    'Shop',
    'Profile',
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: false,
          },
        )}
        contentContainerStyle={styles.contentContainerStyle}
        onMomentumScrollBegin={onMomentumScrollBegin}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onScrollEndDrag={onScrollEndDrag}
        scrollEventThrottle={1}>
        {children}

        {/* {data.map((e)=>(
              <View style={{height:200, margin:5, backgroundColor:'blue'}} ></View>
            ))} */}
      </ScrollView>
      <Animated.View
        style={[
          styles.view,
          {
            bottom: 0,
            transform: [{translateY: bottomTabTranslate}],
          },
        ]}>
        <BottomTab />
      </Animated.View>
    </View>
  );
};

export default ScrollContainer;
