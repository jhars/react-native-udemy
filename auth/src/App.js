import React, { Component } from 'react';
import { View } from 'react-native';
//above any import statemtn for stuff that we write (i.e. explicit/custom file path imports)
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection, Card } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAjUQFnbrC2PI1z97sftXRX06ce2_WBKcM',
      authDomain: 'authentication-5052c.firebaseapp.com',
      databaseURL: 'https://authentication-5052c.firebaseio.com',
      projectId: 'authentication-5052c',
      storageBucket: 'authentication-5052c.appspot.com',
      messagingSenderId: '623969335029'
    });


    //onAuthStateChanged => is an Event Handler that "Accepts" a function
    //below METHOD
    //CALLED with single argument: ('user' object) -- fatArrowFunction
    // (user) lets us
    //when auth state changes,
      //if user signed i
    //if singed out will be null or undefined, { depth: null }));
    //we can look at this argument to decide whether or not a user has signed out
    //then DO...
    //CONDTIONALLY SHOW some JSX On The Device
    //SOlved by using Component-Level State
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
            </CardSection>
          </Card>

        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
// AppRegistry.registerComponent('auth', () => App);
