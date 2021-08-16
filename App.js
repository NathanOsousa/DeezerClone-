import React from 'react';
import {Provider} from 'react-redux';
import songsReducer from './src/redux/reducer/index';
import {createStore} from 'redux';
import {HomePage} from './src/Pages';
const store = createStore(songsReducer);

const App = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;
