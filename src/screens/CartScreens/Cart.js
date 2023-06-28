import {FlatList, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {wp, hp} from '../../components/Responsive';
import StepIndicator from 'react-native-step-indicator';
import ScrollContainer from '../../components/ScrollComponent';
import {Header} from '../Profile/MyCoupons/MyCoupons';
import Accordion from 'react-native-collapsible/Accordion';
import {vs} from 'react-native-size-matters';
import {SvgXml} from 'react-native-svg';
import { CartArrowUp, CartArrowDown, DeleteIcon, ArrowUp } from '../../assets/SVG';


const CountIncreaseComponent = () => {
  const [count, stCount ]= useState(0)
  return (
    <>
      <TouchableOpacity
      activeOpacity={0.8}
      onPress={()=>{
        if(count!==0)  stCount(state=>state-1)
      }}
        style={{
          padding: 5,
          height: 22,
          width: 22,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          borderWidth: 0.7,
        }}>
        <SvgXml xml={CartArrowUp} />
      </TouchableOpacity>
      <Text style={{width: '20%', textAlign: 'center'}}>{count}</Text>
      <TouchableOpacity
      activeOpacity={0.8}
       onPress={()=>{
        stCount(state=>state+1)
      }}
        style={{
          padding: 5,
          height: 22,
          width: 22,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          borderWidth: 0.7,
        }}>
        <SvgXml xml={CartArrowDown} />
      </TouchableOpacity>
    </>
  );
};

const LayoutCard = () => {
  return (
    <View
      style={{
        height: 120,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: wp(5),
        shadowColor: '#8c8c8c',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 7,
        overflow: 'hidden',
        flexDirection: 'row',
        padding: 10,
      }}>
      <Image
        source={{
          uri: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
        }}
        style={{
          height: '100%',
          width: 108,
          borderRadius: 12,
        }}
      />
      <View style={{paddingLeft: 15}}>
        <Text style={{width: wp(52), fontSize: vs(10), fontWeight:'500'}}>
          Women Jumpsuit Pattern Design Cover Up
        </Text>
        <Text style={{marginTop: 10, fontSize: vs(11), fontWeight: '900'}}>
          Rs 499 <Text style={{color:'#666666', fontSize:vs(10), textDecorationLine:'line-through'}}> Rs. 799</Text>
          <Text style={{color:'#EC303A', fontSize:vs(11), textDecorationLine:'line-through'}}> ( 30% off )</Text>{' '}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            marginTop: '6%',
            alignItems: 'center',
          }}>
          <CountIncreaseComponent />
        </View>

        <View
          style={{
            position: 'absolute',
            right: '-5%',
            padding: 4,
            borderRadius: 20,
            borderWidth: 0.7,
            bottom: 0,
          }}>
          <SvgXml xml={DeleteIcon} />
        </View>
      </View>

      {/*
       */}
    </View>
  );
};

const AccordionLayout = ({title, style}) => {
  const [activeaAccordion, setActiveAccordion] = useState(1);
  const AccordionHeader = () => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          paddingHorizontal: 20,
          alignItems:'center',
          justifyContent:'space-between'
        }}>
        <Text style={{paddingVertical: 12, fontWeight:'500'}}>{title}</Text>
        <SvgXml xml={ArrowUp} />
      </View>
    );
  };

  const RowCardLayout = () => (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View
        style={{
          height: 63,
          width: 60,
          overflow: 'hidden',
          backgroundColor: 'yellow',
          borderRadius: 5,
        }}>
        <Image
          style={{height: '100%', width: '100%'}}
          source={{
            uri: 'https://www.shutterstock.com/image-photo/indian-traditional-wedding-jewellery-bangles-260nw-363281924.jpg',
          }}
        />
      </View>
      <View style={{paddingHorizontal: 5, paddingTop: 5}}>
        <Text numberOfLines={1} style={{fontSize: vs(8)}}>
          Women Jumpsuit
        </Text>
        <Text style={{fontSize: vs(9), fontWeight: '900', marginVertical: 1}}>
          Rs. 299 <Text style={{color:'#EC303A'}} >( 30% off )</Text>
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: vs(8)}}>Add to Cart</Text>
      </View>
    </View>
  );

  const Content = () => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          paddingBottom: 24,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 12,
            marginHorizontal: 12,
            alignSelf: 'center',
          }}>
          <RowCardLayout />
          <RowCardLayout />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            marginHorizontal: 12,
            alignSelf: 'center',
          }}>
          <RowCardLayout />
          <RowCardLayout />
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        marginHorizontal: wp(5),
        elevation: 8,
        borderRadius: 10,
        overflow: 'hidden',
        ...style,
      }}>
      <Accordion
        activeSections={[activeaAccordion]}
        sections={['Section 1']}
        renderHeader={AccordionHeader}
        renderContent={Content}
        onChange={change => setActiveAccordion(change[0])}
      />
    </View>
  );
};


export const StepCounter=()=>{
    return(
        <StepIndicator
        customStyles={customStyles}
        stepCount={4}
        currentPosition={1}
        labels={labels}
      />
    )
}


export default function Cart() {
  return (
    <ScrollContainer header={<Header title="Cart" />}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
       <StepCounter/>
        <FlatList
          data={[1, 2, 3]}
          ListFooterComponent={<View style={{height: 20}} />}
          renderItem={LayoutCard}
        />

        <AccordionLayout title="My WishList" />

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: vs(13),
            marginLeft: wp(6),
            marginTop: 28,
            marginBottom:9
          }}>
          You May Also Like
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={[1, 2, , 2, 2, 22, 2]}
          style={{marginLeft: wp(3), marginTop: 14}}
          renderItem={({item, index}) => (
            <View
              style={{
                height: vs(190),
                width: wp(32),
                borderRadius: 10,
                marginLeft: 10,
                overflow: 'hidden',
              }}>
              <View
                style={{height: '63%', borderRadius: 10, overflow: 'hidden'}}>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn5WtCG7fO-PItTDuPjyugbOSDqwfEr65URAABd1hDbg&s',
                  }}
                  style={{height: '100%', width: '100%'}}
                />
              </View>
              <Text style={{marginTop:3, fontSize: vs(8), marginLeft:2, fontWeight:'500'}}>Women jumpsuit</Text>
              <Text style={{fontSize: vs(8), marginLeft:2, fontWeight:'500'}}>Pattern Design Cover Up</Text>
              <Text style={{fontSize: vs(8), marginLeft:2, fontWeight:'900'}}>Rs. <Text style={{color:'#EC303A'}} >( 30% off )</Text></Text>
              <View
                style={{
                  justifyContent: 'center',
                  borderRadius: 2,
                  marginTop: 3,
                  alignItems: 'center',
                  paddingVertical: 5,
                  backgroundColor: 'red',
                }}>
                <Text
                  style={{fontSize: vs(9), fontWeight: '900', color: 'white'}}>
                  ADD TO CART
                </Text>
              </View>
            </View>
          )}
        />
        <AccordionLayout style={{marginTop: hp(4)}} title="Apply Coupon" />

        <View style={{marginHorizontal: wp(5), marginTop: hp(5)}}>
          <Text style={{fontSize: vs(14), fontWeight: '900', color: 'black'}}>
            Price Details
          </Text>
          <Text style={{marginTop: 10, fontSize: vs(11)}}>
            Price Details ( 3 Items ){' '}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{marginTop: 17}}>Total Price</Text>
              <Text style={{fontWeight: 'bold', marginTop: 8}}>
                Order Total
              </Text>
            </View>
            <View>
              <Text style={{marginTop: 17}}>+ Rs. 1287</Text>
              <Text
                style={{fontWeight: 'bold', textAlign: 'right', marginTop: 8}}>
                Rs. 1287
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{height: 300}} />
    </ScrollContainer>
  );
}
const labels = ['Cart', 'Address', 'Payment', 'Summary'];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: '#7FAA39',
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: '#D9D9D9',
  stepStrokeUnFinishedColor: '#D9D9D9',
  separatorFinishedColor: '#D9D9D9',
  separatorUnFinishedColor: '#D9D9D9',
  stepIndicatorFinishedColor: '#D9D9D9',
  stepIndicatorUnFinishedColor: '#D9D9D9',
  stepIndicatorCurrentColor: '#7FAA39',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: 'white',
  stepIndicatorLabelFinishedColor: 'black',
  stepIndicatorLabelUnFinishedColor: 'black',
  labelColor: 'black',
  labelSize: 13,
  currentStepLabelColor: 'black',
};