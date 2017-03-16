import React from 'react'
import { BottomToolbar, Icon } from 'react-onsenui'
import { Link } from 'react-router'
import './BottomBar.css'

class BottomBar extends React.Component {
    render(){
        return (
         <BottomToolbar modifier='BarBottom'> 
             <div className='container'>

                <Link to="/menu">
                    <Icon icon='md-home' size={30}></Icon>
                </Link>

                <Link to="/settings">
                    <Icon icon='md-settings' size={30}></Icon>                    
                </Link>
             </div>

        </BottomToolbar>
        )
    }
}

export default BottomBar