import styles from "../styles/About.module.css";
import Home from "./Home.js";
import Footer from './Footer.js';
import skog from '../assets/skog.png';
import momo from '../assets/momo.png';
import concert from '../assets/concert.jpg';
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
    const likes = [
        ['bouldering', false],
        ['boba', false],
        ['sci-fi', false],
        ['skog', true],
        ['design', false],
        ['traveling', false],
        ['concerts', true],
        ['momo', true]
    ];

    likes.sort(([a], [b]) => a.localeCompare(b));

    return (
        <div>
            <div className="nav">
                <Home />
            </div>
            
            <div className={styles.about_section}>
            
                <div className={styles.about}>
                    <h1 style={{fontFamily: 'jenson', fontSize: '2.5em'}}>About me</h1>
                    <p>Welcome to my page! I'm <span className={styles.bolder}>Jessie Katz</span>. I am studying
                    Computer Science and design/develop interfaces at <a href="https://jumbocode.org/" target="_blank" rel="noopener noreferrer" className={styles.bolderLink}>JumboCode</a>. I'm also part of <a href="https://www.wmfo.org" target="_blank" rel="noopener noreferrer" className={styles.bolderLink}>WMFO</a>, 
                    Tufts' student-run radio. When I'm not in class, I'll most likely be playing piano, at a club meeting, 
                    or helping out with research at <a href="https://hrilab.tufts.edu/" target="_blank" rel="noopener noreferrer" className={styles.bolderLink}>Tufts HRI Lab</a>!
                    </p>
                </div>
                <p className={styles.likes_title}>Some things I like</p>
                <Container fluid className={styles.likes_list}>
                    <Row>
                        {likes.map(([like, special], index) => (
                            <Col key={index} xs={12} sm={6} md={4} lg={3} className={styles.likes_col}>
                                <p className={special ? `${styles.special} ${styles.likes}` : styles.likes}>
                                    {like}
                                    {like === 'skog' && <img src={skog} alt="Skog" />}
                                    {like === 'momo' && <img src={momo} alt="Momo" />}
                                    {like === 'concerts' && <img src={concert} alt="Concert" />}
                                </p>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    );
}
