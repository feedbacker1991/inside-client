import React from 'react';
import { Button, Row, Form, Input } from 'antd';
import './Login.css';

const FormItem = Form.Item;

const Login = () => (
  <div className="form">
    <div className="logo">
      <span>INSIDE</span>
    </div>
    <form>
      <FormItem>
        <Input size="large" placeholder="Username" />
      </FormItem>
      <FormItem>
        <Input size="large" type="password" placeholder="Password" />
      </FormItem>
      <Row>
        <Button type="primary" size="large">
          Sign in
        </Button>
      </Row>
    </form>
  </div>
);

export default Login;
