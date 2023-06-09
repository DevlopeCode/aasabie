import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../../contexts/UserContext';

const {width, height} = Dimensions.get('window');
const btnHeight = height * 0.1;
const txtContainerHeight = height * 0.35;
const ImageContainerHeight = height * 0.55;
const totalHeight = btnHeight + txtContainerHeight + ImageContainerHeight;
const BottomBtn = ({text, onPress}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress ? onPress : null}>
        <View style={styles.btn}>
          <Text style={styles.btnTxt}>{text}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const TxtContainer = ({text}) => {
  return (
    <View style={{padding: 25}}>
      <View style={styles.topTextContainer}>
        <Text style={styles.txt1}>
          Find the perfect
          <Text style={styles.Aasabie}> Fit </Text>
          for
        </Text>
        <Text style={styles.txt1}>
          you with
          <Text style={styles.Aasabie}> Aasabie</Text>
        </Text>
      </View>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.txt2}>
          Now Shop at your nearest store Online...!!!
        </Text>
      </View>
    </View>
  );
};
const SplashScreen4 = () => {
  const navigation = useNavigation();

  const {setIsUserLoggedIn} = useContext(UserContext);
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
        <TouchableOpacity>
          <Text onPress={() => setIsUserLoggedIn(true)} style={styles.txt3}>
            I'll do it later
          </Text>
        </TouchableOpacity>
        <BottomBtn
          text={'Create a New Account'}
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  constainer: {
    marginTop: 20,
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

  imgContainer: {
    height: ImageContainerHeight,
    alignItems: 'center',
    marginTop: 100,
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
  txt3: {
    fontSize: 16,
    fontFamily: 'Poppins',
    textAlign: 'center',
    position: 'relative',

    textAlignVertical: 'bottom',
  },
  topTextContainer: {
    lineHeight: 42,
    // marginBottom:18,
  },
  bottomTextContainer: {
    lineHeight: 24,
  },
});
export default SplashScreen4;
