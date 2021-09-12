import styled from 'styled-components';

const Container = styled.section`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  box-sizing: border-box;
`;

function TransactionList() {
  return <Container></Container>;
}

export default TransactionList;
