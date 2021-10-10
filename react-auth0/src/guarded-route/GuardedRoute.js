import { Redirect, Route } from "react-router";

const GuardedRoute = ({ component: Component, isAuthenticated, redirect}) => {
    return (
        <Route render={(props) => (
            isAuthenticated === true
            ? <Component {...props}/>
            : <Redirect to="/"/>
        )}/>
    );
}
 
export default GuardedRoute;