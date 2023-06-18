/* eslint-disable no-sparse-arrays */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {
  moderateScale,
  scale,
  verticalScale,
  vs,
} from 'react-native-size-matters';
import {BackArrowSvg, Serch} from '../../assets/SVG';
import {SvgXml} from 'react-native-svg';
import R from '../../res/R';
import navigationServices from '../../utils/navigationServices';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {color} from '../../config/color';
import {width} from '../../config/dimension';
import {hasRestParameter} from 'typescript';
// require('../../assets')

export const SearchBar = ({color, height}) => {
  return (
    <View
      style={{
        // height:  verticalScale(40),
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={() => navigationServices.goBack()}
        style={{marginRight: scale(10)}}>
        <SvgXml xml={BackArrowSvg()} />
      </TouchableOpacity>

      <View
        style={{
          height: height ? verticalScale(30) : verticalScale(27),
          width: moderateScale(320),
          borderWidth: 1,
          borderColor: R.color.dark.red,
          flexDirection: 'row',
          borderRadius: scale(20),
          alignItems: 'center',
          backgroundColor: color || 'transparent',
        }}>
        <View style={{width: scale(40), alignItems: 'center'}}>
          <SvgXml xml={Serch()} />
        </View>
        <TextInput
          style={{width: '90%', padding: 0, margin: 0, fontSize: vs(10)}}
          placeholder="Search on The Pickmart"
          placeholderTextColor={'black'}
        />
      </View>
    </View>
  );
};
const CategoryItemScreen = () => {
  const inset = useSafeAreaInsets();

  return (
    <View style={{backgroundColor: 'white', flex: 1, marginTop: inset.top}}>
      <Header />
      <SearchBar />

      <View style={styles.topSection}>
        <View style={{borderRadius: 10, overflow: 'hidden'}}>
          <Image
            style={styles.topImg}
            source={{
              uri: 'https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg',
            }}
          />
        </View>

        <View style={styles.topSectionText}>
          <Text style={styles.topText1}>Set your wardrobe!</Text>
          <Text style={styles.topText2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </Text>
          <Text style={styles.topText3}>WHAT ARE YOU WAITING FOR?</Text>
          <Text style={styles.topText3}>JUST GET STARTED</Text>
        </View>
      </View>

      <Text
        style={{
          color: '#EC4850',
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: scale(14),
          fontSize: vs(13),
        }}>
        CHOOSE BY PRODUCT CATEGORY
      </Text>
      <View>
        <FlatList
          style={{marginTop: scale(16), marginLeft: 10}}
          horizontal
          data={[1, 2, , 34, 44, , 4, , , 5, 5, 5]}
          renderItem={({item}) => (
            <View>
              <View
                style={{
                  marginTop: 12,
                  marginHorizontal: 13,
                  borderRadius: 10,
                  height: 103,
                  width: 100,
                  backgroundColor: 'blue',
                }}>
                <View
                  style={{
                    height: '101%',
                    width: '100%',
                    borderWidth: 1.3,
                    borderRadius: 10,
                    marginTop: '-6%',
                    marginLeft: '4.5%',
                    borderColor: '#EC4850',
                  }}
                />
                <View
                  style={{
                    zIndex: -1,
                    overflow: 'hidden',
                    backgroundColor: 'pink',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    borderRadius: 10,
                  }}>
                  <Image
                    source={{
                      uri: 'https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg',
                    }}
                    style={{height: '100%', width: '100%'}}
                  />
                </View>
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: scale(9),
                  fontWeight: 'bold',
                  color: '#EC4850',
                }}>
                MEN
              </Text>
            </View>
          )}
          // keyExtractor={item => item.id}
        />
      </View>

      <Image
        source={require('../../assets/images/categpryItembg.png')}
        style={{height: 200, width: '100%', resizeMode: 'contain'}}
      />
      <Text
        style={{
          color: '#EC4850',
          fontSize: vs(17.5),
          textAlign: 'center',
          fontFamily: 'Yesteryear-Regular',
        }}>
        Explore the varieties, be pleasant
      </Text>
    </View>
  );
};

export default CategoryItemScreen;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 10,
    marginTop: 70,
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 10,
    gap: 15,
    borderColor: color.primary,
    borderWidth: 1.5,
  },
  topSection: {
    // backgroundColor:'blue',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 37,
    gap: 20,
    width: width,
  },
  topImg: {
    width: 115,
    height: 140,
  },
  topSectionText: {
    flexGrow: 1,
    width: width * 0.4,
  },
  topText1: {
    fontFamily: 'KaushanScript-Regular',
    fontSize: 22,
    color: color.primary,
    textAlign: 'right',
  },
  topText2: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#000',
    textAlign: 'right',
    marginVertical: 10,
  },
  topText3: {
    fontFamily: 'Rancho-Regular',
    fontSize: 12,
    color: '#000',
    textAlign: 'right',
  },

  categoryHeading: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: color.primary,
    paddingHorizontal: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 20,
  },
  category: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  categoryImg: {
    width: 100,
    height: 100,
    borderColor: color.primary,
    borderWidth: 1.5,
    borderRadius: 10,
  },
  categoryText: {
    fontFamily: 'Poppins',
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },
  bannerImg: {
    width: width,
    height: 130,
  },

  offerImg: {
    width: width * 0.55,
    height: 120,
    marginHorizontal: 20,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'left',
    padding: 20,
  },
  offerHeading: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: color.background,
    // marginBottom: 5,
    // fontSize: 12,
    zIndex: 2,
  },
  offerSubHeading: {
    fontFamily: 'Poppins',
    fontSize: 10,
    color: color.background,
    marginBottom: 5,
    // fontSize: 6,
    zIndex: 2,
  },

  offerBtn: {
    width: 70,
    borderRadius: 10,
    backgroundColor: color.primary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 8,
    fontFamily: 'Poppins',
    color: color.background,
    zIndex: 2,
    textAlign: 'center',
  },
  bottomOptions: {
    paddingHorizontal: 20,
  },
  bottomOptionText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: color.background,
    padding: 20,
    marginVertical: 20,
    textAlign: 'center',
    backgroundColor: color.primary,
    flexGrow: 1,
  },
});
