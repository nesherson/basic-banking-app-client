import styled from 'styled-components';

const Container = styled.section`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background-color: #f0f2f4;
`;

function TransactionDetails() {
  return <Container>Details</Container>;
}

export default TransactionDetails;
