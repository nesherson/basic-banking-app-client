import styled from 'styled-components';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

import { TransactionsStoreContext } from '../../stores/TransactionsStore';
import { CardStoreContext } from '../../../card/stores/CardStore';

import NewTransaction from './NewTransaction';

const Container = styled.section`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  display: flex;
  justify-content: space-between;
`;

const MakeTransaction = observer(() => {
  const transactionsStore = useContext(TransactionsStoreContext);

  const [activeMethod, setActiveMethod] = useState('deposit');
  const [amount, setAmount] = useState(0);

  const handleMethodChange = (method) => {
    setActiveMethod(method);
    setAmount(0);
  };

  const handleAmountChange = ({ target }) => {
    setAmount(target.value);
  };

  const handleNewTransactionPost = () => {
    const values = {};
    if (activeMethod === 'deposit') {
      transactionsStore.makeNewDeposit();
    }
  };

  return (
    <Container>
      <NewTransaction
        method='deposit'
        activeMethod={activeMethod}
        handleMethodChange={handleMethodChange}
        amount={amount}
        handleAmountChange={handleAmountChange}
      />
      <NewTransaction
        method='withdraw'
        activeMethod={activeMethod}
        handleMethodChange={handleMethodChange}
      />
    </Container>
  );
});

export default MakeTransaction;
