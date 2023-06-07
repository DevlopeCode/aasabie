import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
// import Carousel from 'react-native-snap-carousel';

import ShopTopBar from "../../components/ShopTopBar/ShopTopBar";
import { height, width } from "../../config/dimension";
import LikeBtn from "./LikeBtn";
import ShareBtn from "./ShareBtn";
import TryOnBtn from "./TryOnBtn";
import NegotiationIcon from "./NegotiationIcon";
import { color } from "../../config/color";
import ImageaCarousel from "./ImageaCarousel";
import Varients from "./Varients";
import ProductInfo from "./ProductInfo";
import PriceSection from "./PriceSection";
import { ScrollView } from "react-native";

const ProductDetail = () => {
  const testData = {
    title: "Product Title",
    price: 100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vi, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vi",
    variants: [
      {
        name: "Color",
        options: [
          {
            name: "Red",
            varientImage: "https://picsum.photos/200/300",
            images: [
              "https://picsum.photos/200/300",
              "https://picsum.photos/200/300",
              "https://picsum.photos/200/300",
            ],
          },
          {
            name: "Blue",
            varientImage: "https://picsum.photos/210/300",
            images: [
              "https://picsum.photos/210/300",
              "https://picsum.photos/200/300",
              "https://picsum.photos/200/300",
            ],
          },
          {
            name: "Green",
            varientImage: "https://picsum.photos/205/300",
            images: [
              "https://picsum.photos/205/300",
              "https://picsum.photos/200/300",
              "https://picsum.photos/200/300",
            ],
          },
          {
            name: "Yellow",
            varientImage: "https://picsum.photos/201/300",
            images: [
              "https://picsum.photos/201/300",
              "https://picsum.photos/200/300",
              "https://picsum.photos/200/300",
            ],
          },
          {
            name: "Black",
            varientImage: "https://picsum.photos/202/300",
            images: [
              "https://picsum.photos/202/300",
              "https://picsum.photos/200/300",
              "https://picsum.photos/200/300",
            ],
          },
          {
            name: "White",
            varientImage: "https://picsum.photos/203/300",
            images: [
              "https://picsum.photos/203/300",
              "https://picsum.photos/200/300",
              "https://picsum.photos/200/300",
            ],
          },
        ],
      },
      {
        name: "Size",
        options: ['S', 'M', 'L', 'XL', 'XXL']
      },
    ],
    seens: 400,
    likes: 100,
    rating: 4.5,
    reviews: 100,
    discount: 45,
    category: "Category",
    subCategory: "Sub Category",
    tags: ["tag1", "tag2", "tag3"],
    seller: "Seller",
    sellerRating: 4,
    sellerReviews: 100,
    sellerProducts: 100,
    sellerSince: "2021-01-01",
    sellerLocation: "Location",
    sellerDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vi",
  };

  const [like, setLike] = React.useState(false);
  const [currentVarient, setCurrentVarient] = React.useState(0);

  const handelLike = () => {
    setLike(!like);
  };

  return (
    <View>
      <ShopTopBar />
      {/* <ImageaCarousel data={testData.images}/> */}


      <ScrollView>
        
        <ImageBackground
          source={{
            uri: testData.variants[0].options[currentVarient].images[0],
          }}
          style={styles.image}
        >
          <View style={styles.container}>
            <TouchableWithoutFeedback>
              <View style={styles.tryonbtn}>
                <TryOnBtn size={30} />
                <Text
                  style={{
                    fontFamily: "PoppinsSemiBold",
                    color: "#9931C0",
                    fontSize: 10,
                  }}
                >
                  Try on
                </Text>
              </View>
            </TouchableWithoutFeedback>

            <View style={styles.options}>
              <TouchableWithoutFeedback onPress={handelLike}>
                <View>
                  <LikeBtn active={like} size={30} />
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback>
                <View>
                  <ShareBtn size={30} />
                </View>
              </TouchableWithoutFeedback>
            </View>

            <View>
              <TouchableWithoutFeedback>
                <View style={styles.NegoBTN}>
                  <NegotiationIcon size={30} />
                  <Text
                    style={{
                      fontFamily: "PoppinsSemiBold",
                      color: "white",
                      fontSize: 10,
                    }}
                  >
                    Negotiation Availble
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </ImageBackground>

        <Varients
          data={testData.variants[0].options}
          currentSelected={currentVarient}
          changeVarient={(data) => setCurrentVarient(data)}
        />

        <ProductInfo
          title={testData.title}
          ratingCount={testData.reviews}
          rating={testData.rating}
          seen={testData.seens}
          likes={testData.likes}
        />

        <PriceSection price={testData.price} discount={testData.discount} />

        <Text style={styles.sizeTitle}>Size</Text>
        <View style={styles.sizes}>
          {testData.variants[1].options.map((item, index) => (
            <TouchableWithoutFeedback key={index}>
              <View style={styles.size}>
                <Text style={styles.sizeText}>{item}</Text>
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
     
     
      <SafeAreaView>
        <View style={styles.bottomOptions}>
          <TouchableWithoutFeedback>
            <View style={styles.addbtn}>
              <Text
                style={{
                  fontFamily: "PoppinsSemiBold",
                  color: color.primary,
                  fontSize: 18,
                }}
              >
                Add to Cart
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View style={styles.buybtn}>
              <Text
                style={{
                  fontFamily: "PoppinsSemiBold",
                  color: "white",
                  fontSize: 18,
                }}
              >
                Buy Now
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
      </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  image: {
    width: width,
    height: height / 2,
    borderRadius: 5,
  },
  tryonbtn: {
    position: "absolute",
    top: 10,
    left: 10,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,

    backgroundColor: "#fff",
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    zIndex: 3,
  },

  options: {
    position: "absolute",
    top: 10,
    right: 10,

    alignItems: "center",
    justifyContent: "center",
    gap: 10,

    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    zIndex: 3,
  },
  NegoBTN: {
    position: "absolute",
    top: height / 2 - 50,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    backgroundColor: color.primary,
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 20,
    zIndex: 3,
  },
  bottomOptions: {
    flexDirection: "row",
    alignItems: "center",

    position: "fixed",
    bottom: -1,
    left: 0,
    right: 0,
    zIndex: 5,

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 5,
  },
  buybtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.primary,
    paddingVertical: 15,
  },
  addbtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.background,
    paddingVertical: 15,
  },
  sizeTitle: {
    fontFamily: "PoppinsSemiBold",
    color: "#000",
    fontSize: 18,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  sizes: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 10,
    flexWrap: 'wrap'
  },
  size: {
    backgroundColor: color.background,
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderColor: '#000',
    borderWidth: 1,
    minWidth: 50,
  },
  sizeText: {
    fontFamily: "PoppinsSemiBold",
    color: '#000',
    fontSize: 16,
    textAlign: 'center'
  },
  description: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  descriptionTitle: {
    fontFamily: "PoppinsSemiBold",
    color: "#000",
    fontSize: 18,
    marginBottom: 10,
  },
  descriptionText: {
    fontFamily: "Poppins",
    color: color.misc,
    fontSize: 14,
  },

});
