import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Signup from './features/auth/components/Signup';
import Login from './features/auth/components/Login';
import Layout from './features/user/components/layout/Layout';
import Dashboard from './features/user/components/dashboard/Dashboard';
import Transactions from './features/transactions/components/transactions/Transactions';
import DepositWithdraw from './features/transactions/components/DepositWithdraw/DepositWithdraw';

function App() {
  return (
    <Router>
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/login' component={Login} />
      <Route path='/'>
        <Layout>
          <Switch>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/transactions' component={Transactions} />
            <Route path='/deposit-withdraw' component={DepositWithdraw} />
            <Redirect to='/dashboard' />
          </Switch>
        </Layout>
      </Route>
    </Router>
  );
}

export default App;
