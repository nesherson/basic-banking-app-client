import styled from 'styled-components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 3.5em 1em 3.5em;
`;

const Button = styled.button`
  padding: 1.5em;
  font-size: 1.25rem;
  text-transform: capitalize;
  border: none;
  background-color: #174582;
  color: #fff;
  margin-bottom: 0.75em;
`;

const Input = styled.input`
  outline: none;
  font-size: 1.55rem;
  padding: 1.5em;
  border: 1px solid rgba(33, 38, 44, 0.2);
  &:focus {
    border-color: #8cb2c0;
  }

  background-color: ${(props) => (props.disabled ? '#e2e3e9' : '')};
`;

function NewTransaction({
  method,
  activeMethod,
  handleMethodChange,
  amount,
  handleAmountChange,
}) {
  let reg = new RegExp('^[0-9]+$');

  const isActive = () => {
    return method === activeMethod;
  };

  return (
    <Container>
      <Button onClick={() => handleMethodChange(method)}>{method}</Button>
      <Input
        disabled={!isActive()}
        type='text'
        value={amount}
        onChange={handleAmountChange}
      />
    </Container>
  );
}

export default NewTransaction;
