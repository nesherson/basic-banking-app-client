import styled from 'styled-components';
import { useState, useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { CardStoreContext } from '../../../card/stores/CardStore';
import { TransactionsStoreContext } from '../../../transactions/stores/TransactionsStore';

import { parseEnum } from '../../../../util/helpers';

import Header from './header/Header';
import Stats from './stats/Stats';
import ListHeader from './listHeader/ListHeader';
import TransactionList from './transactionList/TransactionList';
import TransactionDetails from './transactionDetails/TransactionDetails';

const Container = styled.div`
  display: grid;
  grid-template-columns: 960px auto;
  grid-template-rows: 150px 100px 75px minmax(360px, 620px);
  height: 100%;
`;

// const tempTransactions = [
//   {
//     id: 1,
//     createdAt: '2021-09-12 03:49:00+02',
//     senderCardNum: '1234432111112222',
//     receiverCardNum: '0000333355556666',
//     method: 2,
//     description: 'La la la',
//     amount: 123.33,
//   },
//   {
//     id: 2,
//     createdAt: '2021-09-12 04:49:00+02',
//     senderCardNum: '1234432111112222',
//     receiverCardNum: '0000333355556666',
//     method: 2,
//     description: 'La la la',
//     amount: 123.33,
//   },
//   {
//     id: 3,
//     createdAt: '2021-09-12 05:49:00+02',
//     senderCardNum: '1234432111112222',
//     receiverCardNum: '0000333355556666',
//     method: 0,
//     description: 'La la la',
//     amount: 20.0,
//   },
//   {
//     id: 4,
//     createdAt: '2021-09-12 06:49:00+02',
//     senderCardNum: '1234432111112222',
//     receiverCardNum: '0000333355556666',
//     method: 1,
//     description: 'La la la',
//     amount: 15.0,
//   },
//   {
//     id: 5,
//     createdAt: '2021-09-12 03:49:00+02',
//     senderCardNum: '1234432111112222',
//     receiverCardNum: '0000333355556666',
//     method: 2,
//     description: 'La la la',
//     amount: 123.33,
//   },
//   {
//     id: 6,
//     createdAt: '2021-09-12 04:49:00+02',
//     senderCardNum: '1234432111112222',
//     receiverCardNum: '0000333355556666',
//     method: 2,
//     description: 'La la la',
//     amount: 123.33,
//   },
//   {
//     id: 7,
//     createdAt: '2021-09-12 05:49:00+02',
//     senderCardNum: '1234432111112222',
//     receiverCardNum: '0000333355556666',
//     method: 0,
//     description: 'La la la',
//     amount: 20.0,
//   },
//   {
//     id: 8,
//     createdAt: '2021-09-12 06:49:00+02',
//     senderCardNum: '1234432111112222',
//     receiverCardNum: '0000333355556666',
//     method: 1,
//     description: 'La la la',
//     amount: 15.0,
//   },
// ];

const Transactions = observer(() => {
  const cardStore = useContext(CardStoreContext);
  const transactionsStore = useContext(TransactionsStoreContext);

  const transactions = transactionsStore.lastMonthTransactions;

  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedTransaction = transactions[selectedIndex];

  const handleTransactionSelect = (index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    if (!cardStore.fetchCardDataStatus.isSuccess) {
      const { userId, token } = JSON.parse(localStorage.getItem('userData'));
      const values = {
        id: userId,
        token,
      };
      cardStore.getCardData(values);
    }
  }, [cardStore]);

  useEffect(() => {
    if (cardStore.fetchCardDataStatus.isSuccess) {
      const { token } = JSON.parse(localStorage.getItem('userData'));
      const cardId = cardStore.card.id;
      const values = {
        cardId,
        token,
      };

      transactionsStore.getLastMonthTransactions(values);
    }
  }, [transactionsStore, cardStore, cardStore.fetchCardDataStatus.isSuccess]);

  return (
    <Container>
      <Header />
      <Stats />
      <ListHeader />
      <TransactionList
        transactions={transactions}
        selectedIndex={selectedIndex}
        handleTransactionSelect={handleTransactionSelect}
      />
      {transactions.length !== 0 ? (
        <TransactionDetails
          createdAt={selectedTransaction.createdAt}
          sender={selectedTransaction.senderCardNum}
          receiver={selectedTransaction.receiverCardNum}
          method={parseEnum(selectedTransaction.method)}
          description={selectedTransaction.description}
          amount={selectedTransaction.amount}
        />
      ) : null}
    </Container>
  );
});

export default Transactions;
