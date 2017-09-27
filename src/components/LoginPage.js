import React from 'react'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'
import { gql, graphql, compose } from 'react-apollo'

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: true, // switch between Login and SignUp
            email: '',
            password: '',
            name: ''
        };
        console.log(this.state);
    }
        //Inline IF logic   
        //See for more details: https://facebook.github.io/react/docs/conditional-rendering.html#inline-if-with-logical--operator
    
    render() {
        return (
            <div>
                <div className="loginTop">
                    <div className={this.state.login ? 'loginSelected' : 'loginUnselected'}
                         onClick={() => this.setState({ login: true })}
                    >Login</div>
                    <div className={!this.state.login ? 'loginSelected' : 'loginUnselected'}
                         onClick={() => this.setState({ login: false })}
                    >Sign up</div>
                </div>

                <div  className="loginArea">

                    <div className="loginSection">
                        Email :
                        <input
                            className="coolTextBox"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                            type='text'
                            placeholder='Your email address'
                        />
                    </div>
                    <div className="loginSection">
                        Password :
                        <input
                            className="coolTextBox"
                            value={this.state.password}
                            onChange={(e) => this.setState({ password: e.target.value })}
                            type='password'
                            placeholder='Choose a safe password'
                        />
                    </div>
                    {!this.state.login &&
                    <div className="loginSection">
                        User name:
                        <input
                            className="coolTextBox"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                            type='text'
                            placeholder='Your name'
                        />
                    </div>
                    }
                    <div className="loginSection forgotPassword">
                        <button className="loginButton"
                            onClick={() => this._saveUserData("1", "1")}
                        >
                            {this.state.login ? 'Login' : 'Create an account' }
                        </button>
                        {this.state.login &&
                        <a href="http://lmgtfy.com/?q=What+is+my+password%3F" className="loginSection">Forgot your password?</a>
                        }
                    </div>
                </div>
            </div>
        )
    }

    _confirm = async () => {
        const { name, email, password } = this.state
        if (this.state.login) {
            const result = await this.props.signinUserMutation({
            variables: {
                email,
                password
            }
            })
            const id = result.data.signinUser.user.id
            const token = result.data.signinUser.token
            this._saveUserData(id, token)
            } else {
            const result = await this.props.createUserMutation({
                variables: {
                    name,
                    email,
                    password
                }
            })
            const id = result.data.signinUser.user.id
            const token = result.data.signinUser.token
            this._saveUserData(id, token)
        }
        this.props.history.push(`/`)
    }

    _saveUserData = (id, token) => {
        localStorage.setItem(GC_USER_ID, id)
        localStorage.setItem(GC_AUTH_TOKEN, token)
        this.props.history.push(`/`)
    }

}

const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($name: String!, $email: String!, $password: String!) {
    createUser(
      name: $name,
      authProvider: {
        email: {
          email: $email,
          password: $password
        }
      }
    ) {
      id
    }

    signinUser(email: {
      email: $email,
      password: $password
    }) {
      token
      user {
        id
      }
    }
  }
`

const SIGNIN_USER_MUTATION = gql`
  mutation SigninUserMutation($email: String!, $password: String!) {
    signinUser(email: {
      email: $email,
      password: $password
    }) {
      token
      user {
        id
      }
    }
  }
`

export default compose(
  graphql(CREATE_USER_MUTATION, { name: 'createUserMutation' }),
  graphql(SIGNIN_USER_MUTATION, { name: 'signinUserMutation' })
)(LoginPage)