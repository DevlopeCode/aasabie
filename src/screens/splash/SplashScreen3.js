import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');
const btnHeight = height * 0.1;
const txtContainerHeight = height * 0.4;
const ImageContainerHeight = height * 0.5;
const totalHeight = btnHeight + txtContainerHeight + ImageContainerHeight;
const BottomBtn = ({text, onPress}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.btn}>
          <Text style={styles.btnTxt}>{text}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const TxtContainer = ({text}) => {
  return (
    <View style={{padding: 10}}>
      <View style={styles.topTextContainer}>
        <Text style={styles.txt1}>Find the perfect</Text>
        <Text style={styles.txt1}>Fit for you with</Text>
        <Text style={styles.Aasabie}>Aasabie</Text>
      </View>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.txt2}>A style for the individual personality</Text>
        <Text style={styles.txt2}>well desgined,well presented</Text>
      </View>
    </View>
  );
};
const SplashScreen3 = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        {/* image */}
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/front-2.png')}
            resizeMode="cover"
          />
        </View>

        {/* Text and btn */}
        <View style={styles.TxtContainer}>
          <TxtContainer />
          {/* <SquareButton text={" Let's Get Started"}/> */}
        </View>
      </View>
      <View style={styles.btnContainer}>
        <BottomBtn
          onPress={() => navigation.navigate('Splash4')}
          text={"Let's Start"}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EC4850',
    fontSize: 24,
    fontFamily: 'Poppins',
    // flex:2,
    // position:"absolute",
    // bottom:0,
    height: btnHeight,
    width: width,
    padding: 20,
  },

  TxtContainer: {
    // borderColor:"yellow",
    //   borderWidth:10,
    height: txtContainerHeight,
  },
  btnTxt: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
  },
  btnContainer: {
    // borderColor:"orange",
    // borderWidth:10,
    position: 'absolute',
    bottom: 0,
  },

  RestContainer: {
    height: height * 0.5,
    // borderColor:"green",
    // borderWidth:10,
  },
  imgContainer: {
    height: ImageContainerHeight,
    alignItems: 'center',
    marginTop: 50,
  },
  Aasabie: {
    color: '#EC4850',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
  },
  txt1: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
  },
  txt2: {
    fontSize: 16,
    fontFamily: 'Poppins',
  },
  topTextContainer: {
    lineHeight: 42,
    marginBottom: 18,
  },
  bottomTextContainer: {
    lineHeight: 24,
  },
});
export default SplashScreen3;
