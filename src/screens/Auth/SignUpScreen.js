import {
  View,
  Image,
  Keyboard,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useContext, useState} from 'react';
import BackArrowCircle from '../../components/buttons/BackButtons';
import SquareButton from '../../components/buttons/Btn1';
import SignInWithGoogleButton from '../../components/buttons/SignInWithGoogleBtn';
import {useNavigation} from '@react-navigation/native';
import TopImg2 from '../../assets/images/signinTop.jpg';
const {width, height} = Dimensions.get('window');

// import ButtonGroup from '../../components/buttons/ButtonGroup';
import {register} from '../../utils/apis/api';
import {NAME_ERROR, EMAIL_ERROR, VALID_EMAIL_ERROR} from '../../utils/contants';
import {UserContext} from '../../contexts/UserContext';
import Input from '../../components/Input';
const SignUpScreen = () => {
  const navigation = useNavigation();

  // Fonts

  // states
  const [inputs, setInputs] = React.useState({
    email: '',
    fullname: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = React.useState({});
  const [userInfo, setUserInfo] = useState(null);
  const {setIsUserLoggedIn} = useContext(UserContext);

  // Handlers
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

    if (!inputs.fullname) {
      handleError(NAME_ERROR, 'fullname');
      isValid = false;
    }

    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 8) {
      handleError('Min password length of 8', 'password');
      isValid = false;
    }

    if (!inputs.confirmPassword) {
      handleError('Please confirm password', 'confirmPassword');
      isValid = false;
    } else if (inputs.confirmPassword != inputs.password) {
      handleError('Password dont match', 'confirmPassword');
      isValid = false;
    }

    if (isValid) {
      handleSignUp();
    }
  };

  const handleSignUp = async () => {
    //setIsUserLoggedIn(true)
    const str = inputs.fullName.split(' ');
    console.log(str[0], str[1], email, '9045016115', password);
    try {
      const response = await register(str[0], str[1], email, '', password);
      // Handle successful login response
      console.log(response);
      setUserInfo(response);
      //setLoading(false);
      setIsUserLoggedIn(true);
    } catch (error) {
      // Handle error
      //setLoading(false);

      console.log(error);
      setError(error);
    }
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
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
        <View>
          <Text style={styles.TopText}>Create Account</Text>
          <Text style={styles.TopTextBelow}>
            Lets Create your PickMart account together
          </Text>
        </View>

        {/*Input Container for FullName */}
        <Input
          onChangeText={text => handleOnchange(text, 'fullname')}
          onFocus={() => handleError(null, 'fullname')}
          label="Full Name"
          placeholder="Enter Your Name"
          placeholderTextColor="#A8A6A6"
          autoCapitalize="none"
          autoCorrect={false}
          error={errors.fullname}
        />
        {/*Input Container for Email */}
        <Input
          onChangeText={text => handleOnchange(text, 'email')}
          onFocus={() => handleError(null, 'email')}
          label="Email"
          placeholder="Enter Your email id / Mobile No."
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#A8A6A6"
          autoCorrect={false}
          error={errors.email}
        />

        {/*Input Container for PassWord */}
        <Input
          label="Password"
          placeholder="●●●●●●●●●●"
          placeholderTextColor="#D9D9D9"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          error={errors.password}
          true
        />
        {/*Input Container for Confirm passWord */}
        <Input
          label="Confirm Password"
          placeholder="●●●●●●●●●●"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="#D9D9D9"
          autoCorrect={false}
          error={errors.confirmPassword}
          true
        />

        {/* SignUp and SignInWithGoogle button */}
        <View style={styles.BtnGroup}>
          {/* SignUp Button */}
          <SquareButton
            text={'Sign Up'}
            Txtclr={'white'}
            bgclr={'black'}
            onPress={validate}
          />
          {/* SignInWithGoogleButton */}
          <SignInWithGoogleButton
            text={'Sign in'}
            Txtclr={'white'}
            bgclr={'black'}
          />
        </View>

        {/*View for :- Already have an account?Click here to sign-in  */}
        <View style={styles.BottomTxtContainer}>
          <Text style={styles.BottomTxt1}>Already have an account?</Text>
          <Text
            style={styles.BottomTxt2}
            onPress={() => {
              navigation.navigate('SignIn');
            }}>
            {' '}
            Click here to sign-in
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
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
    color: '#545454',
    marginLeft: 5,
    marginBottom: 20,
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
    fontFamily: 'Poppins',
    color: '#888888',
    fontSize: 16,
  },
  BottomTxtContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  BottomTxt1: {
    fontFamily: 'Poppins',
    fontSize: 14,
  },

  BottomTxt2: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
  },
});

export default SignUpScreen;
