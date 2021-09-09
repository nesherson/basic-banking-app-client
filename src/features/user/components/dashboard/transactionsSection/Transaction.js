import styled from 'styled-components';
import {
  ChevronsUp,
  ChevronsDown,
  ChevronsRight,
  ChevronsLeft,
} from 'react-feather';

const Container = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0.2em 3.5em;
  height: 100px;
  background-color: ${(props) =>
    props.selected ? 'rgba(211, 216, 222, 0.5)' : ''};
  @media only screen and (max-width: 1599px) {
    padding: 0.2em 1.5em;
  }
`;

const Time = styled.span`
  color: #7b8c9d;
  font-size: 0.95rem;
  margin-right: 1.75em;
`;

const Icon = styled.div`
  border-radius: 50%;
  background-color: #fbfbfb;
  color: #404040;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 2px 1.75em 2px 0;
  width: calc(64px * 0.45);
  height: calc(64px * 0.45);
  border: 1px solid rgba(204, 204, 204, 0.3);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TransactionMethod = styled.span`
  color: #161a1d;
  font-size: 1rem;
  text-transform: capitalize;
`;

const TransactionDescription = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #7b8c9d;
`;

const TransactionAmount = styled.span`
  color: #161a1d;
  font-size: 1rem;
  margin-left: auto;
`;

function Transaction({
  time,
  method,
  description,
  amount,
  handleSelected,
  selected,
}) {
  let methodIcon;

  if (method === 'deposit') methodIcon = <ChevronsDown />;
  else if (method === 'withdraw') methodIcon = <ChevronsUp />;
  else methodIcon = <ChevronsRight />;

  return (
    <Container onClick={handleSelected} selected={selected}>
      <Time>{time}</Time>
      <Icon>{methodIcon}</Icon>
      <Wrapper>
        <TransactionMethod>{method}</TransactionMethod>
        {method === 'payment' ? (
          <TransactionDescription>{description}</TransactionDescription>
        ) : null}
      </Wrapper>
      <TransactionAmount>{amount}KM</TransactionAmount>
    </Container>
  );
}

export default Transaction;
