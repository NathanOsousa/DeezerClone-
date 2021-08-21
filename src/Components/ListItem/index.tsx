import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {setFavouriteSongs} from '../../Redux/actions/favoriteSongs';
import {connect} from 'react-redux';
import TrackPlayer from 'react-native-track-player';

// Os dados da música como (capa do álbum, título, cantor, duração);
// Um botão para acessar a musica completa no Deezer;
// Um botão de play/pause para escutar a prévia da música;
// Um botão para adicionar a música na lista de músicas favoritas;
import styles from './styles';
const play_button = require('../../Assets/Images/play_button.png');
const favourite = require('../../Assets/Images/favourite.png');
const favouriteOff = require('../../Assets/Images/favouriteOff.png');

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
      title: string;
    };
    preview: string;
  };
  key?: number;
  dispatch: any; // TODO: mapear método
}

const ListItem = ({data, key, dispatch}: ItemProps) => {
  const [wasPressed, setWasPressed] = useState(false);
  const handleAddToFavourites = async () => {
    // TODO: Remover da lista
    await dispatch(setFavouriteSongs([data]));
    setWasPressed(!wasPressed);
  };
  const handlePlayPreview = async () => {
    await TrackPlayer.setupPlayer();

    var track = {
      url: data.preview,
      title: data.title,
      artist: data.artist.name,
      album: data.album.title,
    };

    await TrackPlayer.add(track);
    await TrackPlayer.play();
  };
  return (
    <View style={styles.container} key={data.id}>
      <View style={styles.content}>
        <View>
          <Image
            source={{uri: data?.album?.cover_medium}}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>nome: {data.title.slice(0, 450)}</Text>
          <Text style={styles.text}>
            cantor: {data.artist.name.slice(0, 50)}
          </Text>
          <Text style={styles.text}>duração: {data.duration}</Text>
        </View>
        <Pressable onPress={handlePlayPreview}>
          <Image source={play_button} style={styles.image} />
        </Pressable>
        <Pressable
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={handleAddToFavourites}>
          <Image
            source={!wasPressed ? favourite : favouriteOff}
            style={styles.imageRectangular}
          />
        </Pressable>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({});

function mapDispatchToProps(dispatch) {
  return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
