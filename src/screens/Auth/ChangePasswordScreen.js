import {
  View,
  Image,
  TouchableOpacity,
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
          backgroundColor: 'white',
          borderRadius: 8,
          marginHorizontal: 5,
          flex: 1,
          justifyContent: 'center',
          fontFamily: 'Poppins-Regular',
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
          fontFamily: 'Poppins-Regular',
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

  const handleButtonPress = button => {
    setSelectedButton(button);
    // handle logic for when button is pressed
  };
  // Fonts
  const [fontsLoaded] = useFonts({
    PoppinsBold: require('../../assets/fonts/PoppinsBold.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Regular-Light': require('../../assets/fonts/Poppins-Regular-Light.ttf'),
    'Poppins-Regular-Medium': require('../../assets/fonts/Poppins-Regular-Medium.ttf'),
  });

  // states
  const [Newpassword, setNewPassword] = useState('');
  const [ConfirmNewpassword, setConfirmNewPassword] = useState('');
  const [CurrentPasswordChange, setCurrentPasswordChange] = useState('');

  // Handlers
  const handleNewpasswordChange = text => setNewPassword(text);
  const handleConfirmNewpasswordChange = text => setConfirmNewPassword(text);
  const handleCurrentPassWordChange = text => setCurrentPasswordChange(text);
  const handlePassword = () => {};
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
        <View>
          <Text style={styles.TopText}>Change Password</Text>
        </View>

        {/* Current Password */}
        <View style={styles.InputContainer}>
          <Text style={styles.InputContainerText}>Current Password</Text>
          <TextInput
            placeholder="Enter Your Current Password"
            onChangeText={handleCurrentPassWordChange}
            value={CurrentPasswordChange}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#A8A6A6"
            autoCorrect={false}
            secureTextEntry={true}
            style={styles.TextInput}
          />
        </View>

        {/* Current Password */}
        <View style={styles.InputContainer}>
          <Text style={styles.InputContainerText}>New Password</Text>
          <TextInput
            placeholder="Enter New Password"
            onChangeText={handleNewpasswordChange}
            value={Newpassword}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#A8A6A6"
            autoCorrect={false}
            secureTextEntry={true}
            style={styles.TextInput}
          />
        </View>

        {/* Confirm New Password */}
        <View style={styles.InputContainer}>
          <Text style={styles.InputContainerText}>Confirm New Password</Text>
          <TextInput
            placeholder="Enter New Password"
            onChangeText={handleConfirmNewpasswordChange}
            value={ConfirmNewpassword}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#A8A6A6"
            autoCorrect={false}
            secureTextEntry={true}
            style={styles.TextInput}
          />
        </View>

        {/* Change Password Button */}
        <View style={styles.BtnGroup}>
          <SquareButton
            text={'Change Password'}
            Txtclr={'white'}
            bgclr={'black'}
            onPress={handlePassword}
          />
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
  },
  InputContainer: {
    marginTop: 20,
  },

  InputContainerText: {
    fontFamily: 'PoppinsBold',
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
    fontFamily: 'PoppinsBold',
    fontSize: 16,
    marginRight: 15,
  },
});

export default SignInScreen;

// import { View, ScrollView, TouchableOpacity, Text, Dimensions, StyleSheet, TextInput } from 'react-native'
// import React, { useState } from 'react'
// import BackArrowCircle from '../../components/buttons/BackButtons'
// import Constants from 'expo-constants';
// import SquareButton from '../../components/buttons/Btn1';
// import { useFonts } from 'expo-font';
// import { useNavigation } from '@react-navigation/native';

// const ChangePasswordScreen = () => {
//     const navigation = useNavigation();

//     // Fonts
//     const [fontsLoaded] = useFonts({
//         'PoppinsBold': require('../../assets/fonts/PoppinsBold.ttf'),
//         'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
//         'Poppins-Regular-Light': require('../../assets/fonts/Poppins-Regular-Light.ttf'),
//         'Poppins-Regular-Medium': require('../../assets/fonts/Poppins-Regular-Medium.ttf'),
//     });

//     // states
//     const [Newpassword, setNewPassword] = useState('');
//     const [ConfirmNewpassword, setConfirmNewPassword] = useState('');
//     const [CurrentPasswordChange, setCurrentPasswordChange] = useState('');

//     // Handlers
//     const handleNewpasswordChange = (text) => setNewPassword(text);
//     const handleConfirmNewpasswordChange = (text) => setConfirmNewPassword(text);
//     const handleCurrentPassWordChange = (text) => setCurrentPasswordChange(text);
//     const handlePassword = () => { }

//     return (
//         <ScrollView style={styles.container}>

//             {/* BackArrow Icon */}
//             <View style={styles.backArrow}>
//                 <BackArrowCircle size={48} color="#000" />
//             </View>

//             {/* Rest of the view */}
//             <View style={{ padding: 20 }}>

//                 {/* Top Text Container */}
//                 <View >
//                     <Text style={styles.TopText}>Change Password</Text>
//                 </View>

//                 {/* Current Password */}
//                 <View style={styles.InputContainer}>
//                     <Text style={styles.InputContainerText}>Current Password</Text>
//                     <TextInput
//                         placeholder="Enter Your Current Password"
//                         onChangeText={handleCurrentPassWordChange}
//                         value={CurrentPasswordChange}
//                         keyboardType="email-address"
//                         autoCapitalize="none"
//                         placeholderTextColor="#A8A6A6"
//                         autoCorrect={false}
//                         secureTextEntry={true}
//                         style={styles.TextInput}
//                     />
//                 </View>

//                 {/* Current Password */}
//                 <View style={styles.InputContainer}>
//                     <Text style={styles.InputContainerText}>New Password</Text>
//                     <TextInput
//                         placeholder="Enter New Password"
//                         onChangeText={handleNewpasswordChange}
//                         value={Newpassword}
//                         keyboardType="email-address"
//                         autoCapitalize="none"
//                         placeholderTextColor="#A8A6A6"
//                         autoCorrect={false}
//                         secureTextEntry={true}
//                         style={styles.TextInput}
//                     />
//                 </View>

//                 {/* Confirm New Password */}
//                 <View style={styles.InputContainer}>
//                     <Text style={styles.InputContainerText}>Confirm New Password</Text>
//                     <TextInput
//                         placeholder="Enter New Password"
//                         onChangeText={handleConfirmNewpasswordChange}
//                         value={ConfirmNewpassword}
//                         keyboardType="email-address"
//                         autoCapitalize="none"
//                         placeholderTextColor="#A8A6A6"
//                         autoCorrect={false}
//                         secureTextEntry={true}
//                         style={styles.TextInput}
//                     />
//                 </View>

//                 {/* Change Password Button */}
//                 <View style={styles.BtnGroup}>
//                     <SquareButton text={"Change Password"} Txtclr={"white"} bgclr={"black"} onPress={handlePassword} />
//                 </View>

//             </View>
//         </ScrollView>
//     )
// }

// const styles = StyleSheet.create({
//     container: { marginTop: Constants.statusBarHeight },

//     backArrow: {
//          marginLeft: 15,
//           marginTop: 35
//         },

//     TopText: {
//         fontFamily: 'PoppinsBold',
//         fontSize: 26,
//         lineHeight: 54,
//         letterSpacing: -0.3,
//         color: '#3F345A',
//     },

//     TopTextBelow: {
//         fontFamily: 'Poppins-Regular-Light',
//         fontSize: 16,
//         lineHeight: 24,
//         textAlign: 'left',
//         color: '#545454',
//         marginLeft: 5
//     },
//     InputContainer: {
//         marginTop: 20
//     },
//     InputContainerText: {
//         fontFamily: 'PoppinsBold',
//         fontSize: 18,
//         lineHeight: 24,
//         marginBottom: 5,
//         marginLeft: 5
//     },

//     TextInput: {
//         borderWidth: 1,
//         borderColor: 'white',
//         padding: 10,
//         marginBottom: 5,
//         backgroundColor: "white",
//         height: 50,
//         borderRadius: 10,
//         backgroundColor: '#fff',
//         textAlignVertical: "center",
//         fontFamily: 'Poppins-Regular',
//         color: '#999',
//         fontSize: 16,
//     },

//     txt1: {
//         textAlign: "right",
//         fontFamily: "Poppins-Regular",
//         fontSize: 16,
//         marginRight: 15
//     },

//     BtnGroup: {
//         justifyContent: "center",
//          marginTop: 20
//     },

//     BottomTxtContainer: {
//         flexDirection: "row",
//         justifyContent: "center",
//     },

//     BottomTxt1: {
//         fontFamily: "Poppins-Regular",
//         fontSize: 16,
//         marginRight: 5
//     },

//     BottomTxt2: {
//         fontFamily: "PoppinsBold",
//         fontSize: 16,
//         marginRight: 15
//     }

// })
// export default ChangePasswordScreen;
