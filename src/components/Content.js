import styles from '../styles/Content.module.css'

export default function Content() {

    return (
        <div className={styles.content}>
            <div className={styles.intro}>
                <p className={styles.font}>Hi, I'm</p>
                <p><span className={styles.name}>Jessie Katz.</span></p>
                <p className={styles.sent}>I'm a student at <span className={styles.bolder}>Tufts University</span> studying Computer Science and Cognitive Brain Sciences</p>
            </div>

            <div>

            </div>
            
            
        </div>
    );
}
