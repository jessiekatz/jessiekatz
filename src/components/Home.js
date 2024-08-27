import styles from "../styles/Home.module.css";
import P5Sketch from './Pixels.js';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import house from '../assets/home.png';

export default function Home({ projectsRef }) {
    const location = useLocation();

    const scrollTo = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleProjectsClick = () => {
        if (location.pathname === '/') {
            scrollTo(projectsRef);
        } else {
            window.location.href = '/#projects';
        }
    };

    useEffect(() => {
        if (location.hash === '#projects' && projectsRef.current) {
            scrollTo(projectsRef);
        }
    }, [location, projectsRef]);

    return (
        <div className={styles.div}>
            <div id="skk" className={styles.sketch_home}>
                <P5Sketch id="skk"/>
            </div>

            <Link to="/" className={styles.back_link}><img src={house} width="30px" alt="house icon"/></Link>
            <ul className={styles.ul_pad}>
                <li className={styles.nav_link}>
                    <Link to="/about" style={{ paddingRight: 20, color: 'black', textDecoration: 'none' }}>
                        about
                    </Link>
                </li>
                <li className={styles.nav_link} onClick={handleProjectsClick}>
                    <Link to="#" style={{ paddingRight: 20, color: 'black', textDecoration: 'none' }}>
                        projects
                    </Link>
                </li>
                <li className={styles.nav_link}>
                    <a href="https://github.com/jessiekatz" target="_blank" rel="noreferrer" style={{ paddingRight: 20, color: 'black', textDecoration: 'none' }}>
                        github
                    </a>
                </li>
            </ul>
        </div>
    );
}
