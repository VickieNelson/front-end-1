import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// Components
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import About from './components/About';
// Styles
import { Navbar } from './components/Styles';

function App() {
  return (
    <div>
      <Navbar>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>SignUp</Link>
        <Link to='/about'>About</Link>
      </Navbar>

      <Switch>
        <Route exact path='/signup' ><SignUp /></Route>
        <Route exact path='/login' ><Login /></Route>
        <Route exact path='/about' ><About /></Route>
        <Route exact path='/' ><Home /></Route>
      </Switch>
    </div>
  );
}

export default App;