import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (

//flex: 1 may not be ncessary anymore, maybe for Android though, iOS scrolls correctly
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// import { AppRegistry } from 'react-native';
// import App from './App';

AppRegistry.registerComponent('albums', () => App);
