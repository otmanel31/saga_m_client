import React from 'react'
import { Switch } from 'react-onsenui'
import { setGPS } from './action'
import { connect } from 'react-redux'

class SettingPage extends React.Component {

    handleChange = (e) => {
      const { dispatch } = this.props;
      dispatch(setGPS(e.target.checked))
    }


    
    render(){
        return (
            <div>
                <p> {this.props.onGPS ? 'GPS position sent every five second' : 'GPS position disable'}</p>
                <Switch checked={this.props.onGPS} onChange={this.handleChange}/>
            </div>
        )
    }
}

export default connect((state) => ({
    onGPS : state.settings.onGPS
}))(SettingPage)



   

