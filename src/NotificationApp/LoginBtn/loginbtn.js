import React from 'react';
import './loginbtn.css'
class LoginBtn extends React.Component {
  check(){
    console.log("here")
  }
  render() {
    return (
      <button className="login-btn" onClick={()=>this.check()}>
        Login
      </button>
    );
  }
}
export default LoginBtn
