/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScrollContainer from '../../components/ScrollComponent';

const ExploreScreen = () => {
  return (
    <ScrollContainer>
      <View
        style={{
          flex: 1,
          backgroundColor: 'aqua',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>ExploreScreen</Text>
      </View>
    </ScrollContainer>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({});
