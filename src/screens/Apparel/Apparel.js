// /* eslint-disable react-native/no-inline-styles */
// import {
//   KeyboardAvoidingView,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Image,
//   TouchableWithoutFeedback,
//   ImageBackground,
//   FlatList,
// } from 'react-native';
// import React from 'react';
// import Explore from '../../assets/TabMenuIcons/Explore';
// import {width} from '../../config/dimension';
// import {color} from '../../config/color';
// import {BackArrowSvg} from '../../assets/SVG';
// import {SvgXml} from 'react-native-svg';
// import LinearGradient from 'react-native-linear-gradient';

// const Apparel = () => {
//   const TestData = [
//     {
//       heading: '35% Discount',
//       subHeading: 'Pick and order your style',
//       // img: require('../../assets/images/Apparel/PNG FILES/offer1.png'),
//     },
//     {
//       heading: '35% Discount',
//       subHeading: 'Pick and order your style',
//       // img: require('../../assets/images/Apparel/PNG FILES/offer2.png'),
//     },
//     {
//       heading: '35% Discount',
//       subHeading: 'Pick and order your style',
//       // img: require('../../assets/images/Apparel/PNG FILES/offer1.png'),
//     },
//   ];

//   return (
//     <SafeAreaView>

//       <View style={styles.searchBar}>
//         <SvgXml xml={BackArrowSvg} />

//         <View style={styles.searchInput}>
//           {/* <Explore color="#000" size={1.5} /> */}
//           <KeyboardAvoidingView>
//             <TextInput
//               style={{fontFamily: 'Poppins', fontSize: 12}}
//               placeholder="Search on The Aasabie"
//             />
//           </KeyboardAvoidingView>
//         </View>
//       </View>

      // {/* Heading Section */}
      // <View style={styles.topSection}>
      //   {/* <Image
      //     style={styles.topImg}
      //     // source={require('../../assets/images/Apparel/PNG FILES/appareltop.png')}
      //   /> */}
      //   <View style={styles.topSectionText}>
      //     <Text style={styles.topText1}>Set your wardrobe!</Text>
      //     <Text style={styles.topText2}>
      //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
      //       vulputate libero et velit interdum, ac aliquet odio mattis.
      //     </Text>
      //     <Text style={styles.topText3}>WHAT ARE YOU WAITING FOR?</Text>
      //     <Text style={styles.topText3}>JUST GET STARTED</Text>
      //   </View>
      // </View>

//       {/* CATEGORIES */}

//       <Text style={styles.categoryHeading}>CHOOSE BY PRODUCT CATEGORY</Text>
//       <View style={styles.categoryContainer}>
//         <TouchableWithoutFeedback> 
//           <View style={styles.category}>
//             <View style={{}}>
//               {/* <Image
//                 style={styles.categoryImg}
//                 // source={require('../../assets/images/Apparel/PNG FILES/categoryMen.png')}
//               /> */}
//               <Text style={styles.categoryText}>Men</Text>
//             </View>
//           </View>
//         </TouchableWithoutFeedback>

//         <TouchableWithoutFeedback>
//           <View style={styles.category}>
//             <View style={{}}>
//               {/* <Image
//                 style={styles.categoryImg}
//                 // source={require('../../assets/images/Apparel/PNG FILES/categoryWomen.png')}
//               /> */}
//               <Text style={styles.categoryText}>Women</Text>
//             </View>
//           </View>
//         </TouchableWithoutFeedback>

//         <TouchableWithoutFeedback>
//           <View style={styles.category}>
//             <View style={{}}>
//               {/* <Image
//                 style={styles.categoryImg}
//                 // source={require('../../assets/images/Apparel/PNG FILES/categoryKid.png')}
//               /> */}
//               <Text style={styles.categoryText}>Kid</Text>
//             </View>
//           </View>
//         </TouchableWithoutFeedback>
//       </View>

//       {/* Banner IMG */}
//       <TouchableWithoutFeedback>
//         {/* <Image
//           style={styles.bannerImg}
//           // source={require('../../assets/images/Apparel/PNG FILES/image 61.png')}
//         /> */}
//       </TouchableWithoutFeedback>

//       {/* SPECIAL OFFERS */}
//       <Text
//         style={{
//           fontFamily: 'Yesteryear',
//           fontSize: 30,
//           paddingHorizontal: 20,
//           textAlign: 'center',
//           color: color.primary,
//           marginVertical: 10,
//         }}>
//         Explore the varieties, be pleasant
//       </Text>
//       <Text
//         style={{
//           fontFamily: 'Poppins-Bold',
//           fontSize: 14,
//           paddingHorizontal: 20,
//           textAlign: 'center',
//           color: color.primary,
//           marginVertical: 10,
//         }}>
//         SPECIAL OFFERS
//       </Text>
//       <FlatList
//         data={TestData}
//         renderItem={({item, index}) => {
//           return (
//             <TouchableWithoutFeedback>
//               <ImageBackground source={item.img} style={styles.offerImg}>
//                 <LinearGradient
//                   colors={['rgba(0,0,0,0.5)', 'transparent']}
//                   style={{
//                     position: 'absolute',
//                     left: 0,
//                     right: 0,
//                     top: 0,
//                     height: 120,
//                     width: 120,
//                     zIndex: 1,
//                   }}
//                   // change the direection from left to right
//                   start={{x: 0, y: 0}}
//                   end={{x: 1, y: 0}}
//                 />
//                 <Text style={styles.offerHeading}>{item.heading}</Text>
//                 <Text style={styles.offerSubHeading}>{item.subHeading}</Text>

//                 <TouchableWithoutFeedback>
//                   <Text style={styles.offerBtn}>SHOP NOW</Text>
//                 </TouchableWithoutFeedback>
//               </ImageBackground>
//             </TouchableWithoutFeedback>
//           );
//         }}
//         keyExtractor={item => item.id}
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//         style={{marginBottom: 20}}
//       />

//       {/* NEW ARRIVALS */}
//       <View style={styles.bottomOptions}>
//         <TouchableWithoutFeedback>
//           <Text style={styles.bottomOptionText}>BEST SELLER</Text>
//         </TouchableWithoutFeedback>

//         <TouchableWithoutFeedback>
//           <Text style={styles.bottomOptionText}>NEW ARRIVALS</Text>
//         </TouchableWithoutFeedback>

//         <TouchableWithoutFeedback>
//           <Text style={styles.bottomOptionText}>BUDGET FRIENDLY</Text>
//         </TouchableWithoutFeedback>

//         <TouchableWithoutFeedback>
//           <Text style={styles.bottomOptionText}>ONGOING SALE</Text>
//         </TouchableWithoutFeedback>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Apparel;

// const styles = StyleSheet.create({
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     gap: 10,
//     marginTop: 70,
//   },
//   searchInput: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flexGrow: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderRadius: 25,
//     marginTop: 10,
//     marginBottom: 10,
//     gap: 15,
//     borderColor: color.primary,
//     borderWidth: 1.5,
//   },
//   topSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     marginTop: 20,
//     gap: 20,
//     width: width,
//   },
//   topImg: {
//     width: 115,
//     height: 140,
//   },
//   topSectionText: {
//     flexGrow: 1,
//     width: width * 0.4,
//   },
//   topText1: {
//     fontFamily: 'KaushanScript',
//     fontSize: 22,
//     color: color.primary,
//     textAlign: 'right',
//   },
//   topText2: {
//     fontFamily: 'Poppins',
//     fontSize: 10,
//     color: '#000',
//     textAlign: 'right',
//     marginVertical: 10,
//   },
//   topText3: {
//     fontFamily: 'Rancho',
//     fontSize: 12,
//     color: '#000',
//     textAlign: 'right',
//   },

//   categoryHeading: {
//     fontFamily: 'Poppins-Bold',
//     fontSize: 14,
//     color: color.primary,
//     paddingHorizontal: 20,
//     marginVertical: 20,
//     textAlign: 'center',
//   },
//   categoryContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     marginBottom: 20,
//     gap: 20,
//   },
//   category: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//   },
//   categoryImg: {
//     width: 100,
//     height: 100,
//     borderColor: color.primary,
//     borderWidth: 1.5,
//     borderRadius: 10,
//   },
//   categoryText: {
//     fontFamily: 'Poppins',
//     fontSize: 12,
//     color: '#000',
//     textAlign: 'center',
//     marginTop: 10,
//   },
//   bannerImg: {
//     width: width,
//     height: 130,
//   },

//   offerImg: {
//     width: width * 0.55,
//     height: 120,
//     marginHorizontal: 20,
//     borderRadius: 10,
//     overflow: 'hidden',
//     justifyContent: 'flex-end',
//     alignItems: 'left',
//     padding: 20,
//   },
//   offerHeading: {
//     fontFamily: 'Poppins-Bold',
//     fontSize: 14,
//     color: color.background,
//     // marginBottom: 5,
//     fontSize: 12,
//     zIndex: 2,
//   },
//   offerSubHeading: {
//     fontFamily: 'Poppins',
//     fontSize: 10,
//     color: color.background,
//     marginBottom: 5,
//     fontSize: 6,
//     zIndex: 2,
//   },

//   offerBtn: {
//     width: 70,
//     borderRadius: 10,
//     backgroundColor: color.primary,
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     fontSize: 8,
//     fontFamily: 'Poppins',
//     color: color.background,
//     zIndex: 2,
//     textAlign: 'center',
//   },
//   bottomOptions: {
//     paddingHorizontal: 20,
//   },
//   bottomOptionText: {
//     fontFamily: 'Poppins-Bold',
//     fontSize: 16,
//     color: color.background,
//     padding: 20,
//     marginVertical: 20,
//     textAlign: 'center',
//     backgroundColor: color.primary,
//     flexGrow: 1,
//   },
// });
