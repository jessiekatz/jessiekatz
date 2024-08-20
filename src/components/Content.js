import styles from '../styles/Content.module.css'

export default function Content() {
    const likes = ['bouldering', 'boba', 'sci-fi', 'skog', 'playing piano', 'visual design', 'traveling'];

    likes.sort()
    return (
        <div className={styles.content}>
            <p className={styles.font}>Hellooo! I'm Jessie Katz. </p>
            <p className={styles.about}>I'm studying Computer Science and Cognitive Brain Sciences at <span className={styles.custom}>Tufts University</span>. I'm from <span className={styles.custom}>Queens, New York</span>.
                                    I currently enjoy experimenting with graphic libraries like <span className={styles.custom}>Processing</span> or <span className={styles.custom}>Three.js</span></p>
            
            <div className={styles.likes_section}>
                <p className={styles.font_size_2}>Some things I like:</p>
                <div>
                    {likes.map((like, index) => (
                        <p
                            key={index}
                            className={index % 2 === 0 ? styles.likes : `${styles.likes} ${styles.special}`}
                        >
                            {like} {index < likes.length - 1 && <span className={styles.slash}>/</span>}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
