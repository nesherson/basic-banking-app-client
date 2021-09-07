import styled from 'styled-components';
import { Command as CardIcon } from 'react-feather';

const MainContainer = styled.div`
  width: 180px;
  border-radius: 15px;
  box-shadow: 0 9.2px 13.8px -12px rgba(0, 0, 0, 0.026),
    0 31px 26.1px -12px rgba(0, 0, 0, 0.033),
    0 139px 68px -12px rgba(0, 0, 0, 0.05);
`;

const CardContainer = styled.div`
  box-sizing: border-box;
  margin-top: 1.75em;
  height: 220px;
  width: 100%;
  padding: 2em 2.5em;
  border-radius: 15px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.613865614605217) 26%,
    rgba(148, 187, 233, 0.7231093120842087) 98%
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
`;

function SecondCard() {
  return (
    <MainContainer>
      <CardContainer>
        <CardDetails>
          <CardDetailsUpper>
            <Icon>
              <CardIcon />
            </Icon>
          </CardDetailsUpper>
          <CardDetailsLower>
            <CardNumber>3443</CardNumber>
            <CardExpiration>04/22</CardExpiration>
          </CardDetailsLower>
        </CardDetails>
      </CardContainer>
      <CardBalance>
        <StyledSpan>Balance</StyledSpan>
        <BalanceNumber>7,000KM</BalanceNumber>
      </CardBalance>
    </MainContainer>
  );
}

export default SecondCard;
