import styles from "../styles/Template.module.css";
import im from "../projs/buddy1.jpg";
import im2 from "../projs/buddy2.png";

export default function Template({ name, description, techStack, images }) {
    const imgs = [im, im2]
    return (
        <div className={styles.container}>
            {/* Conditional rendering for images */}
            {images && images.length > 0 ? (
                <div className={styles.topRow}>
                    {images.map((image, index) => (
                        console.log(image),
                        <img 
                            key={index}
                            src={imgs[index]} 
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
                    <div>
                        <h3 className={styles.techStack}>Tech Stack</h3>
                        <ul>
                            {techStack.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
