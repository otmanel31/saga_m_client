import React from 'react';
import { connect } from 'react-redux';
import { login } from './actions'
import { push } from 'react-router-redux'

class LoginPage extends React.Component {

    handleLoginRequest = (event) => {
        event.preventDefault()
        const { location, dispatch } = this.props

        // Manage redirection after success
        let redirect = '/'
        if (location.state && location.state.nextPathname) {
            redirect = location.state.nextPathname
        }

        // Dispatch login request
        dispatch(login(event.target.email, event.target.password, redirect))
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleLoginRequest}>
                    <label><input ref="email" placeholder="email" defaultValue="joe@example.com" /></label>
                    <label><input ref="password" placeholder="password" /></label> (hint: password1)<br />
                    <button type="submit">login</button>
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