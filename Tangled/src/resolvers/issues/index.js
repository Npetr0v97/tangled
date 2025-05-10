import api, { route } from '@forge/api';



//ROUTES DEFINITIONS
const fetchIssueRoute = (issueId) => route`/rest/api/2/issue/${issueId}`;



//FUNCTION DEFINITIONS
//Retrieves the whole issue
const fetchIssue = async (req) => {

    const issueId = req.payload.issueId
    const res = await api.asApp().requestJira(fetchIssueRoute(issueId), {
        headers: {
          'Accept': 'application/json'
        }
      });
    const data = await res.json();
    
    return data
}


export const issueResolvers = {
    fetchIssue
}

