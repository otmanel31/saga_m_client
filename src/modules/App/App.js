import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';
import BottomBar from './components/BottomBar';


class App extends Component {
  render() {
    const children = this.props.children;
    return (
      <div className="App">
        <div className="App-header">
          <h2>SAGA</h2>
        </div>
        <div>
            {children}
        </div>
        <BottomBar />
      </div>
    );
  }
}

export default App;
