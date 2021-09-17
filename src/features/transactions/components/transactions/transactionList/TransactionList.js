import styled from 'styled-components';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import CustomScroller from 'react-custom-scroller';

import { CardStoreContext } from '../../../../card/stores/CardStore';

import {
  parseEnum,
  mapTransactionsByDate,
  getOneDimArrIndex,
} from '../../../../../util/helpers';

import {
  dateOptions,
  parseStrDateToLocaleDate,
} from '../../../../../util/date';

import Transaction from './Transaction';

const Container = styled.section`
  grid-column: 1 / 2;
  grid-row: 4 / 5;
  box-sizing: border-box;
  overflow: auto;
`;

const TransactionDateSpan = styled.h3`
  color: #161a1d;
  font-size: 1.25rem;
  margin: 0.5em 2em;
`;

const Item = styled.div``;

const TransactionList = observer(
  ({ transactions, selectedIndex, handleTransactionSelect }) => {
    const cardStore = useContext(CardStoreContext);

    const isSelected = (currentIndexArr) => {
      for (let i = 0; i < currentIndexArr.length; i++) {
        if (currentIndexArr[i] !== selectedIndex[i]) return false;
      }
      return true;
    };

    const mappedTransactions = mapTransactionsByDate(transactions);

    return (
      <CustomScroller>
        <Container>
          {mappedTransactions.map((mt, mi) => {
            const currentDateSpan = parseStrDateToLocaleDate(
              mt[0].createdAt,
              dateOptions.noWeekDay
            );
            const currentTransactions = mt.map((t, ti) => {
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
                  selected={isSelected([mi, ti])}
                  handleSelected={() =>
                    handleTransactionSelect([
                      mi,
                      ti,
                      getOneDimArrIndex(mappedTransactions, mi, ti),
                    ])
                  }
                />
              );
            });
            return (
              <Item key={mt.toString() + Math.random()}>
                <TransactionDateSpan>{currentDateSpan}</TransactionDateSpan>
                {currentTransactions}
              </Item>
            );
          })}
        </Container>
      </CustomScroller>
    );
  }
);

export default TransactionList;
