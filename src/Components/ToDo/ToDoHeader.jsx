import styles from './ToDoHeader.module.scss';
// styles ด้านบน เหมือน object
// styles = {}

function ToDoHeader()
{

    const today = new Date();
    const options = {day:'numeric' , weekday:"short", month:'short'};
    return(
        <div className={styles.header}>
            <h1 className={styles.header__text}>Inbox</h1>
            <span className={styles.header__date}>{today.toLocaleDateString('en-Us',options)}</span>
        </div>
    )
}

export default ToDoHeader;