import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import FormDisplay from './pages/FormDisplay';
import Home from './pages/Home';
import PersonalForm from './pages/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForm';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/personal-form" component={ PersonalForm } />
        <Route path="/professional-form" component={ ProfessionalForm } />
        <Route path="/form-display" component={ FormDisplay } />
      </Switch>
    );
  }
}

export default App;
