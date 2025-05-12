import React, { useEffect, useState } from 'react';
import { events, invoke, view } from '@forge/bridge';
import ForgeReconciler, {useProductContext} from '@forge/react';
import IssuePanel from "./issuePanel";
import ProjectPage from "./projectPage"


const App = () => {
 
const [context, setContext] = useState(null)

useEffect(()=>{

  const fetchContext = async () => {
    const resContext = await view.getContext();
    setContext(resContext)
  }

  fetchContext()
},[])

console.log(context)

const componentType = context?.extension?.type

 if (componentType === "jira:issuePanel") {
  return <IssuePanel currentContext={context}/>
 } else if (componentType === "jira:projectPage") {
  return <ProjectPage currentContext={context}/>
 } else {
  return <div>Loading...</div>
 }
 
};
export default App;
