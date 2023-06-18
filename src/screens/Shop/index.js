/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  Animated,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';
import React, {
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  forwardRef,
} from 'react';
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
class LoadingComponent extends React.PureComponent {
  render() {
    return (
      <View
        style={{height: 200, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={30} />
      </View>
    );
  }
}

const CategoryRef = (props, ref) => {
  const [showComponent, setComponent] = useState(true);
  useImperativeHandle(ref, () => ({
    setComponent,
  }));

  if (showComponent) {
    return <LoadingComponent />;
  }

  return <Category />;
};

const PostSliderRef = (props, ref) => {
  const [showComponent, setComponent] = useState(true);
  useImperativeHandle(ref, () => ({
    setComponent,
  }));

  if (showComponent) {
    return <LoadingComponent />;
  }

  return <PostSlider />;
};

const CategoryListRef = (props, ref) => {
  const [showComponent, setComponent] = useState(true);
  useImperativeHandle(ref, () => ({
    setComponent,
  }));

  if (showComponent) {
    return <LoadingComponent />;
  }

  return <CategoryList />;
};

const TopStoryRef = (props, ref) => {
  const [showComponent, setComponent] = useState(true);
  useImperativeHandle(ref, () => ({
    setComponent,
  }));

  if (showComponent) {
    return <LoadingComponent />;
  }

  return <TopStory />;
};

const ChoiceListRef = (props, ref) => {
  const [showComponent, setComponent] = useState(true);
  useImperativeHandle(ref, () => ({
    setComponent,
  }));

  if (showComponent) {
    return <LoadingComponent />;
  }

  return <ChoiceList />;
};

const TopListRef = (props, ref) => {
  const [showComponent, setComponent] = useState(true);
  useImperativeHandle(ref, () => ({
    setComponent,
  }));

  if (showComponent) {
    return <LoadingComponent />;
  }

  return <TopList />;
};

const WardRobeRef = (props, ref) => {
  const [showComponent, setComponent] = useState(true);
  useImperativeHandle(ref, () => ({
    setComponent,
  }));

  if (showComponent) {
    return <LoadingComponent />;
  }

  return <WardRobe />;
};

const FeedListRef = (props, ref) => {
  const [showComponent, setComponent] = useState(true);
  useImperativeHandle(ref, () => ({
    setComponent,
  }));

  if (showComponent) {
    return <LoadingComponent />;
  }

  return <FeedList />;
};

const PickMartRef = (props, ref) => {
  const [showComponent, setComponent] = useState(true);
  useImperativeHandle(ref, () => ({
    setComponent,
  }));

  if (showComponent) {
    return <LoadingComponent />;
  }

  return <PickMart />;
};

const DealofThedayRef = (props, ref) => {
  const [showComponent, setComponent] = useState(true);
  useImperativeHandle(ref, () => ({
    setComponent,
  }));

  if (showComponent) {
    return <LoadingComponent />;
  }

  return <DealofTheday />;
};

const ExploreRef = (props, ref) => {
  const [showComponent, setComponent] = useState(true);
  useImperativeHandle(ref, () => ({
    setComponent,
  }));

  if (showComponent) {
    return <LoadingComponent />;
  }

  return <Explore />;
};

const RecentListRef = (props, ref) => {
  const [showComponent, setComponent] = useState(true);
  useImperativeHandle(ref, () => ({
    setComponent,
  }));

  if (showComponent) {
    return <LoadingComponent />;
  }

  return <RecentList />;
};

const HandyPickedRef = (props, ref) => {
  const [showComponent, setComponent] = useState(true);
  useImperativeHandle(ref, () => ({
    setComponent,
  }));

  if (showComponent) {
    return <LoadingComponent />;
  }

  return <HandyPicked />;
};

const CategoryListSecondRef = (props, ref) => {
  const [showComponent, setComponent] = useState(true);
  useImperativeHandle(ref, () => ({
    setComponent,
  }));

  if (showComponent) {
    return <LoadingComponent />;
  }

  return <CategoryList />;
};

const FirstComponent = forwardRef(CategoryRef);
const SecondComponent = forwardRef(PostSliderRef);
const ThirdComponent = forwardRef(CategoryListRef);
const FourthComponent = forwardRef(TopStoryRef);
const FifthComponent = forwardRef(ChoiceListRef);
const SixthComponent = forwardRef(TopListRef);
const SeventhComponent = forwardRef(WardRobeRef);
const EighthComponent = forwardRef(FeedListRef);
const NinethComponent = forwardRef(PickMartRef);
const TenthComponent = forwardRef(DealofThedayRef);
const EleventhComponent = forwardRef(ExploreRef);
const TwelthComponent = forwardRef(RecentListRef);
const ThirtenthComponent = forwardRef(HandyPickedRef);
const FourtenthComponent = forwardRef(CategoryListSecondRef);

const Shop = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const offsetAnim = useRef(new Animated.Value(0)).current;
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();
  const fifthRef = useRef();
  const sixthRef = useRef();
  const seventhRef = useRef();
  const eightRef = useRef();
  const ninthRef = useRef();
  const tenthRef = useRef();
  const eleventhRef = useRef();
  const twelthRef = useRef();
  const thirteenthRef = useRef();
  const fourteenthRef = useRef();
  var interval,
    i = 0;

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

  const showComponents = componentIndex => {
    const component = {
      0: () => firstRef.current?.setComponent(false),
      1: () => secondRef.current?.setComponent(false),
      2: () => thirdRef.current?.setComponent(false),
      3: () => fourthRef.current?.setComponent(false),
      4: () => fifthRef.current?.setComponent(false),
      5: () => sixthRef.current?.setComponent(false),
      6: () => seventhRef.current?.setComponent(false),
      7: () => eightRef.current?.setComponent(false),
      8: () => ninthRef.current?.setComponent(false),
      9: () => tenthRef.current?.setComponent(false),
      10: () => eleventhRef.current?.setComponent(false),
      11: () => twelthRef.current?.setComponent(false),
      12: () => thirteenthRef.current?.setComponent(false),
      13: () => fourteenthRef.current?.setComponent(false),
    };

    component[componentIndex]();
  };

  useEffect(() => {
    function dostuff() {
      console.log('this is the values', i);
      showComponents(i);
      if (i < 13) {
        i++;
      } else {
        clearInterval(interval);
      }
    }

    interval = setInterval(dostuff, 1000);
  }, []);

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

        <FirstComponent ref={firstRef} />
        <SecondComponent ref={secondRef} />
        <ThirdComponent ref={thirdRef} />
        <FourthComponent ref={fourthRef} />
        <FifthComponent ref={fifthRef} />
        <SixthComponent ref={sixthRef} />
        <SeventhComponent ref={seventhRef} />
        <EighthComponent ref={eightRef} />
        <NinethComponent ref={ninthRef} />
        <TenthComponent ref={tenthRef} />
        <EleventhComponent ref={eleventhRef} />
        <TwelthComponent ref={twelthRef} />
        <ThirtenthComponent ref={thirteenthRef} />
        <FourtenthComponent ref={fourteenthRef} />
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

const ShopScreen = () => {
  return <Shop />;
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
