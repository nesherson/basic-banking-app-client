import styled from 'styled-components';

import Header from './header/Header';
import TransactionList from './transactionList/TransactionList';
import TransactionDetails from './transactionDetails/TransactionDetails';

const Container = styled.div`
  display: grid;
  grid-template-columns: 960px auto;
  grid-template-rows: 150px auto;
  height: 100%;
`;

function Transactions() {
  return (
    <Container>
      <Header />
      <TransactionList />
      <TransactionDetails />
    </Container>
  );
}

export default Transactions;
