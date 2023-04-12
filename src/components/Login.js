import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            username: '',
            password: ''
        }
    }
    
    usernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    passwordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        const { username, password } = this.state;
        return (
            <div className='container'>
                <div className='login-card-space'>
                    <div className='login-card'>
                        <h1>LOGIN</h1>
                        <form className='form-itm'>
                            <input
                                type='text'
                                value={username}
                                onChange={this.usernameChange}
                                placeholder='username'
                            />
                            <div className='password-itm'>
                                <input
                                    type='password'
                                    value={password}
                                    onChange={this.passwordChange}
                                    placeholder='password'
                                />
                                <div className='link-forgot'>
                                    <a href='#'>forgot password?</a>
                                </div>

                            </div>
                        </form>
                        <button className='button'>LOGIN</button>
                        <div className='create-account-tag'>
                            Don't have an account? <a href='#'><span>Sign Up</span></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
