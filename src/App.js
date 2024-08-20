import React, { useState } from 'react';
import './styles/App.css';
import Home from './components/Home.js';
// import Footer from './components/Footer.js';
import Content from './components/Content.js'
import Projects from './components/Projects.js'
import Ripples from './components/Ripple.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';

// const [show, setShow] = useState(null);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.projectsRef = React.createRef();
      }
  
  render() {
    return (
        <div className="app-container">

            <div className="nav">
                <Home className="home" />
            </div>
            <Outlet />
            {/* <div className="about">
                <Content />
            </div>
            

            <div className="projs" ref={this.projectsRef}>
                <Projects name ="art stuff" />
            </div> */}

            {/* <Footer /> */}

        </div>
      );
    }
}

export default App;
