/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
  Image,
} from 'react-native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import Header from '../../components/Header';
import {moderateScale, vs} from 'react-native-size-matters';
import TextC from '../../components/Text';
import {navigationRef} from '../../../App';
import {useQuery} from '@tanstack/react-query';
import {create} from 'zustand';
import {useEffect} from 'react';
import {SearchBar} from './CategoryItemScreen';
import {SvgXml} from 'react-native-svg';
import {ForwardIcon} from '../../assets/SVG';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const Stack = createStackNavigator();
const useBearStore = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({bears: state.bears + 1})),
  removeAllBears: () => set({bears: 0}),
}));

const CategoryHeader = ({item, DATA, index}) => {
  const getColor = () => {
    // backgroundColor: '#803BC133',

    // titlecolor: '#803BC1',
    return DATA[index] || DATA[DATA?.length - index];
  };

  // DATA={DATA} index={index}
  return (
    <TouchableOpacity
      onPress={() => navigationRef.current.navigate('ApparelScrren')}
      style={{
        flexDirection: 'row',
        height: vs(30),
        backgroundColor: getColor()?.backgroundColor,
        alignItems: 'center',
        paddingHorizontal: moderateScale(5),
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://www.aasabie.com/storage/app/public/brand/2023-06-09-648312c4e7033.png',
          }}
          style={{
            height: vs(20),
            backgroundColor: getColor()?.titlecolor,
            width: vs(20),
            marginRight: moderateScale(10),
            marginLeft: moderateScale(8),
          }}
        />
        {/* <View
          style={{
            height: vs(20),
            backgroundColor: item.titlecolor,
            width: vs(20),
            marginRight: moderateScale(10),
          }}
        /> */}
        <TextC font="bold" color={getColor()?.titlecolor} variant="h5">
          {item?.name}
        </TextC>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextC font="medium" variant="content" color={getColor()?.titlecolor}>
          View All
        </TextC>
        <View
          style={{
            height: vs(20),
            // backgroundColor: getColor()?.titlecolor,
            width: vs(20),
            marginLeft: moderateScale(10),
            justifyContent: 'center',
            //  alignItems:'center'
          }}>
          <SvgXml xml={ForwardIcon(getColor()?.titlecolor)} />
          {/* ForwardIcon */}
        </View>
      </View>
    </TouchableOpacity>
  );
};
const CartegorItemList = ({datalist}) => {
  return (
    <FlatList
      data={datalist}
      horizontal
      style={{height: vs(50), marginLeft: 20, marginTop: vs(15)}}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            console.log('navigate');
          }}
          activeOpacity={0.8}
          style={{height: '100%'}}>
          <View
            style={{
              height: vs(70),
              width: vs(70),
              borderRadius: vs(50),
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor:'pink'
            }}>
            <View
              style={{
                height: vs(50),
                width: vs(50),
                backgroundColor: 'pink',
                // marginLeft: 20,
                borderRadius: vs(50),
                overflow: 'hidden',
              }}>
              <Image
                style={{height: '100%', width: '100%'}}
                source={{
                  uri: 'https://st4.depositphotos.com/4678277/40811/i/600/depositphotos_408110334-stock-photo-full-length-body-size-view.jpg',
                }}
              />
            </View>

            <Text
              numberOfLines={1}
              style={{
                width: '80%',
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 5,
                color: '#EC4850',
              }}>
              {item?.name}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
// datalist
const CategoryScreen = () => {
  const obj = {
    title: 'AppAreals',
    backgroundColor: '#803BC133',
    data: [
      {img: '', item: 'men'},
      {img: '', item: 'women'},
      {img: '', item: 'Kids'},
    ],
  };
  const DATA = [
    {
      title: 'AppAreals',
      backgroundColor: '#803BC133',

      titlecolor: '#803BC1',

      data: [
        {img: '', item: 'men'},
        {img: '', item: 'women'},
        {img: '', item: 'Kids'},
      ],
    },
    {
      title: 'JEWELLERY',
      backgroundColor: '#FF981F33',
      titlecolor: '#FF981F',

      data: [
        {img: '', item: 'men'},
        {img: '', item: 'women'},
        {img: '', item: 'Kids'},
      ],
    },
    {
      title: 'Footwears',
      backgroundColor: '#21B8F333',
      titlecolor: '#21B8F3',

      data: [
        {img: '', item: 'men'},
        {img: '', item: 'women'},
        {img: '', item: 'Kids'},
      ],
    },
    {
      title: 'cosmetics',
      backgroundColor: 'rgba(207, 59, 137, 0.2)',
      titlecolor: '#CF3B89',

      data: [
        {img: '', item: 'men'},
        {img: '', item: 'women'},
        {img: '', item: 'Kids'},
      ],
    },
    {
      title: 'fashion accessories',
      backgroundColor: 'rgba(2, 60, 126, 0.2)',
      titlecolor: '#023C7E',

      data: [
        {img: '', item: 'men'},
        {img: '', item: 'women'},
        {img: '', item: 'Kids'},
      ],
    },
    {
      title: 'AppAreals',
      backgroundColor: '##7FAA39',
      titlecolor: '#803BC1',

      data: [
        {img: '', item: 'men'},
        {img: '', item: 'women'},
        {img: '', item: 'Kids'},
      ],
    },
  ];

  const bears = useBearStore(state => state.bears);
  const increasePopulation = useBearStore(state => state.increasePopulation);

  const getCategory = async () => {
    const data = await fetch('https://www.aasabie.com/api/v1/categories');
    const response = await data.json();
    return response;
  };

  const {isLoading, isError, data, error} = useQuery({
    queryKey: ['assembleCategory'],
    queryFn: getCategory,
  });

  // if (isLoading) {
  //   return <span>Loading...</span>
  // }

  // if (isError) {
  //   return
  //   return <span>Error: {error.message}</span>
  // }

  // console.log(bears, 'bearsbearsdfsdfsbears');
  const inset = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF4F4',
        paddingTop: inset.top,
      }}>
      <Header />
      {/* onClick={increasePopulation} */}
      {isError && (
        <TouchableOpacity
          onPress={increasePopulation}
          style={{height: 300, backgroundColor: 'red'}}>
          <Text>Error in api response</Text>
        </TouchableOpacity>
      )}
      {isLoading ? (
        <ActivityIndicator style={{marginTop: 100}} size={30} />
      ) : (
        <FlatList
          ListHeaderComponent={() => (
            <>
              <View style={{marginVertical: vs(20)}}>
                <SearchBar height color={'white'} />
              </View>
              <TextC
                font="bold"
                color="#EC4850"
                variant="h4"
                style={{
                  // fontSize: vs(15),
                  marginVertical: vs(8),
                }}>
                SHOP BY CATEGORY
              </TextC>
            </>
          )}
          data={data}
          style={{flex: 1}}
          keyExtractor={(item, index) => item + index}
          contentContainerStyle={{paddingHorizontal: 20}}
          renderItem={({item, index}) => {
            // console.log(JSON.stringify(item), 'itemitemitem');
            // return <></>
            return (
              <View style={styles.item}>
                <CategoryHeader DATA={DATA} index={index} item={item} />
                <CartegorItemList datalist={item?.childes} />
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

const CategoryDetail = () => {
  return (
    <View style={{height: 300}}>
      <Text>sdfsdfsf</Text>
    </View>
  );
};

const CategoryStack = () => {
  const Stack = createStackNavigator();

  const options = {
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };

  return (
    <Stack.Navigator screenOptions={options} initialRouteName="CategoryScreen">
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
    </Stack.Navigator>
  );
};

export default CategoryStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    marginVertical: 8,
    height: vs(135),
    // paddingVertical:vs(30),
    borderRadius: moderateScale(6),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
