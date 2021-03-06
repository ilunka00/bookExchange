import React, { Component } from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import OfferList from './pages/offers/OfferList';
import RegistrationForm from './pages/account/RegistrationForm';
import Notfound from './pages/common/NotFound';
import OfferDetails from './pages/offers/OfferDetails';
import CreateOffer from './pages/offers/CreateOffer';

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
        <div>
          <Link to="/createOffer">Create offer</Link>
        </div>
        <div>
          <Link to="/">Main page</Link>
        </div>
        <Switch>
          <Route exact path="/" component={OfferList} />
          <Route path="/register" component={RegistrationForm} />
          <Route path="/createOffer" component={CreateOffer} />
          <Route path='/offer/:offerId' component={OfferDetails} />
          <Route component={Notfound} />          
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;