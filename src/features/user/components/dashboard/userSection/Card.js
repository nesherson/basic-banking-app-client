import styled from 'styled-components';

const MainContainer = styled.div`
  width: 380px;
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
  background-color: #ccc;
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardNumber = styled.span`
  color: #161a1d;
`;

const CardExpiration = styled.span`
  color: #161a1d;
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

function Card() {
  return (
    <MainContainer>
      <CardContainer>
        <CardDetails>
          <DetailsWrapper>
            <CardNumber>**** 3443</CardNumber>
            <CardExpiration>04/24</CardExpiration>
          </DetailsWrapper>
        </CardDetails>
      </CardContainer>
      <CardBalance>
        <StyledSpan>Balance</StyledSpan>
        <BalanceNumber>10,000KM</BalanceNumber>
      </CardBalance>
    </MainContainer>
  );
}

export default Card;
