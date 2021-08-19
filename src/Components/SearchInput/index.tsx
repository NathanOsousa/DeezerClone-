import React, {useState} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {requestSearchSongs} from '../../Service/api';
import {connect} from 'react-redux';
import {setSearchedSongs} from '../../Redux/actions/searchedSongs';

const search_icon = require('../../Assets/Images/search_icon.png');

function SearchInput({dispatch}) {
  const [query, setQuery] = useState('');

  const handleSearch = async (query: string) => {
    const {data} = await requestSearchSongs(query);
    dispatch(setSearchedSongs(data));
  };

  return (
    <View
      style={[
        styles.inputContainer,
        Platform.OS === 'ios'
          ? styles.inputIOSShadow
          : styles.inputAndroidShadow,
      ]}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar música, artista etc ..."
        placeholderTextColor={'#212136'}
        returnKeyType="send"
        onChangeText={item => setQuery(item)}
        value={query}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={() => handleSearch(query)}>
        <Image source={search_icon} />
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => ({
  favouriteSongs: state.favouriteSongs,
});

function mapDispatchToProps(dispatch) {
  return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#413A6F',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    elevation: 5,
  },
  addButton: {
    backgroundColor: '#9347CA',

    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
