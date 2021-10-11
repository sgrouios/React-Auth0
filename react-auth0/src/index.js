import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URI;

ReactDOM.render(
  <Auth0Provider 
    audience={audience}
    domain={domain} 
    clientId={clientId}
    redirectUri={redirectUri}
    >
  <Router>
    <Route>
      <App />
    </Route>
  </Router>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
