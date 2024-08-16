import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./styles/Projects.module.css"
import seigaiha from './projs/seigaiha.gif';
import blue from './projs/blue.gif';
import buddy from './projs/buddy.png'

export default function Projects(props) {
    return(
        
        <div>
            <p className={styles.font_size}>{props.name}</p>
            
            <Container>
            <Row className="justify-content-md-center align-items-center">
                <Col className = "d-flex flex-column justify-content-center align-items-center">
                    <img className = {styles.proj_style} src = {buddy}></img>
                    <p className={styles.proj_title}>BuddyUp</p>
                </Col>
                <Col className = "d-flex flex-column justify-content-center align-items-center">
                    
                </Col>
                
            </Row>
            <Row className="justify-content-md-center align-items-center">
                <Col className = "d-flex flex-column justify-content-center align-items-center">
                    <img className = {styles.proj_style} src = {seigaiha}></img>
                    <p className={styles.proj_title}>Seigaiha</p>
                </Col>
                <Col className = "d-flex flex-column justify-content-center align-items-center">
                    <img className = {styles.proj_style} src = {blue}></img>
                    <p className={styles.proj_title}>BSOD</p>
                </Col>
                
            </Row>
            </Container>
            
        </div>
    );
}