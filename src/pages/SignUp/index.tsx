import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Name is required!'),
        email: Yup.string()
          .required('Email is required!')
          .email('Please enter with a valid email address'),
        password: Yup.string().min(6, 'At least 6 digits!'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Logo GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Sign up</h1>

            <Input name="name" icon={FiUser} placeholder="Name" />

            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Password"
            />

            <Button type="submit">Sign up</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Go back to Sign in
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
