import React, { Component } from "react";

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.login = this.login.bind(this)
    }
    changeUsername(e) {
        this.setState({username: e})
    }
    changePassword(e) {
        this.setState({password: e})
    }
    login() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }
    render() {
        return (
            <div>
                <input placeholder='Username' onChange={(e) => this.changeUsername(e.target.value)}></input>
                <input placeholder='Password' onChange={(e) => this.changePassword(e.target.value)}></input>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default Login;