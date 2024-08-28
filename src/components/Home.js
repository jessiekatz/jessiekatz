import styles from "../styles/Home.module.css";
import P5Sketch from './Pixels.js';
import { Link, useNavigate } from 'react-router-dom';
import house from '../assets/home.png';

export default function Home() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/", { replace: true });
    };

    return (
        <div className={styles.div}>
            <div id="put_sketch" className={styles.sketch_home}>
                <P5Sketch id="put_sketch"/>
            </div>

            <button onClick={handleHomeClick} className={styles.back_link}>
                <img src={house} width="30px" alt="house icon"/>
            </button>
            <ul className={styles.ul_pad}>
                <li className={styles.nav_link}>
                    <Link to="/about" className={styles.link_style}>
                        about
                    </Link>
                </li>
                <li className={styles.nav_link}>
                    <a href="https://github.com/jessiekatz" target="_blank" rel="noreferrer" className={styles.link_style}>
                        github
                    </a>
                </li>
            </ul>
        </div>
    );
}
