import React from 'react';
import './index.css';
// import './css/main.css';
// import './css/linearicons.css';
// import './css/font-awesome.min.css';
// import './css/bootstrap.css';
// import './css/magnific-popup.css';
// import './css/nice-select.css';
// import './css/animate.min.css';
// import './css/owl.carousel.css';
import Header from './Components/Estaticos/Header/Header';
// import Footer from './Components/Estaticos/Footer/Footer';
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
        {/* <Footer /> */}
      </React.Fragment>
    </Router>
    // <div className="App">
    //   <Header/>
    //   <Footer/>
    // </div>
  );
}

export default App;
