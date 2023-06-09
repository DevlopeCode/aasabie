/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Image,
  TouchableOpacity,
  Picker,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import BackArrowCircle from '../../components/buttons/BackButtons';
import Constants from 'expo-constants';
import SquareButton from '../../components/buttons/Btn1';
import SignInWithGoogleButton from '../../components/buttons/SignInWithGoogleBtn';
import {useFonts} from 'expo-font';
import {useNavigation} from '@react-navigation/native';
import TopImg from '../../assets/PICKMART ASSETS/splasha nd signup/Png/1(8).png';
import TopImg2 from '../../assets/images/signinTop.jpg';
import TabButton from '../../components/buttons/TabGroup';
const {width, height} = Dimensions.get('window');
// import ButtonGroup from '../../components/buttons/ButtonGroup';

const ButtonGroup = ({buttons, activeBtn, selectedButton, onPress}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.buttonGroup}>
      <TouchableOpacity
        style={{
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: '#E6E6E6',
          borderRadius: 8,
          marginHorizontal: 5,
          flex: 1,
          justifyContent: 'center',
          fontFamily: 'Poppins-Regular',
          fontSize: 16,
        }}
        // onPress={() => onPress(onPress)}
        onPress={() => navigation.navigate('SignIn')}>
        <View>
          <Text style={{textAlign: 'center'}}>{buttons[0]}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: 'white',
          borderRadius: 8,
          marginHorizontal: 5,
          flex: 1,
          justifyContent: 'center',
          fontFamily: 'Poppins-Regular',
          fontSize: 16,
        }}>
        <View>
          <Text style={{textAlign: 'center'}}>{buttons[1]}</Text>
        </View>
      </TouchableOpacity>

      {/* {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onPress(button)}
          style={[
            styles.button,
            selectedButton === button && styles.selectedButton,
          ]}
        >
          <Text style={styles.buttonText}>{button}</Text>
        </TouchableOpacity>
      ))} */}
    </View>
  );
};

// const NumberInput = () => {
//     const [selectedValue, setSelectedValue] = useState('US');
//     const [phoneNumber, setPhoneNumber] = useState('');

//     const onPhoneNumberChange = (value) => {
//       setPhoneNumber(value);
//     };

//     return (
//       <View style={styles.container}>
//         <View style={styles.inputContainer}>
//           <Picker
//             selectedValue={selectedValue}
//             onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//             style={styles.picker}>
//             <Picker.Item label="US +1" value="US" />
//             <Picker.Item label="UK +44" value="UK" />
//             <Picker.Item label="Australia +61" value="AU" />
//           </Picker>
//           <TextInput
//             placeholder="Enter phone number"
//             keyboardType="phone-pad"
//             onChangeText={onPhoneNumberChange}
//             value={phoneNumber}
//             style={styles.textInput}
//           />
//         </View>
//       </View>
//     );
//   };

const SignInScreen = () => {
  const navigation = useNavigation();
  const buttons = ['Email', 'Mobile Number'];
  const [selectedButton, setSelectedButton] = useState(buttons[0]);

  const handleButtonPress = button => {
    setSelectedButton(button);
    // handle logic for when button is pressed
  };
  // Fonts
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Regular-Light': require('../../assets/fonts/Poppins-Regular-Light.ttf'),
    'Poppins-Regular-Medium': require('../../assets/fonts/Poppins-Regular-Medium.ttf'),
  });
  const handleLogin = () => {};

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = text => setEmail(text);
  const handlePasswordChange = text => setPassword(text);

  return (
    <ScrollView style={styles.container}>
      {/* BackArrow Icon */}
      <View style={styles.backArrow}>
        <BackArrowCircle size={48} color="#000" />
      </View>
      <View style={styles.TopImgContainer}>
        <Image source={TopImg2} style={styles.TopImg} />
      </View>
      {/* Rest of the view */}
      <View style={styles.restContainer}>
        {/* Top Text Container */}
        <View styles={styles.TopTextContainer}>
          <Text style={styles.TopText}>Welcome Back</Text>
          <Text style={styles.TopTextBelow}>Hello, Login your account</Text>
        </View>
        <ButtonGroup
          buttons={buttons}
          selectedButton={selectedButton}
          onPress={handleButtonPress}
        />
        {/*  Input Container for Email */}
        {/* <NumberInput/> */}

        {/*  Input Container for Password*/}
        <View style={styles.InputContainer}>
          <Text style={styles.InputContainerText}>Mobile Number</Text>
          <TextInput
            placeholder="00000 0000"
            placeholderTextColor="#D9D9D9"
            onChangeText={handlePasswordChange}
            value={password}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.TextInput}
          />
        </View>

        {/* Forgot PassWord  */}
        {/* <Text style={styles.txt1} onPress={() => { navigation.navigate("ChangePassword") }}>Forgot Password?</Text> */}

        {/* SignIn and SignInWithGoogle button */}
        <View style={styles.BtnGroup}>
          {/* SignIn Button */}
          <SquareButton
            text={'REQUEST OTP'}
            Txtclr={'white'}
            bgclr={'black'}
            onPress={handleLogin}
          />

          <View style={styles.dividerContainer}>
            <View>
              <Text style={styles.divider}>─────────</Text>
            </View>
            <View>
              <Text style={styles.dividerTxt}>Or Sign in with Google</Text>
            </View>
            <View>
              <Text style={styles.divider}>─────────</Text>
            </View>
          </View>

          {/* SignInWithGoogleButton */}
          <SignInWithGoogleButton
            text={'Sign in'}
            Txtclr={'white'}
            bgclr={'black'}
          />
        </View>

        {/*View for :- Don't have an account?Sign Up for free  */}
        <View style={styles.BottomTxtContainer}>
          <Text style={styles.BottomTxt1}>Don't have an account?</Text>
          <Text
            style={styles.BottomTxt2}
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            Sign Up for free
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {marginTop: Constants.statusBarHeight},

  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#E6E6E6',
  },
  Emailbutton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 5,
    flex: 1,
    justifyContent: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  MobileBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 5,
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  selectedButton: {
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D2D2D',
  },

  backArrow: {
    marginLeft: 15,
    marginTop: 35,
    // borderColor:"green",borderWidth:5,
    position: 'absolute',
    zIndex: 100,
  },

  TopText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    // lineHeight: 54,
    // letterSpacing: -0.3,
    marginTop: 10,
    color: '#EC4850',
  },

  TopImgContainer: {
    // borderColor:"red",borderWidth:2
  },
  TopImg: {
    width: width,
    height: 0.15 * height,
  },
  TopTextBelow: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
    color: '#545454',
    marginLeft: 5,
  },
  restContainer: {
    // borderColor:"green",borderWidth:5,
    padding: 20,
    marginTop: 40,
  },
  InputContainer: {
    marginTop: 20,
  },

  InputContainerText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 10,
    marginLeft: 5,
  },

  TextInput: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlignVertical: 'center',
    fontFamily: 'Poppins-Regular',
    color: '#999',
    fontSize: 16,
  },

  txt1: {
    textAlign: 'right',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginRight: 15,
  },

  BtnGroup: {
    justifyContent: 'center',
    marginTop: 10,
  },
  dividerContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  divider: {
    color: '#888888',
  },
  dividerTxt: {
    fontFamily: 'Poppins-Regular',
    color: '#888888',
    fontSize: 16,
  },
  BottomTxtContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  BottomTxt1: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginRight: 5,
  },

  BottomTxt2: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    marginRight: 15,
  },
});

export default SignInScreen;
