import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const Header = () => {
  return <>
    <View style={estilos.topo}>
      <Image source={require('../../../assets/images/logo1.png')} style={estilos.imagem} />
    </View>    
  </>
}

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
  },
  imagem: {
    width: imageWidth,
    height: 130,
  }
});

export default Header;