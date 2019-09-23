import React from 'react';
import './App.css';
import {Container} from 'semantic-ui-react';
import AppHeaders from './AppHeaders';
import AccountClaimsDashboard from '../features/AccountClaimsDashboard';

function App() {
  return (
    <div>
      <AppHeaders></AppHeaders>
      <Container>
      <AccountClaimsDashboard></AccountClaimsDashboard>
      </Container>
    </div>
  );
}

export default App;
