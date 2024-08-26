import styles from "../styles/About.module.css";
import Home from "./Home.js";
import { Link } from 'react-router-dom';

export default function About() {
    const likes = [
        ['bouldering', false],
        ['boba', false],
        ['sci-fi', false],
        ['skog', true],
        ['design', true],
        ['traveling', false],
        ['concerts', true],
        ['momo', true]
    ];

    likes.sort(([a], [b]) => a.localeCompare(b)); // Sorting based on the first element in each tuple

    // Group likes into rows of 4 items each
    const groupedLikes = [];
    for (let i = 0; i < likes.length; i += 4) {
        groupedLikes.push(likes.slice(i, i + 4));
    }

    return (
        <div>
            <div className="nav">
                <Home />
            </div>
            
            <div className={styles.likes_section}>
            
                <div className={styles.about}>
                    <h1 style={{fontFamily: 'jenson', fontSize: '2.5em'}}>About me</h1>
                    <p>Welcome to my page! I'm <span className={styles.bolder}>Jessie Katz</span>. I am studying
                    Computer Science and design/develop interfaces at <a href="https://jumbocode.org/" target="_blank" rel="noopener noreferrer" className={styles.bolder}>JumboCode</a>. I'm also part of <a href="https://www.wmfo.org" target="_blank" rel="noopener noreferrer" className={styles.bolder}>WMFO</a>, Tufts' student-run radio. When I'm not in class,
                    I'll most likely be playing piano, at a club meeting, or helping out with research at <a href="https://hrilab.tufts.edu/" target="_blank" rel="noopener noreferrer" className={styles.bolder}>Tufts HRI Lab</a>!
                    </p>
                </div>
                <p className={styles.likes_title}>Some things I like</p>
                <div className={styles.likes_list}>
                    {groupedLikes.map((group, groupIndex) => (
                        <div key={groupIndex} className={styles.likes_row}>
                            {group.map(([like, special], index) => (
                                <p
                                    key={index}
                                    className={special ? `${styles.special} ${styles.likes}` : styles.likes}
                                >
                                    {like}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
