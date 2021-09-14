import styled from 'styled-components';
import { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { CardStoreContext } from '../../../../card/stores/CardStore';
import { TransactionsStoreContext } from '../../../../transactions/stores/TransactionsStore';

import { parseEnum } from '../../../../../util/helpers';

import Transaction from './Transaction';

const Container = styled.section`
  grid-column: 1 / 2;
  grid-row: 4 / end;
  box-sizing: border-box;
`;

const tempTransactions = [
  {
    id: 1,
    capturedAt: '2021-09-12 03:49:00+02',
    senderCardnum: '1234432111112222',
    receiverCardNum: '0000333355556666',
    method: 2,
    description: 'La la la',
    amount: 123.33,
  },
  {
    id: 2,
    capturedAt: '2021-09-12 04:49:00+02',
    senderCardnum: '1234432111112222',
    receiverCardNum: '0000333355556666',
    method: 2,
    description: 'La la la',
    amount: 123.33,
  },
  {
    id: 3,
    capturedAt: '2021-09-12 05:49:00+02',
    senderCardnum: '1234432111112222',
    receiverCardNum: '0000333355556666',
    method: 0,
    description: 'La la la',
    amount: 20.0,
  },
  {
    id: 4,
    capturedAt: '2021-09-12 06:49:00+02',
    senderCardnum: '1234432111112222',
    receiverCardNum: '0000333355556666',
    method: 1,
    description: 'La la la',
    amount: 15.0,
  },
  {
    id: 5,
    capturedAt: '2021-09-12 03:49:00+02',
    senderCardnum: '1234432111112222',
    receiverCardNum: '0000333355556666',
    method: 2,
    description: 'La la la',
    amount: 123.33,
  },
  {
    id: 6,
    capturedAt: '2021-09-12 04:49:00+02',
    senderCardnum: '1234432111112222',
    receiverCardNum: '0000333355556666',
    method: 2,
    description: 'La la la',
    amount: 123.33,
  },
  {
    id: 7,
    capturedAt: '2021-09-12 05:49:00+02',
    senderCardnum: '1234432111112222',
    receiverCardNum: '0000333355556666',
    method: 0,
    description: 'La la la',
    amount: 20.0,
  },
  {
    id: 8,
    capturedAt: '2021-09-12 06:49:00+02',
    senderCardnum: '1234432111112222',
    receiverCardNum: '0000333355556666',
    method: 1,
    description: 'La la la',
    amount: 15.0,
  },
];

const TransactionList = observer(() => {
  const cardStore = useContext(CardStoreContext);
  const transactionsStore = useContext(TransactionsStoreContext);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleTransactionSelect = (index) => {
    setSelectedIndex(index);
  };

  const isSelected = (currentIndex) => {
    return currentIndex === selectedIndex;
  };
  return (
    <Container>
      {tempTransactions.map((t, index) => {
        const time = t.capturedAt.slice(11, 16);
        const method = parseEnum(t.method);
        const isSendingMoney =
          t.senderCardNum === cardStore.card.cardNumber ? true : false;
        return (
          <Transaction
            key={t.id}
            time={time}
            sender={t.senderCardNum}
            to={t.receiverCardNum}
            method={method}
            description={t.description}
            amount={t.amount}
            isSending={isSendingMoney}
            selected={isSelected(index)}
            handleSelected={() => handleTransactionSelect(index)}
          />
        );
      })}
    </Container>
  );
});

export default TransactionList;
