import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {

  //1) Set default/initial State
  //2) Tell comonenent state to update upon fetching data
  //3) Make Use fo State

  //PROPS is for communicating from a parent compnenet to a child component
  //STATE is for a compnents internal record keeping

  state = { albums: [] };

  componentWillMount() {
    console.log('componentWillMount IN ALBUM LIST');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      // .then(response => console.log(response));
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    //MAP is an array helper
    //Would typically use ID here instead of {album.title}
    return this.state.albums.map(album =>
      // <Text key={album.title}>{album.title}</Text>);
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
