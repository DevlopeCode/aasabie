/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */

import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  useState,
  forwardRef,
} from 'react';
import {color} from '../../config/color';
import Stories from '../../components/stories/Stories';
import TopBar from '../../components/TopBar/TopBar';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {PostCard} from '../../components/Card/PostCard';
import ReelsHoriZontal from '../../components/Card/RealsHoriZontal';
import TextC from '../../components/Text';
import R from '../../res/R';
import ScrollContainer from '../../components/ScrollComponent';

export const LocalPcked = [
  {
    image: require('../../assets/images/Handpick1.png'),
  },
  {
    image: require('../../assets/images/Handpick2.png'),
  },
  {
    image: require('../../assets/images/Handpick3.png'),
  },
  {
    image: require('../../assets/images/Handpick4.png'),
  },
  {
    image: require('../../assets/images/Handpick5.png'),
  },
  {
    image: require('../../assets/images/Handpick6.png'),
  },
];
const LocalSory = [
  {
    image: require('../../assets/images/str1.png'),
  },
  {
    image: require('../../assets/images/str2.png'),
  },
  {
    image: require('../../assets/images/str3.png'),
  },
  {
    image: require('../../assets/images/str4.png'),
  },
  {
    image: require('../../assets/images/str2.png'),
  },
  {
    image: require('../../assets/images/str1.png'),
  },
];

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

class FirstComponent extends React.PureComponent {
  render() {
    return (
      <>
        <Stories />
        <FlatList
          data={[1, 2, 3]}
          renderItem={PostCard}
          style={{marginVertical: scale(20)}}
          contentContainerStyle={{
            alignItems: 'center',
          }}
          ItemSeparatorComponent={
            <View
              style={{
                height: verticalScale(15),
              }}
            />
          }
        />
      </>
    );
  }
}

const SecondComponentRef = (props, ref) => {
  const [showComponent, setShowComponent] = useState(true);
  useImperativeHandle(ref, () => ({
    setShowComponent,
  }));

  if (showComponent) {
    return <LoadingComponent />;
  }

  return (
    <>
      <FlatList
        data={[1, 2, 3]}
        horizontal
        renderItem={ReelsHoriZontal}
        style={{
          height: verticalScale(380),
          paddingHorizontal: scale(20),
        }}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        ItemSeparatorComponent={
          <View
            style={{
              width: moderateScale(15),
            }}
          />
        }
      />
    </>
  );
};

const ThirdComponentRef = (props, ref) => {
  const [showComponent, setShowComponent] = useState(true);
  useImperativeHandle(ref, () => ({
    setShowComponent,
  }));
  if (showComponent) {
    return <LoadingComponent />;
  }
  return (
    <>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          marginVertical: scale(20),
        }}>
        <PostCard />
      </View>
      <FlatList
        data={LocalPcked}
        numColumns={3}
        ListHeaderComponent={() => (
          <View
            style={{
              height: verticalScale(40),
              paddingHorizontal: scale(20),
              justifyContent: 'center',
            }}>
            <TextC style={{fontWeight: 'bold', color: '#EC303A'}}>
              Handpicked by top influencers
            </TextC>
          </View>
        )}
        ItemSeparatorComponent={
          <View
            style={{
              height: moderateScale(15),
            }}
          />
        }
        renderItem={({item}) => (
          <View
            style={{
              height: verticalScale(130),
              width: moderateScale(92),
              marginLeft: 20,
              backgroundColor: 'white',
              shadowColor: '#000000',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.2,
              shadowRadius: 5.62,
              elevation: 7,
              borderRadius: scale(10),
              overflow: 'hidden',
            }}>
            <Image
              source={item.image}
              style={{height: verticalScale(90), width: '100%'}}
            />
            <View style={{padding: scale(5)}}>
              <TextC style={{fontSize: 12}}>Sling bag</TextC>
              <TextC
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: R.color.dark.black,
                }}>
                Explore Now
              </TextC>
            </View>
          </View>
        )}
      />
    </>
  );
};

const FourthComponentRef = (props, ref) => {
  const [showComponent, setShowComponent] = useState(true);
  useImperativeHandle(ref, () => ({
    setShowComponent,
  }));

  if (showComponent) {
    return <LoadingComponent />;
  }
  return (
    <>
      <FlatList
        data={[1, 2, 3]}
        horizontal
        renderItem={() => (
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/partyImage.png')}
              style={{
                height: verticalScale(320),
                width: moderateScale(280),
                borderRadius: scale(30),
              }}
            />
          </TouchableOpacity>
        )}
        style={{
          height: verticalScale(380),
          paddingHorizontal: scale(20),
        }}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        ItemSeparatorComponent={
          <View
            style={{
              width: moderateScale(10),
            }}
          />
        }
      />
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          marginVertical: scale(20),
        }}>
        <PostCard />
      </View>
    </>
  );
};

const SixthComponentRef = (props, ref) => {
  const [showComponent, setShowComponent] = useState(true);
  useImperativeHandle(ref, () => ({
    setShowComponent,
  }));
  if (showComponent) {
    return <LoadingComponent />;
  }
  return (
    <>
      <View
        style={{
          height: verticalScale(40),
          paddingHorizontal: scale(20),
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextC style={{fontWeight: 'bold', color: '#EC303A'}}>
            TOP STORIES BY VENDOR
          </TextC>
          <Image
            source={require('../../assets/images/new.png')}
            style={{
              height: scale(30),
              width: scale(30),
              marginLeft: scale(10),
            }}
          />
        </View>
      </View>
      <FlatList
        data={LocalSory}
        horizontal
        ItemSeparatorComponent={
          <View
            style={{
              width: moderateScale(5),
            }}
          />
        }
        renderItem={({item}) => (
          <View
            style={{
              marginLeft: 20,
              borderRadius: scale(10),
              overflow: 'hidden',
            }}>
            <Image
              source={item.image}
              style={{
                height: verticalScale(60),
                width: verticalScale(60),
                borderRadius: verticalScale(45),
                overflow: 'hidden',
              }}
            />
          </View>
        )}
      />
    </>
  );
};

const SeventhComponentRef = (props, ref) => {
  const [showComponent, setShowComponent] = useState(true);
  useImperativeHandle(ref, () => ({
    setShowComponent,
  }));

  if (showComponent) {
    return <LoadingComponent />;
  }

  return (
    <>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          marginVertical: scale(20),
        }}>
        <PostCard />
      </View>
    </>
  );
};

const SecondComponent = forwardRef(SecondComponentRef);
const ThirdComponent = forwardRef(ThirdComponentRef);
const FourthComponent = forwardRef(FourthComponentRef);
const SixthComponent = forwardRef(SixthComponentRef);
const SeventhComponent = forwardRef(SeventhComponentRef);

const HomeScreen = ({navigation}) => {
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();
  const sixthRef = useRef();
  const seventhRef = useRef();
  const scrollY = useRef(new Animated.Value(0)).current;
  const offsetAnim = useRef(new Animated.Value(0)).current;
  var interval,
    i = 0;

  const showComponents = componentIndex => {
    const component = {
      0: () => secondRef.current.setShowComponent(false),
      1: () => thirdRef.current.setShowComponent(false),
      2: () => fourthRef.current.setShowComponent(false),
      3: () => sixthRef.current.setShowComponent(false),
      4: () => seventhRef.current.setShowComponent(false),
    };
    component[componentIndex]();
  };

  useEffect(() => {
    function dostuff() {
      console.log('this is the values', i);
      showComponents(i);
      if (i < 4) {
        i++;
      } else {
        clearInterval(interval);
      }
    }

    interval = setInterval(dostuff, 2400);
  }, []);

  console.log(navigation, 'navigationnavigationnavigation');

  return (
    <ScrollContainer>
      <FirstComponent />
      <SecondComponent ref={secondRef} />
      <ThirdComponent ref={thirdRef} />
      <FourthComponent ref={fourthRef} />
      <SixthComponent ref={sixthRef} />
      <SeventhComponent ref={seventhRef} />
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    alignItems: 'center',
  },
  cardContainer: {
    width: moderateScale(330),
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    padding: scale(10),
  },
});

export default HomeScreen;
