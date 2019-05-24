import React, { Component } from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import OfferList from './pages/offers/OfferList';
import RegistrationForm from './pages/account/RegistrationForm';
import Notfound from './pages/common/NotFound';
import ExpenseDetails from './pages/offers/OfferDetails';

class App extends Component {

  constructor() {
      super();
      console.log("[App] constructor");
  }

  componentDidMount() {
    console.log("[App] componentDidMount");
  }

  componentWillUnmount() {
    console.log("[App] componentWillUnmount");
  }

  render() {
    return (
      <Router>
      <div className="App">
        <h1>Exchanger</h1>
        
        <div>
          <Link to="/register">Register</Link>
        </div>
        <Switch>
          <Route exact path="/" component={OfferList} />
          <Route path="/register" component={RegistrationForm} />
          <Route path='/offer/:offerId' component={ExpenseDetails} />
          <Route component={Notfound} />          
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;