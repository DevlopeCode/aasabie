import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
// import { SliderBox } from "react-native-image-slider-box";
const ImageaCarousel = ({data}) => {
    // const [currentImage, setCurrentImage] = useState(0);

    // useEffect(() => {
    //   // Set the initial value of the current image to the first image in the array.
    //   setCurrentImage(0);
    // }, [images]);
  
  return (
    <SafeAreaView style={styles.container}>
      {/* <SliderBox
        images={data}
        sliderBoxHeight={200}
        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop
    /> */}
    <Text>Image Carousel</Text>
    </SafeAreaView>
  )
}

export default ImageaCarousel

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        width: "100%",
        height: "100%",
      },
      button: {
        width: 50,
        height: 50,
      },
})