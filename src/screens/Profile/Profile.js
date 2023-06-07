// ! THESE FILES ARE TEMPORY AND If YOU WANT CAN DELETE THEM NUT MAKE SURE TO REPLACE IT WITH YOUR OWN FILES

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '../../config/dimension'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        minHeight: height,
        backgroundColor: 'green'
    }
})