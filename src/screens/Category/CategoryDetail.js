import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import { moderateScale, scale, vs } from 'react-native-size-matters';
import { SearchBar } from './CategoryItemScreen';
import { hp, wp } from '../../components/Responsive';
import { ScrollView } from 'react-native-gesture-handler';
import { DiscountComponent } from '../Shop/SummerScreen';



const TypeFootWear = () => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          height: vs(47),
          backgroundColor: '#EC4850',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: -hp(1)

        }} >
        <Text style={{ color: 'white', fontStyle: 'italic', fontWeight: 'bold', fontSize: vs(13), fontFamily: 'Poppins-Bold', }} >Footwear Casting</Text>
      </TouchableOpacity>

      <FlatList
        style={{ marginLeft: wp(4), marginTop: hp(2) }}
        data={[1, 2, 3, 4, 5, 2, 45, 3, 54]}
        contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
        renderItem={() => (
          <View style={{ marginTop: wp(2) }} >
            <View style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#EC4850',
              height: wp(27),
              width: wp(27),
              marginLeft: wp(4),
              marginTop: hp(1.6)
            }} />

            <View style={{
              position: 'absolute',
              height: wp(27),
              backgroundColor: '#f2f2f2',
              width: wp(27),
              borderRadius: 5,
              overflow: 'hidden',
              top: wp(5),
              left: wp(2),
              zIndex: -1
            }} >
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80' }}
                style={{
                  height: wp(27),
                  width: wp(27),
                }} />
            </View>
            <Text style={{
              color: '#EC4850',
              fontWeight: 'bold',
              marginTop: wp(3),
              width: wp(27),
              textAlign: 'center',
              fontSize: vs(10.5),
              marginLeft: wp(1)
            }} >SPORT SHOES</Text>
          </View>
        )}
      />


    </>
  )
}


export default function CategoryDetail({ categoryCardColor='#EC4850', categoryTitle, coverImage, route, HeadLayout, HeadLayoutTwo, showCategoryList }) {
  const { data } = route.params
  
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <Header />
      <View style={{ marginVertical: vs(20) }}>
        <SearchBar height color={'white'} />
      </View>
      <View style={{ height: wp(63) }}>
        <FlatList
          style={{ marginLeft: wp(2.5) }}
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingBottom: 0,
          }}
          data={data}
          renderItem={({ item, index }) => (
            <View style={{ alignItems: 'center' }}>
              <View
                style={{
                  height: wp(20),
                  width: wp(20),
                  borderRadius: 8,
                  marginLeft: wp(3),
                  marginTop: wp(4.5),
                  overflow: 'hidden',
                  elevation: 8,
                }}>
                <Image
                  style={{ height: '100%', width: '100%' }}
                  source={{
                    uri: 'https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                />
              </View>
              <Text
                style={{
                  color: '#EC4850',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: vs(8.5),
                  marginTop: wp(1),
                  width: wp(15.5),
                  marginRight: -wp(3),
                }}>
                T - SHIRTS
              </Text>
            </View>
          )}
        />
      </View>
      {HeadLayout && <HeadLayout />}
      {HeadLayoutTwo ? <HeadLayoutTwo /> : <Image
        style={{
          alignSelf: 'center',
          height: 275,
          width: wp(102),
          resizeMode: 'stretch',
        }}
        source={require('../../assets/images/category_cover.png')}
      />}

      <Image
        style={{
          height: 345,
          marginTop: -hp(1),
          zIndex: -1,
          width: wp(100),
          resizeMode: 'contain',
        }}
        source={coverImage || require('../../assets/images/category_detail_cover.png')}
      />
      <View style={{ height: 345, marginTop: -340 }}>
        <Image
          style={{
            height: wp(32),
            width: wp(40),
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
          source={require('../../assets/images/deal_of_day.png')}
        />
        <View style={{ height: hp(6) }} />
        <DiscountComponent />
      </View>
      {showCategoryList && <TypeFootWear />}
      <Text
        style={{
          color: '#EC4850',
          marginLeft: wp(6),
          marginTop: hp(2),
          fontWeight: 'bold',
          fontSize: vs(12),
        }}>
        {categoryTitle || 'BEST OF MENS WEAR'}
      </Text>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        horizontal
        style={{ marginTop: hp(2), marginLeft: moderateScale(2) }}
        renderItem={({ item, index }) => (
          <View
            style={{
              height: moderateScale(210),
              marginLeft: moderateScale(15),
              backgroundColor: 'blue',
              width: moderateScale(163),
              borderRadius: 4.5,
              overflow: 'hidden'
            }}>
            <Image
              style={{ height: '100%', width: '100%' }}
              source={{
                uri: 'https://images.unsplash.com/photo-1577394745831-5f5351823199?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95cyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D&w=1000&q=80',
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                left: '10%',
                right: '10%',
                height: '37%',
                backgroundColor:categoryCardColor,
                borderWidth: 0.7,
                borderColor: 'white',
              }}>
              <View
                style={{
                  height: '30%',
                  width: '80%',
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  borderRadius: 2,
                  marginTop: '-10%',
                }}>
                <Text
                  style={{
                    color: '#EC4850',
                    fontSize: vs(5),
                    fontWeight: 'bold',
                  }}>
                  JACK&JONES | HIGHLANDER
                </Text>
              </View>
              <Text
                style={{
                  fontSize: vs(12),
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'center',
                  marginTop: '8%',
                }}>
                MIN 65% OFF
              </Text>
            </View>
          </View>
        )}
      />
      <View style={{ height: hp(20) }} />
    </ScrollView>
  );
}

// var _clampedScrollValue = 0;
// var _offsetValue = 0;
// var _scrollValue = 0;
// useEffect(() => {
//   scrollY.addListener(({value}) => {
//     const diff = value - _scrollValue;
//     _scrollValue = value;
//     _clampedScrollValue = Math.min(
//       Math.max(_clampedScrollValue + diff, 0),
//       CONTAINER_HEIGHT,
//     );
//   });
//   offsetAnim.addListener(({value}) => {
//     _offsetValue = value;
//   });
// }, []);

// var scrollEndTimer = null;
// const onMomentumScrollBegin = () => {
//   clearTimeout(scrollEndTimer);
// };
// const onMomentumScrollEnd = () => {
//   const toValue =
//     _scrollValue > CONTAINER_HEIGHT &&
//     _clampedScrollValue > CONTAINER_HEIGHT / 2
//       ? _offsetValue + CONTAINER_HEIGHT
//       : _offsetValue - CONTAINER_HEIGHT;

//   Animated.timing(offsetAnim, {
//     toValue,
//     duration: 500,
//     useNativeDriver: true,
//   }).start();
// };
// const onScrollEndDrag = () => {
//   scrollEndTimer = setTimeout(onMomentumScrollEnd, 250);
// };

// const headerTranslate = clampedScroll.interpolate({
//   inputRange: [0, CONTAINER_HEIGHT],
//   outputRange: [0, -CONTAINER_HEIGHT],
//   extrapolate: 'clamp',
// });
// const opacity = clampedScroll.interpolate({
//   inputRange: [0, CONTAINER_HEIGHT - 20, CONTAINER_HEIGHT],
//   outputRange: [1, 0.05, 0],
//   extrapolate: 'clamp',
// });
// const bottomTabTranslate = clampedScroll.interpolate({
//   inputRange: [0, CONTAINER_HEIGHT],
//   outputRange: [0, CONTAINER_HEIGHT * 2],
//   extrapolate: 'clamp',
// });

// return (
//   <View style={styles.container}>
//     <Animated.FlatList
//       onScroll={Animated.event(
//         [{nativeEvent: {contentOffset: {y: scrollY}}}],
//         {useNativeDriver: true},
//       )}
//       data={data}
//       keyExtractor={(item, index) => item.title + index.toString()}
//       renderItem={({item}) => (
//         <RenderItem item={item} navigation={navigation} />
//       )}
//       contentContainerStyle={styles.contentContainerStyle}
//       onMomentumScrollBegin={onMomentumScrollBegin}
//       onMomentumScrollEnd={onMomentumScrollEnd}
//       onScrollEndDrag={onScrollEndDrag}
//       scrollEventThrottle={1}
//     />
//     <Animated.View
//       style={[
//         styles.view,
//         {top: 0, transform: [{translateY: headerTranslate}]},
//       ]}>
//       <MyHeader
//         menu
//         title={route.name}
//         right="search"
//         style={[styles.header, {opacity}]}
//       />
//     </Animated.View>
//     <Animated.View
//       style={[
//         styles.view,
//         {bottom: 0, transform: [{translateY: bottomTabTranslate}]},
//       ]}>
//       <Surface style={[styles.rowContainer, styles.bottomBar]}>
//         <BottomTab navigation={navigation} />
//       </Surface>
//     </Animated.View>
//   </View>
// );
// };

// export default Feeds;

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
// },
// view: {
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   height: CONTAINER_HEIGHT,
// },
// header: {
//   borderBottomRightRadius: 16,
//   borderBottomLeftRadius: 16,
//   marginHorizontal: 4,
// },
// bottomBar: {
//   borderTopRightRadius: 16,
//   borderTopLeftRadius: 16,
//   marginHorizontal: 4,
// },
// contentContainerStyle: {
//   paddingTop: CONTAINER_HEIGHT,
//   marginTop: 8,
// },
// rowContainer: {
//   flex: 1,
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'space-around',
// },
// item: {
//   marginHorizontal: 10,
//   marginBottom: 12,
//   elevation: 6,
//   borderRadius: 16,
// },
// title: {
//   fontSize: 16,
//   fontWeight: '700',
// },
// caption: {
//   color: Colors.darkGray,
// },
// image: {
//   height: 300,
//   width: null,
//   marginBottom: 1,
//   marginHorizontal: 16,
//   borderRadius: 16,
// },
// bottomView: {
//   alignItems: 'center',
//   flexDirection: 'row',
//   padding: 16,
// },
// content: {
//   alignItems: 'center',
//   flexDirection: 'row',
//   marginHorizontal: 16,
//   paddingVertical: 8,
// },
// textContainer: {
//   marginHorizontal: 16,
// },
// avatar: {
//   height: 35,
//   width: 35,
//   borderRadius: 20,
//   backgroundColor: Colors.primary,
// },
// rowView: {
//   alignItems: 'center',
//   flexDirection: 'row',
//   justifyContent: 'space-around',
// },
// icon: {
//   marginHorizontal: 10,
// },
// });
