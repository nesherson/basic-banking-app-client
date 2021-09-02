import { BrowserRouter as Router, Route } from 'react-router-dom';

import Signup from './features/auth/components/Signup';
import Login from './features/auth/components/Login';

function App() {
  return (
    <Router>
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
    </Router>
  );
}

export default App;
