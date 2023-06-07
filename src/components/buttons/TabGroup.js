import React from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';

const TabButton = ({ title, onPress, isActive }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.tabButton, isActive && styles.activeTabButton]}>
        <Text style={[styles.tabButtonText, isActive && styles.activeTabButtonText]}>
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#eee',
  },
  activeTabButton: {
    backgroundColor: '#ccc',
  },
  tabButtonText: {
    fontWeight: 'bold',
  },
  activeTabButtonText: {
    color: '#fff',
  },
});

export default TabButton;