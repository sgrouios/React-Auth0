import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { isAuthenticated, user, isLoading } = useAuth0();

    return (
        !isLoading && isAuthenticated && (
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button onClick={()=> console.log(user)}>User</button>
          </div>
        ));
}
 
export default Profile;