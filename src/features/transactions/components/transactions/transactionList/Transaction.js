import styled, { css } from 'styled-components';
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
  transition: padding 0.2s;
  ${(props) =>
    props.selected
      ? css`
          background-color: #373f49;
          padding: 0.2em 2.8em;
        `
      : ''};

  @media only screen and (max-width: 1599px) {
    padding: 0.2em 1.5em;
    ${(props) =>
      props.selected
        ? css`
            padding: 0.2em 1.1em;
          `
        : ''};
  }
`;

const Time = styled.span`
  color: ${(props) => (props.selected ? '#fff' : '#7b8c9d')};
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
  flex-direction: row;
  align-items: center;
`;

const TransactionMethod = styled.span`
  color: ${(props) =>
    props.selected && props.method === 'withdraw'
      ? '#ff6666'
      : props.selected
      ? '#fff'
      : props.method === 'withdraw'
      ? '#ff6666'
      : ''};
  font-size: 1rem;
  text-transform: capitalize;
`;

const TransactionDescription = styled.p`
  margin: 0 0 0 1.5em;
  font-size: 0.85rem;
  color: ${(props) => (props.selected ? '#c4ccd4' : '#7b8c9d')};
`;

const TransactionAmount = styled.span`
  color: ${(props) => (props.selected ? '#fff' : '#161a1d')};
  font-size: 1rem;
  margin-left: auto;
`;

function Transaction({
  time,
  method,
  description,
  amount,
  isSending,
  handleSelected,
  selected,
}) {
  let methodIcon;

  if (method === 'deposit') methodIcon = <ChevronsDown />;
  else if (method === 'withdraw') methodIcon = <ChevronsUp />;
  else if (method === 'payment') {
    if (isSending) methodIcon = <ChevronsRight />;
    else methodIcon = <ChevronsLeft />;
  }

  return (
    <Container onClick={handleSelected} selected={selected}>
      <Time selected={selected}>{time}</Time>
      <Icon>{methodIcon}</Icon>
      <Wrapper>
        <TransactionMethod selected={selected} method={method}>
          {method}
        </TransactionMethod>
        {method === 'payment' ? (
          <TransactionDescription selected={selected}>
            {description}
          </TransactionDescription>
        ) : null}
      </Wrapper>
      <TransactionAmount selected={selected}>{amount}KM</TransactionAmount>
    </Container>
  );
}

export default Transaction;
