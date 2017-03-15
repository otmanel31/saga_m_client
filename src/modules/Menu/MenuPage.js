import React from 'react';
import ButtonMenu from './ButtonMenu'
import { Link } from 'react-router'

class MenuPage extends React.Component {
    render() {
        return(<div className="menu">
            <Link to={'/alerts'}>
                <ButtonMenu texte={"ALERTS"}/>
            </Link>

            <Link to={'/events'}>
                <ButtonMenu texte={"EVENTS"}/>
            </Link>

            <Link to={'/messages'}>
                <ButtonMenu texte={"MESSAGES"}/>
            </Link>

        </div>)
    }
}

export default MenuPage;