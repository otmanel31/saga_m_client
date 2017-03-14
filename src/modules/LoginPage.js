import React from 'react';
import { withRouter } from 'react-router'

class LoginPage extends React.Component {
    redirectOnSuccess = () =>  {
        /*
            Manage authentication success
        */
        const { location } = this.props

        if (location.state && location.state.nextPathname) {
            this.props.router.replace(location.state.nextPathname)
        } else {
            this.props.router.replace('/')
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        // TODO dispatch auth token
        this.redirectOnSuccess() 
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label><input ref="email" placeholder="email" defaultValue="joe@example.com" /></label>
                <label><input ref="pass" placeholder="password" /></label> (hint: password1)<br />
                <button type="submit">login</button>
            </form>
        )
    }
}

//export default LoginPage
export default withRouter(LoginPage)