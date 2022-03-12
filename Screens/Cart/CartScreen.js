import React from 'react';
import {View, Text} from 'react-native';
import MainHeader from '../../Components/MainHeader';
const CartScreen = props => {
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
      <MainHeader back onBack={() => props.navigation.navigate('homeScreen')} />
      <Text>CartScreen</Text>
    </View>
  );
};
export default CartScreen;
