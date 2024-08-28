import React from 'react';
import './styles/App.css';
import Home from './components/Home.js';
import Content from './components/Content.js';
import Projects from './components/Projects.js';
import Folio from './components/Folio.js';
import Footer from './components/Footer.js';
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
                    <Home projectsRef={this.projectsRef} />
                </div>

                <div className="home_body">
                    <div className="home_intro">
                        <Content />
                    </div>

                    <div className="folio" ref={this.projectsRef}>
                        <Folio />
                    </div>
                </div>
                
                <Footer />
            </div>
        );
    }
}

export default App;
