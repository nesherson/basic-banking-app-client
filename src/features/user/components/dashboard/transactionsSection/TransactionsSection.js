import styled from 'styled-components';
import { Search } from 'react-feather';
import { observer } from 'mobx-react-lite';
import { useState, useContext, useEffect } from 'react';

import { TransactionsStoreContext } from '../../../../transactions/stores/TransactionsStore';
import { CardStoreContext } from '../../../../card/stores/CardStore';

import { parseEnum } from '../../../../../util/helpers';
import {
  parseStrDateToLocaleDate,
  dateOptions,
} from '../../../../../util/date';

import Transaction from './Transaction';
import PaymentDetails from './PaymentDetails';

const Container = styled.section`
  flex: 1;
  background-color: #fff;
  box-sizing: border-box;
  min-width: 660px;
  @media only screen and (max-width: 1599px) {
    min-width: 490px;
  }
  @media only screen and (max-width: 1320px) {
    min-width: 420px;
  }
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

const Transactions = styled.div``;

const Header = styled.header`
  margin-bottom: 2.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 3.5em 0 3.5em;
  @media only screen and (max-width: 1599px) {
    padding: 2em 1.5em 0 1.5em;
  }
`;

const Headline = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
  color: #161a1d;
`;

const Icon = styled.div``;

const Date = styled.p`
  font-size: 0.95rem;
  color: #7b8c9d;
  padding: 0 3.5em;
  @media only screen and (max-width: 1599px) {
    padding: 0 1.5em;
  }
`;

const TransactionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid rgba(33, 38, 44, 0.2);
`;

const TransactionsSection = observer(() => {
  const cardStore = useContext(CardStoreContext);
  const transactionsStore = useContext(TransactionsStoreContext);

  const latestTransactions = transactionsStore.latestTransactions;
  const tempDate = parseStrDateToLocaleDate(
    latestTransactions[0].createdAt,
    dateOptions.noWeekDay
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTransactionSelect = (index) => {
    setSelectedIndex(index);
  };

  const isSelected = (currentIndex) => {
    return currentIndex === selectedIndex;
  };

  useEffect(() => {
    if (cardStore.fetchCardDataStatus.isSuccess) {
      const { token } = JSON.parse(localStorage.getItem('userData'));
      const cardId = cardStore.card.id;
      const values = {
        cardId,
        token,
      };

      transactionsStore.getLatestTransactions(values);
    }
  }, [transactionsStore, cardStore, cardStore.fetchCardDataStatus.isSuccess]);

  return (
    <Container>
      <Transactions>
        <Header>
          <Headline>Latest Transactions</Headline>
          <Icon>
            <Search size={20} />
          </Icon>
        </Header>
        <Date>{tempDate}</Date>
        <TransactionList>
          {latestTransactions
            ? latestTransactions.map((t, index) => {
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
              })
            : null}
        </TransactionList>
        {transactionsStore.fetchLatestTransactionsStatus.isSuccess ? (
          <PaymentDetails
            createdAt={latestTransactions[selectedIndex].createdAt}
            from={latestTransactions[selectedIndex].senderCardNum}
            method={parseEnum(latestTransactions[selectedIndex].method)}
            description={latestTransactions[selectedIndex].description}
            amount={latestTransactions[selectedIndex].amount}
          />
        ) : null}
      </Transactions>
    </Container>
  );
});

export default TransactionsSection;
