import React from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import List from '../../Components/List';
import {Header} from '../../Components/Header';

import styles from './styles';

const FavouriteSongs = ({favouriteSongs}) => {
  return (
    <SafeAreaView style={styles.container}>
      <List data={favouriteSongs && favouriteSongs} />
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  favouriteSongs: state.favouriteSongs,
});

function mapDispatchToProps(dispatch) {
  return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteSongs);
