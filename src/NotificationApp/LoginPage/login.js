import React from 'react';
import LoginBtn from '../../NotificationApp/LoginBtn/loginbtn'
import './login.css'
class Login extends React.Component {
  renderLoginBtn(){
    return <LoginBtn/>
  }

  render() {
    return (<div>
      <div className="login-band">
        <div className="login-title">
          Notification App
        </div>
      </div>
      <div>
        <div>
          {this.renderLoginBtn()}
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
