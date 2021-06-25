import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Login from './components/Login'
import UserList from './components/UserList'
import UserProfile from './components/UserProfile'
import PageNotFound from './components/PageNotFound'
//import './App.css';






function App() {
  return (
    <BrowserRouter>   
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/user-list" component={UserList} />
        <Route path="/user-Profile" component={UserProfile} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
