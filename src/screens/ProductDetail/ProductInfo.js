import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '../../config/color'
import StarIcon from './StarIcon'
import LikeBtn from './LikeBtn'
import UserIcon from '../../assets/UserIcon'

const ProductInfo = (props) => {
  return (
    <SafeAreaView>
        <View style={styles.productInfoContainer}>
            <Text style={styles.mainTitle}>{props.title}</Text>

            <View style={styles.otherInfo}>

                <View style={{flexDirection:'row',gap:3,alignItems: 'center',}}>
                    <View style={styles.stars}>
                        <StarIcon active={true} size={18} />
                        <StarIcon active={true} size={18} />
                        <StarIcon active={true} size={18} />
                        <StarIcon active={true} size={18} />
                        <StarIcon active={false} size={18} />
                    </View>
                    <Text style={styles.rating}>{props.ratingCount} Rating</Text>
                </View>

                <View style={{flexDirection:'row',gap:3,alignItems: 'center',}}>
                    <LikeBtn size={28} />
                    <Text style={styles.rating}>{props.likes} Likes</Text>
                </View>

                <View style={{flexDirection:'row',gap:3,alignItems: 'center',}}>
                    <UserIcon size={25} />
                    <Text style={styles.rating}>{props.seen} Seen</Text>
                </View>

            </View>
        </View>
    </SafeAreaView>
  )
}

export default ProductInfo

const styles = StyleSheet.create({
    productInfoContainer: {
        paddingHorizontal: 20,
    },
    mainTitle: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 20,
        color: color.secondary,
    },
    otherInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    rating: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 10,
        color: color.primary,
    },
    stars: {
        flexDirection: 'row',
        alignItems: 'center',
    }

})