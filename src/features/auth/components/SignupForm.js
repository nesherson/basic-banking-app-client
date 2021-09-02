import styled from 'styled-components';
import { useForm } from 'react-hook-form';

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

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormColumn>
        <FormControl>
          <FirstNameInput
            label='First Name'
            name='text'
            register={register}
            required
            errors={errors}
          />
        </FormControl>
        <FormControl>
          <LastNameInput
            label='Last Name'
            name='text'
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
            name='text'
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
            required
            minLength={6}
            errors={errors}
          />
        </FormControl>
        <FormControl>
          <PasswordConfirmInput
            label='Confirm Password'
            name='password'
            register={register}
            required
            minLength={6}
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
    </Form>
  );
}

export default SignupForm;
