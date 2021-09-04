import styled from 'styled-components';

import UserSection from './userSection/UserSection';
import TransactionsSection from './transactionsSection/TransactionsSection';

const Container = styled.div`
  display: flex;
  height: 100%;
`;

function Dashboard() {
  return (
    <Container>
      <UserSection />
      <TransactionsSection />
    </Container>
  );
}

export default Dashboard;
