import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';

const App = () => {
  return (
      <View>
        <Header headerText="Video Player" />
      </View>
  )
}

export default App;