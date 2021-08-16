import React from 'react';
import {View, Text} from 'react-native';

// Os dados da música como (capa do álbum, título, cantor, duração);
// Um botão para acessar a musica completa no Deezer;
// Um botão de play/pause para escutar a prévia da música;
// Um botão para adicionar a música na lista de músicas favoritas;
import styles from './styles';

const ListItem = ({data, index}) => {
  return (
    <View key={index}>
      <Text>nome: {data.title}</Text>
      <Text>cantor: {data.artist.name}</Text>
      <Text>duração: {data.duration}</Text>
      <View style={styles.more} />
      <View style={styles.preview} />
      <View style={styles.addFavourites} />
    </View>
  );
};

export default ListItem;
