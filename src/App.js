import React from 'react';
import './index.css';
import Header from './Components/Estaticos/Header/Header';
import Body from './Components/Estaticos/Body/Body'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Body}/>
        </Switch>

      </React.Fragment>
    </Router>
  );
}

export default App;
