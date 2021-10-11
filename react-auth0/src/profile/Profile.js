import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const Profile = () => {
    const { isAuthenticated, user, isLoading, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
      const getToken = async () => {
        try{
          const token = await getAccessTokenSilently();
          await fetch("http://localhost:5000/api/test", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          console.info(token);
        }
        catch(error){
          console.error("Error", error);
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