import styles from "../styles/Template.module.css";
import im from "../projs/buddyup1.png";
import im2 from "../projs/buddy2.png";
import seigaiha from '../projs/seigaiha.gif';
import annabel from '../projs/annabel.gif';
import blue from '../projs/blue.gif';
import poke from '../projs/poke.png';
import poke2 from '../projs/poke2.png';
import spoot from '../projs/spoot.png';

export default function Template({ name, description, techStack, images }) {
    const projects = {
        BuddyUp: [im, im2],
        PokeGuessr: [poke,poke2], // Make sure `phot.png` is imported properly if used
        Spootify: [spoot],   // Same for this line
        Portfolio: [seigaiha, blue, annabel]
    };

    const projectImages = projects[name] || images; // Fallback to `images` prop if `name` is not found

    return (
        <div className={styles.container}>
            {/* Conditional rendering for images */}
            {projectImages && projectImages.length > 0 ? (
                <div className={styles.topRow}>
                    {projectImages.map((image, index) => (
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
