import styled from 'styled-components';

const Headline = styled.h1`
  display: inline-block;
  //padding: 0.2em 0.32em;
  padding-top: calc(${(props) => props.padding}em + 0.2em);
  padding-bottom: calc(${(props) => props.padding}em + 0.2em);
  padding-left: calc(${(props) => props.padding}em + 0.35em);
  padding-right: calc(${(props) => props.padding}em + 0.35em);
  //font-size: 2.45rem;
  font-size: calc(${(props) => props.fontSize}rem + 1.5rem);
  font-weight: 400;
  color: ${(props) => props.colorLight};

  border-left: 4px solid ${(props) => props.colorDark};
  border-bottom: 4px solid ${(props) => props.colorDark};
  border-right: 4px solid transparent;
  border-top: 4px solid transparent;

  margin: 0;
`;

const B = styled.span`
  //font-size: 2.75rem;
  font-size: calc(${(props) => props.fontSize}rem + 2rem);
  font-weight: 600;
  color: ${(props) => props.colorDark};
`;

function Logo({ colorLight, colorDark, fontSize, padding }) {
  return (
    <>
      <Headline
        colorLight={colorLight}
        colorDark={colorDark}
        fontSize={fontSize}
        padding={padding}
      >
        <B colorDark={colorDark} fontSize={fontSize}>
          B
        </B>
        asic
        <B colorDark={colorDark} fontSize={fontSize}>
          B
        </B>
        ank
      </Headline>
    </>
  );
}

export default Logo;
