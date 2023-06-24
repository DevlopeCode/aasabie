// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
// import {hp, wp} from '../../components/Responsive';
// import {moderateScale, vs} from 'react-native-size-matters';
// import {TouchableRipple} from 'react-native-paper';
// import {Checkbox} from 'react-native-paper';

// const ButtonComponent = ({selected, title, setSelectedCategory}) => {
//   const style = selected ? {fontWeight: '700'} : {};

//   return (
//     <TouchableRipple
//       onPress={() => setSelectedCategory(title)}
//       style={{
//         height: hp(10),
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: selected ? 'white' : 'transparent',
//       }}>
//       <Text
//         style={{
//           fontSize: vs(13),
//           color: selected ? '#EC303A' : 'black',
//           ...style,
//         }}>
//         {title}
//       </Text>
//     </TouchableRipple>
//   );
// };

// const CategoryComponent = (props, ref) => {
//   const [selectedCategory, setSelectedCategory] = useState('');

//   const value = () => selectedCategory;

//   useImperativeHandle(ref, () => ({
//     value,
//   }));

//   return (
//     <>
//       <ButtonComponent
//         setSelectedCategory={setSelectedCategory}
//         selected={selectedCategory == 'Gender'}
//         title="Gender"
//       />
//       <ButtonComponent
//         setSelectedCategory={setSelectedCategory}
//         selected={selectedCategory == 'Category'}
//         title="Category"
//       />
//       <ButtonComponent
//         setSelectedCategory={setSelectedCategory}
//         selected={selectedCategory == 'Discounts'}
//         title="Discounts"
//       />
//       <ButtonComponent
//         setSelectedCategory={setSelectedCategory}
//         selected={selectedCategory == 'Customer\nRatings'}
//         title={`Customer\nRatings`}
//       />
//       <ButtonComponent
//         setSelectedCategory={setSelectedCategory}
//         selected={selectedCategory == 'Size'}
//         title="Size"
//       />
//       <ButtonComponent
//         setSelectedCategory={setSelectedCategory}
//         selected={selectedCategory == 'Price'}
//         title="Price"
//       />
//       <ButtonComponent
//         setSelectedCategory={setSelectedCategory}
//         selected={selectedCategory == 'Color'}
//         title="Color"
//       />
//       <ButtonComponent
//         setSelectedCategory={setSelectedCategory}
//         selected={selectedCategory == 'Brand'}
//         title="Brand"
//       />
//     </>
//   );
// };

// const CategoryComponentRef = forwardRef(CategoryComponent);

// const RowPrice = () => (
//   <View
//     style={{
//       flexDirection: 'row',
//       alignItems: 'center',
//       paddingLeft: wp(8),
//       // backgroundColor:'yellow',
//       height: moderateScale(60),
//     }}>
//     <View
//       style={{
//         height: 20,
//         width: 20,
//         borderWidth: 2,
//         borderRadius: 2,
//       }}></View>
//     <Text style={{paddingLeft: '10%', fontSize: vs(12)}}>
//       Rs. 299 and Below
//     </Text>
//   </View>
// );

// const ContainerValue = (props, ref) => {
//   const [value, setValue] = useState(0);

//   return (
//     <>
//       {value == 0 && (
//         <>
//           <RowPrice title="Women" />
//           <RowPrice title="Men" />
//         </>
//       )}

//       {value == 1 && (
//         <>
//           <RowPrice title="Women Party Gown" />
//           <RowPrice title="Crop Tops &  Tees" />
//           <RowPrice title="Lehengas & Sarees" />
//           <RowPrice title="Bottomwear" />
//           <RowPrice title="Skirts" />
//           <RowPrice title="Kurtis" />
//           <RowPrice title="Lingerie" />
//           <RowPrice title="Sport wear" />
//           <RowPrice title="Nightwear" />
//         </>
//       )}
//       {value == 2 && (
//         <>
//           <RowPrice title="30% or more" />
//           <RowPrice title="40% or more" />
//           <RowPrice title="50% or more" />
//           <RowPrice title="60% or more" />
//           <RowPrice title="70% or more" />
//         </>
//       )}

//       {value == 3 && (
//         <>
//           <RowPrice title="4 and above" />
//           <RowPrice title="3 and above" />
         
//         </>
//       )}

//     {value == 4 && (
//         <>
//           <RowPrice title="Free" />
//           <RowPrice title="XS" />
//           <RowPrice title="S" />
//           <RowPrice title="M" />
//           <RowPrice title="L" />
//           <RowPrice title="L" />
//           <RowPrice title="L" />
//           <RowPrice title="L" />
//           <RowPrice title="L" />
          

         
//         </>
//       )}
//       {/* <RowPrice title="Rs. 299 and Below" />
//       <RowPrice title="Rs. 299 and Below" />
//       <RowPrice title="Rs. 299 and Below" />
//       <RowPrice title="Rs. 299 and Below" />
//       <RowPrice title="Rs. 299 and Below" />
//       <RowPrice title="Rs. 299 and Below" /> */}
//     </>
//   );
// };

// export default function HomeScreen() {
//   const containerRef = useRef();
//   return (
//     <View style={{flex: 1, backgroundColor: 'red', flexDirection: 'row'}}>
//       <View style={{flex: 1, backgroundColor: '#F2F3F7'}}>
//         <CategoryComponentRef ref={containerRef} />
//         <View
//           style={{
//             position: 'absolute',
//             bottom: 0,
//             left: 0,
//             right: 0,
//             height: hp(10),
//             backgroundColor: 'white',
//             paddingLeft: '16%',
//             justifyContent: 'center',
//           }}>
//           <Text
//             style={{
//               color: '#EC303A',
//               fontFamily: 'Poppins-SemiBold',
//               fontSize: vs(15),
//             }}>
//             18,925
//           </Text>
//           <Text style={{color: '#EC303A'}}>Products found</Text>
//         </View>
//       </View>
//       <View
//         style={{
//           paddingVertical: hp(3),
//           flex: 1.5,
//           backgroundColor: '#FFFFFF',
//         }}></View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({});

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

  if (showComponent) return <LoadingComponent />;

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
  if (showComponent) return <LoadingComponent />;
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

  if (showComponent) return <LoadingComponent />;
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
  if (showComponent) return <LoadingComponent />;
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

  if (showComponent) return <LoadingComponent />;

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

// function StickyHeaderScrollview({children, title, ...res}) {
//   const [pos, setPos] = React.useState('down');
//   let value = 0;
//   const scrollY = new Animated.Value(100);
//   const headerCheck = pos > 15 ? {backgroundColor: 'white', elevation: 5} : {};
//   // onScroll={e => setPos(e.nativeEvent.contentOffset.y)}
//   console.log(scrollY, 'scrollYscrollY');

//   const checkIsScrollUp = () => {
//     if (scrollY > 100) {
//       console.log('it is run on minus');
//       scrollY.interpolate({
//         inputRange: [scrollY, scrollY - 100],
//         outputRange: [0, 100],
//       });
//     } else {
//       console.log('it is run on plus');
//       return scrollY.interpolate({
//         inputRange: [0, 100],
//         outputRange: [0, 100],
//       });
//     }
//   };
//   return (
//     <View style={{flex: 1}}>
//       <Animated.ScrollView
//         onScrollAnimationEnd={() => {
//           console.log('end scroll --->');
//         }}
//         onScroll={Animated.event(
//           [{nativeEvent: {contentOffset: {y: scrollY}}}],
//           {
//             useNativeDriver: false,
//             listener: event => {
//             },
//           },
//         )}
//         scrollEventThrottle={16}
//         // onScroll={e => setPos(e.nativeEvent.contentOffset.y)}
//         showsVerticalScrollIndicator={false}
//         {...res}>
//         {children}
//       </Animated.ScrollView>
//       <Animated.View
//         style={{
//           height: 100,
//           backgroundColor: 'red',
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           right: 0,
//           transform: [
//             {
//               translateY: scrollY.interpolate({
//                 inputRange: [0, 100],
//                 outputRange: [0, 100],
//               }),
//             },
//           ],
//         }}>
//         <TouchableOpacity
//           style={{height: 30, backgroundColor: 'yellow'}}
//           onPress={() => {}}></TouchableOpacity>
//       </Animated.View>
//     </View>
//   );
// }

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
      if (i < 4) i++;
      else clearInterval(interval);
    }
    // navigation.setOptions({tabBarStyle:{bottom:0}})
    interval = setInterval(dostuff, 2400);
  }, []);

  // tabBarStyle: {

  //   position: 'absolute',
  //   elevation: 0,
  //   borderTopWidth: 0,
  //   bottom: scale(27),
  // }
  console.log(navigation, 'navigationnavigationnavigation');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollContainer>
        <TopBar />
        <FirstComponent />
        <SecondComponent ref={secondRef} />
        <ThirdComponent ref={thirdRef} />
        <FourthComponent ref={fourthRef} />
        <SixthComponent ref={sixthRef} />
        <SeventhComponent ref={seventhRef} />
      </ScrollContainer>
    </SafeAreaView>
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
