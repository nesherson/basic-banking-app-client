import { BrowserRouter as Router, Route } from 'react-router-dom';

import Signup from './features/auth/components/Signup';
import Login from './features/auth/components/Login';
import Layout from './features/user/components/layout/Layout';
import Dashboard from './features/user/components/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
      <Route path='/'>
        <Layout>
          <Dashboard />
        </Layout>
      </Route>
    </Router>
  );
}

export default App;
