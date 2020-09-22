import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo GoBarber" />

        <form>
          <h1>Sign in</h1>
          <input placeholder="E-mail" />

          <input type="password" placeholder="Password" />

          <button type="submit">Sign in</button>

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
