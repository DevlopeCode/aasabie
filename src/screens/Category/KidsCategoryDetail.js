import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CategoryDetail from './CategoryDetail'
import { moderateScale, vs } from 'react-native-size-matters'
import { hp, wp } from '../../components/Responsive'



export default function KidsCategoryDetail(prop) {
    return (
        <View style={{ flex: 1 }} >
            <CategoryDetail
                categoryTitle='BEST OF KIDS WEAR'
                coverImage={require('../../assets/images/kids_cover_2.png')}
                HeadLayoutTwo={() => (
                    <View>
                        <Image
                            source={require('../../assets/images/kids_cover.png')}
                            style={{
                                alignSelf: 'center',
                                height: 260,
                                width: wp(102),
                                resizeMode: 'contain',
                            }}
                        />
                        <View style={{ backgroundColor: 'white',   height: 230,justifyContent:'flex-end' }} >
                            <Image
                                source={require('../../assets/images/kid_group.png')}
                                style={{
                                    alignSelf: 'center',
                                    height: 220,
                                    width: wp(80),
                                    resizeMode: 'contain',
                                    
                                }}
                            />
                            <Text style={{
                                position: 'absolute',
                                top: 0,
                                right: moderateScale(20),
                                textAlign: 'center',
                                color: '#EC4850',
                                fontSize:vs(17),
                                marginTop:vs(6)

                            }} >{'       Pickmart\nperks for you!'}</Text>
                        </View>
                        {/* kid_group */}
                    </View>
                )}
                {...prop}
            />
        </View>
    )
}

