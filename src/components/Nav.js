import React from 'react';
import { Link } from 'react-router-dom';
import P5Sketch from './Pixels.js';
import styles from "../styles/Nav.module.css"

export default function Nav({ projectsRef }) {
    const scrollTo = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        
        <div className={styles.nav_div}>
            <div className ={styles.sketch_nav}>
                 <P5Sketch />
            </div>
            <ul className={styles.ul_pad}>
            {/* <li className="nav-link" onClick={() => scrollTo(projectsRef)}>Projects</li> */}
            <li className={styles.nav_link}>
                <Link to="https://github.com/jessiekatz" style={{ paddingRight: 20, color: 'black', textDecoration: 'none' }}>
                    Github
                </Link>
            </li>
            </ul>
        </div>
    );
}
