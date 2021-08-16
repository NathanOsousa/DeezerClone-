import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {requestTrendingSongs} from '../../Service/api';
import {setFavouriteSongs} from '../../Redux/actions/favoriteSongs';
import {connect} from 'react-redux';
import List from '../../Components/List';

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
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
      <List data={favouriteSongs} />
      {/* </ScrollView> */}
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
