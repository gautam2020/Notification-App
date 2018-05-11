import React from 'react';
import {Route} from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import NotificationPage from './components/pages/NotificationPage'

const App = () => (<div className = "ui">
  <Route path ='/' exact component={LoginPage}/>
  <Route path ='/register' exact component={RegisterPage}/>
  <Route path ='/notification' exact component={NotificationPage}/>
</div>);

export default App;
