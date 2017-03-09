import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router'

class App extends Component {
  render() {
    const children = this.props.children;
    return (
      <div className="App">
        <div className="App-header">
          <h2>SAGA</h2>
        </div>
        <div>
            <Link to={'/menu'}>
                <div>Menu</div>
            </Link>
           {children}
        </div>
      </div>
    );
  }
}

export default App;
