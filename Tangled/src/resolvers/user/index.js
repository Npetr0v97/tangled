import api, { route } from '@forge/api';



//ROUTES DEFINITIONS
const fetchUserRoute = (userId) => route`/rest/api/3/user?accountId=${userId}`;



//FUNCTION DEFINITIONS
//Retrieves a user based on his ID
const fetchUserById = async (req) => {

    const userId = req.payload.userId
    
    const res = await api.asApp().requestJira(fetchUserRoute(userId), {
        headers: {
          'Accept': 'application/json'
        }
      });
    const data = await res.json();
    
    return data
}


export const userResolvers = {
  fetchUserById
}

