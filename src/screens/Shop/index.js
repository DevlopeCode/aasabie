/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import TopBar from '../../components/TopBar/TopBar';
import SearchBar from '../../components/SearchBar.js';
import TextC from '../../components/Text';
import R from '../../res/R';
import Carousel from 'react-native-reanimated-carousel';
import {
  LocalSory,
  CategoryListData,
  ChoiceData,
  TopData,
} from './Component/res/rawData';
import {Category} from './Component/List/Category';

const PostSlider = () => (
  <Carousel
    loop
    width={Dimensions.get('window').width}
    height={moderateScale(250)}
    autoPlay={true}
    data={[...new Array(6).keys()]}
    scrollAnimationDuration={1000}
    mode="parallax"
    renderItem={({index}) => (
      <Image
        source={require('../../assets/images/HomeSlider.png')}
        style={{
          height: '100%',
          width: '98%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: scale(10),
        }}
      />
    )}
  />
);

const CategoryList = () => (
  <View style={{height: verticalScale(150)}}>
    <View style={{marginHorizontal: scale(20)}}>
      <TextC style={{fontWeight: 'bold', color: R.color.dark.red}}>
        PRODUCT CATEGORIES
      </TextC>
    </View>
    <FlatList
      data={CategoryListData}
      horizontal
      style={{
        height: verticalScale(100),
        paddingHorizontal: scale(20),
      }}
      contentContainerStyle={{
        alignItems: 'center',
      }}
      ItemSeparatorComponent={
        <View
          style={{
            width: moderateScale(20),
          }}
        />
      }
      renderItem={({index, item}) => (
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={item.image}
            style={{
              height: scale(80),
              width: scale(80),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: scale(10),
            }}
          />
          <TextC
            style={{
              fontWeight: 'bold',
              color: R.color.dark.black,
              fontSize: scale(13),
            }}>
            {item.title}
          </TextC>
        </View>
      )}
    />
  </View>
);

const TopStory = () => (
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

const ChoiceItem = ({item, index}) => (
  <ImageBackground
    source={item.image}
    style={{
      height: verticalScale(90),
      width: moderateScale(150),
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginHorizontal: scale(8),
    }}
    imageStyle={{height: verticalScale(90), width: moderateScale(150)}}>
    <View
      style={{
        height: verticalScale(30),
        width: moderateScale(60),
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TextC
        style={{
          fontWeight: 'bold',
          color: R.color.dark.white,
          fontSize: scale(12),
        }}>
        {item.title}
      </TextC>
    </View>
  </ImageBackground>
);

const ChoiceList = () => (
  <View style={{marginVertical: verticalScale(10), alignItems: 'center'}}>
    <View
      style={{
        height: verticalScale(40),
        paddingHorizontal: scale(20),
        justifyContent: 'center',
        width: '100%',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextC style={{fontWeight: 'bold', color: '#EC303A'}}>
          CHOOSE YOUR CHOICE
        </TextC>
      </View>
    </View>
    <FlatList
      data={ChoiceData}
      renderItem={ChoiceItem}
      numColumns={2}
      ItemSeparatorComponent={
        <View
          style={{
            height: moderateScale(15),
          }}
        />
      }
    />
  </View>
);

const TopListItem = ({item}) => (
  <View
    style={{
      alignItems: 'center',
      width: moderateScale(150),
      height: verticalScale(240),
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2,
      backgroundColor: '#FFF',
      borderRadius: scale(8),
    }}>
    <View
      style={{
        width: moderateScale(135),
        // marginRight: 10,
        height: verticalScale(235),
        borderRadius: scale(8),
        overflow: 'hidden',
        backgroundColor: '#FFF',
      }}>
      <Image
        source={item.image}
        style={{
          width: '100%',
          height: verticalScale(140),
          resizeMode: 'cover',
          overflow: 'hidden',
          marginVertical: 10,
        }}
      />
      <View style={{width: moderateScale(130), alignItems: 'center'}}>
        <TextC
          numberOfLines={2}
          style={{
            fontSize: scale(10),
            fontWeight: '700',
            color: R.color.dark.black1,
          }}>
          {item.title}
        </TextC>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <TextC
            style={{
              fontSize: scale(13),
              fontWeight: '700',
              color: R.color.dark.black,
            }}>
            {item.price}
          </TextC>
          <TextC
            style={{
              fontSize: scale(10),
              fontWeight: '700',
              color: R.color.dark.gray2,
            }}>
            {item.offprice}
          </TextC>
          <TextC
            style={{
              fontSize: scale(10),
              fontWeight: '700',
              color: R.color.dark.black1,
            }}>
            ({item.offpercentage} Off)
          </TextC>
        </View>
        <TouchableOpacity
          style={{
            width: moderateScale(120),
            height: verticalScale(20),
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: scale(5),
          }}>
          <TextC
            style={{
              fontSize: scale(10),
              fontWeight: '700',
              textTransform: 'uppercase',
            }}>
            Add Item
          </TextC>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
const TopList = () => (
  <View style={{marginVertical: verticalScale(10), alignItems: 'center'}}>
    <View
      style={{
        height: verticalScale(40),
        paddingHorizontal: scale(20),
        justifyContent: 'center',
        width: '100%',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextC
          style={{
            fontWeight: 'bold',
            color: '#EC303A',
            textTransform: 'uppercase',
          }}>
          TOP 10 mOST SOLD PRODUCTS THIS WEEK
        </TextC>
      </View>
    </View>
    <FlatList
      data={TopData}
      renderItem={TopListItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={
        <View
          style={{
            width: moderateScale(15),
          }}
        />
      }
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingVertical: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        backgroundColor: '#FFF',
        //   backgroundColor: 'red',
      }}
    />
  </View>
);
const ShopScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <TopBar />
        <SearchBar />
        <Category />
        <PostSlider />
        <CategoryList />
        <TopStory />
        <ChoiceList />
        <TopList />
        <CategoryList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({});
