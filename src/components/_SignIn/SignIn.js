import React, { Component } from 'react';
import { Input, Form } from 'antd';

import { auth, signInWithGoogle } from '../../utils/firebase';

import Button from '../Button/Button';
import GoogleButton from '../Button/GoogleButton';
import FormGroup from '../Form/FormGroup/FormGroup';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleSignIn = async () => {
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <Form>
        <FormGroup
          title="I already have an account"
          subTitle="Sign in with your email and password"
        >
          <Form.Item>
            <Input
              name="email"
              type="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item>
            <Input.Password
              name="password"
              value={password}
              placeholder="Password"
              onChange={this.handleChange}
            />
          </Form.Item>
        </FormGroup>
        <Button
          type="primary"
          block
          onClick={this.handleSignIn}
          className="mb-2"
        >
          Sign in
        </Button>
        <GoogleButton
          block
          onClick={signInWithGoogle}
        />
      </Form>
    );
  }
}

export default SignIn;
