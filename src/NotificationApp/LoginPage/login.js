import React from 'react';
import ReactDOM from 'react-dom';
import './login.css'
class Login extends React.Component {
  render() {
    return (<div>
      <div className="login-band">
        <div className="loginTitle">
          Notification App
        </div>
      </div>
      <div>
        <div className="add-notification"></div>
        <div className="upcoming-notification"></div>
      </div>
    </div>);
  }

}
export default Login
