import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './home/Home';
import Profile from './profile/Profile';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <>
    <Navbar />
      <div className="body">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/profile" >
            <Profile />
          </Route>
          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
