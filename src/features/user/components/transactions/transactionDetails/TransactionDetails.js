import styled from 'styled-components';
import { MoreVertical as More } from 'react-feather';

const Container = styled.section`
  grid-column: 2 / 3;
  grid-row: 2 / 5;
  background-color: rgba(226, 230, 233, 0.55);
  overflow: hidden;
  padding: 2.5em 3.5em;
`;

const Header = styled.header`
  margin-bottom: 2.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Headline = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
  color: #161a1d;
`;

const Icon = styled.div``;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftSide = styled.div``;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5em;
`;

const Label = styled.span`
  font-size: 0.95rem;
  color: #7b8c9d;
  margin-bottom: 0.35em;
`;

const StyledSpan = styled.span`
  text-transform: capitalize;
`;

const Amount = styled.span`
  color: #161a1d;
  font-size: 1.75rem;
  margin-bottom: 1.25em;
  font-weight: 400;
`;

const Date = styled.span`
  display: block;
  font-size: 0.9rem;
  color: #7b8c9d;
`;

function TransactionDetails({
  createdAt,
  sender,
  receiver,
  method,
  description,
  amount,
}) {
  const time = createdAt.slice(11, 16);
  const date = createdAt.slice(0, 10);

  const isPayment = method === 'payment' ? true : false;

  return (
    <Container>
      <Header>
        <Headline>Transaction Details</Headline>
        <Icon>
          <More />
        </Icon>
      </Header>
      <Details>
        <LeftSide>
          <Wrapper>
            <Label>From</Label>
            <StyledSpan>{isPayment ? sender : '-'}</StyledSpan>
          </Wrapper>
          <Wrapper>
            <Label>To</Label>
            <StyledSpan>{isPayment ? receiver : '-'}</StyledSpan>
          </Wrapper>
          <Wrapper>
            <Label>Method</Label>
            <StyledSpan>{method}</StyledSpan>
          </Wrapper>
          {isPayment ? (
            <Wrapper>
              <Label>Description</Label>
              <StyledSpan>{description}</StyledSpan>
            </Wrapper>
          ) : null}
        </LeftSide>
        <RightSide>
          <Amount>{amount}</Amount>
          <Date>
            {time}
            <br />
            {date}
          </Date>
        </RightSide>
      </Details>
    </Container>
  );
}

export default TransactionDetails;
