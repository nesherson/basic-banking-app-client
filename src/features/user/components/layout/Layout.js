import styled from 'styled-components';

import { Sidebar } from '../sidebar/Sidebar';

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 260px auto;
  grid-template-rows: auto;
  @media only screen and (max-width: 1599px) {
    grid-template-columns: min(230px) auto;
  }
  @media only screen and (max-width: 1320px) {
    grid-template-columns: auto;
  }
`;

const MainContent = styled.main`
  overflow-x: hidden;
`;

function Layout({ children }) {
  return (
    <Container>
      <Sidebar />
      <MainContent>{children}</MainContent>
    </Container>
  );
}

export default Layout;
