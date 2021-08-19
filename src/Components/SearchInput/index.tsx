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

export function SearchInput() {
  const [query, setQuery] = useState('');

  const handleSearch = async (query: string) => {
    const {data} = await requestSearchSongs(query);
    console.log('🚀 ~ file: index.tsx ~ line 22 ~ handleSearch ~ data', data);
    // dispatch(setFavouriteSongs(data)); TODO: ENVIAR PARA UM REDUCER QUE A PAGINA USARÁ
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
        {/* <Image source={checkIcon} /> styledComponnents pra icone de pesquisa*/}
      </TouchableOpacity>
    </View>
  );
}

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
