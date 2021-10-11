import { useAuth0 } from '@auth0/auth0-react';
import './button.css';

const LogoutButton = () => {
    const { logout } = useAuth0();

    const logoutUser = () => {
        logout({ returnTo: process.env.REACT_APP_BASE_URI })
    }
    return (  
        <button className="btn-li" onClick={logoutUser}>Logout</button>
    );
}
 
export default LogoutButton;