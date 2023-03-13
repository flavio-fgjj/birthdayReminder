import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import useBirthdays from 'src/hooks/useBirthdays';
import Birthday from './components/Birthday';

import Header from './components/Header';

const Home = () => {
  const list = useBirthdays();

  const MyHeader = () => {
    return <Header />
  }

  return <FlatList
    data={list}
    renderItem={
      ({ item }) => <Birthday {...item} onPress={() => {}}/>
    }
    keyExtractor={({ name }) => name}
    ListHeaderComponent={MyHeader}
    style={estilos.list} />
};

const estilos = StyleSheet.create({
  list: {
    backgroundColor: '#ffffff',
  }
});

export default Home;