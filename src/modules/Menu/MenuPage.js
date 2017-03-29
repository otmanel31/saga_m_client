import React from 'react';
import ButtonMenu from './ButtonMenu'
import { Link } from 'react-router'

class MenuPage extends React.Component {
    renderTabs = () => {
        return [
                    {
                        content: <SettingsPage />,
                        tab: <Tab label='Settings' icon='md-settings' />
                    }
                ]
    }


    render() {

        return(<div className="menu">
            <Link to={'/alerts'}>
                <ButtonMenu texte={"ALERTS"} icons='ion-android-notifications'/>
            </Link>

            <Link to={'/events'}>
                <ButtonMenu texte={"EVENTS"} icons='ion-android-warning'/>
            </Link>

            <Link to={'/messages'}>
                <ButtonMenu texte={"MESSAGES"} icons='ion-android-chat'/>
            </Link>

        </div>)
    }
}

export default MenuPage;