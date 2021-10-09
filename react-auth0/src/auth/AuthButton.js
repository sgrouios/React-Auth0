import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const AuthButton = ({ isAuthenticated }) => {
    if(isAuthenticated)
        return <LogoutButton/>
    else
        return <LoginButton/>
}
 
export default AuthButton;