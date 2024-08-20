import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "../styles/Projects.module.css"
import seigaiha from '../projs/seigaiha.gif';
import blue from '../projs/blue.gif';
import buddy from '../projs/buddy.png'
import annabel from '../projs/annabel.gif'

import P5Sketch from './Pixels.js';



export default function Projects(props) {
    return(
        
        <div className={styles.proj_section}>
            
            {/* <div className = {styles.sketch_home}>
                 <P5Sketch  />
            </div> */}

            <div className={styles.proj_top}>
            <p className={styles.font_size}>{props.name}</p>
                <p className={styles.proj_title}>A collection of projects I made with javascript libraries like p5.js and three.js</p>
            </div>
            
            <Container>
                
            <Row className="justify-content-md-center align-items-center">
                <Col className = "d-flex flex-column justify-content-center align-items-center">
                    <img className = {styles.proj_style} src = {blue} alt="project"></img>
                    <p className={styles.proj_title}>BSOD</p>
                </Col>
                <Col className = "d-flex flex-column justify-content-center align-items-center">
                <img className = {styles.proj_style} src = {annabel} alt="project"></img>
                <p className={styles.proj_title}>Annabel Lee</p>
                </Col>
                
            </Row>
            <Row className="justify-content-md-center align-items-center">
                <Col className = "d-flex flex-column justify-content-center align-items-center">
                    <img className = {styles.proj_style} src = {seigaiha} alt="project"></img>
                    <p className={styles.proj_title}>Seigaiha</p>
                </Col>
                <Col className = "d-flex flex-column justify-content-center align-items-center">
                    
                </Col>
                
            </Row>
            </Container>
            
        </div>
    );
}