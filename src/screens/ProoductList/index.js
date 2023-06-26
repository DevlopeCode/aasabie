/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {scale, vs} from 'react-native-size-matters';
import {ProductHeader} from './ProductHeader';
import FilterList from './FilterList';
import {ProductCard} from './ProductCard';

export const ProductCardList = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({item, index}) => (
          <ProductCard item={item} index={index} />
        )}
        numColumns={2}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};
const ProductListScreen = ({route}) => {
  console.log(route);
  console.log(route.params);
  const flatdata = [
    <ProductHeader title={route?.params?.name || route?.params} />,
    <FilterList />,
    <Image
      source={{
        uri: 'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      }}
      style={{height: vs(200)}}
    />,
    <ProductCardList />,
    <Image
      source={{
        uri: 'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      }}
      style={{height: vs(200)}}
    />,
    <View style={{backgroundColor: 'white'}}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({item, index}) => (
          <ProductCard item={item} index={index} />
        )}
        numColumns={2}
        contentContainerStyle={styles.container}
      />
    </View>,
  ];
  return <FlatList data={flatdata} renderItem={({item}) => item} />;
};

export default ProductListScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 5,

    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: vs(150),
    borderRadius: 5,
  },
  containerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticalText: {
    transform: [{rotate: '90deg'}],
    width: vs(150),
    top: vs(77),
    right: scale(67),
  },
});
