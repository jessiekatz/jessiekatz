import styles from "../styles/Home.module.css"
import P5Sketch from './Pixels.js';
import { Link } from 'react-router-dom';


export default function Home(props) {
    return(
        <div className={styles.div}>
            
            {/* <p className={styles.font_size}>Jessie Katz</p> */}
            <div className ={styles.sketch_home}>
                 <P5Sketch />
            </div>
            <ul className={styles.ul_pad}>
            <li className={styles.nav_link}>
                    <Link to="/about" style={{ paddingRight: 20, color: 'black', textDecoration: 'none' }}>
                        about
                    </Link>
                </li>
                <li className={styles.nav_link}>
                    <Link to="/projects" style={{ paddingRight: 20, color: 'black', textDecoration: 'none' }}>
                        art
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