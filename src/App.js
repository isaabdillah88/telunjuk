import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import TokopediaPage from './pages/tokopedia';
import EmployeePage from './pages/employee';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tokopedia" exact component={TokopediaPage} />
      <Route path="/employee" exact component={EmployeePage} />
    </Switch>
  )
}

export default App;
