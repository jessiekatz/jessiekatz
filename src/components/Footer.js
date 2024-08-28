import styles from "../styles/Footer.module.css";
import P5Sketch from './Pixels.js';

export default function Footer() {
    return(
    <div className={styles.footer}>
        <div className={styles.text_div}>
            <button className={styles.contact_button} onClick={() => window.location.href = 'mailto:youremail@example.com'}>
                Contact me
            </button>
        </div>
        <div className={styles.grad}></div>
        <div id="hold" className={styles.sketch_footer}>
            <P5Sketch id="hold" />
        </div>
    </div>
    );
}
