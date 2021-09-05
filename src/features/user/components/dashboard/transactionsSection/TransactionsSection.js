import styled from 'styled-components';
import { Search } from 'react-feather';

import Transaction from './Transaction';

const Container = styled.section`
  flex: 1;
  background-color: #fff;
  box-sizing: border-box;
`;

const Transactions = styled.div`
  //padding: 2em 3em;
`;

const TransactionDetails = styled.div`
  padding: 2em 3em;
`;

const Header = styled.header`
  margin-bottom: 2.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 3.5em 0 3.5em;
`;

const Headline = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
  color: #161a1d;
`;

const Icon = styled.div``;

const Date = styled.p`
  font-size: 0.95rem;
  color: #7b8c9d;
  padding: 0 3.5em;
`;

const TransactionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

function TransactionsSection() {
  return (
    <Container>
      <Transactions>
        <Header>
          <Headline>Latest Transactions</Headline>
          <Icon>
            <Search size={20} />
          </Icon>
        </Header>
        <Date>Mon, Mar 1</Date>
        <TransactionList>
          <Transaction
            time={'16:47'}
            type={'deposit'}
            description={''}
            amount={570.0}
          />
          <Transaction
            time={'17:47'}
            type={'withdraw'}
            description={''}
            amount={70.0}
          />
          <Transaction
            time={'18:47'}
            type={'payment'}
            description={'Have fun.'}
            amount={150.0}
          />
        </TransactionList>
      </Transactions>
    </Container>
  );
}

export default TransactionsSection;
