/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {BackArrowSvg, Serch} from '../../assets/SVG';
import {SvgXml} from 'react-native-svg';
import R from '../../res/R';
import navigationServices from '../../utils/navigationServices';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { color } from '../../config/color';
import { width } from '../../config/dimension';
// require('../../assets')

const SearchBar = () => {
  return (
    <View
      style={{
        height: verticalScale(40),
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={() => navigationServices.goBack()}
        style={{marginRight: scale(10)}}>
        <SvgXml xml={BackArrowSvg} />
      </TouchableOpacity>

      <View
        style={{
          height: verticalScale(27),
          width: moderateScale(320),
          borderWidth: 1,
          borderColor: R.color.dark.red,
          flexDirection: 'row',
          borderRadius: scale(20),
          alignItems: 'center',
        }}>
        <View style={{width: scale(40), alignItems: 'center'}}>
          <SvgXml xml={Serch} />
        </View>
        <TextInput
          style={{width: '90%', padding: 0, margin: 0}}
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
        <Image
          style={styles.topImg}
          // source={require('../../assets/images/Apparel/PNG FILES/appareltop.png')}
        />
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
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
    fontFamily: 'KaushanScript',
    fontSize: 22,
    color: color.primary,
    textAlign: 'right',
  },
  topText2: {
    fontFamily: 'Poppins',
    fontSize: 10,
    color: '#000',
    textAlign: 'right',
    marginVertical: 10,
  },
  topText3: {
    fontFamily: 'Rancho',
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
    fontSize: 12,
    zIndex: 2,
  },
  offerSubHeading: {
    fontFamily: 'Poppins',
    fontSize: 10,
    color: color.background,
    marginBottom: 5,
    fontSize: 6,
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
