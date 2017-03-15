import React from 'react';
import Alert from './components/Alert'
import { fetchApiAlert } from './action'
import { connect } from 'react-redux'
import './components/Alerts.css'

import { List, ListHeader } from 'react-onsenui'


class AlertPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
             data: [],
        };
    }

    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(fetchApiAlert())
    }

    render() {
        const alerts = this.props.alerts;
            return(
                  
                  <List>
                        {alerts.map((alert, index) => (
                        <Alert 
                            key={index} 
                            alert={alert}
                        />       
                    ))}
                  </List>
            )
    }
}

export default connect((state) => ({
    alerts : state.alerts.alerts
}))(AlertPage);