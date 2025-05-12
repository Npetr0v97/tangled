import React, { useEffect, useState } from 'react';
import { useProductContext } from '@forge/react';
import { invoke, view } from '@forge/bridge';
import styles from './style.module.css';

const Component = ({currentContext}) => {
  const context = currentContext

    
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
      <div className={styles.random_text}>Number of comments on this issue: {typeof comments === "object" ? comments.length : comments}</div>
      {issue?.fields?.summary && <div>Current issue summary: {issue.fields.summary}</div>}
    </>
  );
}

export default Component