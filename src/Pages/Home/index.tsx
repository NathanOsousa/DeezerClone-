import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {requestTrendingSongs, requestSearchSongs} from '../../Service/api';
import {setFavouriteSongs} from '../../Redux/actions/favoriteSongs';
import {connect} from 'react-redux';
import List from '../../Components/List';
import SearchInput from '../../Components/SearchInput';
import {Header} from '../../Components/Header';

import styles from './styles';

const Home = ({dispatch, favouriteSongs, searchedSongs}) => {
  useEffect(() => {
    getTrendingSongs();
  }, []);

  const getTrendingSongs = async () => {
    const {data} = await requestTrendingSongs();
    dispatch(setFavouriteSongs(data));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchInput />
      <List data={favouriteSongs && favouriteSongs} />
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  favouriteSongs: state.favouriteSongs,
  searchedSongs: state.searchedSongs,
});

function mapDispatchToProps(dispatch) {
  return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
