import styles from '../styles/Content.module.css'

export default function Content() {
    return(
        <div className={styles.content}>
            <p className={styles.font}>Hellooo! I'm Jessie Katz. Studying computer science at Tufts University. </p>
            <p className={styles.font_size_2}>Some things I like:</p>
            <p className={styles.font}>bouldering boba my cat momo pixel aesthetics rainy days skog playing piano</p>
        </div>
    )
}