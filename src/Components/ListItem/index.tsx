import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';

// Os dados da música como (capa do álbum, título, cantor, duração);
// Um botão para acessar a musica completa no Deezer;
// Um botão de play/pause para escutar a prévia da música;
// Um botão para adicionar a música na lista de músicas favoritas;
import styles from './styles';
const play_button = require('../../Assets/Images/play_button.png');

interface ItemProps {
  data: {
    title: string;
    artist: {
      name: string;
    };
    duration: number;
    id: number;
    album: {
      cover_medium: string;
    };
  };
  key?: number;
}

const ListItem = ({data, key}: ItemProps) => {
  return (
    <View style={styles.container} key={data.id}>
      <View style={styles.content}>
        <Pressable
          onPress={() => {
            /*play preview*/
          }}>
          <Image source={play_button} style={styles.image} />
        </Pressable>
        <View style={styles.textContainer}>
          <Text style={styles.text}>nome: {data.title.slice(0, 450)}</Text>
          <Text style={styles.text}>
            cantor: {data.artist.name.slice(0, 50)}
          </Text>
          <Text style={styles.text}>duração: {data.duration}</Text>
        </View>
        <Pressable
          onPress={() => {
            // add to favourites
          }}>
          <Image
            source={{uri: data?.album?.cover_medium}}
            style={styles.image}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default ListItem;
