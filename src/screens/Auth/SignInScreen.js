/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import BackArrowCircle from '../../components/buttons/BackButtons';
import SquareButton from '../../components/buttons/Btn1';
import SignInWithGoogleButton from '../../components/buttons/SignInWithGoogleBtn';
import {useNavigation} from '@react-navigation/native';
import TopImg2 from '../../assets/images/signinTop.jpg';
import {UserContext} from '../../contexts/UserContext';
import Input from '../../components/Input';
import {EMAIL_ERROR, VALID_EMAIL_ERROR} from '../../utils/contants';
import {EMAIL_KEY, login, PASSWORD_KEY} from '../../utils/apis/api';
import {useFetchPostFormData} from '../../requests/requestHook';
import {navigate} from '../../utils/navigationServices';
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
          backgroundColor: 'white',
          borderRadius: 8,
          marginHorizontal: 5,
          flex: 1,
          justifyContent: 'center',
          fontFamily: 'Poppins',
          fontSize: 16,
        }}
        // onPress={() => onPress(onPress)}
      >
        <View>
          <Text style={{textAlign: 'center'}}>{buttons[0]}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: selectedButton == buttons[1] ? 'white' : '#E6E6E6',
          borderRadius: 8,
          marginHorizontal: 5,
          flex: 1,
          justifyContent: 'center',
          fontFamily: 'Poppins',
          fontSize: 16,
        }}
        onPress={() => navigation.navigate('SignInWithNumber')}>
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

const SignInScreen = () => {
  const navigation = useNavigation();
  const buttons = ['Email', 'Mobile Number'];
  const [selectedButton, setSelectedButton] = useState(buttons[0]);
  const {setIsUserLoggedIn} = useContext(UserContext);
  const [userInfo, setUserInfo] = useState(null);
  const [errors, setErrors] = React.useState({});

  const handleButtonPress = button => {
    setSelectedButton(button);
    // handle logic for when button is pressed
  };
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
  });
  const {fetchData, response, error, isLoading} =
    useFetchPostFormData('auth/login');
  console.log(response, error, isLoading);

  useEffect(() => {
    if (response) {
      if (response?.token) {
        setIsUserLoggedIn(true);
      } else {
        Alert.alert(response?.errors[0].message);
      }
    }
  }, [isLoading]);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError(EMAIL_ERROR, 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError(VALID_EMAIL_ERROR, 'email');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 8) {
      handleError('Min password length of 8', 'password');
      isValid = false;
    }

    if (isValid) {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    //setIsUserLoggedIn(true)
    console.log(inputs);
    let formData = new FormData();
    formData.append(EMAIL_KEY, inputs.email);
    formData.append(PASSWORD_KEY, inputs.password);
    fetchData(formData);
    // return fetchAPI('/login', formData);
    // try {
    //   const response = await login(email, password);
    //   // Handle successful login response
    //   console.log(response);
    //   setUserInfo(response);
    //   //setLoading(false);
    //   setIsUserLoggedIn(true);
    // } catch (error) {
    //   // Handle error
    //   //setLoading(false);

    //   console.log(error);
    //   setError(error);
    // }
  };
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  const childComponentRef = useRef(null);

  return (
    <ScrollView style={styles.container}>
      {/* BackArrow Icon */}
      <View style={styles.backArrow}>
        <BackArrowCircle size={48} color="#000" />
      </View>
      <View style={styles.TopImgContainer}>
        <Image source={TopImg2} style={styles.TopImg} resizeMethod="resize" />
      </View>
      {/* Rest of the view */}
      <View style={styles.restContainer}>
        {/* Top Text Container */}
        <View>
          <Text style={styles.TopText}>Welcome Back</Text>
          <Text style={styles.TopTextBelow}>Hello, Login your account</Text>
        </View>
        <ButtonGroup
          buttons={buttons}
          selectedButton={selectedButton}
          onPress={handleButtonPress}
        />
        {/*  Input Container for Email */}
        <Input
          onChangeText={text => handleOnchange(text, 'email')}
          onFocus={() => handleError(null, 'email')}
          label="Email"
          placeholder="Enter Your email id ."
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#A8A6A6"
          autoCorrect={false}
          error={errors.email}
        />

        {/*  Input Container for Password*/}
        <Input
          onChangeText={text => handleOnchange(text, 'password')}
          onFocus={() => handleError(null, 'password')}
          label="Password"
          placeholder="●●●●●●●●●●"
          placeholderTextColor="#D9D9D9"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          error={errors.password}
          true
        />

        {/* Forgot PassWord  */}
        <Text
          style={styles.txt1}
          onPress={() => {
            navigation.navigate('ChangePassword');
          }}>
          Forgot Password?
        </Text>

        {/* SignIn and SignInWithGoogle button */}
        <View style={styles.BtnGroup}>
          {/* SignIn Button */}
          <SquareButton
            text={'Sign in'}
            Txtclr={'white'}
            bgclr={'black'}
            onPress={validate}
          />
          {/* SignInWithGoogleButton */}
          <SignInWithGoogleButton
            text={'Sign in'}
            Txtclr={'white'}
            bgclr={'black'}
            ref={childComponentRef}
            onPresss={e => {
              if (e.user) {
                setIsUserLoggedIn(true);
              } else {
                Alert.alert('Login Failed');
              }
            }}
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
  container: {marginTop: 20},

  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
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
    fontFamily: 'Poppins',
    fontSize: 16,
  },
  MobileBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 5,
    flex: 1,
    fontFamily: 'Poppins',
    fontSize: 16,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
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
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
    color: '#545454',
    marginLeft: 5,
  },
  restContainer: {
    // borderColor:"green",borderWidth:5,
    padding: 20,
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
    fontFamily: 'Poppins',
    color: '#999',
    fontSize: 16,
  },

  txt1: {
    textAlign: 'right',
    fontFamily: 'Poppins',
    fontSize: 16,
    marginRight: 15,
  },

  BtnGroup: {
    justifyContent: 'center',
    marginTop: 10,
  },

  BottomTxtContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  BottomTxt1: {
    fontFamily: 'Poppins',
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
