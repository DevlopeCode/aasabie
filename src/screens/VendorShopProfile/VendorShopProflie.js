import { StyleSheet, Text, View ,TouchableWithoutFeedback, SafeAreaView, ImageBackground, Image, TextInput, Alert, KeyboardAvoidingView} from 'react-native'
import React, { useEffect } from 'react'
import BackArrowIcon from '../../assets/BackArrowIcon'
import { height, width } from '../../config/dimension';
import { color } from '../../config/color';
import { LinearGradient } from "expo-linear-gradient";
import SendIcon from './SendIcon';

const VendorShopProflie = () => {
    
    const [profileData,setProfileData] = React.useState({
        name:"John Doe",
        SubTitle:"Vendor",
        profileImage:'https://picsum.photos/50',
        stories:['https://picsum.photos/200/500','https://picsum.photos/300/500','https://picsum.photos/200/600']        
    });

    const [activeStory,setActiveStory] = React.useState(1);
    const [messaging,setMessaging] = React.useState(false);

    const handleBack = () => {
      // todo Handle Back When Navigation is added
      setMessaging(false);
    }

    const handelNextStory = () => {
      if(activeStory < profileData.stories.length){
        setActiveStory(activeStory+1)
      }
    }

    const handelPreviousStory = () => {
      if(activeStory > 1){
        setActiveStory(activeStory-1)
      }
    }

    useEffect(() => {
      Alert.alert('Story',`Story ${activeStory} is active`)
    }, [activeStory])  

  return (
    <SafeAreaView>
       <View  style={styles.header}>
            <TouchableWithoutFeedback onPress={handleBack}>
                <View>
                  <BackArrowIcon />
                </View>
            </TouchableWithoutFeedback>
            <Text  style={styles.title}>{profileData.name}</Text>
       </View>
       
  
       <ImageBackground source={{uri:profileData.stories[activeStory-1]}} style={styles.mainImage}>
          <LinearGradient
              colors={['rgba(0,0,0,0.5)', 'transparent']}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: height * 0.2,
                zIndex:1
              }}
            />

            {/* MESSAGING SCREENS */}
          
          {
            messaging? 
            <View style={styles.messagingScreen}>
              <TouchableWithoutFeedback>
                <View style={[styles.messagingBtn,styles.activeMessageBtn]}>
                  <Text style={[styles.messagingBtnTxt,styles.activeMessageBtnTxt]}>Explore Collection</Text>
                </View>
              </TouchableWithoutFeedback>

              
              <TouchableWithoutFeedback>
                <View style={styles.messagingBtn}>
                  <Text style={styles.messagingBtnTxt}>Set Reminder</Text>
                </View>
              </TouchableWithoutFeedback>

              
              <TouchableWithoutFeedback>
                <View style={styles.messagingBtn}>
                  <Text style={styles.messagingBtnTxt}>Visit Aasabie Store</Text>
                </View>
              </TouchableWithoutFeedback>

              
              <TouchableWithoutFeedback>
                <View style={styles.messagingBtn}>
                  <Text style={styles.messagingBtnTxt}>DM</Text>
                </View>
              </TouchableWithoutFeedback>
              
            </View>
            :<></>
            }

            {/* NEXT AND PREVIOUS SCREEN CHANGERS */}

            <TouchableWithoutFeedback onPress={handelPreviousStory} >
              <View style={styles.PreviousBTN}></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handelNextStory}>
              <View style={styles.NextBTN}></View>
            </TouchableWithoutFeedback>


              {/* STORY INDICATORS */}
            <View style={styles.indicators}>
              {profileData.stories.map((story,index)=>(
                <View style={[styles.indicator,{width:(width / profileData.stories.length) - 20 , backgroundColor: (index+1 <= activeStory)?color.background:'rgba(0, 0, 0, 0.25)' } ]}></View>
                ))}
             </View>
            
            {/* USER TOP PROFILE */}
            <View style={styles.profileContainer}>
              <Image source={{uri:profileData.profileImage}} style={styles.profileImg} />

              <View>
                <Text  style={styles.vendorName}>{profileData.name}</Text>
                <Text  style={styles.subTitle}>{profileData.SubTitle}</Text>
              </View>
            </View>

            {/* MESSAGEING OPTION */}
            <View style={styles.messaging}>
              <KeyboardAvoidingView behavior="padding" style={{flexGrow:1}}>
                <TextInput onFocus={()=>setMessaging(true)} placeholder="Message" style={styles.messageInput} />
              </KeyboardAvoidingView>
              <TouchableWithoutFeedback>
                <SendIcon />
              </TouchableWithoutFeedback>
            </View>

            <LinearGradient
              colors={[ 'transparent','rgba(0,0,0,0.5)']}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: height * 0.2,
                zIndex:1
              }}
            />
        </ImageBackground>
    </SafeAreaView>
  )
}

export default VendorShopProflie

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        padding:10,
    },
    title:{
        fontSize:14,
        fontFamily:'PoppinsBold',
        color:color.primary
    },
    mainImage:{
        width:width,
        height:height - 25,
        resizeMode:'cover',
        backgroundColor:'rgba(0,0,0,0.5)',
        position:'relative',
    },
    indicators:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        padding:20,
        width:width-40,
        zIndex:4,
    },
    indicator:{
      height:5,
      borderRadius:5
    },
    profileContainer:{
      flexDirection:'row',
      alignItems:'center',
      gap:10,
      paddingHorizontal:20,
      zIndex:2,
    },
    profileImg:{
      width:50,
      height:50,
      borderRadius:50,
      marginRight:10
    },
    vendorName:{
      fontSize:14,
      fontFamily:'PoppinsSemiBold',
      color:color.background
    },
    subTitle:{
      fontSize:12,
      fontFamily:'Poppins',
      color:color.background
    },
    messaging:{
      flexDirection:'row',
      alignItems:'center',
      gap:10,
      paddingHorizontal:20,
      paddingVertical:15,
      marginHorizontal:20,
      marginVertical:10,
      borderRadius:25,
      zIndex:4,
      position:'absolute',
      bottom:20,
      width:width-40,
      backgroundColor:color.background,
    },
    messageInput:{
      flex:1,
      fontSize:12,
      fontFamily:'PoppinsSemiBold',
    },

    messagingScreen:{
      position:"absolute",
      left:0,
      top: 0,
      width:width,
      height: height * 0.9,
      backgroundColor:"rgba(0, 0, 0, 0.77)",
      zIndex:3,
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      rowGap:20
    },
    messagingBtn:{
      width:width * .6,
      paddingVertical:12,
      paddingHorizontal:35,
      borderRadius:25,
      backgroundColor:color.background,
    },
    messagingBtnTxt:{
      fontFamily:"PoppinsSemiBold",
      textAlign:'center'
    },
    activeMessageBtn:{
      backgroundColor:color.primary,
    },
    activeMessageBtnTxt:{
      color:color.background
    },
    PreviousBTN:{
      position:'absolute',
      left:0,
      top:height * 0.2,
      zIndex:2,
      width:width * 0.4,
      height:height * 0.6,
    },
    NextBTN:{
      position:'absolute',
      right:0,
      top:height * 0.2,
      zIndex:2,
      width:width * 0.4,
      height:height * 0.6,
    },
    })