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
  HeartOulineSvg,
  NegociationSVG,
  ShareSvg,
  VRSVG,
} from '../../assets/SVG';
import R from '../../res/R';
import TextC from '../../components/Text';

const ProductDetail = () => {
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
  const handelLike = () => {
    setLike(!like);
  };
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
        renderItem={({item, index}) => {
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
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>{testData.description}</Text>
      </View>

      <View style={styles.ProductDetails}>
        <Text style={styles.ProductDetailsTitle}>Product Details</Text>

        <View style={styles.ProductDetailsItem}>
          <Text style={styles.ProductDetailsItemTitle}>Category</Text>
          <Text style={styles.ProductDetailsItemText}>Test</Text>
        </View>
      </View>
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
});
