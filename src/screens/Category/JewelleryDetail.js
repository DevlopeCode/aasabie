import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CategoryDetail from './CategoryDetail'
import { moderateScale, vs } from 'react-native-size-matters'
import { hp, wp } from '../../components/Responsive'




export default function JewelleryDetail(prop) {

    return (
        <View style={{ flex: 1 }} >
            <CategoryDetail
                categoryCardColor='#C88BDE'
                categoryTitle='BEST OF BRIDAL SETS'
                coverImage={require('../../assets/images/jewellery_cover_2.png')}
                HeadLayoutTwo={() => (
                    <View style={{ height: 270 }} >
                        <Image
                            source={require('../../assets/images/jewellery_cover.png')}
                            style={{ height: '100%', width: '100%', resizeMode: 'stretch' }}
                        />
                    </View>
                )}
                {...prop}

            />
        </View>
    )
}

