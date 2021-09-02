import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { EMAIL_REGEXP } from '../../../constants/constants';

import { EmailInput, PasswordInput } from './Forms';

const FormWrapper = styled.div``;

const Form = styled.form`
  max-width: 420px;
  min-width: 340px;
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
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
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
        </FormColumn>
        <FormColumn>
          <FormControl>
            <Button type='submit'>Create Account</Button>
          </FormControl>
        </FormColumn>
      </Form>
    </FormWrapper>
  );
}

export default LoginForm;
