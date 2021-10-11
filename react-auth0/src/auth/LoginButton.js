import { useAuth0 } from "@auth0/auth0-react";
import './button.css';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (  <button className="btn-li" onClick={loginWithRedirect}>Log In</button>);
}
 
export default LoginButton;