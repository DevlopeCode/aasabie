import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {hp, wp} from '../../components/Responsive';
import {moderateScale, vs} from 'react-native-size-matters';
import {TouchableRipple} from 'react-native-paper';
import {Checkbox} from 'react-native-paper';
import {SvgXml} from 'react-native-svg';
import {CheckedIcon} from '../../assets/SVG';
import {BackSVG} from '../../assets/SVG';

const ButtonComponent = ({selected, title, setSelectedCategory}) => {
  const style = selected ? {fontWeight: '700'} : {};

  return (
    <TouchableRipple
      rippleColor="#eff0f5"
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

const CategoryComponent = ({onPress}, ref) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const value = () => selectedCategory;

  useImperativeHandle(ref, () => ({
    value,
  }));

  const props = {
    setSelectedCategory: e => {
      setSelectedCategory(e);
      onPress(e);
    },
  };

  return (
    <>
      <ButtonComponent
        selected={selectedCategory == 'Gender'}
        title="Gender"
        {...props}
      />
      <ButtonComponent
        selected={selectedCategory == 'Category'}
        title="Category"
        {...props}
      />
      <ButtonComponent
        selected={selectedCategory == 'Discounts'}
        title="Discounts"
        {...props}
      />
      <ButtonComponent
        selected={selectedCategory == 'Customer\nRatings'}
        title={`Customer\nRatings`}
        {...props}
      />
      <ButtonComponent
        selected={selectedCategory == 'Size'}
        title="Size"
        {...props}
      />
      <ButtonComponent
        selected={selectedCategory == 'Price'}
        title="Price"
        {...props}
      />
      <ButtonComponent
        selected={selectedCategory == 'Color'}
        title="Color"
        {...props}
      />
      <ButtonComponent
        selected={selectedCategory == 'Brand'}
        title="Brand"
        {...props}
      />
    </>
  );
};

const CategoryComponentRef = forwardRef(CategoryComponent);

const CheckBox = ({checked}) => {
 

  return (
    <>
      {checked ? (
        <SvgXml xml={CheckedIcon} />
      ) : (
        <View
          style={{
            height: 20,
            width: 20,
            borderWidth: 2,
            borderRadius: 2,
          }}></View>
      )}
    </>
  );
};
// 
const RowPrice = ({title}) => {
  const [checked, setChecked] = useState(false);
  return(
    <TouchableRipple
      rippleColor="#eff0f5"
      onPress={() => setChecked(!checked)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: wp(8),
        height: moderateScale(42),
      }}>
      <>
        <CheckBox checked={checked} />
        <Text style={{paddingLeft: '10%', fontSize: vs(12)}}>{title}</Text>
      </>
    </TouchableRipple>
  )
};

const ContainerValue = (props, ref) => {
  const [value, setValue] = useState('Gender');

  useImperativeHandle(ref, () => ({
    setValue,
  }));

  return (
    <>
      {value == 'Gender' && (
        <>
          <RowPrice title="Women" />
          <RowPrice title="Men" />
        </>
      )}

      {value == 'Category' && (
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
      {value == 'Price' && (
        <>
          <RowPrice title="Rs. 299 and Below" />
          <RowPrice title="Rs. 300 - Rs. 499" />
          <RowPrice title="Rs. 500 - Rs. 699" />
          <RowPrice title="Rs. 700 - Rs. 999" />
          <RowPrice title="Rs. 1000 - Rs. 1499" />
          <RowPrice title="1500 and Above" />
        </>
      )}

      {value == 'Discounts' && (
        <>
          <RowPrice title="30% or more" />
          <RowPrice title="40% or more" />
          <RowPrice title="50% or more" />
          <RowPrice title="60% or more" />
          <RowPrice title="70% or more" />
        </>
      )}
      {value == 'Customer\nRatings' && (
        <>
          <RowPrice title="4 and above" />
          <RowPrice title="3 and above" />
        </>
      )}

      {value == 'Size' && (
        <>
          <RowPrice title="Free" />
          <RowPrice title="XS" />
          <RowPrice title="S" />
          <RowPrice title="M" />
          <RowPrice title="L" />
          <RowPrice title="XL" />
          <RowPrice title="XXL" />
          <RowPrice title="3XL" />
          <RowPrice title="4XL" />
          <RowPrice title="5XL" />
          <RowPrice title="6XL" />
          <RowPrice title="7XL" />
        </>
      )}

      {value == 'Color' && (
        <>
          <RowPrice title="Dark Green" />
          <RowPrice title="Yellow" />
          <RowPrice title="Green" />
          <RowPrice title="Maroon" />
          <RowPrice title="Light Blur" />
          <RowPrice title="Beige" />
          <RowPrice title="Light Green" />
          <RowPrice title="Multicolor" />
          <RowPrice title="Orange" />
          <RowPrice title="Purple" />
          <RowPrice title="White" />
          <RowPrice title="Red" />
          <RowPrice title="Pink" />
        </>
      )}

      {value == 'Brand' && (
        <>
          <RowPrice title="QUEDDYS" />
          <RowPrice title="nv patel" />
          <RowPrice title="carnivalapparels" />
          <RowPrice title="axabull" />
          <RowPrice title="D Fashion Hub" />
          <RowPrice title="PANCHAMI" />
          <RowPrice title="PATTARI" />
          <RowPrice title="Mert India" />
          <RowPrice title="Mahadev Fashion" />
          <RowPrice title="KETLO" />
          <RowPrice title="KAITHLI" />
          <RowPrice title="QEXTY" />
          <RowPrice title="kalix International" />
        </>
      )}
    </>
  );
};

const ContainerValueRef = forwardRef(ContainerValue);

export default function FilterScreen() {
  const containerRef = useRef();
  const layoutRef = useRef();

  return (
    <View style={{flex: 1, backgroundColor: 'red', flexDirection: 'row'}}>
      <View style={{flex: 1, backgroundColor: '#F2F3F7'}}>
        <CategoryComponentRef
          onPress={layoutRef.current?.setValue}
          ref={containerRef}
        />
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
        }}>
        <ContainerValueRef ref={layoutRef} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
