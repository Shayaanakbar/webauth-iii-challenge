import React from 'react';
import { Route, NavLink, } from 'react-router-dom';
import Login from './Login';
import Users from './Users';
import SignUp from './Signup';


class App extends React.Component {
    render () {
      return (
      <div>
      <h1>Welcome</h1>

      <ul>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/Signup">SignUp</NavLink></li>
        <li><NavLink to="/Users">Users</NavLink></li>
      </ul>

      <main>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/users" component={Users}/>
      </main>
    </div> 
    );
  }
}

export default App