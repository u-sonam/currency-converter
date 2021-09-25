import { useEffect, useState } from 'react';
import Axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'react-dropdown/style.css';
import './App.css';
import LoginForm from './Components/Login';
import CurrencyConverter from './Components/CurrencyConvert';



function App() {

// Initializing all the state variables
const [info, setInfo] = useState([]);
const [input, setInput] = useState(0);
const [from, setFrom] = useState("usd");
const [to, setTo] = useState("inr");
const [options, setOptions] = useState([]);
const [output, setOutput] = useState(0);

// Calling the api whenever the dependency changes
useEffect(() => {
	Axios.get(
`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
.then((res) => {
	setInfo(res.data[from]);
	})
}, [from]);


return (

  <div className="wrapper">
  <BrowserRouter>
    <Switch>
    <Route path={"/"} component={LoginForm} history={window.history}/>
    <Route path={"/home"} component={CurrencyConverter}/>
                
    </Switch>
  </BrowserRouter>


</div>
);
}

export default App  ;
