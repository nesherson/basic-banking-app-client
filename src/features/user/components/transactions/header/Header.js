import styled from 'styled-components';

const Container = styled.header`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  margin-bottom: 2.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5em 15% 2em 3.5em;
`;

const Headline = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 2.45rem;
  font-weight: 600;
  color: #161a1d;
  flex: 1;
`;

const Inputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 2;
`;

const SearchBar = styled.input`
  padding: 1em 1.25em;
  outline: none;
  border: 1px solid rgba(33, 38, 44, 0.2);
  width: 210px;
  &:focus {
    border-color: #8cb2c0;
  }
`;

const DateRange = styled.input`
  padding: 1em 1.25em;
  outline: none;
  border: 1px solid rgba(33, 38, 44, 0.2);
  width: 210px;
  &:focus {
    border-color: #8cb2c0;
  }
`;

function Header() {
  return (
    <Container>
      <Headline>Transactions</Headline>
      <Inputs>
        <SearchBar type='text' placeholder='Search transactions' />
        <DateRange type='text' placeholder='Date range' />
      </Inputs>
    </Container>
  );
}

export default Header;
