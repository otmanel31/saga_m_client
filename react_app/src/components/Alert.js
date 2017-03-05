import React from 'react';

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

    handleChangeColor = (alertId) => {
        this.setState({colorAlert : 'AlertAck'})
        this.props.sendAckAlert(alertId)
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
                    sendAckAlert={this.handleChangeColor}
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


class SimpleAlert extends React.Component {
    render () {
        const title = this.props.title
        return (
          <div  className='SimpleAlert' onClick={this.props.onDisplayCompleteAlert}>
            <strong>{title}</strong>
          </div>
        )
    }
}


class CompleteAlert extends React.Component {
    sendAck = () => {
       this.props.sendAckAlert(this.props.alert._id) 
    }
    render () {
        const {alert} = this.props
        return (
            <div className='CompleteAlert'>
                <div className="titleAlert">{alert.title}</div>
                <div className="bodyAlert">{alert.body}</div>
                <button className="ButtonAlertLeft" onClick={this.sendAck}>OK</button>
                <button className="ButtonAlertRight" onClick={this.props.NotDisplayCompleteAlert}>CANCEL</button>
            </div>
        )
    }
}


export default Alert;