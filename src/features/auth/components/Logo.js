import styled from 'styled-components';

const Headline = styled.h1`
  display: inline-block;
  padding: 0.2em 0.32em;
  font-size: 2.45rem;
  font-weight: 400;
  color: #1e3e60;
  border: 4px solid #18324e;
`;

const B = styled.span`
  font-size: 2.75rem;
  font-weight: 600;
  color: #18324e;
`;

function Logo() {
  return (
    <>
      <Headline>
        <B>B</B>asic<B>B</B>ank
      </Headline>
    </>
  );
}

export default Logo;
