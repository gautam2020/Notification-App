import React from 'react';
import axios from 'axios';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this)

  }
  onSubmit() {
    axios.post('/user', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }).then(function(response) {
      console.log(response);
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (<form className="ui container form" onSubmit={this.onSubmit}>
      <div className="field">
        <label>User Name</label>
        <input type="text" placeholder="User Name"/>
      </div>

      <div className="field">
        <label>Name</label>
        <input type="text" placeholder="Name"/>
      </div>

      <div className="field">
        <label>Password</label>
        <input type="password" placeholder="Enter password"/>
      </div>

      <div className="field">
        <label>Confirm Password</label>
        <input type="password" placeholder="Re-Enter password"/>
      </div>

      <button className="ui button" type="submit">Submit</button>
    </form>);
  }
}

export default RegisterForm
