import React, { useEffect, useState } from 'react';
import { Text, useProductContext } from '@forge/react';
import { invoke } from '@forge/bridge';



const Component = () => {
    const context = useProductContext();

    
      const [comments, setComments] = useState("Calculating...");
      const [issue,setIssue] = useState()
    useEffect(() => {
        
      const fetchComments = async () => {
        if (context) {
          // extract issue ID from the context
          const issueId = context.extension.issue.id;
          const resFetchedComments = await invoke('fetchComments',{issueId})
          setComments(resFetchedComments)
        }
      }
      fetchComments();
      }, [context]);
    
      useEffect(() => {
        
        const fetchIssue = async () => {
          if (context) {
            // extract issue ID from the context
            const issueId = context.extension.issue.id;
            const resFetchedIssue = await invoke('fetchIssue',{issueId})
            setIssue(resFetchedIssue)
          }
        }
        fetchIssue();
        }, [context]);
    
      return (
        <>
          <Text>Number of comments on this issue: {typeof comments === "object" ? comments.length : comments}</Text>
          {issue?.fields?.summary && <Text>Current issue summary: {issue.fields.summary}</Text>}
        </>
      );
}

export default Component