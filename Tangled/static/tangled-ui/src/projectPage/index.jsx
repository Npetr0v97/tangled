import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import styles from "./style.module.css"


const Component = ({currentContext}) => {
    const context = currentContext

    const [user, setUser] = useState(null)

    useEffect(() => {
      
      const fetchUser = async () => {
        if (context) {
          // extract user ID from the context
          const userId = context.accountId;
          const resFetchedUser = await invoke('fetchUserById',{userId})
          setUser(resFetchedUser)
        }
      }
      fetchUser();
      }, [context]);
    
      return (
      <div className={styles.container}>
        <h1 className={styles.title}>Greetings, {user?.displayName?.split(" ")[0]}</h1>
        <h2 className={styles.subtitle}>Check out a summary of your work.</h2>
      </div>
      );
}

export default Component