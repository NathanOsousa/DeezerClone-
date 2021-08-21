import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {requestTrendingSongs} from '../../Service/api';
import {setTrendingSongs} from '../../Redux/actions/trendingSongs';
import {connect} from 'react-redux';
import List from '../../Components/List';
import SearchInput from '../../Components/SearchInput';
import {Header} from '../../Components/Header';

import styles from './styles';

const Home = ({dispatch, searchedSongs, trendingSongs, currentList}) => {
  useEffect(() => {
    getTrendingSongs();
  }, []);
  const handleLists = () => {
    switch (currentList) {
      case 'trending':
        return trendingSongs;
      case 'search':
        return searchedSongs;

      default:
        return [];
    }
  };

  const getTrendingSongs = async () => {
    const {data} = await requestTrendingSongs();
    dispatch(setTrendingSongs(data));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchInput />
      <List data={handleLists()} />
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  searchedSongs: state.searchedSongs,
  trendingSongs: state.trendingSongs,
  currentList: state.currentList,
});

function mapDispatchToProps(dispatch) {
  return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
