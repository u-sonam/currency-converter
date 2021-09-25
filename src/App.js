import { Component, useEffect, useState } from 'react';
import Axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'react-dropdown/style.css';
import './App.css';
import LoginForm from './Components/Login';
import CurrencyConverter from './Components/CurrencyConvert';


class App extends Component {
constructor(props){
  super(props);
  this.state={
    SignedIn: false,
    Signedout: true,

  }
}

signInSucessful=() =>{
    this.setState({SignedIn:true});
}

signOutSucessful=() =>{
  console.log("in signout");
    this.setState({SignedIn:false});
}

  render() {
    const rerenderlogin = () =>{
      if(!this.state.SignedIn){
        return <LoginForm signIn={this.signInSucessful} />
      }
      else{
        console.log("in else");
        return <CurrencyConverter signOut={this.signOutSucessful} />
      }
      
    }

return (

  <div className="wrapper">
{rerenderlogin() }


</div>
);
}
}

export default App  ;
