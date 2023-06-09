/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import TextC from '../../../../components/Text';
import {
  CardImgGirl,
  MenuBlack,
  SendFilled,
  VerfiedGreen,
} from '../../../../assets/SVG';
import R from '../../../../res/R';
import {color} from '../../../../config/color';

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
          <TextC
            style={{fontWeight: 'bold', color: '#EC303A', fontSize: scale(15)}}>
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
            style={{
              fontWeight: 'bold',
              color: R.color.dark.black,
              textTransform: 'uppercase',
              fontSize: scale(15),
            }}>
            view all
          </TextC>
        </View>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{
          width: moderateScale(320), 
          height: verticalScale(595)
          }}
        // contentContainerStyle={{
        //   alignItems: 'center',
        // }}
        ItemSeparatorComponent={
          <View
            style={{
              width: moderateScale(15),
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
        flex: 2,

        justifyContent: 'flex-end',
      }}>
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
                font="black"
                variant="title2"
                color={R.color.dark.black}
                style={{fontWeight: 'bold', fontSize: scale(13)}}>
                Andrew Daniel
              </TextC>
              <TextC
                font="black"
                variant="title3"
                color={R.color.dark.black1}
                style={{fontWeight: 'bold', fontSize: scale(10)}}>
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
    </View>

    <View
      style={{
        height: verticalScale(300),
        marginVertical: verticalScale(10),
      }}>
      <Image
        style={{
          height: '100%',
          width: '100%',
          resizeMode: 'cover',
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.19,
          shadowRadius: 5.62,
          elevation: 6,
          borderRadius: scale(10),
          backgroundColor: 'white',
        }}
        source={require('../../../../assets/images/FeedItem.png')}
      />
    </View>

    <TextC variant="h5" font="regular" style={{fontSize: 10}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
      libero et velit interdum, ac aliquet odio mattis.
    </TextC>
    <View
      style={{
        width: '95%',
        height: verticalScale(160),
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
        width: moderateScale(80),
        height: verticalScale(110),
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
        numberOfLines={2}
        style={{
          fontSize: scale(10),
          fontWeight: '700',
          color: R.color.dark.black1,
        }}>
        {title}
      </TextC>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          height: verticalScale(30),
          width: '100%',
        }}>
        <TextC
          style={{
            fontSize: scale(10),
            fontWeight: '700',
            color: R.color.dark.black,
          }}>
          {price}
        </TextC>
        <TextC
          style={{
            fontSize: scale(8),
            fontWeight: '700',
            color: R.color.dark.gray2,
          }}>
          {offprice}
        </TextC>
      </View>
      <TextC
        style={{
          fontSize: scale(10),
          fontWeight: '700',
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
    width: moderateScale(320),
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    padding: scale(10),
    marginBottom: scale(20),
    height: verticalScale(580),
    marginTop: scale(30),
  },
});
