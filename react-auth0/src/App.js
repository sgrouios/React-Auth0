import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './home/Home';
import Profile from './profile/Profile';
import Navbar from './navbar/Navbar';
import GuardedRoute from './guarded-route/GuardedRoute';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
    <Navbar />
      <div className="body">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <GuardedRoute exact path="/profile" component={Profile} isAuthenticated={isAuthenticated} redirect="/" />
          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
