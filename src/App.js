import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Container from './Container.js'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Container />
    </Router>
  );
}

export default App;
