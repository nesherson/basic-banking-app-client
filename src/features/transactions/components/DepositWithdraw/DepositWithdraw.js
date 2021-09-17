import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useEffect, useContext } from 'react';

import { CardStoreContext } from '../../../card/stores/CardStore';

import Header from './header/Header';
import CardInfo from '../cardDetails/CardDetails';
import MakeTransaction from '../makeTransaction/MakeTransaction';
import TransactionDetails from './transactionDetails/TransactionDetails';

const Container = styled.div`
  display: grid;
  grid-template-columns: 960px auto;
  grid-template-rows: 150px 100px auto;
  height: 100%;
`;

const DepositWithdraw = observer(() => {
  const cardStore = useContext(CardStoreContext);

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

  return (
    <Container>
      <Header />
      <CardInfo
        cardNumber={cardStore.card.cardNumber}
        cardBalance={cardStore.card.balance}
      />
      <MakeTransaction />
      <TransactionDetails />
    </Container>
  );
});

export default DepositWithdraw;
