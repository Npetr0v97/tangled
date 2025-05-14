import styles from "./style.module.css"

const IssueRow = ({issue, index,siteURL}) => {

    const issueURL = `${siteURL}/browse/${issue.key}`

    return (    

    <div key={index} className={styles.row_item}>
        <a href={issueURL} className={styles.url_container}>
            <img src={issue.fields.issuetype.iconUrl} alt="icon" /> 
            <a href={issueURL} className={styles.issue_key}>{issue.key}</a> 
            <span>{issue.fields.summary}</span>
        </a>
    </div>

    )
}

export default IssueRow;