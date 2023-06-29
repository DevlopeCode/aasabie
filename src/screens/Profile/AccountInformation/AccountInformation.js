import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {hp, wp} from '../../../components/Responsive';
import {vs} from 'react-native-size-matters';
import {TouchableRipple} from 'react-native-paper';
import {Header} from '../MyCoupons/MyCoupons';
import {EditProfile} from '../../../assets/SVG';
import {SvgXml} from 'react-native-svg';
import ScrollContainer from '../../../components/ScrollComponent';
import {Logout} from '../../../assets/SVG';
const InputText = ({placeholder}) => (
  <TextInput
    placeholder={placeholder}
    style={{
      borderBottomWidth: 1,
      borderBottomColor: '#C4C4C4',
      paddingBottom: vs(10.5),
      marginTop: hp(3),
    }}
  />
);

const Radio = ({radioActive, setRadioActive, val}) => {
  return (
    <View
      style={{
        height: vs(15),
        width: vs(15),
        borderRadius: vs(10),
        borderWidth: 1,
        borderColor: '#EC303A',
        backgroundColor: radioActive ? '#EC303A' : 'transparent',
      }}
    />
  );
};

const RowRadio = ({title, val, setRadioActive, ...res}) => (
  <TouchableOpacity
    onPress={() => {
      setRadioActive(val);
    }}
    style={{flexDirection: 'row'}}>
    <Radio {...res} />
    <Text style={{marginLeft: 10, fontSize: vs(12.5)}}>{title}</Text>
  </TouchableOpacity>
);

const SelectGender = () => {
  const [radioActive, setRadioActive] = useState(false);
  return (
    <>
      <RowRadio
        setRadioActive={setRadioActive}
        radioActive={radioActive === 1}
        val={1}
        title="Male"
      />
      <RowRadio
        setRadioActive={setRadioActive}
        radioActive={radioActive === 2}
        val={2}
        title="Female"
      />
      <RowRadio
        setRadioActive={setRadioActive}
        radioActive={radioActive === 3}
        val={3}
        title="Don't mention           "
      />
    </>
  );
};

export default function AccountInformation() {
  return (
    <ScrollContainer header={<Header title="Account Information" />}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{padding: wp(5)}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: vs(18), paddingRight: 15}}>
              John Patrick
            </Text>
            <SvgXml xml={EditProfile} />
          </View>
          <InputText placeholder="johnpatrick253@gmail.com" />
          <InputText placeholder="86768 78787" />
          <InputText placeholder="1234 NW Bobcat Lane, St. Robert, MO 65584" />
          <View
            style={{
              borderBottomWidth: 1,
              justifyContent: 'space-between',
              borderBottomColor: '#C4C4C4',
              height: vs(60),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <SelectGender />
          </View>
          <TouchableRipple
            rippleColor={'#f05c63'}
            onPress={() => {}}
            style={{
              marginTop: hp(22),
              backgroundColor: '#EC303A',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 6,
            }}>
            <Text
              style={{
                color: 'white',
                paddingVertical: vs(15),
                fontSize: vs(12),
              }}>
              Edit Profile
            </Text>
          </TouchableRipple>
        </View>
      </View>
    </ScrollContainer>
  );
}

const styles = StyleSheet.create({});
