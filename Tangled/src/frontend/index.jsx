import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text, useProductContext } from '@forge/react';
import { invoke } from '@forge/bridge';
import { requestJira } from '@forge/bridge';




const App = () => {

  const context = useProductContext();

  const [comments, setComments] = useState();
  console.log(`Number of comments on this issue: ${comments?.length}`);

  const [data, setData] = useState(null);

useEffect(() => {
    
  const fetchComments = async () => {
    if (context) {
      // extract issue ID from the context
      const issueId = context.extension.issue.id;
  
      const fetchedComments = await fetchCommentsForIssue(issueId)
      setComments(fetchedComments)
    }
  }

  fetchComments();
  }, [context]);

  const fetchCommentsForIssue = async () => {

    const issueId = context?.extension.issue.id

    const res = await requestJira(`/rest/api/3/issue/${issueId}/comment`);
    const data = await res.json();
    return data.comments;
  };



  useEffect(() => {
    invoke('getText', { example: 'my-invoke-variable' }).then(setData);

  }, []);
  return (
    <>
      <Text>Hello world!</Text>
      <Text>{data ? data : 'Loading...'}</Text>
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
