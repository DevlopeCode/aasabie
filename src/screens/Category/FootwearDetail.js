import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CategoryDetail from './CategoryDetail'
import { moderateScale, vs } from 'react-native-size-matters'
import { hp, wp } from '../../components/Responsive'


const HeadLayout = () => {
    return (

        <View style={{ marginTop: -hp(13), }} >
            <View style={{
                alignSelf: 'flex-end',
                width: moderateScale(80),
                height: moderateScale(100),
                backgroundColor: '#EC4850'
            }} />
            <View style={{
                alignSelf: 'flex-end',
                marginTop: -moderateScale(50),
                marginRight: moderateScale(40),
                width: moderateScale(100),
                height: moderateScale(100),
                backgroundColor: '#EC303A'
            }} />
            <View style={{
                flexDirection: 'row',
                marginTop: -hp(5),
                paddingBottom: hp(3)
            }} >
                <View style={{ flex: 1, alignItems: 'center' }} >
                    <Image
                        source={require('../../assets/images/bata_logo.png')}
                        style={{ marginTop: vs(14), height: moderateScale(40), width: moderateScale(70), resizeMode: 'contain' }}
                    />
                    <Text style={{
                        marginTop: -hp(1),
                        color: '#EC4850',
                        fontWeight: 'bold',
                        fontSize: vs(11),

                    }} >UPTO 60% OFF</Text>
                    <View style={{ backgroundColor: '#EC4850', height: vs(22), marginTop: vs(8), borderRadius: 6, paddingHorizontal: vs(12), justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: 'white', fontSize: vs(9), fontWeight: 'bold' }} >SHOP NOW</Text>
                    </View>
                </View>
                <View style={{ flex: 1 }} >
                    <Image
                        style={{
                            height: moderateScale(113),
                            width: moderateScale(190),
                            resizeMode: 'contain'
                        }}
                        source={require('../../assets/images/shoes_bg.png')}
                    />
                </View>
            </View>
        </View>
    )

}

export default function FootwearDetail(prop) {
    // footwear_cover_2
    // BEST OF COLLECTIONS
    return (
        <View style={{ flex: 1 }} >
            <CategoryDetail
                categoryTitle='BEST OF COLLECTIONS'
                coverImage={require('../../assets/images/footwear_cover_2.png')}
                showCategoryList
                HeadLayout={HeadLayout}
                HeadLayoutTwo={() => (
                    <View style={{ flexDirection: 'row', width: wp(100), paddingBottom:hp(3) }} >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                            <Image
                                source={require('../../assets/images/foot_feet.png')}
                                style={{ height: moderateScale(160), width: moderateScale(120), resizeMode: 'contain' }}
                            />
                        </View>
                        <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }} >
                            <Image
                                source={require('../../assets/images/company_logo.png')}
                                style={{height:moderateScale(38), width:moderateScale(145), resizeMode:'contain'}}
                            />
                            <Text style={{ marginTop:hp(2), color:'#FF9E01', fontSize:vs(11), fontWeight:'bold' }}>All time best sellers</Text>
                            <Text style={{color:'#EC4850', fontSize:vs(22), fontWeight:'bold'}} >Starting ₹999</Text>
                        </View>
                    </View>
                )

                }
                {...prop}

            />
        </View>
    )
}

