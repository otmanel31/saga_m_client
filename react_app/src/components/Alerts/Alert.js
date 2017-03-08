import React from 'react';

import CompleteAlert from './CompleteAlert'
import SimpleAlert from './SimpleAlert'

import { ackApiAlert } from './action'
import { connect } from 'react-redux'

class Alert extends React.Component {
    state = {
        flag_display : false,
        colorAlert   : 'AlertNoAck'
    }



    onDisplayCompleteAlert = () => {
        this.setState({flag_display : true})
    }

    NotDisplayCompleteAlert = () => {
        this.setState({flag_display : false})
    }

    sendAckChangeColor = (alertId) => {
        this.setState({colorAlert : 'AlertAck'})
        const { dispatch } = this.props;
        dispatch(ackApiAlert(alertId))
    }

    componentDidMount(){
        if(this.props.alert.ack){
            this.setState({colorAlert : 'AlertAck'})
        } else {
            this.setState({colorAlert : 'AlertNoAck'})
        }
    }

    render() {
  
        const {alert} = this.props
        let display=this.state.flag_display
        if(display){
            return(
                <div className={this.state.colorAlert}>
                     <CompleteAlert 
                        alert={alert}
                        NotDisplayCompleteAlert={this.NotDisplayCompleteAlert}
                        sendAckAlert={this.sendAckChangeColor}
                    />  
                </div>
            )
        } else {
            return(
                <div className={this.state.colorAlert}>
                    <SimpleAlert 
                        title={alert.title}
                        onDisplayCompleteAlert={this.onDisplayCompleteAlert}
                    />
                </div>
           )
        }
    }
}


export default connect()(Alert);