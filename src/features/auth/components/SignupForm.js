import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const EMAIL_REGEXP = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const FormWrapper = styled.div``;

const Form = styled.form`
  max-width: 760px;
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

const StyledInput = styled.input`
  margin: 6px 0;
  padding: 9px 10px;
  border: 1px solid #a6a6a6;
  color: #808080;
  outline: none;
  &:focus {
    border-color: #8cb2c0;
  }
  ${(props) => (props.innerMargin ? 'margin-right: 1.15em' : '')}
`;

const StyledCheckbox = styled.input`
  margin: 1.25em 8px 1.25em 0;
`;

const StyledLabel = styled.label`
  color: #1e3e60;
  font-size: 0.8rem;
  font-weight: bold;
`;

const StyledCheckboxLabel = styled.label`
  color: #667d94;
  font-size: 0.8rem;
  font-weight: normal;
  margin-right: 1em;
`;

const Dec = styled.span`
  color: #0070ff;
`;

const Warning = styled.span`
  font-size: 0.8rem;
  color: #ff1a1a;
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

function FirstNameInput({ label, name, register, required, errors }) {
  return (
    <>
      {label ? <StyledLabel>{label}</StyledLabel> : null}
      <StyledInput innerMargin type={name} {...register(name, { required })} />
      {errors.text?.type === 'required' ? (
        <Warning>First name is required.</Warning>
      ) : null}
    </>
  );
}

function LastNameInput({ label, name, register, required, errors }) {
  return (
    <>
      {label ? <StyledLabel>{label}</StyledLabel> : null}
      <StyledInput type={name} {...register(name, { required })} />
      {errors.text?.type === 'required' ? (
        <Warning>Last name is required.</Warning>
      ) : null}
    </>
  );
}

function EmailInput({ label, name, register, required, pattern, errors }) {
  return (
    <>
      {label ? <StyledLabel>{label}</StyledLabel> : null}
      <StyledInput
        innerMargin
        type={name}
        {...register(name, { required, pattern })}
      />
      {errors.email?.type === 'required' ? (
        <Warning>Email is required.</Warning>
      ) : null}
      {errors.email?.type === 'pattern' ? (
        <Warning>Invalid email.</Warning>
      ) : null}
    </>
  );
}

function CountryInput({ label, name, register, required, errors }) {
  return (
    <>
      {label ? <StyledLabel>{label}</StyledLabel> : null}
      <StyledInput type={name} {...register(name, { required })} />
      {errors.text?.type === 'required' ? (
        <Warning>Country is required.</Warning>
      ) : null}
    </>
  );
}

function PasswordInput({ label, name, register, required, minLength, errors }) {
  return (
    <>
      {label ? <StyledLabel>{label}</StyledLabel> : null}
      <StyledInput
        innerMargin
        type={name}
        {...register(name, { required, minLength })}
      />
      {errors.password?.type === 'required' ? (
        <Warning>Password is required.</Warning>
      ) : null}
      {errors.password?.type === 'minLength' ? (
        <Warning>Password is too short.</Warning>
      ) : null}
    </>
  );
}

function PasswordConfirmInput({
  label,
  name,
  register,
  required,
  minLength,
  errors,
}) {
  return (
    <>
      {label ? <StyledLabel>{label}</StyledLabel> : null}
      <StyledInput type={name} {...register(name, { required, minLength })} />
      {errors.password?.type === 'required' ? (
        <Warning>Password is required.</Warning>
      ) : null}
      {errors.password?.type === 'minLength' ? (
        <Warning>Password is too short.</Warning>
      ) : null}
    </>
  );
}

function CheckboxInput({ name, register, required, errors }) {
  return (
    <>
      <StyledCheckbox type={name} {...register(name, { required })} />
      <StyledCheckboxLabel>
        I agree to all the <Dec>Terms</Dec>, <Dec>Privacy Policy</Dec> and{' '}
        <Dec>Fees</Dec>
      </StyledCheckboxLabel>
      {errors.checkbox?.type === 'required' ? (
        <Warning>Checkbox is required</Warning>
      ) : null}
    </>
  );
}

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
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormColumn>
            <FormControl>
              <FirstNameInput
                label='First Name'
                name='text'
                register={register}
                required
                errors={errors}
                className='inner-margin'
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
        </FormControl>
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
    </FormWrapper>
  );
}

export default SignupForm;
