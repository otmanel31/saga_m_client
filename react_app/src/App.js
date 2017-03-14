import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const children = this.props.children;
    return (
      <div className="App">
        <div className="App-header">
          <h2>SAGA</h2>
          {this.props.children}
        </div>
        <div>
           {children}
        </div>
      </div>
    );
  }
}

export default App;
