import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './Login.css'
import SignupForm from './SignUp'
import createBrowserHistory from 'history/createBrowserHistory';


//const history = createBrowserHistory();

class LoginForm extends Component {
   
        
  state = {
    username: '',
    password: '',
    name: '',
    showSubmitError: false,
    errorMsg: '',
    signUpusername:'',
    signUppassword:''
  }

    
  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeSignUpUsername = event => {
    this.setState({signUpusername: event.target.value})
  }

  onChangeSignUpPassword = event => {
    this.setState({signUppassword: event.target.value})
  }

  onChangeName= event =>{
    this.setState({name: event.target.value})
  }

  onSubmitSuccess = () => {
      this.props.signIn();
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
  
    const {username, password} = this.state
    const userDetails = {username, password}
    const storagePassword=localStorage.getItem(username);
    
    if (this.state.password+""===storagePassword) {
        console.log("Login successful");
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure("Please signup")
    }
  }
  renderSignUpPasswordField = () => {
    const {signUppassword} = this.state
    return (
      <>
      <td>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        </td>
        <td>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={signUppassword}
          onChange={this.onChangeSignUpPassword}
          placeholder="Password"
        />
        </td>
      </>
    )
  }

  renderSignUpUsernameField = () => {
    const {signUpusername} = this.state
    return (
      <>
      <td>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        </td>
        <td>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={signUpusername}
          onChange={this.onChangeSignUpUsername}
          placeholder="Username"
        />
        </td>
      </>
    )
  }


  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
      <td>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        </td>
        <td>
        <input  
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
        </td>
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
      <td>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        </td>
        <td>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
        </td>
      </>
    )
  }


  renderNameField = () => {
    const {name} = this.state
    return (
      <>
      <td>
        <label className="input-label" htmlFor="name">
          Name
        </label>
        </td>
        <td>
        <input
          type="text"
          id="name"
          className="password-input-field"
          value={name}
          onChange={this.onChangeName}
          placeholder="Name"
        />
        </td>
      </>
    )
  }
  signup=async event =>{
event.preventDefault();
      if(this.state.signUppassword.length>0 && this.state.signUpusername.length>0)
        localStorage.setItem(this.state.signUpusername, this.state.signUppassword);
    else
        this.setState({errorMsg:"provide a valid username and password"});
    console.log("testing")
        //const {history} = this.props
    this.props.signIn();
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
  
    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
        <div className="heading">
		<h1>Currency converter</h1>
	    </div>
        <table>
            <tr>
                <td>
        <table>
            <tr>
          <div className="input-container">{this.renderUsernameField()}</div></tr>
          <tr><div className="input-container">{this.renderPasswordField()}</div></tr>
          <tr><td><button type="submit" className="login-button">
            Login
          </button></td></tr>
          </table>
            </td>
            <td >
                <table>
                    <tr>
            <div className="input-container">{this.renderNameField()}</div></tr>
          <tr><div className="input-container">{this.renderSignUpUsernameField()}</div></tr>
         <tr> <div className="input-container">{this.renderSignUpPasswordField()}</div></tr>
          <tr><button className="login-button" onClick={this.signup}>
            SignUp
          </button></tr>
          </table>
          </td>
            </tr>
        </table>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm