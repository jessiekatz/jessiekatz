import React from 'react';
import './styles/App.css';
import Home from './Home.js';
import Footer from './Footer.js'
import Content from './Content.js'
import Nav from './Nav.js'
import Projects from './Projects.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.projectsRef = React.createRef();
      }
  
  render() {
    return (
        <div className="app-container">
            <Nav projectsRef={this.projectsRef}/>

            <div className="content">
                <Home className="home" />
                {/* <Content /> */}
            </div>
        {/* <Footer /> */}

            <div className="projs" ref={this.projectsRef}>
                <Projects name ="projects / experiments" />
            </div>


        </div>
      );
    }
}

export default App;
