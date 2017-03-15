import React from 'react';

import { ackApiAlert } from './../action'
import { connect } from 'react-redux'

import {Dialog, ListItem, Icon} from 'react-onsenui';
import './Alerts.css'

class Alert extends React.Component {
    state = {
        flag_display : false,
        iconAlert    : 'ion-email-unread',
    }

    showAlertDialog = () => {
         this.setState({flag_display : true})
    }

    hideAlertDialog = () =>{
        this.setState({flag_display : false})
    }


    NotDisplayCompleteAlert = () => {
        this.setState({flag_display : false})
    }

    sendAckChangeColor = () => {
        this.setState({iconAlert : 'ion-email'})
        const { dispatch, alert } = this.props;
        dispatch(ackApiAlert(alert._id))
        this.hideAlertDialog()
    }

    componentDidMount(){
        if(this.props.alert.ack){
            this.setState({iconAlert : 'ion-email'})
        } else {
            this.setState({iconAlert : 'ion-email-unread'})
        }
    }


    render() {
        const {alert} = this.props
        let display=this.state.flag_display
            return(
                <div>
                     <ListItem onClick={this.showAlertDialog}>
                        <div  className='Alert'>
                            <strong>{alert.title}</strong>
                        </div>
                        <div className='left'>
                            <Icon icon={this.state.iconAlert} size={30}/>
                        </div>
                     </ListItem>
                    

                    <Dialog
                            isOpen={this.state.flag_display}
                            isCancelable={true}>
                                <div className='alert-dialog-title'>{alert.title}</div>
                                <div className='alert-dialog-content'> {alert.body}</div>
                                <div className='alert-dialog-footer'>
                                    <button onClick={this.hideAlertDialog} className='alert-dialog-button'>
                                        Cancel
                                    </button>
                                    <button  onClick={this.sendAckChangeColor} className='alert-dialog-button'>
                                        Ok
                                    </button>
                                </div>
                    </Dialog>
              </div>


           )
    }
}
export default connect()(Alert);