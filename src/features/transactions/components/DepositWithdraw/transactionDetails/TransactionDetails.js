import styled from 'styled-components';
import { MoreVertical as More } from 'react-feather';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { TransactionsStoreContext } from '../../../stores/TransactionsStore';
import { CardStoreContext } from '../../../../card/stores/CardStore';

import { parseStrDateToLocaleDate } from '../../../../../util/date';

const Container = styled.section`
  grid-column: 2 / 3;
  grid-row: 2 / 4;
  background-color: rgba(226, 230, 233, 0.55);
  overflow: hidden;
  padding: 2.5em 3.5em;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  margin-bottom: 2.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Headline = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
  color: #161a1d;
`;

const Icon = styled.div``;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftSide = styled.div``;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5em;
`;

const Label = styled.span`
  font-size: 0.95rem;
  color: #7b8c9d;
  margin-bottom: 0.35em;
`;

const StyledSpan = styled.span`
  text-transform: capitalize;
`;

const Amount = styled.span`
  color: #161a1d;
  font-size: 1.75rem;
  margin-bottom: 1.25em;
  font-weight: 400;
`;

const StyledDate = styled.span`
  display: block;
  width: 95px;
  font-size: 0.9rem;
  color: #7b8c9d;
`;

const Button = styled.button`
  padding: 0.85em 1.75em;
  font-size: 1.25rem;
  text-transform: capitalize;
  border: none;
  background-color: #174582;
  color: #fff;
  margin-top: 0.75em;
  align-self: center;
`;

const TransactionDetails = observer(() => {
  const transactionsStore = useContext(TransactionsStoreContext);
  const cardStore = useContext(CardStoreContext);

  const currentDate = parseStrDateToLocaleDate(new Date(Date.now()));

  const method = transactionsStore.newTransaction.activeMethod;
  const amount =
    method === 'deposit'
      ? transactionsStore.newTransaction.depositAmount
      : transactionsStore.newTransaction.withdrawAmount;

  const handlePostNewTransaction = () => {
    const { token } = JSON.parse(localStorage.getItem('userData'));
    const values = {
      cardId: cardStore.card.id,
      token,
      amount: parseInt(amount),
    };
    if (method === 'deposit') {
      console.log('deposit');

      transactionsStore.makeNewDeposit(values);
    } else if (method === 'withdraw') {
      console.log('withdraw');

      transactionsStore.makeNewWithdraw(values);
    }
  };

  return (
    <Container>
      <Header>
        <Headline>Transaction Details</Headline>
        <Icon>
          <More />
        </Icon>
      </Header>
      <Details>
        <LeftSide>
          <Wrapper>
            <Label>Method</Label>
            <StyledSpan>{method}</StyledSpan>
          </Wrapper>
        </LeftSide>
        <RightSide>
          <Amount>{amount}</Amount>
          <StyledDate>{currentDate}</StyledDate>
        </RightSide>
      </Details>
      <Button onClick={handlePostNewTransaction}>Confirm</Button>
    </Container>
  );
});

export default TransactionDetails;
