import styles from "./styles/Home.module.css"
import P5Sketch from './Pixels.js';

export default function Home() {
    return(
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <div className = {styles.sketch_home}>
                 <P5Sketch  />
            </div>
            <p className={styles.font_size}>Jessie Katz</p>
        </div>
        
    );
}