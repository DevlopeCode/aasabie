/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React, {useRef} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {height, width} from '../../config/dimension';
import {color} from '../../config/color';
import Varients from './Varients';
import ProductInfo from './ProductInfo';
import PriceSection from './PriceSection';
import {ScrollView} from 'react-native';
import {ProductHeader} from '../ProoductList/ProductHeader';
// import Carousel from 'react-native-reanimated-carousel';
import {s, scale, vs} from 'react-native-size-matters';
import {SvgXml} from 'react-native-svg';
import {
  Avtar,
  HeartOulineSvg,
  NegociationSVG,
  ShareSvg,
  ShopIcon,
  VRSVG,
} from '../../assets/SVG';
import R from '../../res/R';
import TextC from '../../components/Text';
import {ProductCardList} from '../ProoductList';
import {wp} from '../../components/Responsive';
import StarIcon from './StarIcon';
import LinearGradient from 'react-native-linear-gradient';

const ProductProgress = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TextC
        font="medium"
        variant="h5"
        color={R.color.dark.black}
        gutterRight={5}>
        Product
      </TextC>
      <LinearGradient
        colors={['#7FAA39', '#D9D9D9']}
        style={{width: wp(32), height: vs(13), borderRadius: vs(20)}}
      />
      <TextC
        font="medium"
        variant="h5"
        color={R.color.dark.gray2}
        gutterLeft={5}>
        86%
      </TextC>
    </View>
  );
};

const AvatarRview = () => {
  return (
    <View style={{paddingHorizontal: 18, marginTop: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <SvgXml xml={Avtar} />
          <View style={{paddingLeft: s(10)}}>
            <TextC variant="h5" font="medium">
              Angelina Anderson
            </TextC>
            <View style={{flexDirection: 'row'}}>
              <StarIcon active={true} size={18} />
              <StarIcon active={true} size={18} />
              <StarIcon active={true} size={18} />
              <StarIcon active={true} size={18} />
              <StarIcon active={false} size={18} />
            </View>
          </View>
        </View>

        <TextC variant="h5" font="medium" color={R.color.dark.gray2}>
          1 month ago
        </TextC>
      </View>
      <TextC variant="title4" color={R.color.dark.gray2} gutterTop={10}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a.....
      </TextC>
    </View>
  );
};

const ProductDetail = ({route}) => {
  console.log(route?.params);
  const testData = {
    title: 'Trendy Fabulous Kurti - Georgette long sleeeve',
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vi, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vi',
    variants: [
      {
        name: 'Color',
        options: [
          {
            name: 'Red',
            varientImage: 'https://picsum.photos/200/300',
            images: [
              'https://picsum.photos/200/300',
              'https://picsum.photos/200/300',
              'https://picsum.photos/200/300',
            ],
          },
          {
            name: 'Blue',
            varientImage: 'https://picsum.photos/210/300',
            images: [
              'https://picsum.photos/210/300',
              'https://picsum.photos/200/300',
              'https://picsum.photos/200/300',
            ],
          },
          {
            name: 'Green',
            varientImage: 'https://picsum.photos/205/300',
            images: [
              'https://picsum.photos/205/300',
              'https://picsum.photos/200/300',
              'https://picsum.photos/200/300',
            ],
          },
          {
            name: 'Yellow',
            varientImage: 'https://picsum.photos/201/300',
            images: [
              'https://picsum.photos/201/300',
              'https://picsum.photos/200/300',
              'https://picsum.photos/200/300',
            ],
          },
          {
            name: 'Black',
            varientImage: 'https://picsum.photos/202/300',
            images: [
              'https://picsum.photos/202/300',
              'https://picsum.photos/200/300',
              'https://picsum.photos/200/300',
            ],
          },
          {
            name: 'White',
            varientImage: 'https://picsum.photos/203/300',
            images: [
              'https://picsum.photos/203/300',
              'https://picsum.photos/200/300',
              'https://picsum.photos/200/300',
            ],
          },
        ],
      },
      {
        name: 'Size',
        options: ['S', 'M', 'L', 'XL', 'XXL'],
      },
    ],
    seens: 400,
    likes: 100,
    rating: 4.5,
    reviews: 100,
    discount: 45,
    category: 'Category',
    subCategory: 'Sub Category',
    tags: ['tag1', 'tag2', 'tag3'],
    seller: 'Seller',
    sellerRating: 4,
    sellerReviews: 100,
    sellerProducts: 100,
    sellerSince: '2021-01-01',
    sellerLocation: 'Location',
    sellerDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vi',
  };

  const [like, setLike] = React.useState(false);
  const [currentVarient, setCurrentVarient] = React.useState(0);
  console.log(currentVarient);
  const sliderRef = useRef(null);
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <ProductHeader title={'Negotiation'} />
      {/* <ImageaCarousel data={testData.images}/> */}
      <Carousel
        ref={sliderRef}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        autoPlay={false}
        loop={true}
        loopClonesPerSide={2}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={1000}
        onSnapToItem={index => setCurrentVarient(index)}
        data={testData.variants[0].options}
        // scrollAnimationDuration={1000}
        // mode="parallax"

        defaultIndex={currentVarient}
        renderItem={({item}) => {
          return (
            <ImageBackground
              source={{uri: item.images[0]}}
              imageStyle={{
                height: vs(400),
                width: Dimensions.get('window').width,
              }}
              style={{
                height: vs(400),
                width: Dimensions.get('window').width,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  height: vs(90),
                  marginTop: vs(20),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: s(20),
                }}>
                <View
                  style={{
                    height: vs(24),
                    backgroundColor: '#FFFFFF',
                    width: scale(70),
                    borderRadius: s(22),
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingHorizontal: s(5),
                  }}>
                  <SvgXml xml={VRSVG} />
                  <TextC font="bold" variant="h6" color="#9931C0">
                    TRY ON
                  </TextC>
                </View>
                <View
                  style={{
                    height: vs(70),
                    width: scale(90),
                    borderRadius: s(22),
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                  }}>
                  <View
                    style={{
                      width: s(25),
                      height: s(25),
                      borderRadius: s(20),
                      backgroundColor: R.color.dark.white,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: s(10),
                    }}>
                    <SvgXml xml={HeartOulineSvg} />
                  </View>
                  <View
                    style={{
                      width: s(25),
                      height: s(25),
                      borderRadius: s(20),
                      backgroundColor: R.color.dark.white,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <SvgXml xml={ShareSvg} />
                  </View>
                </View>
              </View>
              <View
                style={{
                  height: vs(100),
                  alignItems: 'flex-end',
                  paddingHorizontal: scale(15),
                }}>
                <View
                  style={{
                    height: vs(35),
                    // width: s(200),
                    backgroundColor: '#EC303A',
                    borderRadius: s(90),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: s(15),
                  }}>
                  <SvgXml xml={NegociationSVG} />
                  <TextC font="medium" variant="h5" color="white">
                    Negotiation Available
                  </TextC>
                </View>
              </View>
            </ImageBackground>
          );
        }}
      />
      <Pagination
        dotsLength={testData.variants[0].options.length}
        activeDotIndex={currentVarient}
        containerStyle={{width: '100%', alignItems: 'center'}}
        dotColor={'rgba(255, 255, 255, 0.92)'}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 10,
        }}
        inactiveDotColor={'red'}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        carouselRef={sliderRef}
        tappableDots={!!sliderRef}
      />
      <Varients
        ref={sliderRef}
        data={testData.variants[0].options}
        currentSelected={currentVarient}
        handelChangeVarient={data => setCurrentVarient(data)}
      />
      <ProductInfo
        title={testData.title}
        ratingCount={testData.reviews}
        rating={testData.rating}
        seen={testData.seens}
        likes={testData.likes}
      />
      <PriceSection price={testData.price} discount={testData.discount} />

      <TextC font="medium" gutterLeft={20}>
        Size
      </TextC>
      <View style={styles.sizes}>
        {testData.variants[1].options.map((item, index) => (
          <TouchableWithoutFeedback key={index}>
            <View style={styles.size}>
              <TextC font="semibold" style={{paddingHorizontal: 5}}>
                {item}
              </TextC>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
      <View style={styles.description}>
        <TextC variant="h4" font="medium">
          Description
        </TextC>
        <TextC variant="h6" font="regular" color={R.color.dark.gray2}>
          {testData.description}
        </TextC>
      </View>

      <View style={styles.ProductDetailsItem}>
        <TextC variant="h4" font="medium">
          Product Details
        </TextC>
        <View style={styles.productdetils}>
          <View style={{width: '40%'}}>
            <TextC variant="h6" font="regular" color={R.color.dark.gray2}>
              Name
            </TextC>
            <TextC variant="h6" font="regular" color={R.color.dark.gray2}>
              Fabric
            </TextC>
            <TextC variant="h6" font="regular" color={R.color.dark.gray2}>
              Sleeve Length
            </TextC>
            <TextC variant="h6" font="regular" color={R.color.dark.gray2}>
              Pattern
            </TextC>
            <TextC variant="h6" font="regular" color={R.color.dark.gray2}>
              Combo of
            </TextC>
          </View>

          <View style={{width: '50%'}}>
            <TextC variant="h6" font="regular" color={R.color.dark.gray2}>
              Chitrarekha Attractive Kurtis
            </TextC>
            <TextC variant="h6" font="regular" color={R.color.dark.gray2}>
              Georgette
            </TextC>
            <TextC variant="h6" font="regular" color={R.color.dark.gray2}>
              Long Sleeves
            </TextC>
            <TextC variant="h6" font="regular" color={R.color.dark.gray2}>
              Solid
            </TextC>
            <TextC variant="h6" font="regular" color={R.color.dark.gray2}>
              Single
            </TextC>
          </View>
        </View>
      </View>
      <View style={styles.ProductDetailsItem}>
        <TextC variant="h4" font="medium">
          Product Sold By
        </TextC>
        <View style={styles.productdetils}>
          <View>
            <TextC variant="h6" font="medium" color={R.color.dark.gray2}>
              Suchitra Garments
            </TextC>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingRight: 20,
                }}>
                <TextC variant="h5" font="bold" color={R.color.dark.gray2}>
                  2091
                </TextC>
                <TextC variant="h5" font="regular" color={R.color.dark.gray2}>
                  Products
                </TextC>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingRight: 20,
                }}>
                <TextC variant="h5" font="bold" color={R.color.dark.gray2}>
                  6.5 K
                </TextC>
                <TextC variant="h5" font="regular" color={R.color.dark.gray2}>
                  Followers
                </TextC>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingRight: 5,
                }}>
                <TextC variant="h5" font="bold" color={R.color.dark.gray2}>
                  4.1
                </TextC>
                <TextC variant="h5" font="regular" color={R.color.dark.gray2}>
                  (32,101 Ratings)
                </TextC>
              </View>
              <SvgXml xml={ShopIcon} />
            </View>
          </View>
        </View>
      </View>
      <View style={{paddingHorizontal: 18}}>
        <TextC variant="h4" font="medium">
          Reviews
        </TextC>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              gap: 3,
              alignItems: 'center',
              height: vs(150),
              width: '35%',
              justifyContent: 'center',
            }}>
            <TextC variant="h4" font="medium">
              4.0
            </TextC>
            <View style={{flexDirection: 'row'}}>
              <StarIcon active={true} size={18} />
              <StarIcon active={true} size={18} />
              <StarIcon active={true} size={18} />
              <StarIcon active={true} size={18} />
              <StarIcon active={false} size={18} />
            </View>
            <TextC font="medium" variant="h6" color="red">
              171 Rating
            </TextC>
          </View>
          <View
            style={{gap: 3, alignItems: 'center', justifyContent: 'center'}}>
            <ProductProgress />
            <ProductProgress />
            <ProductProgress />
            <ProductProgress />
            <ProductProgress />
          </View>
        </View>
      </View>
      <AvatarRview />
      <AvatarRview />
      <ProductCardList />
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: width,
    height: height / 2,
    borderRadius: 5,
  },
  tryonbtn: {
    position: 'absolute',
    top: 10,
    left: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,

    backgroundColor: '#fff',
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    zIndex: 3,
  },

  options: {
    position: 'absolute',
    top: 10,
    right: 10,

    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,

    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    zIndex: 3,
  },
  NegoBTN: {
    position: 'absolute',
    top: height / 2 - 50,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    backgroundColor: color.primary,
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 20,
    zIndex: 3,
  },
  bottomOptions: {
    flexDirection: 'row',
    alignItems: 'center',

    position: 'fixed',
    bottom: -1,
    left: 0,
    right: 0,
    zIndex: 5,

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: -5},
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 5,
  },
  buybtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.primary,
    paddingVertical: 15,
  },
  addbtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.background,
    paddingVertical: 15,
  },
  sizeTitle: {
    fontFamily: 'PoppinsSemiBold',
    color: '#000',
    fontSize: 18,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  sizes: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  size: {
    backgroundColor: color.background,
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderColor: '#000',
    borderWidth: 1,
    minWidth: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeText: {
    fontFamily: 'PoppinsSemiBold',
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
  description: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  descriptionTitle: {
    fontFamily: 'PoppinsSemiBold',
    color: '#000',
    fontSize: 18,
    marginBottom: 10,
  },
  descriptionText: {
    fontFamily: 'Poppins',
    color: color.misc,
    fontSize: 14,
  },
  ProductDetailsItem: {
    paddingHorizontal: wp(5),
  },
  productdetils: {
    flexDirection: 'row',
  },
});
