import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {moderateScale, scale, vs} from 'react-native-size-matters';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {SummerDealofTheday} from './Component/List/DealofTheday';
import TextC from '../../components/Text';
import R from '../../res/R';
import {verticalScale} from 'react-native-size-matters';
import { SvgXml } from 'react-native-svg';
import { summerCircleIcon, BackArrowSvg } from '../../assets/SVG';
import TopBar from '../../components/TopBar/TopBar';

const {width, height} = Dimensions.get('window');

const wp = w => (width / 100) * w;

const hp = h => (height / 100) * h;

const TopOffers = ({style}) => {
  return (
    <View style={{height: wp(50), ...style}}>
      <FlatList
        style={{marginTop: hp(2.5), paddingLeft: wp(2)}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[1, 2, 3, 33, 3, 3, 3, 3, 3]}
        renderItem={({item, index}) => (
          <View
            style={{
              borderColor: '#D9D9D9',
              backgroundColor: 'white',
              overflow: 'hidden',
              width: wp(26.7),
              marginLeft: wp(4),
              height: wp(44),
              borderWidth: 0.5,
              borderRadius: 6,
            }}>
            <View style={{flex: 1}}>
              <Image
                style={{height: '100%', width: '100%'}}
                source={{
                  uri: 'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/05/Malls-in-Mumbai.jpg?fit=1000%2C678&ssl=1',
                }}
              />
            </View>
            <View
              style={{
                height: '35%',
                paddingHorizontal: '10%',
                paddingTop: '6%',
              }}>
              <Text numberOfLines={1}>Sling Bag</Text>
              <Text
                numberOfLines={1}
                style={{fontWeight: 'bold', fontSize: vs(12)}}>
                Explore Now
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const ImageLayout = () => {
  return (
    <View
      style={{
        marginLeft: -wp(3),
        marginTop: -hp(7),
        height: 200,
        width: 400,
        zIndex: -1,
      }}>
      <Image
        style={{
          height: scale(170),
          width: scale(90),
          resizeMode: 'contain',
          position: 'absolute',
          left: 0,
          top: 0,
        }}
        source={require('../../assets/images/summer_bg.png')}
      />
      <Image
        style={{
          marginTop: hp(7),
          height: scale(140),
          width: scale(110),
          resizeMode: 'contain',
          zIndex: 1,
        }}
        source={require('../../assets/images/summer_bg_overlay.png')}
      />
    </View>
  );
};

const DiscountComponent = () => {
  return (
    <View
      style={{
        marginTop: -hp(7),
        paddingHorizontal: wp(2),
      }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={[1, 2, 3, 4]}
        horizontal
        renderItem={({item, index}) => (
          <ImageBackground
            source={{
              uri: 'https://media.istockphoto.com/id/1370431940/photo/portrait-of-black-couple-with-shopping-bags-pointing-at-window.webp?b=1&s=170667a&w=0&k=20&c=XG0ZVgbYCvSLHfAWW-fgkOCrvNtP-stT52R4cFTtinw=',
            }}
            style={{
              height: wp(47),
              width: wp(28),
              backgroundColor: 'pink',
              marginLeft: wp(3),
            }}>
            <View
              style={{
                height: '35%',
                width: '80%',
                position: 'absolute',
                borderRadius: 6,
                bottom: '8%',
                alignSelf: 'center',
                left: '10%',
                right: '5%',
                backgroundColor: 'rgba(245, 246, 250, 0.8)',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                elevation: 7,
                paddingHorizontal: '9%',
                paddingVertical: '6%',
              }}>
              <Text
                style={{
                  marginTop: '2%',
                  fontSize: vs(8),
                  fontWeight: 'bold',
                }}>
                H&M
              </Text>
              <Text
                style={{
                  fontSize: vs(8),
                  marginTop: '16%',
                  marginBottom: '-3%',
                }}>
                Smart Casuals
              </Text>
              <Text style={{fontWeight: 'bold', fontSize: vs(10)}}>
                Flat 50% Off
              </Text>
            </View>
          </ImageBackground>
        )}
      />
    </View>
  );
};

const ListHeaderComponet = () => (
  <View
    style={{
      height: verticalScale(40),
      paddingHorizontal: scale(5),
      justifyContent: 'center',
      width: '100%',
    }}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TextC
        font="bold"
        style={{
          color: '#EC303A',
          fontSize: vs(11),
          marginLeft: moderateScale(15),
        }}>
        DEAL OF THE DAY
      </TextC>
      <TouchableOpacity
      //   onPress={() => navigationRef.current.navigate('DealOftheDay')}
      >
        {/* <TextC
            font="bold"
            style={{
              color: R.color.dark.black,
              fontSize: scale(9),
            }}>
            See more
          </TextC> */}
      </TouchableOpacity>
    </View>
  </View>
);

export default function SummerScreen() {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
     <View style={{paddingHorizontal:wp(4), flexDirection:'row',height:50,  alignItems:'center'}} >
      <SvgXml xml={BackArrowSvg} />
      <Text style={{color:'#EC303A', marginLeft:wp(3), fontSize:vs(12), fontWeight:'500'}} >Special Offer Summer Sale</Text>
     </View>
      <Image
        style={{
          height: 200,
          width: wp(100),
          alignSelf: 'center',
          resizeMode: 'stretch',
        }}
        source={require('../../assets/images/summer_head_iimage.png')}
      />
      <Image
        style={{
          zIndex: -2,
          marginTop: -hp(3),
          width: wp(100),
          resizeMode: 'contain',
          height: hp(20),
          marginBottom:-hp(18)
        }}
        source={require('../../assets/images/summer_bg_cover.png')}
      />
      <Text
        style={{
          marginTop: hp(5),
          marginLeft: wp(4),
          fontWeight: 'bold',
          color: '#EC303A',
          fontSize: vs(15),
        }}>
        TOP OFFERS BY INFLUENCERS
      </Text>
      <TopOffers />
      <TopOffers style={{marginTop: -hp(0.8)}} />
      <View style={{alignItems: 'flex-end',marginBottom:-hp(17), marginTop:hp(4.5) }}>
       
        <LinearGradient
          colors={['#FECD04', '#F88430']}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          style={{
            marginTop: hp(1.5),
            marginBottom: hp(8.8),
            paddingHorizontal: 12,
            paddingVertical: 5,
            borderRadius: 4,
          }}>
          <Text
            style={{color: '#04416D', fontWeight: 'bold', fontSize: vs(12)}}>
            COUPON 30% OFF COUPON 30% OFF
          </Text>
        </LinearGradient>
      </View>
      <ImageLayout />
      <DiscountComponent />
      <View
        style={{
          height: hp(20),
          marginTop: -hp(6.5),
          zIndex: -1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <Image
          style={{
            height: scale(140),
            width: scale(110),
          }}
          source={require('../../assets/images/summer_overlay_2.png')}
        />
      </View>

      <View style={{alignItems: 'flex-start', marginTop: -hp(9.5)}}>
        <Text style={{color: '#EC4850', fontSize: vs(15), marginLeft: wp(5)}}>
          Explore the varieties, be pleasant
        </Text>
        <LinearGradient
          colors={['#FECD04', '#F88430']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
          style={{
            marginTop: hp(1.5),
            marginBottom: hp(8.8),
            paddingHorizontal: 12,
            paddingVertical: 5,
            borderRadius: 4,
          }}>
          <Text
            style={{color: '#04416D', fontWeight: 'bold', fontSize: vs(12)}}>
            COUPON 30% OFF COUPON 30% OFF
          </Text>
        </LinearGradient>
      </View>
      <DiscountComponent />
      <LinearGradient
        colors={['#FECD04', '#F88430']}
        start={{x: 1, y: 1}}
        end={{x: 0, y: 0}}
        style={{
          height: hp(15),
          zIndex: -1,
          marginTop: -hp(19),
          paddingHorizontal: 12,
          paddingVertical: 5,
        }}
      />
      <Image
        style={{
          marginTop: -hp(7),
          height: scale(140),
          width: scale(95),
          marginLeft: -4,
          resizeMode: 'contain',
          //   zIndex: 1,
          zIndex: -1,
        }}
        source={require('../../assets/images/summer_bg_overlay.png')}
      />
      <View style={{alignItems: 'flex-end', marginTop: -hp(4)}}>
        <Text style={{color: '#EC4850', fontSize: vs(15), marginLeft: wp(5)}}>
          Explore the varieties, be pleasant
        </Text>
        <LinearGradient
          colors={['#FECD04', '#F88430']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
          style={{
            marginTop: hp(1.5),
            marginBottom: hp(8.8),
            paddingHorizontal: 12,
            paddingVertical: 5,
            borderRadius: 4,
          }}>
          <Text
            style={{color: '#04416D', fontWeight: 'bold', fontSize: vs(12)}}>
            COUPON 30% OFF COUPON 30% OFF
          </Text>
        </LinearGradient>
      </View>
      <DiscountComponent />
      <LinearGradient
        colors={['#FECD04', '#F88430']}
        start={{x: 1, y: 1}}
        end={{x: 0, y: 0}}
        style={{
          height: hp(15),
          zIndex: -1,
          marginTop: -hp(19),
          paddingHorizontal: 12,
          paddingVertical: 5,
        }}
      />
      <Image
        style={{
          zIndex: -2,
          marginTop: -hp(3),
          width: wp(100),
          resizeMode: 'contain',
          height: hp(30),
        }}
        source={require('../../assets/images/summer_bg_cover.png')}
      />
      <View
        style={{
          marginTop: -hp(27.2),
          zIndex: -1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <Image
          style={{
            height: scale(140),
            width: scale(110),
          }}
          source={require('../../assets/images/summer_overlay_2.png')}
        />
      </View>
      <Text
        style={{
          marginTop: -hp(6),
          marginLeft: wp(5),
          color: '#EC303A',
          fontSize: vs(14),
          fontWeight: 'bold',
        }}>
        TRY ON FITTING ROOM
      </Text>
      <View
        style={{
          height: wp(45),
          width: wp(45),
          borderRadius: 12,
          backgroundColor: '#C345DB',
          alignSelf: 'center',
          marginTop: hp(5),
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: vs(8),
            fontWeight: 'bold',
            marginTop: hp(1),
          }}>
          VIRTUAL REALITY FASHION
        </Text>
<Image
style={{height:'60%', width:'87%', alignSelf:'center', marginTop:'11%'}}
   source={require('../../assets/images/summer_virtual_icon.png')}
// source={require('summer_virtual_icon')}
/>
        <View
          style={{
            position: 'absolute',
            bottom: -30,
            alignSelf: 'center',
            height: 55,
            width: 55,
            borderRadius: 35,
            backgroundColor: 'rgba(255,255,255, 0.4)',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <SvgXml xml={summerCircleIcon} />
          </View>
      </View>
      <Image
        style={{
          height: moderateScale(110),
          width: moderateScale(100),
          marginLeft: wp(9),
          zIndex: -1,
          resizeMode: 'contain',
          marginTop: -moderateScale(110),
        }}
        source={require('../../assets/images/tree_left.png')}
      />
       <Image
        style={{
          height: moderateScale(150),
          width: moderateScale(130),
          marginLeft: wp(63),
          zIndex: -1,
          resizeMode: 'contain',
          marginTop: -moderateScale(190),
          marginBottom:moderateScale(40),
        }}
        source={require('../../assets/images/tree_right.png')}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: hp(8),
          marginHorizontal: wp(3),
        }}>
        <View
          style={{
            flex: 1,
            height: 143,
            borderRadius: 12,
            backgroundColor: '#C345DB',
          }}></View>
        <View
          style={{
            flex: 1,
            height: 143,
            borderRadius: 12,
            backgroundColor: '#C345DB',
            marginHorizontal: wp(5),
          }}></View>
        <View
          style={{
            flex: 1,
            height: 143,
            borderRadius: 12,
            backgroundColor: '#C345DB',
          }}></View>
      </View>
      <Image
        style={{
          zIndex: -2,
          marginTop: hp(2),
          width: wp(100),
          resizeMode: 'contain',
          height: hp(30),
        }}
        source={require('../../assets/images/summer_bg_cover.png')}
      />
      <View
        style={{
          marginTop: -hp(27.2),
          zIndex: -1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <Image
          style={{
            height: scale(140),
            width: scale(110),
            marginTop: -hp(5),
            transform: [{rotate: '110deg'}],
            marginBottom: hp(5),
          }}
          source={require('../../assets/images/summer_overlay_2.png')}
        />
      </View>
      <View style={{marginTop: -hp(17)}} />
      <SummerDealofTheday
        ListHeader={ListHeaderComponet}
        fontStyle={{}}
        seeAll={''}
      />
      <Image
        style={{
          height: hp(100),
          width: wp(100),
          marginTop: -hp(113),
          zIndex: -5,
        }}
        source={require('../../assets/images/summer_background.png')}
      />
      <View style={{height: 200}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
