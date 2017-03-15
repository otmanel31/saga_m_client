import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { login } from './actions'

class LoginPage extends React.Component {

    handleLoginRequest = (event) => {
        event.preventDefault()
        
        // Manage redirection after success
        const { location } = this.props
        let redirect = '/'
        if (location.state && location.state.nextPathname) {
            redirect = location.state.nextPathname
        }

        // Dispatch login request
        this.props.login(event.target.email, event.target.password)
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleLoginRequest}>
                <label><input ref="email" placeholder="email" defaultValue="joe@example.com" /></label>
                <label><input ref="password" placeholder="password" /></label> (hint: password1)<br />
                <button type="submit">login</button>
            </form>
            {this.props.statusText && <div>ERROR : {statusText}</div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticating: state.auth.isAuthenticating,
    statusText: state.auth.statusText,
    isAuthenticated: state.auth.isAuthenticated
})


const mapDispatchToProps = (dispatch) => {
  login : (email, password, redirect) => {
      dispatch(login(email, password, redirect))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage))