import React from 'react';
import './styles/App.css';
import Home from './components/Home.js';
import Content from './components/Content.js'
import Projects from './components/Projects.js'
import Ripples from './components/Ripple.js'
import 'bootstrap/dist/css/bootstrap.min.css';

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
            
            <div className="about">
                {/* <div className="rip" >
                    <Ripples/>
                </div> */}
                <Content />
            </div>
            

            <div className="projs" ref={this.projectsRef}>
                <Projects name ="art stuff" />
            </div>

        </div>
      );
    }
}

export default App;
