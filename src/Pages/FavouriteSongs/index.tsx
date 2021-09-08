import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {connect} from 'react-redux';
import List from '../../Components/List';
import {Header} from '../../Components/Header';

import styles from './styles';

const FavouriteSongs = ({favouriteSongs, state}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {favouriteSongs.length > 0 && (
        <View style={{backgroundColor: '#F5F4F8'}}>
          <List data={favouriteSongs && favouriteSongs} />
        </View>
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  favouriteSongs: state.favouriteSongs,
  state: state,
});

function mapDispatchToProps(dispatch) {
  return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteSongs);
