import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {requestTrendingSongs} from '../../service/api';
import {setFavouriteSongs} from '../../redux/actions/favoriteSongs';
import {connect} from 'react-redux';

const Home = ({dispatch, favouriteSongs}) => {
  useEffect(() => {
    getTrendingSongs();
  }, []);

  const getTrendingSongs = async () => {
    const {data} = await requestTrendingSongs();

    dispatch(setFavouriteSongs(data));
  };

  return (
    <SafeAreaView style={{flexGrow: 1}}>
      <ScrollView contentInsetAdjustmentBehavior="automatic"></ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  favouriteSongs: state.favouriteSongs,
});

function mapDispatchToProps(dispatch) {
  return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
