import styled from 'styled-components';

const Container = styled.div`
  padding: 1em 3.5em 1em 3.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const CardNumber = styled.div`
  color: #7b8c9d;
  font-size: 0.97rem;
  font-weight: 600;
`;

const CardBalance = styled.div`
  color: #7b8c9d;
  font-size: 0.97rem;
  font-weight: 600;
`;

const Span = styled.span`
  color: #161a1d;
`;

function CardInfo({ cardNumber, cardBalance }) {
  return (
    <Container>
      <CardNumber>
        Card number: <Span>{cardNumber}</Span>
      </CardNumber>
      <CardBalance>
        Balance: <Span>{cardBalance}KM</Span>
      </CardBalance>
    </Container>
  );
}

export default CardInfo;
