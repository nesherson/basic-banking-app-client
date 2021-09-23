import styled from 'styled-components';

import NewTransaction from './NewTransaction';

const Container = styled.section`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  display: flex;
  justify-content: space-between;
`;

function MakeTransaction() {
  return (
    <Container>
      <NewTransaction method='deposit' />
      <NewTransaction method='withdraw' />
    </Container>
  );
}

export default MakeTransaction;
