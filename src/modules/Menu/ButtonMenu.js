import React from 'react';
import './ButtonMenu.css';
import { Icon } from 'react-onsenui'

class ButtonMenu extends React.Component {
    render() {
        return(
         <div className='ButtonMenu'>
            <div className='divText'>{this.props.texte}</div>
            <div className='divIcon'><Icon icon={this.props.icons}></Icon></div>
        </div>
        )
    }
}

export default ButtonMenu;