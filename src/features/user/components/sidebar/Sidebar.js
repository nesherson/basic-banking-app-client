import styled from 'styled-components';

import Logo from '../../../../components/Logo';
import Navigation from './navigation/Navigation';

const Aside = styled.aside`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: #16171b;
  display: flex;
  flex-direction: column;
  //padding: 0.15em 0.2em 0 1.25em;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #2e303b;
`;

export const Sidebar = () => {
  return (
    <Aside>
      <LogoWrapper>
        <Logo
          colorLight='#e2e3e9'
          colorDark='#b8bac7'
          fontSize={0.3}
          padding={0.05}
        />
      </LogoWrapper>
      <Navigation />
    </Aside>
  );
};
