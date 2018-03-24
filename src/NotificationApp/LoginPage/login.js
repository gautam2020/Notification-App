import React from 'react';
import ReactDOM from 'react-dom';
import './login.css'
class Login extends React.Component {
  render() {
    return (<div>
      <div className="login-band">
        <div className="login-title">
          Notification App
        </div>
      </div>
      <div>
        <div>
        <div className="login-btn">Login</div>
      </div>
        <div className="add-notification">
          Add Notification</div>
        <div className="upcoming-notification">
          Upcoming Notification</div>
      </div>
    </div>);
  }

}
export default Login
