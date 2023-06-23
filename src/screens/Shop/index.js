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
import BottomBanner from './Component/List/BottomBanner';
import ScrollContainer from '../../components/ScrollComponent';

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

const BottomBannerRef = (props, ref) => {
  const [showComponent, setComponent] = useState(true);
  useImperativeHandle(ref, () => ({
    setComponent,
  }));

  if (showComponent) {
    return <LoadingComponent />;
  }

  return <BottomBanner />;
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
const FourtenthComponent = forwardRef(BottomBannerRef);

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
    <ScrollContainer>
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
    </ScrollContainer>
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
