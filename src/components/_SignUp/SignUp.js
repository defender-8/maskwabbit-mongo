import React, { Component } from 'react';
import { Input, Form } from 'antd';

import { auth, signInWithGoogle, createUserProfileDocument } from '../../utils/firebase';

import Button from '../Button/Button';
import GoogleButton from '../Button/GoogleButton';
import FormGroup from '../Form/FormGroup/FormGroup';

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleSignUp = async () => {
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('passwords don\'t match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <Form>
        <FormGroup
          title="I do not have an account"
          subTitle="Sign up with your email and password"
        >
          <Form.Item>
            <Input
              name="displayName"
              value={displayName}
              placeholder="Display Name"
              onChange={this.handleChange}
            />
          </Form.Item>
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
          <Form.Item>
            <Input.Password
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={this.handleChange}
            />
          </Form.Item>
        </FormGroup>
        <Button
          type="primary"
          block
          onClick={this.handleSignUp}
          className="mb-2"
        >
          Sign up
        </Button>
        <GoogleButton
          block
          label="Sign up with Google"
          onClick={signInWithGoogle}
        />
      </Form>
    );
  }
}

export default SignUp;
