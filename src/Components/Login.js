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
  }

    
  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeName= event =>{
    this.setState({name: event.target.value})
  }

  onSubmitSuccess = () => {
   
   // this.props.history.push('/home')
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
    
    if (this.state.password+""==storagePassword) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure("Please signup")
    }
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }


  renderNameField = () => {
    const {name} = this.state
    return (
      <>
        <label className="input-label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="password-input-field"
          value={name}
          onChange={this.onChangeName}
          placeholder="Name"
        />
      </>
    )
  }
  signup=async event =>{
event.preventDefault();
      if(this.state.password.length>0 && this.state.username.length>0)
        localStorage.setItem(this.state.username, this.state.password);
    else
        this.setState({errorMsg:"provide a valid username and password"});
    
        //const {history} = this.props

        this.props.history.push('/home')    
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
  
    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
        <div className="heading">
		<h1>Currency converter</h1>
	    </div>
          <img
            src="https://th.bing.com/th/id/OIP.YVbn3imnC1RG2lLIkO1jPQHaH_?pid=ImgDet&rs=1"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderNameField()}</div>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          <button className="login-button" onClick={this.signup}>
            SignUp
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm