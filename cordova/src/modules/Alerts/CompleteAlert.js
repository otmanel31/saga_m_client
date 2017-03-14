import React from 'react';


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

export default CompleteAlert    