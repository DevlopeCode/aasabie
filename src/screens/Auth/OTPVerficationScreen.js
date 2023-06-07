
import { View, Image, TouchableOpacity,Picker, Text, Dimensions, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BackArrowCircle from '../../components/buttons/BackButtons'
import Constants from 'expo-constants';
import SquareButton from '../../components/buttons/Btn1';
import SignInWithGoogleButton from '../../components/buttons/SignInWithGoogleBtn';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import TopImg from "../../assets/PICKMART ASSETS/splasha nd signup/Png/1(8).png"
import TopImg2 from "../../assets/images/signinTop.jpg"
import TabButton from '../../components/buttons/TabGroup';
const { width, height } = Dimensions.get('window')
// import ButtonGroup from '../../components/buttons/ButtonGroup';




const CircleBtn = ({ text}) => {

 
  return (
    <View style={styles.CircleBtn}>
          <Text style={styles.CircleBtnTxt}>{text?text:""}</Text>
        </View>
  );
};




const SignInScreen = () => {

  const navigation = useNavigation();
  const buttons = ['Email', 'Mobile Number'];
  const [selectedButton, setSelectedButton] = useState(buttons[0]);

  const handleButtonPress = (button) => {
    setSelectedButton(button);
    // handle logic for when button is pressed
  };
  // Fonts 
  const [fontsLoaded] = useFonts({
    'PoppinsBold': require('../../assets/fonts/PoppinsBold.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Regular-Light': require('../../assets/fonts/Poppins-Regular-Light.ttf'),
    'Poppins-Regular-Medium': require('../../assets/fonts/Poppins-Regular-Medium.ttf'),


  });
  const handleLogin = () => { }


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text) => setEmail(text);
  const handlePasswordChange = (text) => setPassword(text);

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
          <Text style={styles.TopText}>Verification Code</Text>
          <Text style={styles.TopTextBelow}>We have sent you the verification code to your mobile number</Text>
        </View>
      
       
        {/* Forgot PassWord  */}
        {/* <Text style={styles.txt1} onPress={() => { navigation.navigate("ChangePassword") }}>Forgot Password?</Text> */}


        {/* SignIn and SignInWithGoogle button */}
      
          
          <View style={{justifyContent:'center',gap:10,flexDirection:'row'}}>

          <CircleBtn text='3'/>
          <CircleBtn text='1'/>
          <CircleBtn text='8'/>
          <CircleBtn text='2'/>
          </View>
          <View style={styles.BtnGroup}>

          <SquareButton text={"SUBMIT"} Txtclr={"white"} bgclr={"black"} onPress={handleLogin} />
        
          </View>


        {/*View for :- Don't have an account?Sign Up for free  */}
       

      </View>

        {/*View for :- Don't have an account?Sign Up for free  */}
        <View style={styles.BottomTxtContainer}>
          <Text style={styles.BottomTxt1}>Don't have an account?</Text>
          <Text style={styles.BottomTxt2} onPress={() => { navigation.navigate("SignUp") }}>Sign Up for free</Text>
        </View>


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { marginTop: Constants.statusBarHeight },

CircleBtn:{
    //   position: 'absolute',
      width: 70,
      height: 70,
    //   left: 287,
    //   top: 422,
      backgroundColor: '#FFFFFF',
      shadowColor: '#000000',
      shadowOffset: {
        width:0,
        height: -8
      },
      shadowOpacity: 0.25,
      shadowRadius: 40,
      elevation: 5,
      borderRadius:35,
      justifyContent:"center",
      alignItems:"center"
    },
CircleBtnTxt:{
    fontFamily: "PoppinsBold",
    fontSize: 24,
}
,

  buttonGroup: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#E6E6E6"
  },
  Emailbutton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 5,
    flex: 1,
    justifyContent: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 16,

  },
  MobileBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 5,
    flex: 1, fontFamily: "Poppins-Regular",
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
    marginLeft: 15, marginTop: 35,
    // borderColor:"green",borderWidth:5,
    position: "absolute",
    zIndex: 100,

  },

  TopText: {
    textAlign:"center",
    fontFamily: 'PoppinsBold',
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
    width: width, height: 0.15 * height

  },
  TopTextBelow: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
    color: '#545454',
    marginLeft: 5,    marginBottom:20,
    textAlign:"center",
  },
  restContainer: {

    // borderColor:"green",borderWidth:5,
    padding: 20,marginTop:150
  },
  InputContainer: {
    marginTop: 20
  },

  InputContainerText: {
    fontFamily: 'PoppinsBold',
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 10,
    marginLeft: 5
  },

  TextInput: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    marginBottom: 20,
    backgroundColor: "white",
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlignVertical: "center",
    fontFamily: 'Poppins-Regular',
    color: '#999',
    fontSize: 16,
  },

  txt1: {
    textAlign: "right",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    marginRight: 15
  },

  BtnGroup: {
    justifyContent: "center",
    marginTop: 30
  },
  dividerContainer:{
    marginVertical:20,
    flexDirection:"row",gap:10,
    justifyContent:"center"
  },
  divider:{

    color:"#888888",
  },
  dividerTxt:{
    fontFamily: "Poppins-Regular",
    color:"#888888",
    fontSize: 16,
  },
  BottomTxtContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position:"relative"
    ,bottom:0
  },

  BottomTxt1: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    marginRight: 5
  },

  BottomTxt2: {
    fontFamily: "PoppinsBold",
    fontSize: 16,
    marginRight: 15
  }
})

export default SignInScreen;


