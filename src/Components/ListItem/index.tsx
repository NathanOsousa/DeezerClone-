import React, {useState, useEffect} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {setFavouriteSongs} from '../../Redux/actions/favoriteSongs';
import {connect} from 'react-redux';
import TrackPlayer from 'react-native-track-player';
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
  const [duration, setDuration] = useState('');
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

  useEffect(() => {
    if (data.duration >= 99) {
      const firstPart = data.duration.toString()[0];

      const finalString = `${firstPart}:${data.duration
        .toString()
        .slice(1, 3)}`;
      setDuration(finalString);
    } else {
      const finalString = `0:${data.duration.toString().slice(0, 3)}`;
      setDuration(finalString);
    }
  }, []);
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
          <Text style={styles.text}>{data.title.slice(0, 450)}</Text>
          <Text style={styles.text}>{data.artist.name.slice(0, 50)}</Text>

          <Text style={styles.text}>{duration}</Text>
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
