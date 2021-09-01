import { BrowserRouter as Router } from 'react-router-dom';

import Signup from './features/auth/components/Signup';

function App() {
  return (
    <Router>
      <Signup />
    </Router>
  );
}

export default App;
