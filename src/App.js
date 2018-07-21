import React from 'react';
import { View, Text, WebView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import VideoSection from './components/VideoSection';

const App = () => {
    

    return (
        <View style={{flex: 1}}>
            <Header headerText="Video Player" />
            <VideoSection />
        </View>
    );
};

export default App;