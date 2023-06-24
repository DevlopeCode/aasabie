/* eslint-disable react-native/no-inline-styles */
// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const FilterScreen = () => {
//   return (
//     <View>
//       <Text>FilterScreen</Text>
//     </View>
//   );
// };

// export default FilterScreen;

// const styles = StyleSheet.create({});

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {hp, wp} from '../../components/Responsive';
import {moderateScale, vs} from 'react-native-size-matters';
import {TouchableRipple} from 'react-native-paper';
import {Checkbox} from 'react-native-paper';

const ButtonComponent = ({selected, title, setSelectedCategory}) => {
  const style = selected ? {fontWeight: '700'} : {};

  return (
    <TouchableRipple
      onPress={() => setSelectedCategory(title)}
      style={{
        height: hp(10),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: selected ? 'white' : 'transparent',
      }}>
      <Text
        style={{
          fontSize: vs(13),
          color: selected ? '#EC303A' : 'black',
          ...style,
        }}>
        {title}
      </Text>
    </TouchableRipple>
  );
};

const CategoryComponent = (props, ref) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const value = () => selectedCategory;

  useImperativeHandle(ref, () => ({
    value,
  }));

  return (
    <>
      <ButtonComponent
        setSelectedCategory={setSelectedCategory}
        selected={selectedCategory == 'Gender'}
        title="Gender"
      />
      <ButtonComponent
        setSelectedCategory={setSelectedCategory}
        selected={selectedCategory == 'Category'}
        title="Category"
      />
      <ButtonComponent
        setSelectedCategory={setSelectedCategory}
        selected={selectedCategory == 'Discounts'}
        title="Discounts"
      />
      <ButtonComponent
        setSelectedCategory={setSelectedCategory}
        selected={selectedCategory == 'Customer\nRatings'}
        title={`Customer\nRatings`}
      />
      <ButtonComponent
        setSelectedCategory={setSelectedCategory}
        selected={selectedCategory == 'Size'}
        title="Size"
      />
      <ButtonComponent
        setSelectedCategory={setSelectedCategory}
        selected={selectedCategory == 'Price'}
        title="Price"
      />
      <ButtonComponent
        setSelectedCategory={setSelectedCategory}
        selected={selectedCategory == 'Color'}
        title="Color"
      />
      <ButtonComponent
        setSelectedCategory={setSelectedCategory}
        selected={selectedCategory == 'Brand'}
        title="Brand"
      />
    </>
  );
};

const CategoryComponentRef = forwardRef(CategoryComponent);

const RowPrice = () => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: wp(8),
      // backgroundColor:'yellow',
      height: moderateScale(60),
    }}>
    <View
      style={{
        height: 20,
        width: 20,
        borderWidth: 2,
        borderRadius: 2,
      }}></View>
    <Text style={{paddingLeft: '10%', fontSize: vs(12)}}>
      Rs. 299 and Below
    </Text>
  </View>
);

const ContainerValue = (props, ref) => {
  const [value, setValue] = useState(0);

  return (
    <>
      {value == 0 && (
        <>
          <RowPrice title="Women" />
          <RowPrice title="Men" />
        </>
      )}

      {value == 1 && (
        <>
          <RowPrice title="Women Party Gown" />
          <RowPrice title="Crop Tops &  Tees" />
          <RowPrice title="Lehengas & Sarees" />
          <RowPrice title="Bottomwear" />
          <RowPrice title="Skirts" />
          <RowPrice title="Kurtis" />
          <RowPrice title="Lingerie" />
          <RowPrice title="Sport wear" />
          <RowPrice title="Nightwear" />
        </>
      )}
      {value == 2 && (
        <>
          <RowPrice title="30% or more" />
          <RowPrice title="40% or more" />
          <RowPrice title="50% or more" />
          <RowPrice title="60% or more" />
          <RowPrice title="70% or more" />
        </>
      )}

      {value == 3 && (
        <>
          <RowPrice title="4 and above" />
          <RowPrice title="3 and above" />
         
        </>
      )}

    {value == 4 && (
        <>
          <RowPrice title="Free" />
          <RowPrice title="XS" />
          <RowPrice title="S" />
          <RowPrice title="M" />
          <RowPrice title="L" />
          <RowPrice title="L" />
          <RowPrice title="L" />
          <RowPrice title="L" />
          <RowPrice title="L" />
          

         
        </>
      )}
      {/* <RowPrice title="Rs. 299 and Below" />
      <RowPrice title="Rs. 299 and Below" />
      <RowPrice title="Rs. 299 and Below" />
      <RowPrice title="Rs. 299 and Below" />
      <RowPrice title="Rs. 299 and Below" />
      <RowPrice title="Rs. 299 and Below" /> */}
    </>
  );
};

export default function FilterScreen() {
  const containerRef = useRef();
  return (
    <View style={{flex: 1, backgroundColor: 'red', flexDirection: 'row'}}>
      <View style={{flex: 1, backgroundColor: '#F2F3F7'}}>
        <CategoryComponentRef ref={containerRef} />
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: hp(10),
            backgroundColor: 'white',
            paddingLeft: '16%',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#EC303A',
              fontFamily: 'Poppins-SemiBold',
              fontSize: vs(15),
            }}>
            18,925
          </Text>
          <Text style={{color: '#EC303A'}}>Products found</Text>
        </View>
      </View>
      <View
        style={{
          paddingVertical: hp(3),
          flex: 1.5,
          backgroundColor: '#FFFFFF',
        }}></View>
    </View>
  );
}

const styles = StyleSheet.create({});