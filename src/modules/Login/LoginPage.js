import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { login } from './actions'
import { push } from 'react-router-redux'
import { Input, Button} from 'react-onsenui' 
import './login.css'

class LoginPage extends React.Component {

    handleLoginRequest = (event) => {
        event.preventDefault()
        
        const { location, dispatch } = this.props
        const name = ReactDOM.findDOMNode(this.refs.name).value;
        const password = ReactDOM.findDOMNode(this.refs.password).value;

        // Manage redirection after success
        let redirect = '/'
        if (location.state && location.state.nextPathname) {
            redirect = location.state.nextPathname
        }

        // Dispatch login request
        dispatch(login(name, password, redirect))
    }
    render() {
        return (
            <div className='formlogin'>
                <form>
                    <p>
                        <label className='left'><Input className='center' ref="name" placeholder="name" modifier='underbar material' float value="foo" /></label>
                    </p>
                    <p>
                        <label className='left'><Input className='center' ref="password" placeholder="password" modifier='underbar material'  float /></label>
                    </p>
                    <p>
                        (hint: bar)<br />
                    </p>
                    <Button  className='center' onClick={this.handleLoginRequest}>login</Button>
                </form>
                {this.props.statusText && <div>{this.props.statusText}</div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticating: state.auth.isAuthenticating,
    statusText: state.auth.statusText,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(LoginPage)