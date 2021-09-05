import styled from 'styled-components';
import { Search } from 'react-feather';

import Transaction from './Transaction';
import PaymentDetails from './PaymentDetails';

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
  border-bottom: 1px solid rgba(33, 38, 44, 0.2);
  & li:nth-of-type(odd) {
    background-color: rgba(240, 242, 244, 0.4);
  }
`;

const tempTransactions = [
  {
    timestamp: '2021-08-29 16:33:00+02',
    type: 'deposit',
    description: '',
    amount: 570.0,
  },
  {
    timestamp: '2021-08-29 17:33:00+02',
    type: 'withdraw',
    description: '',
    amount: 100.0,
  },
  {
    timestamp: '2021-08-29 18:33:00+02',
    type: 'payment',
    description: 'Have fun.',
    amount: 150.0,
  },
  {
    timestamp: '2021-08-29 19:33:00+02',
    type: 'payment',
    description: 'Spent it all.',
    amount: 120.0,
  },
];

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
          {tempTransactions.map((t) => {
            const time = t.timestamp.slice(11, 16);
            return (
              <Transaction
                time={time}
                type={t.type}
                description={t.description}
                amount={t.amount}
                selected={false}
              />
            );
          })}
        </TransactionList>
        <PaymentDetails
          timestamp={tempTransactions[3].timestamp}
          type={tempTransactions[3].type}
          description={tempTransactions[3].description}
          amount={tempTransactions[3].amount}
        />
      </Transactions>
    </Container>
  );
}

export default TransactionsSection;
