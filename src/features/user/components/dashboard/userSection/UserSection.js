import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';

import { UserStoreContext } from '../../../stores/UserStore';
import { CardStoreContext } from '../../../../card/stores/CardStore';

import { parseStrDateToLocaleDate } from '../../../../../util/date';

import Card from './Card';
import SecondCard from './SecondCard';

const Container = styled.section`
  width: 840px;
  box-sizing: border-box;
  background-color: #f0f2f4;
  padding: 1.5em 3.5em;
  @media only screen and (max-width: 1599px) {
    padding: 2em 1.5em;
  }
  @media only screen and (max-width: 890px) {
    width: 100%;
  }
`;

const Header = styled.header`
  margin-bottom: 2.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Headline = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 1.7rem;
  font-weight: 600;
  color: #161a1d;
`;

const StyledDate = styled.p`
  width: 120px;
  text-align: center;
  font-size: 1.45rem;
  color: #7b8c9d;
`;

const UserBalance = styled.div`
  display: flex;
  flex-direction: column;
`;

const BalanceText = styled.span`
  color: #7b8c9d;
  font-size: 0.97rem;
  margin-bottom: 0.5em;
  font-weight: 600;
`;

const BalanceNumber = styled.span`
  color: #161a1d;
  font-size: 2.3rem;
  margin-bottom: 1.65em;
`;

const StyledSpan = styled.span`
  font-size: 0.97rem;
  color: #161a1d;
  font-weight: 600;
`;

const Cards = styled.div`
  display: flex;
  @media only screen and (max-width: 1320px) {
    flex-wrap: wrap;
  }
`;

const UserSection = observer(() => {
  const userStore = useContext(UserStoreContext);
  const cardStore = useContext(CardStoreContext);

  const currentDate = parseStrDateToLocaleDate(new Date(Date.now()));

  useEffect(() => {
    const { userId, token } = JSON.parse(localStorage.getItem('userData'));
    const values = {
      id: userId,
      token,
    };
    userStore.getUserData(values);
  }, [userStore]);

  useEffect(() => {
    const { userId, token } = JSON.parse(localStorage.getItem('userData'));
    const values = {
      id: userId,
      token,
    };
    cardStore.getCardData(values);
  }, [cardStore]);

  return (
    <Container>
      <Header>
        <Headline>
          Welcome back,
          <br />
          {userStore.user.firstName}
        </Headline>
        <StyledDate>{currentDate}</StyledDate>
      </Header>
      <UserBalance>
        <BalanceText>Balance</BalanceText>
        <BalanceNumber>{cardStore.card.balance}KM</BalanceNumber>
      </UserBalance>
      <StyledSpan>Applied Cards</StyledSpan>
      <Cards>
        <Card
          cardNumber={cardStore.card.cardNumber}
          type={cardStore.card.type}
          network={cardStore.card.network}
          balance={cardStore.card.balance}
        />
        <SecondCard />
      </Cards>
    </Container>
  );
});

export default UserSection;
