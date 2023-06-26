import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { wp } from '../../../components/Responsive';
import { vs } from 'react-native-size-matters';
import { SvgXml } from 'react-native-svg';
import { ArrowLeft_red } from '../../../assets/SVG';
import { useNavigation } from '@react-navigation/native';
import ScrollContainer from '../../../components/ScrollComponent';

// EditProfile
export const Header = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={{ height: vs(70), paddingHorizontal: 20, justifyContent: 'center', paddingTop: '5%' }} >
      <TouchableOpacity onPress={() =>  navigation.goBack()} >
        <SvgXml xml={ArrowLeft_red} />
      </TouchableOpacity>
      <Text style={{ fontWeight: 'bold', fontSize: vs(12), color: '#EC303A', position: 'absolute', zIndex: -1, left: 0, right: 0, textAlign: 'center', paddingTop: '5%' }} >{title}</Text>
    </View>
  )
}
export default function MyCoupons() {
  return (
    <ScrollContainer header={<Header title='My Coupon' />} >
      <View style={{ flex: 1, backgroundColor: 'white' }}>

        <FlatList
          data={[1, 2, 3, , 4, 5, 5, 343, 4, 34, 34, 34]}
          renderItem={({ item, index }) => (
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#F1F1F1',
                borderRadius: 7,
                paddingVertical: 19,
                paddingHorizontal: 15,
                marginVertical: 9,
                marginHorizontal: wp(4),
                alignItems: 'center',
              }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: vs(13) }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <Text
                  style={{
                    marginTop: 8,
                    fontFamily: 'Poppins-Regular',
                    fontSize: vs(11),
                  }}>
                  10% off on every first purchase
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#EC303A',
                  paddingVertical: vs(10),
                  paddingHorizontal: 16,
                  borderRadius: 5,
                }}>
                <Text
                  style={{ color: 'white', fontSize: vs(10), fontWeight: 'bold' }}>
                  FIRSTPICK50
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </ScrollContainer>

  );
}

const styles = StyleSheet.create({});
