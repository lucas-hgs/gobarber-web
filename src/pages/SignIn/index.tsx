import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo GoBarber" />

        <form>
          <h1>Sign in</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />

          <Button type="submit">Sign in</Button>

          <a href="forgot">Forgot password?</a>
        </form>

        <a href="create">
          <FiLogIn />
          Create your account
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
