import React from 'react';
import Alert from './Alert'
import { fetchApiAlert } from './action'
import { connect } from 'react-redux'


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
            return(<div className='listAlert'>
                    {alerts.map((alert, index) => (
                        <Alert 
                            key={index} 
                            alert={alert}
                        />       
                    ))}
                   </div>)
    }
}

export default connect((state) => ({
    alerts : state.alerts.alerts
}))(AlertPage);