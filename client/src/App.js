import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    coffeeShops: []
  };

  async componentDidMount() {
    const response = await fetch('/get');
    const body = await response;
    console.log(body)
  }

  render() {
    return (
      <div>
        <h2>Coffee Shop List</h2>
      </div>
    );
  }
}

export default App;