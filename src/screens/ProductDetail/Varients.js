import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from "react-native";
import React from "react";
import { color } from "../../config/color";

const Varients = ({ data,changeVarient,currentSelected }) => {

    const [currentVarient,setCurrentVarient] = React.useState(currentSelected);

    const handelChangeVarient = (index) => {
        setCurrentVarient(index);
        changeVarient(index);
    }

  return (
    <SafeAreaView>
      <View style={styles.varient}>
        <View style={{flexDirection:'row', alineItem:'center', justifyContent:'space-between', marginBottom:10}}>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.varientData}>Color: </Text>
            <Text style={styles.varientDataBold}>Red Wine</Text>
          </View>

          <View>
            <Text style={styles.varientData}>Availble Color: {6}</Text>
          </View>
        </View>
        <FlatList
          data={data}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item,index }) => {
            return (
                <TouchableWithoutFeedback onPress={ ()=>handelChangeVarient(index) } >
                    <ImageBackground
                        source={{ uri: item.varientImage }}
                        style={[styles.varientCard, currentVarient == index ? styles.activeVarientcard : null]}
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
    fontFamily: "PoppinsSemiBold",
    fontSize: 14,
    color: '#000',
  },  
  varientData: {
    fontFamily: "Poppins",
    fontSize: 14,
    color: color.misc,
},
    varientCard: {
    width: 80,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  activeVarientcard: {
    borderColor: color.primary,
    borderWidth: 3,
  },
});
