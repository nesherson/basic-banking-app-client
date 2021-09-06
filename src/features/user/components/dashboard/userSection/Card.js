import styled from 'styled-components';
import { Command as CardIcon } from 'react-feather';

const MainContainer = styled.div`
  width: 380px;
  margin-right: 2em;
  border-radius: 15px;
  box-shadow: 0 9.2px 13.8px -12px rgba(0, 0, 0, 0.026),
    0 31px 26.1px -12px rgba(0, 0, 0, 0.033),
    0 139px 68px -12px rgba(0, 0, 0, 0.05);
`;

const CardContainer = styled.div`
  box-sizing: border-box;
  margin-top: 1.75em;
  height: 220px;
  width: 380px;
  padding: 2em 2.5em;
  border-radius: 15px;
  background: rgb(12, 28, 63);
  background: linear-gradient(
    90deg,
    rgba(12, 28, 63, 1) 13%,
    rgba(16, 38, 76, 1) 46%,
    rgba(22, 36, 96, 0.9808123933167017) 91%
  );
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const CardDetailsUpper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const CardDetailsLower = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardNumber = styled.span`
  color: #c6c8d2;
  word-spacing: 7px;
`;

const CardExpiration = styled.span`
  color: #c6c8d2;
`;

const CardBalance = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.35em 1em;
`;

const StyledSpan = styled.span`
  color: #7b8c9d;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.2em;
`;

const BalanceNumber = styled.span`
  color: #161a1d;
  font-weight: 600;
  font-size: 0.95rem;
`;

const Icon = styled.div`
  color: #c6c8d2;
  margin-right: 0.35em;
`;

const CardType = styled.span`
  color: #7b8c9d;
  font-size: 0.9rem;
  font-weight: 600;
`;

function Card({ cardNumber, type, network, balance }) {
  const trimmedCardNumber = cardNumber.slice(
    cardNumber.length - 5,
    cardNumber.length - 1
  );

  return (
    <MainContainer>
      <CardContainer>
        <CardDetails>
          <CardDetailsUpper>
            <Icon>
              <CardIcon />
            </Icon>
            <CardType>
              {type} {network}
            </CardType>
          </CardDetailsUpper>
          <CardDetailsLower>
            <CardNumber>**** {trimmedCardNumber}</CardNumber>
            <CardExpiration>04/24</CardExpiration>
          </CardDetailsLower>
        </CardDetails>
      </CardContainer>
      <CardBalance>
        <StyledSpan>Balance</StyledSpan>
        <BalanceNumber>{balance}KM</BalanceNumber>
      </CardBalance>
    </MainContainer>
  );
}

export default Card;
