/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {moderateScale, vs} from 'react-native-size-matters';
import TextC from '../../components/Text';
import { navigationRef } from '../../../App';

const CategoryHeader = ({item}) => {
  return (
    <TouchableOpacity onPress={()=>navigationRef.current.navigate('ApparelScrren')}
      style={{
        flexDirection: 'row',
        height: vs(30),
        backgroundColor: item.backgroundColor,
        alignItems: 'center',
        paddingHorizontal: moderateScale(5),
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            height: vs(20),
            backgroundColor: item.titlecolor,
            width: vs(20),
            marginRight: moderateScale(10),
          }}
        />
        <TextC font="bold" color={item.titlecolor}>
          {item.title}
        </TextC>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextC font="medium" variant="content" color={item.titlecolor}>
          View All
        </TextC>
        <View
          style={{
            height: vs(20),
            backgroundColor: item.titlecolor,
            width: vs(20),
            marginLeft: moderateScale(10),
          }}
        />
      </View>
    </TouchableOpacity>
  );
};
const CartegorItemList = ({datalist}) => {

  return (
    <FlatList
      data={datalist}
      horizontal
      style={{height: vs(50)}}
      renderItem={({item}) => (
        <View style={{height: '100%', justifyContent: 'center'}}>
          <View
            style={{
              height: vs(70),
              width: vs(70),
              borderRadius: vs(50),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: vs(50),
                width: vs(50),
                backgroundColor: 'blue',
                marginLeft: 20,
                borderRadius: vs(50),
              }}
            />
          </View>
        </View>
      )}
    />
  );
};
const CategoryScreen = () => {
  const obj = {
    title: 'AppAreals',
    backgroundColor: '#803BC133',
    data: [
      {img: '', item: 'men'},
      {img: '', item: 'women'},
      {img: '', item: 'Kids'},
    ],
  };
  const DATA = [
    {
      title: 'AppAreals',
      backgroundColor: '#803BC133',

      titlecolor: '#803BC1',

      data: [
        {img: '', item: 'men'},
        {img: '', item: 'women'},
        {img: '', item: 'Kids'},
      ],
    },
    {
      title: 'JEWELLERY',
      backgroundColor: '#FF981F33',
      titlecolor: '#FF981F',

      data: [
        {img: '', item: 'men'},
        {img: '', item: 'women'},
        {img: '', item: 'Kids'},
      ],
    },
    {
      title: 'Footwears',
      backgroundColor: '#21B8F333',
      titlecolor: '#21B8F3',

      data: [
        {img: '', item: 'men'},
        {img: '', item: 'women'},
        {img: '', item: 'Kids'},
      ],
    },
    {
      title: 'cosmetics',
      backgroundColor: 'rgba(207, 59, 137, 0.2)',
      titlecolor: '#CF3B89',

      data: [
        {img: '', item: 'men'},
        {img: '', item: 'women'},
        {img: '', item: 'Kids'},
      ],
    },
    {
      title: 'fashion accessories',
      backgroundColor: 'rgba(2, 60, 126, 0.2)',
      titlecolor: '#023C7E',

      data: [
        {img: '', item: 'men'},
        {img: '', item: 'women'},
        {img: '', item: 'Kids'},
      ],
    },
    {
      title: 'AppAreals',
      backgroundColor: '##7FAA39',
      titlecolor: '#803BC1',

      data: [
        {img: '', item: 'men'},
        {img: '', item: 'women'},
        {img: '', item: 'Kids'},
      ],
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF4F4',
      }}>
      <Header />
      <FlatList
        data={DATA}
        style={{flex: 1}}
        keyExtractor={(item, index) => item + index}
        contentContainerStyle={{paddingHorizontal: 20}}
        renderItem={({item}) => {
          return (
            <View style={styles.item}>
              <CategoryHeader item={item} />
              <CartegorItemList datalist={item.data} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    marginVertical: 8,
    height: vs(135),
    borderRadius: moderateScale(6),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
