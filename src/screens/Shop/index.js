/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import TopBar from '../../components/TopBar/TopBar';
import SearchBar from '../../components/SearchBar.js';
import {Category} from './Component/List/Category';
import {CategoryList} from './Component/List/CategoryList';
import {PostSlider} from './Component/List/PostSlider';
import {TopStory} from './Component/List/TopStory';
import {TopList} from './Component/List/TopList';
import {ChoiceList} from './Component/List/ChoiceList';

const ShopScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <TopBar />
        <SearchBar />
        <Category />
        <PostSlider />
        <CategoryList />
        <TopStory />
        <ChoiceList />
        <TopList />
        <CategoryList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopScreen;
