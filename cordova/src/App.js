import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    const children = this.props.children;
    return (
      <div className="App">
        <div className="App-header">
          <h2>SAGA</h2>
          <Link to="/menu">MENU</Link>
          {children}
        </div>
      </div>
    );
  }
}

export default App;
