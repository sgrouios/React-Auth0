import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const Profile = () => {
    const { isAuthenticated, user, isLoading, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
      const getToken = async () => {
        try{
          const token = await getAccessTokenSilently({
            audience:'https://s-grouios-dev.au.auth0.com/api/v2/',
            scope: 'read:current_user'
          });
          console.info(token);
        }
        catch(error){
          console.error(error);
        }
      }
      getToken();
    }, [getAccessTokenSilently]);
    
    if(isLoading)
    return (<div>Loading...</div>)
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