import React from 'react';
import './ButtonMenu.css';

class ButtonMenu extends React.Component {
    render() {
        return(
         <div className='ButtonMenu'>
            {this.props.texte}
        </div>
        )
    }
}

export default ButtonMenu;