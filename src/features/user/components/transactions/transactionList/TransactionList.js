import styled from 'styled-components';
import { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import CustomScroller from 'react-custom-scroller';

import { CardStoreContext } from '../../../../card/stores/CardStore';
import { TransactionsStoreContext } from '../../../../transactions/stores/TransactionsStore';

import { parseEnum } from '../../../../../util/helpers';

import Transaction from './Transaction';

const Container = styled.section`
  grid-column: 1 / 2;
  grid-row: 4 / 5;
  box-sizing: border-box;
  overflow: auto;
`;

const TransactionList = observer(
  ({ transactions, selectedIndex, handleTransactionSelect }) => {
    const cardStore = useContext(CardStoreContext);
    const transactionsStore = useContext(TransactionsStoreContext);

    const isSelected = (currentIndex) => {
      return currentIndex === selectedIndex;
    };

    return (
      <CustomScroller>
        <Container>
          {transactions.map((t, index) => {
            const time = t.createdAt.slice(11, 16);
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
      </CustomScroller>
    );
  }
);

export default TransactionList;
