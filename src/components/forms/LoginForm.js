import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import LoginCss from './LoginForm.css'
import Validator from 'validator';
import InlineError from '../messages/InlineError'
import axios from 'axios'
import config from '../../config/config.json'
import {setLocalStorage,getToken}  from  '../../lib/utils/auth.js'

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      errors: {}
    };
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  onChangePassword(event) {
    this.setState({password: event.target.value});
  }

  onSubmit() {
    // const errors = this.validate(this.state);
    // this.setState({errors});
    axios.post(config.baseURL + '/login',{
      userName : this.state.email,
      password : this.state.password
    })
    .then(function(response){
      setLocalStorage(response.data)
    })
    .catch(function(error){
      console.log(error);
    });

  }

   renderError(erroMessage){
     return <InlineError value = {erroMessage}/>
   }

  validate(state) {
    const errors = {};
    if (!Validator.isEmail(state.email)) {
      errors.email = "Invalid email"
    }
    if (!state.password) {
      errors.password = "Can't be blank"
    }
    return errors;
  }

  render() {
    const {errors} = this.state;
    return (<Form onSubmit={this.onSubmit}>
      <Form.Field>
        <label htmlFor='email'>
          Email
        </label>
        <input type='text' id='userName' placeholder='Enter User Name' value={this.state.email} onChange={this.onChangeEmail}/>
        {this.renderError(errors.email)}
      </Form.Field>

      <Form.Field>
        <label htmlFor='password'>
          Password
        </label>
        <input type='password' id='password' placeholder='Secure' value={this.state.password} onChange={this.onChangePassword}/>
        {this.renderError(errors.password)}
      </Form.Field>
      <Button primary>Login</Button>
    </Form>);
  }
}

export default LoginForm;
