import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

import { Route, Switch } from "react-router-dom";

import LogInOut from './components/LogInOut/LogInOut';
import UserList from './components/UserList/UserList';
import { loadUsers } from './store/store';
import Navigation from './components/Navigation/Navigation';
import InitialPage from './components/ItinialPage/ItinialPage';
import FullUserItself from './components/FullUserItself/FullUserItself';

const App = ({ logged, startLoad, pending }) => {

  // start load user when we logged successfully
  useEffect(() => {
    if (logged) {
      startLoad();
    }
  }, [logged]);

  return (
    <div className="app">
      <Navigation />
      <Switch>
        <Route path="/" exact> <InitialPage /> </Route>
        <Route path="/userList" exact>
          {
            logged ? <UserList /> : <p>This page not availeble</p>
          }
        </Route>
        <Route path="/user:username" exact>
          {
            logged ? <FullUserItself/> : <p>This page not availeble</p>
          }
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  logged: state.reducerUsers.logged,
  pending: state.reducerUsers.pending,
});

const mapDispatchToProps = dispatch => ({
  startLoad: () => dispatch(loadUsers())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
