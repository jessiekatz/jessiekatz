import styles from "../styles/Template.module.css";

export default function Template({ name, description, techStack, images }) {
    return (
        <div className={styles.container}>
            {/* Conditional rendering for images */}
            {images && images.length > 0 ? (
                <div className={styles.topRow}>
                    {images.map((image, index) => (
                        <img 
                            key={index}
                            src={image} 
                            alt={`Project image ${index + 1}`} 
                            className={styles.photo} 
                        />
                    ))}
                </div>
            ) : (
                <div className={styles.noImages}>
                    <p>No images available for this project.</p>
                </div>
            )}
            <div className={styles.bottomRow}>
                <div className={styles.leftDiv}>
                    <p>{description}</p>
                </div>
                <div className={styles.rightDiv}>
                    <h3>Tech Stack:</h3>
                    <ul>
                        {techStack.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
