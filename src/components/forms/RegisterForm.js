import React from 'react';
import {Form, Button} from 'semantic-ui-react';
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
    return (<form class="ui form" onSubmit={this.onSubmit}>
      <div class="field">
        <label>User Name</label>
        <input type="text" placeholder="User Name"/>
      </div>

      <div class="field">
        <label>Name</label>
        <input type="text" placeholder="Name"/>
      </div>

      <div class="field">
        <label>Password</label>
        <input type="password" placeholder="Enter password"/>
      </div>

      <div class="field">
        <label>Confirm Password</label>
        <input type="password" placeholder="Re-Enter password"/>
      </div>

      <button class="ui button" type="submit">Submit</button>
    </form>);
  }
}

export default RegisterForm
