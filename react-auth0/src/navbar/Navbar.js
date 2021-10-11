import './navbar.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../auth/LoginButton';
import LogoutButton from '../auth/LogoutButton';


const Navbar = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            {isAuthenticated && <li><Link to="/profile">Profile</Link></li>}
            {!isAuthenticated && <li className="auth-btn"><LoginButton /></li>}
            {isAuthenticated && <li className="auth-btn"><LogoutButton /></li>}
        </ul>
        </nav>
    );
}
 
export default Navbar;