import React from 'react';
import ForgeReconciler, {useProductContext} from '@forge/react';
import IssuePanel from "./issuePanel";
import ProjectPage from "./projectPage"





const App = () => {
 
const context = useProductContext();
const componentType = context?.extension?.type
console.log(context)
 if (componentType === "jira:issuePanel") {
  return <IssuePanel/>
 } else {
  return <ProjectPage/>
 }
 
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
