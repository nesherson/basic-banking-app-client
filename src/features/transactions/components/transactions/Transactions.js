import styled from 'styled-components';
import { useState, useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { CardStoreContext } from '../../../card/stores/CardStore';
import { TransactionsStoreContext } from '../../stores/TransactionsStore';

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

function getTotalSpent(transactions, currentCardNumber) {
  const totalSpent = transactions.reduce((prevState, currentTransaction) => {
    if (parseEnum(currentTransaction.method) === 'withdraw') {
      return prevState + currentTransaction.amount;
    } else if (
      parseEnum(currentTransaction.method) === 'payment' &&
      currentTransaction.senderCardNum === currentCardNumber
    ) {
      return prevState + currentTransaction.amount;
    }
    return prevState;
  }, 0);
  return totalSpent;
}

const Transactions = observer(() => {
  const cardStore = useContext(CardStoreContext);
  const transactionsStore = useContext(TransactionsStoreContext);

  const lastMonthTransactions = transactionsStore.lastMonthTransactions;
  const transactionsCount = lastMonthTransactions.length;
  const totalSpent = getTotalSpent(
    lastMonthTransactions,
    cardStore.card.cardNumber
  );

  const [selectedIndex, setSelectedIndex] = useState([0, 0, 0]);
  const selectedTransaction = lastMonthTransactions[selectedIndex[2]];

  const handleTransactionSelect = (indexArr) => {
    setSelectedIndex(indexArr);
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
      <Stats transactionsCount={transactionsCount} totalSpent={totalSpent} />
      <ListHeader />
      <TransactionList
        transactions={lastMonthTransactions}
        selectedIndex={selectedIndex}
        handleTransactionSelect={handleTransactionSelect}
      />
      {lastMonthTransactions.length !== 0 ? (
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
