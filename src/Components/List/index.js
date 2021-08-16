import React from 'react';
import {View, FlatList} from 'react-native';
import ListItem from '../ListItem';

// import { Container } from './styles';

const List = ({data}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={index => index}
      renderItem={({item, index}) => {
        console.log('🚀 ~ file: index.js ~ line 16 ~ List ~ index', index);
        return <ListItem data={item} index={index} />;
      }}
      contentContainerStyle={{
        flexGrow: 1,
        padding: 20,
        justifyContent: 'space-between',
      }}
    />
  );
};

export default List;
