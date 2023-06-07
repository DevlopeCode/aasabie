import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {color} from '../../config/color';
import LinearGradient from 'react-native-linear-gradient';

const StoryRender = ({item}) => {
  return (
    <View
      style={[
        styles.wrapper,
        item.own ? {borderWidth: 3, borderColor: color.primary} : {},
      ]}>
      <Image source={item.preview} style={styles.story} />
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', 'rgba(0, 0, 0, 0.6)']}
        style={styles.gradient}
      />
      <LinearGradient
        colors={['#F62E8E', '#AC1AF0']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.profileWrapper}>
        <View style={styles.profileContainer}>
          <Image source={item.from} style={styles.profile} />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 145,
    width: 100,
    marginRight: 15,
    borderRadius: 20,
    alignItems: 'center',
  },

  story: {
    height: '100%',
    width: '100%',
    borderRadius: 16,
  },

  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 16,
  },

  profileWrapper: {
    height: 40,
    width: 40,
    position: 'absolute',
    bottom: 2,
    borderRadius: 20,
    backgroundColor: color.black,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileContainer: {
    height: '90%',
    width: '90%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: color.black,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profile: {
    height: '101%',
    width: '101%',
    borderRadius: 20,
  },
});

export default StoryRender;
