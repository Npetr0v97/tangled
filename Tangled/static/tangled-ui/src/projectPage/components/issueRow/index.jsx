import styles from "./style.module.css"

const IssueRow = ({issue, index}) => {


    return (    
    <div key={index} className={styles.row}>
        {issue.fields.summary}
    </div>
    )
}

export default IssueRow;