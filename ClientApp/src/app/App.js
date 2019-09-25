import React from 'react';
import './App.css';
import {Container} from 'semantic-ui-react';
import AppHeaders from './AppHeaders';
import AccountClaimsDashboard from '../features/Claims/AccountClaimsDashboard';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TransactionDashboard from '../features/Transactions/TransactionDashboard';

function App() {
  return (
    <div>
      <AppHeaders></AppHeaders>
      
      <Container>
      {/* <AccountClaimsDashboard></AccountClaimsDashboard> */}
      <Router>
      <Route path="/" exact component={AccountClaimsDashboard} />
        <Route path="/Transactions/" component={TransactionDashboard} />
        {/* <Route path="/users/" component={Users} /> */}
        </Router>
        </Container>
    </div>
  );
}

export default App;
