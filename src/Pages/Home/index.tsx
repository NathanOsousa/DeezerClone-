import React, {useEffect} from 'react';
import {SafeAreaView, Dimensions, View} from 'react-native';
import {requestTrendingSongs} from '../../Service/api';
import {setTrendingSongs} from '../../Redux/actions/trendingSongs';
import {connect} from 'react-redux';
import List from '../../Components/List';
import SearchInput from '../../Components/SearchInput';
import {Header} from '../../Components/Header';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import styles from './styles';

const Home = ({dispatch, searchedSongs, trendingSongs, currentList}) => {
  const {height} = Dimensions.get('window');
  const tabBarHeight = useBottomTabBarHeight();
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
    <SafeAreaView style={[styles.container, {height: height - tabBarHeight}]}>
      <Header />

      <View style={{backgroundColor: '#F5F4F8'}}>
        <SearchInput />
        <List data={handleLists()} />
      </View>
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
