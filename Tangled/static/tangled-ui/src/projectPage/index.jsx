import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import styles from "./style.module.css"
import IssueRow from './components/issueRow';


const Component = ({currentContext}) => {
    const context = currentContext

    const [user, setUser] = useState(null)
    const [userIssues, setUserIssues] = useState(null)
    // console.log("ISSUES ", userIssues)
    useEffect(() => {
      
      const fetchUserAndUserIssues = async () => {
        if (context) {
          // extract user ID from the context
          const userId = context.accountId;
          const resFetchedUser = await invoke('fetchUserById',{userId})
          setUser(resFetchedUser)

          //the fields that will be required from each issue
          //customfield_10058 = A random text field I use to test fetching fields based on their ID
          const fieldsArray = ["assignee","reporter","status","customfield_10058"]
          const projectKey = context.extension.project.key
          const resFetchedIssues = await invoke('fetchUserIssues',{userId,projectKey,fieldsArray})
          setUserIssues(resFetchedIssues)
        }
      }

      fetchUserAndUserIssues();
      }, [context]);
    
      return (<div>
            <div className={styles.container}>
              {user && <h1 className={styles.title}>Greetings, <span className={styles.user_name}>{user?.displayName?.split(" ")[0]}</span></h1>}
              {user && <h2 className={styles.subtitle}>Check out a summary of your work.</h2>}
            </div>
            <div>
              {userIssues && userIssues.map((issue, index) => 
              <IssueRow index={index} issue = {issue}/>)}
            </div>
      </div>);
}

export default Component