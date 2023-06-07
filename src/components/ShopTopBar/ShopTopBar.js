import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import BackArrowIcon from '../../assets/BackArrowIcon'
import Explore from '../../assets/TabMenuIcons/Explore'
import MicIcon from './MicIcon'
import CartIcon from '../../assets/TabMenuIcons/CartIcon'
import { color } from '../../config/color'

const ShopTopBar = ({title}) => {
  return (
    <View style={styles.topBarContainer}>
      <View style={styles.titleContainer}>
          <TouchableWithoutFeedback>
            <View>  
                <BackArrowIcon color={color.background} size={7} />
            </View>
        </TouchableWithoutFeedback>
        <Text style={styles.title} >{title?title:""}</Text>
      </View>

        <View style={styles.options}>
            <TouchableWithoutFeedback>
                <View>
                    <Explore size={1.6}/>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View>
                    <MicIcon size={22}/>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View>
                    <CartIcon color={color.background} size={22}/>
                </View>
            </TouchableWithoutFeedback> 
        </View>

    </View>
  )
}

export default ShopTopBar

const styles = StyleSheet.create({
    topBarContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: color.primary,
    },
    titleContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    title:{
        color: color.background,
        fontSize: 15,
        fontFamily: 'Poppins-Regular',
    },
    options:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    }
})