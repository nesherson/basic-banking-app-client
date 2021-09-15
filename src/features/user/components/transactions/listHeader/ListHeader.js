import styled from 'styled-components';

const Container = styled.div`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  display: flex;
  //justify-content: space-evenly;
  align-items: center;
  border-bottom: 2px solid #161a1d;
  margin: 0 3.5em;
`;

const Date = styled.span`
  display: flex;
  justify-content: flex-start;
  flex: 1;
  font-size: 0.95rem;
  font-weight: 600;
  color: #627384;
  border-right: 1px solid rgba(33, 38, 44, 0.2);
`;

const Method = styled.span`
  display: flex;
  justify-content: flex-start;
  flex: 1;
  padding-left: 1em;
  font-size: 0.95rem;
  font-weight: 600;
  color: #627384;
  border-right: 1px solid rgba(33, 38, 44, 0.2);
`;

const Description = styled.span`
  display: flex;
  justify-content: flex-start;
  flex: 3;
  padding-left: 1em;
  font-size: 0.95rem;
  font-weight: 600;
  color: #627384;
  border-right: 1px solid rgba(33, 38, 44, 0.2);
`;

const Amount = styled.span`
  display: flex;
  justify-content: flex-end;
  flex: 2;
  font-size: 0.95rem;
  font-weight: 600;
  color: #627384;
  text-transform: uppercase;
`;

function ListHeader() {
  return (
    <Container>
      <Date>Date</Date>
      <Method>Method</Method>
      <Description>Description</Description>
      <Amount>Amount</Amount>
    </Container>
  );
}

export default ListHeader;
