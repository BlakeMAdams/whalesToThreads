import React, { Component } from 'react';


import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import About from './components/About';
import Howitworks from './components/Howitworks';
import Cart from './components/Cart';
import Clothing from './components/Clothing';
import Materials from './components/Materials';


class App extends Component {
  render() {
    return (
      <div>


        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/about' component={About} />
          <Route path='/how-it-works' component={Howitworks} />
          <Route path='/cart' component={Cart} />
          <Route path='/clothing' component={Clothing} />
          <Route path='/materials' component={Materials} />
         
        </Switch>




      </div>
    );
  }
}

export default App;
