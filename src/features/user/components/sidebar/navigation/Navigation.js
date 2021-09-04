import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 2.5em 1.25em;
  list-style: none;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 1.75em 1.25em;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
  margin-bottom: 1.25em;
  font-size: 1.2rem;
  color: #c6c8d2;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  color: #c6c8d2;
  padding: 0.3em 0.45em;
  border-left: 3px solid transparent;

  &.active {
    border-left: 3px solid #2196f3;
  }
  &:hover {
    border-left: 3px solid #55aef6;
  }
`;

const Divider = styled.li`
  width: 100%;
  height: 1px;
  margin-bottom: 1.25em;
  background-color: rgba(184, 186, 199, 0.4);
  list-style: none;
`;

const StyledSpan = styled.span`
  padding: 0.3em 0.45em;
`;

function Navigation() {
  return (
    <Nav>
      <NavList>
        <ListItem>
          <Link to='/dashboard'>Dashboard</Link>
        </ListItem>
        <ListItem>
          <Link to='/cards'>Cards</Link>
        </ListItem>
        <ListItem>
          <Link to='/transactions'>Transactions</Link>
        </ListItem>
        <ListItem>
          <Link to='/payments'>Payments</Link>
        </ListItem>
        <ListItem>
          <Link to='/deposit-withdraw'>Deposit/Withdraw</Link>
        </ListItem>
      </NavList>
      <List>
        <ListItem>
          <Link to='/settings'>Settings</Link>
        </ListItem>
        <Divider />
        <ListItem>
          <StyledSpan>Logout</StyledSpan>
        </ListItem>
      </List>
    </Nav>
  );
}

export default Navigation;
