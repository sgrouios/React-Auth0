import './navbar.css';
import { Link } from 'react-router-dom';
import AuthButton from '../auth/AuthButton';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            {isAuthenticated && <li><Link to="/profile">Profile</Link></li>}
            <li className="auth-btn"><AuthButton isAuthenticated={isAuthenticated}/></li>
        </ul>
        </nav>
    );
}
 
export default Navbar;