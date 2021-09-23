import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

import { validateNumber } from '../../../../util/helpers';

import { TransactionsStoreContext } from '../../stores/TransactionsStore';

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
  cursor: pointer;
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

const NewTransaction = observer(({ method }) => {
  const transactionsStore = useContext(TransactionsStoreContext);

  const amount =
    method === 'deposit'
      ? transactionsStore.newTransaction.depositAmount
      : transactionsStore.newTransaction.withdrawAmount;
  const activeMethod = transactionsStore.newTransaction.activeMethod;

  const isActive = () => {
    return method === activeMethod;
  };

  const onMethodChange = (method) =>
    transactionsStore.handleMethodChange(method);

  const onAmountChange = (amount) =>
    transactionsStore.handleAmountChange(amount);

  return (
    <Container>
      <Button onClick={() => onMethodChange(method)}>{method}</Button>
      <Input
        disabled={!isActive()}
        type='text'
        value={amount}
        onChange={({ target }) => onAmountChange(target.value)}
        onKeyPress={validateNumber}
      />
    </Container>
  );
});

export default NewTransaction;
