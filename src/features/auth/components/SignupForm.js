import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';

import { AuthStoreContext } from '../stores/AuthStore';

import { EMAIL_REGEXP } from '../../../constants/constants';

import {
  FirstNameInput,
  LastNameInput,
  CountryInput,
  EmailInput,
  PasswordInput,
  PasswordConfirmInput,
  CheckboxInput,
} from './Forms';

const Form = styled.form`
  max-width: 760px;
  min-width: 564px;
  @media only screen and (max-width: 1280px) {
    min-width: 380px;
  }
  @media only screen and (max-width: 1080px) {
    max-width: 520px;
    min-width: 320px;
  }
  @media only screen and (max-width: 1080px) {
    min-width: 280px;
  }
`;

const FormColumn = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1.25em;
  @media only screen and (max-width: 1280px) {
    flex-direction: column;
    margin-top: initial;
  }
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media only screen and (max-width: 1280px) {
    margin-top: 0.5em;
  }
`;

const Button = styled.button`
  padding: 0.8em 2.25em;
  color: #fff;
  font-size: 0.93rem;
  background-color: #0070ff;
  border: 1px solid #0070ff;
  align-self: flex-start;
  box-sizing: border-box;
`;

const Warning = styled.span`
  font-size: 0.8rem;
  color: #ff1a1a;
`;

const SignupForm = observer(() => {
  const authStore = useContext(AuthStoreContext);
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/login' } };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const values = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };

    authStore.signupUser(values);
  };

  useEffect(() => {
    if (authStore.singupUserStatus.isSuccess) reset();
  }, [reset, authStore.singupUserStatus.isSuccess]);

  useEffect(() => {
    if (authStore.singupUserStatus.isSuccess) {
      authStore.clearUserSignupStatus();
      history.replace(from);
    }
  }, [history, from, authStore]);

  return (
    <Form onSubmit={action(handleSubmit(onSubmit))} noValidate>
      <FormColumn>
        <FormControl>
          <FirstNameInput
            label='First Name'
            name='firstName'
            register={register}
            required
            errors={errors}
          />
        </FormControl>
        <FormControl>
          <LastNameInput
            label='Last Name'
            name='lastName'
            register={register}
            required
            errors={errors}
          />
        </FormControl>
      </FormColumn>
      <FormColumn>
        <FormControl>
          <EmailInput
            label='Email'
            name='email'
            register={register}
            required
            pattern={EMAIL_REGEXP}
            errors={errors}
          />
        </FormControl>
        <FormControl>
          <CountryInput
            label='Country'
            name='country'
            register={register}
            required
            errors={errors}
          />
        </FormControl>
      </FormColumn>
      <FormColumn>
        <FormControl>
          <PasswordInput
            label='Password'
            name='password'
            register={register}
            errors={errors}
          />
        </FormControl>
        <FormControl>
          <PasswordConfirmInput
            label='Confirm Password'
            name='passwordConfirm'
            register={register}
            errors={errors}
          />
        </FormControl>
      </FormColumn>
      <CheckboxInput
        name='checkbox'
        register={register}
        required
        errors={errors}
      />
      <FormColumn>
        <FormControl>
          <Button type='submit'>Create Account</Button>
        </FormControl>
      </FormColumn>
      {authStore.singupUserStatus.isError ? (
        <Warning>{authStore.singupUserStatus.errorMessage}</Warning>
      ) : null}
    </Form>
  );
});

export default SignupForm;
