import React from 'react'
import {Route, Switch, NavLink} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import People from './components/People/People';
import FAQ from './components/About/FAQ/FAQ';
import Company from './components/About/Company/Company';
import Character from './components/Character/Character';

const NotFound = () => <div><h1>Error:404 Not Found!</h1></div>;
export const routes = <div>
<nav>
  <NavLink exact activeClassName ="big-bold"to="/">Home</NavLink>
  <NavLink exact activeClassName ="big-bold"to="/About">About</NavLink>
  <NavLink exact activeClassName ="big-bold"to="/People">People</NavLink>
</nav>
This is App.js
{/* <Switch> */}
    <Route exact path="/" component={Home}/>
    <Route path="/About" render={()=><About>
        <Route path="/about/faq" component={FAQ}/>
        <Route path="/about/company" component={Company}/>
    </About>}/>
    <Switch>
    <Route path="/people/:id" component={Character}/>
    <Route exact path="/people" component={People}/>
    </Switch>
    {/* <Route path="" component={NotFound}/> */}
{/* </Switch> */}
</div>