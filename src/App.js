import React, { Component } from 'react';
import './index.css';
import Header from './Components/Estaticos/Header/Header';
import Body from './Components/Estaticos/Body/Body';
import About from './Components/Estaticos/About/About';
import Pokemon from './Components/Dinamicos/PokemonApi/BodyPokemon';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Body} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Pokemon" component={Pokemon} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}
// // function App() {
// //   return (
// //     <Router>
// //       <React.Fragment>
// //         <Header />
// //           <Switch>
// //             <Route exact path="/" component={Body} />
// //             <Route exact path="/About" component={About} />
// //           </Switch>
// //       </React.Fragment>
// //     </Router>
// //   );
// }

export default App;
