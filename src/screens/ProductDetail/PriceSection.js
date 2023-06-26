import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../../config/color';
import TextC from '../../components/Text';

const PriceSection = ({discount, price}) => {
  return (
    <View style={styles.priceContainer}>
      <TextC font="semibold" variant="h2" color="#1F7401">
        {discount} % Off
      </TextC>

      <View style={styles.discountedPriceContainer}>
        <TextC font="bold" variant="h0">
          ₹ {price}
        </TextC>
        <TextC font="medium" style={{textDecorationLine: 'line-through'}}>
          ₹ {price * (1 + discount / 100)}
        </TextC>
      </View>
    </View>
  );
};

export default PriceSection;

const styles = StyleSheet.create({
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    // marginBottom: 100,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: color.background,
    borderRadius: 10,

    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -5},
    shadowOpacity: 0.25,
    shadowRadius: 5,
    marginBottom:18
  },
  discountedPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  discount: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 24,
    color: 'green',
  },
  discountedPrice: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 24,
    color: '#000',
  },
  originalPrice: {
    fontFamily: 'PoppinsSemibold',
    fontSize: 14,
    color: color.misc,
    textDecorationLine: 'line-through',
  },
});
