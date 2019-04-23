import React, { Component } from 'react';
import { FriendsListView } from './views';
import { AddFriendsView } from './views';
import './App.css';

// import FriendsForm from './components/FriendsForm';

class App extends Component {
  render() {
    return (
      <div className="App">
          <FriendsListView />
          <AddFriendsView />
      </div>
    );
  }
}

export default App;
