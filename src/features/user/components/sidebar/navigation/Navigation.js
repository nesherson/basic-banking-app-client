import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  Trello as DashboardIcon,
  CreditCard as CardIcon,
  Repeat as TransactionIcon,
  DollarSign as DepWitIcon,
  Send as PaymentIcon,
  Settings,
  LogOut,
} from 'react-feather';

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
  margin: 2.5em 0; // 1.25
  list-style: none;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0.75em 0;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
  margin-bottom: 0.3em;
  font-size: 1.1rem;
  color: #c6c8d2;
`;

const Link = styled(NavLink)`
  box-sizing: border-box;
  text-decoration: none;
  color: #c6c8d2;
  padding: 0.8em 0.45em;
  border-left: 3px solid transparent;
  display: flex;

  &.active {
    border-left: 3px solid #2196f3;
    background-color: rgba(198, 200, 210, 0.1);
  }
  &:hover {
    background-color: rgba(141, 145, 165, 0.15);
  }
`;

const Icon = styled.div`
  margin-right: 0.28em;
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
  display: flex;
`;

function Navigation() {
  return (
    <Nav>
      <NavList>
        <ListItem>
          <Link to='/dashboard'>
            <Icon>
              <DashboardIcon />
            </Icon>
            Dashboard
          </Link>
        </ListItem>
        <ListItem>
          <Link to='/cards'>
            <Icon>
              <CardIcon />
            </Icon>
            Cards
          </Link>
        </ListItem>
        <ListItem>
          <Link to='/transactions'>
            <Icon>
              <TransactionIcon />
            </Icon>
            Transactions
          </Link>
        </ListItem>
        <ListItem>
          <Link to='/payments'>
            <Icon>
              <PaymentIcon />
            </Icon>
            Payments
          </Link>
        </ListItem>
        <ListItem>
          <Link to='/deposit-withdraw'>
            <Icon>
              <DepWitIcon />
            </Icon>
            Deposit/Withdraw
          </Link>
        </ListItem>
      </NavList>
      <List>
        <ListItem>
          <Link to='/settings'>
            <Icon>
              <Settings />
            </Icon>
            Settings
          </Link>
        </ListItem>
        <Divider />
        <ListItem>
          <StyledSpan>
            <Icon>
              <LogOut />
            </Icon>
            Logout
          </StyledSpan>
        </ListItem>
      </List>
    </Nav>
  );
}

export default Navigation;
