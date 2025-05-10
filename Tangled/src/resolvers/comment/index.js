import api, { route } from '@forge/api';



//ROUTES DEFINITIONS

const fetchCommentsRoute = (issueId) => route`/rest/api/3/issue/${issueId}/comment`;



//FUNCTION DEFINITIONS
const fetchComments = async (req) => {
    const issueId = req.payload.issueId
    const res = await api.asApp().requestJira(fetchCommentsRoute(issueId),{  headers: {
        'Accept': 'application/json'
      }});
    const data = await res.json();
    return data.comments;
}


export const commentResolvers = {
    fetchComments
}