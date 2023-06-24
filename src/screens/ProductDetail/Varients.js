/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {color} from '../../config/color';
import TextC from '../../components/Text';
import R from '../../res/R';

const Varients = ({
  data,
  currentSelected,
  changeVarient,
  currentVarient,
  handelChangeVarient,
}) => {
  // const [currentVarient, setCurrentVarient] = React.useState(currentSelected);

  // const handelChangeVarient = index => {
  //   setCurrentVarient(index);
  //   changeVarient(index);
  // };

  return (
    <SafeAreaView>
      <View style={styles.varient}>
        <View
          style={{
            flexDirection: 'row',
            alineItem: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextC font="medium" variant="h5" color={R.color.dark.gray2}>
              Color:
            </TextC>
            <TextC font="medium" variant="h5" color={R.color.dark.black}>
              Red Wine
            </TextC>
          </View>

          <View>
            <TextC font="medium" variant="h5" color={R.color.dark.gray3}>
              Availble Color: 6
            </TextC>
          </View>
        </View>
        <FlatList
          data={data}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => handelChangeVarient(index)}>
                <ImageBackground
                  source={{uri: item.varientImage}}
                  style={[
                    styles.varientCard,
                    currentSelected == index ? styles.activeVarientcard : null,
                  ]}
                />
              </TouchableWithoutFeedback>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Varients;

const styles = StyleSheet.create({
  varient: {
    padding: 20,
  },
  varientDataBold: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 14,
    color: '#000',
  },
  varientData: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: color.misc,
  },
  varientCard: {
    width: 80,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
  },
  activeVarientcard: {
    borderColor: color.primary,
    borderWidth: 3,
  },
});
