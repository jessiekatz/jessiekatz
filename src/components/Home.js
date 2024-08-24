import styles from "../styles/Home.module.css";
import P5Sketch from './Pixels.js';
import { Link } from 'react-router-dom';

export default function Home({ projectsRef }) {
    const scrollTo = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.div}>
            <div className={styles.sketch_home}>
                <P5Sketch />
            </div>
            
            <Link to="/" className={styles.back_link}>JK</Link>
            <ul className={styles.ul_pad}>
                <li className={styles.nav_link}>
                    <Link to="/about" style={{ paddingRight: 20, color: 'black', textDecoration: 'none' }}>
                        about
                    </Link>
                </li>
                <li className={styles.nav_link} onClick={() => scrollTo(projectsRef)}>
                    <Link style={{ paddingRight: 20, color: 'black', textDecoration: 'none' }}>
                        projects
                    </Link>
                </li>
                <li className={styles.nav_link}>
                    <Link to="https://github.com/jessiekatz" style={{ paddingRight: 20, color: 'black', textDecoration: 'none' }}>
                        github
                    </Link>
                </li>
            </ul>
        </div>
    );
}
