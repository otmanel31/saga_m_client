import React from 'react'
import { Switch } from 'react-onsenui'

class SettingPage extends React.Component {
    state = {
        checked : false
    }

    handleChange = (e) => {
      this.setState({checked: e.target.checked});
    }


    render(){
        return (
            <div>
                <p> {this.state.checked ? 'GPS position send every second' : 'GPS position disable'}</p>
                <Switch checked={this.state.checked} onChange={this.handleChange}/>

            </div>
        )
    }
}

export default SettingPage