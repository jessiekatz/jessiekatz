import React from 'react';
import './styles/App.css';
import Home from './components/Home.js';
import Footer from './components/Footer.js'
import Content from './components/Content.js'
import Nav from './components/Nav.js'
import Projects from './components/Projects.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.projectsRef = React.createRef();
      }
  
  render() {
    return (
        <div className="app-container">

            <div className="content">
                <Home className="home" />
                {/* <Content /> */}
            </div>
        {/* <Footer /> */}

            <div className="projs" ref={this.projectsRef}>
                <Projects name ="art stuff" />
            </div>

            {/* <Nav projectsRef={this.projectsRef}/> */}

        </div>
      );
    }
}

export default App;
