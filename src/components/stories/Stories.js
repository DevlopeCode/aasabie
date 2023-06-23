import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {storiesDummyData} from '../../dummy-data/storiesDummyData';
import StoryRender from './StoryRender';
import {scale} from 'react-native-size-matters';

const Stories = () => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={storiesDummyData}
        horizontal
        style={{marginHorizontal: scale(15)}}
        renderItem={StoryRender}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: '5%',
  },
});

export default Stories;
