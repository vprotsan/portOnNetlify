import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Menu from './components/Menu';
import Homepage from './components/Homepage';
import Portfolio from './components/Portfolio';
import PortfolioItemAdd from './components/PortfolioItemAdd';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';

import './css/resume.css';
import './css/style.css';

class App extends Component {

  constructor() {
    super()
  }

render(){

  return(
      <BrowserRouter>
        <div className="App" id="page-top">
            { React.version }
          <div className="container-fluid p-0">
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/portfolio" render={() => <Portfolio />}/>
              <Route exact path="/about" render={() => <About />}/>
              <Route exact path="/contact" render={() => <Contact />}/>
              <Route component={ NotFound }/>
            </Switch>
          </div>
          <Menu/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
