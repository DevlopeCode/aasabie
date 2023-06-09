import React, { useEffect, useF } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';


// getting screen width and height
const { width, height } = Dimensions.get("window");


const Button1 = ({ text, footerStyle, onPress, mode }) => {

  // Fonts


  return (
    <View style={footerStyle ? footerStyle : null}>
      <TouchableOpacity onPress={onPress ? onPress : null} style={styles.bottomBtn}>
        <Text style={styles.footerText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBtn: {
    height: 60,
    backgroundColor: '#EC4850',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    padding:10
  },
  footerText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: "white",
  },
});

export default Button1;
