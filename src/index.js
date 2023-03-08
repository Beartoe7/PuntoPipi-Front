import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { ProjectsProviderWrapper } from './contexts/projects.context';
import { AuthProviderWrapper } from './contexts/auth.context';
import "bootstrap/dist/css/bootstrap.css";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <ProjectsProviderWrapper>
          <App />
        </ProjectsProviderWrapper>
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>
);
