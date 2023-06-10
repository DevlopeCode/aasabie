/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, Animated, StyleSheet} from 'react-native';
import React, {useEffect, useRef} from 'react';
import TopBar from '../../components/TopBar/TopBar';
import SearchBar from '../../components/SearchBar.js';
import {Category} from './Component/List/Category';
import {CategoryList} from './Component/List/CategoryList';
import {PostSlider} from './Component/List/PostSlider';
import {TopStory} from './Component/List/TopStory';
import {TopList} from './Component/List/TopList';
import {ChoiceList} from './Component/List/ChoiceList';
import WardRobe from './Component/List/WardRobe';
import PickMart from './Component/List/PickMart';
import FeedList from './Component/List/FeedList';
import {DealofTheday} from './Component/List/DealofTheday';
import Explore from './Component/List/Explore';
import {RecentList} from './Component/List/RecentList';
import HandyPicked from './Component/List/HandyPicked';
const CONTAINER_HEIGHT = 100;

const ShopScreen = () => {
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

  const headerTranslate = clampedScroll.interpolate({
    inputRange: [0, CONTAINER_HEIGHT],
    outputRange: [0, -CONTAINER_HEIGHT],
    extrapolate: 'clamp',
  });
  const opacity = clampedScroll.interpolate({
    inputRange: [0, CONTAINER_HEIGHT - 20, CONTAINER_HEIGHT],
    outputRange: [1, 0.05, 0],
    extrapolate: 'clamp',
  });
  const bottomTabTranslate = clampedScroll.interpolate({
    inputRange: [0, CONTAINER_HEIGHT],
    outputRange: [0, CONTAINER_HEIGHT * 2],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Animated.ScrollView
        onMomentumScrollBegin={onMomentumScrollBegin}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onScrollEndDrag={onScrollEndDrag}
        scrollEventThrottle={1}
        nestedScrollEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}>
        <Animated.View
          style={[
            styles.view,
            {top: 0, transform: [{translateY: headerTranslate}]},
          ]}>
          <TopBar />
        </Animated.View>

        <SearchBar />
        <Category />
        <PostSlider />
        <CategoryList />
        <TopStory />
        <ChoiceList />
        <TopList />
        <WardRobe />
        <FeedList />
        <PickMart />
        <DealofTheday />
        <Explore />
        <RecentList />
        <HandyPicked />
        <CategoryList />
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: CONTAINER_HEIGHT,
  },
});
