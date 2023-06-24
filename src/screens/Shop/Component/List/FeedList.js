/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {
  moderateScale,
  s,
  scale,
  verticalScale,
  vs,
} from 'react-native-size-matters';
import TextC from '../../../../components/Text';
import {
  CardImgGirl,
  MenuBlack,
  SendFilled,
  VerfiedGreen,
} from '../../../../assets/SVG';
import R from '../../../../res/R';
import {color} from '../../../../config/color';
import navigationServices from '../../../../utils/navigationServices';

const FeedList = () => {
  return (
    <View
      style={{
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        marginVertical: scale(10),
      }}>
      <View
        style={{
          height: verticalScale(40),
          paddingHorizontal: scale(20),
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <TextC font="bold" variant="h5" color="#EC303A">
            CHECK OUR FEED
          </TextC>
          <Image
            source={require('../../../../assets/images/new.png')}
            style={{
              height: scale(30),
              width: scale(30),
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <TextC
            font="bold"
            variant="h5"
            color={R.color.dark.black}
            style={{
              textTransform: 'uppercase',
            }}>
            view all
          </TextC>
        </View>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{
          width: moderateScale(320),
          marginTop: Platform.OS === 'android' ? scale(20) : s(1),
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
        horizontal
        data={[1, 2, 3, 4]}
        renderItem={PostCard}
      />
    </View>
  );
};

export default FeedList;

export const PostCard = () => (
  <View style={styles.cardContainer}>
    <View
      style={{
        flexDirection: 'row',
        height: verticalScale(50),
        width: '100%',
        paddingHorizontal: scale(10),
      }}>
      <View
        style={{
          width: '80%',
          //  backgroundColor: 'white'
        }}>
        <View
          style={{
            height: verticalScale(50),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View>
            <SvgXml xml={CardImgGirl} />
            <SvgXml
              xml={VerfiedGreen}
              style={{
                position: 'absolute',
                marginLeft: scale(28),
                marginTop: -scale(1),
              }}
            />
          </View>
          <View style={{paddingLeft: scale(10)}}>
            <TextC
              font="semibold"
              variant="h5"
              color={R.color.dark.black}
              // style={{fontSize: scale(13)}}
            >
              Andrew Daniel
            </TextC>
            <TextC font="regular" variant="h6" color={R.color.dark.black1}>
              Singer
            </TextC>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '20%',
          // backgroundColor: 'aqua',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <SvgXml xml={SendFilled} color={'black'} />
        <SvgXml xml={MenuBlack} color={'black'} />
      </View>
    </View>
    <TouchableOpacity
      onPress={() => navigationServices.navigate('ProductDetail')}
      style={{
        height: verticalScale(300),
        marginVertical: verticalScale(10),
      }}>
      <Image
        style={{
          height: '100%',
          width: '100%',
          resizeMode: 'cover',

          borderRadius: scale(10),
          backgroundColor: 'white',
        }}
        source={require('../../../../assets/images/FeedItem.png')}
      />
    </TouchableOpacity>

    <TextC variant="h6" font="regular">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
      libero et velit interdum, ac aliquet odio mattis.
    </TextC>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <ProductDemo />
      <ProductDemo />
    </View>
  </View>
);

const ProductDemo = ({
  title = 'Women Pattern Ethnic Wear',
  price = 'Rs.499',
  offprice = 'Rs.799',
  offpercentage = '30%',
}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      width: moderateScale(130),
    }}>
    <Image
      source={require('../../../../assets/images/FeedItem.png')}
      style={{
        width: moderateScale(70),
        height: verticalScale(95),
        resizeMode: 'cover',
        overflow: 'hidden',
        marginVertical: 10,
        borderRadius: scale(10),
      }}
    />
    <View
      style={{
        width: moderateScale(60),
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: scale(2),
      }}>
      <TextC
        font="semibold"
        numberOfLines={2}
        variant="small"
        style={{
          color: R.color.dark.black1,
        }}>
        {title}
      </TextC>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: verticalScale(30),
        }}>
        <TextC font="semibold" variant="h6" color={R.color.dark.black}>
          {price}
        </TextC>
        <TextC font="semibold" variant="small" color={R.color.dark.gray2}>
          {offprice}
        </TextC>
      </View>
      <TextC
        font="semibold"
        variant="h6"
        style={{
          color: '#3F345A',
        }}>
        ({offpercentage} Off)
      </TextC>
    </View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    alignItems: 'center',
  },
  cardContainer: {
    width: moderateScale(315),
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    padding: scale(10),
    overflow: 'hidden',
    marginVertical: scale(10),
    marginHorizontal: s(10),
  },
});
