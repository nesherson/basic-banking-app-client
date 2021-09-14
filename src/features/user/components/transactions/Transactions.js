import styled from 'styled-components';

import Header from './header/Header';
import Stats from './stats/Stats';
import ListHeader from './listHeader/ListHeader';
import TransactionList from './transactionList/TransactionList';
import TransactionDetails from './transactionDetails/TransactionDetails';

const Container = styled.div`
  display: grid;
  grid-template-columns: 960px auto;
  grid-template-rows: 150px 100px 75px auto;
  height: 100%;
`;

function Transactions() {
  return (
    <Container>
      <Header />
      <Stats />
      <ListHeader />
      <TransactionList />
      <TransactionDetails />
    </Container>
  );
}

export default Transactions;
