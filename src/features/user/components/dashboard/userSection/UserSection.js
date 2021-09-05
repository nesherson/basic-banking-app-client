import styled from 'styled-components';

import Card from './Card';

const Container = styled.section`
  width: 840px;
  box-sizing: border-box;
  background-color: #f0f2f4;
  padding: 2em 3.5em;
`;

const Header = styled.header`
  margin-bottom: 2.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Headline = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 1.7rem;
  font-weight: 600;
  color: #161a1d;
`;

const DateWrapper = styled.div``;

const Date = styled.p`
  text-align: center;
  font-size: 1.45rem;
  color: #7b8c9d;
`;

const UserBalance = styled.div`
  display: flex;
  flex-direction: column;
`;

const BalanceText = styled.span`
  color: #7b8c9d;
  font-size: 0.97rem;
  margin-bottom: 0.5em;
  font-weight: 600;
`;

const BalanceNumber = styled.span`
  color: #161a1d;
  font-size: 2.3rem;
  margin-bottom: 1.65em;
`;

const StyledSpan = styled.span`
  font-size: 0.97rem;
  color: #161a1d;
  font-weight: 600;
`;

function UserSection() {
  return (
    <Container>
      <Header>
        <Headline>
          Welcome back,
          <br />
          Fernando
        </Headline>
        <DateWrapper>
          <Date>
            Sunday, September 5<br />
            2021
          </Date>
        </DateWrapper>
      </Header>
      <UserBalance>
        <BalanceText>Balance</BalanceText>
        <BalanceNumber>12,560.50KM</BalanceNumber>
      </UserBalance>
      <StyledSpan>Applied Cards</StyledSpan>
      <Card />
    </Container>
  );
}

export default UserSection;
