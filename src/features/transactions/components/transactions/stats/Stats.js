import styled from 'styled-components';

const Container = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  font-weight: 600;
  color: #161a1d;
  border-right: 1px solid rgba(33, 38, 44, 0.2);
`;

const TransactionsNum = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  text-transform: uppercase;
  font-size: 0.95rem;
  font-weight: 600;
  color: #627384;
  border-right: 1px solid rgba(33, 38, 44, 0.2);
`;

const TotalSpent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  text-transform: uppercase;
  font-size: 0.95rem;
  font-weight: 600;
  color: #627384;
`;

const Span = styled.span`
  color: #161a1d;
  font-weight: 600;
  font-size: 1.05rem;
`;

function Stats({ transactionsCount, totalSpent }) {
  return (
    <Container>
      <Date>
        Last <Span>30 days</Span>
      </Date>
      <TransactionsNum>
        Transactions <Span>{transactionsCount}</Span>
      </TransactionsNum>
      <TotalSpent>
        Total spent <Span>{totalSpent}KM</Span>
      </TotalSpent>
    </Container>
  );
}

export default Stats;
