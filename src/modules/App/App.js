import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';
import BottomBar from './components/BottomBar';
import { connect } from 'react-redux'
import { postApiLocation } from './../Settings/action'


class App extends Component {

   //send Gps coordinate when success location
   onSuccess = (position) => {
        if(this.props.onGPS) {
            var payload = {};

            payload['Latitude'] = position.coords.latitude;
            payload['Longitude'] = position.coords.longitude;
            payload['Altitude'] = position.coords.altitude;
            payload['Accuracy'] = position.coords.accuracy;
            payload['AltitudeAccuracy'] = position.coords.altitudeAccuracy;
            payload['Heading'] = position.coords.heading;
            payload['Speed'] = position.coords.speed;
            payload['Timestamp'] = position.timestamp;

            const { dispatch } = this.props
            dispatch(postApiLocation(payload, 2))
        }
       };

    onError = (error) => {
        alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }

    sendGpsPosition = () => {
                  navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError, {
                    enableHighAccuracy: true
                  })
    }
   
    componentWillMount(){
     
      setInterval(() => {this.sendGpsPosition()}, 5000);
  }
 


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

export default connect((state) => ({
    onGPS : state.settings.onGPS
}))(App);

