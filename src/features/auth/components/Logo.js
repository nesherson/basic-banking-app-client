import styled from 'styled-components';

const Headline = styled.h1`
  display: inline-block;
  padding: 0.2em 0.32em;
  font-size: 2.45rem;
  font-weight: 400;
  color: ${(props) => props.colorLight};
  border: 4px solid ${(props) => props.colorDark};
`;

const B = styled.span`
  font-size: 2.75rem;
  font-weight: 600;
  color: ${(props) => props.colorDark};
`;

function Logo({ colorLight, colorDark }) {
  return (
    <>
      <Headline colorLight={colorLight} colorDark={colorDark}>
        <B colorDark={colorDark}>B</B>asic<B colorDark={colorDark}>B</B>ank
      </Headline>
    </>
  );
}

export default Logo;
