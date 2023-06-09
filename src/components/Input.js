import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { COLORS } from '../utils/contants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Input = ({
  label,
  iconName,
  error,
  placeholder,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{marginBottom: 20}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.darkBlue
              : COLORS.light,
            alignItems: 'center',
          },
        ]}>
        { iconName ? 
        <Icon
          name={iconName}
          style={{color: COLORS.darkBlue, fontSize: 22, marginRight: 10}}
        /> : null}
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={style.TextInput}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: COLORS.darkBlue, fontSize: 22}}
          />
        )}
      </View>
      {error && (
        <Text style={{marginTop: 7, color: COLORS.red, fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 10,
    marginLeft: 5
  },
  inputContainer: {
    height: 50,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
  },

  TextInput: {
    flex:1,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: COLORS.white,
    padding: 10,
    backgroundColor: COLORS.white,
    height: 48,
    borderRadius: 10,
    textAlignVertical: "center",
    fontFamily: 'Poppins',
    color: '#999',
    fontSize: 16,
  },

});

export default Input;