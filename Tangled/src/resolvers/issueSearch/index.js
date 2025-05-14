import api, { route } from '@forge/api';



//ROUTES DEFINITIONS

const fetchIssueSearchRoute = (userId,projectKey,fields,expand) => route`/rest/api/2/search/jql?jql=project=${projectKey}%20AND%20(assignee=${userId}%20OR%20reporter=${userId}%20OR%20comment~"accountid:${userId}")&maxResults=10&fields=${fields}&expand=${expand}`; //expand=



//FUNCTION DEFINITIONS
const fetchUserIssues = async (req) => {
    const {
        userId,
        projectKey,
        fieldsArray: fields = ["key","summary"],
        expandArray: expand = ["key"]
      } = req.payload;

    const defaultFieldsList = ["summary","created","updated","resolutiondate","resolution"]
    //Given that I will most likely need some fields by default, there is no need to define them as extra
    const enrichedFields = [...new Set([...fields, ...defaultFieldsList])];
    const res = await api.asApp().requestJira(fetchIssueSearchRoute(userId,projectKey,enrichedFields,expand),{  headers: {
        'Accept': 'application/json'
      }});
    const data = await res.json();
    return data.issues;
}


export const issueSearchResolvers = {
    fetchUserIssues
}