import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatsNew from "./pages/WhatsNew";
import Gallery from "./pages/Gallery";
import Stuff from "./pages/Stuff";
import Contact from "./components/Contact";
import {Container, Navbar, Row} from 'react-bootstrap';

/**
 * Without this when changing page the scrollbar stays wherever it was
 * on the last - not always at the top of course and it looks weird.
 */
const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
};

function App() {
    return (
        <BrowserRouter>
            <Container fluid={true}>
                <Navbar id="nav" bg="dark" fixed="top">
                    <Navbar.Brand>
                        <Link to="/" className="active"><span title="Home" className="icon fa-home"/></Link>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Link to="/gallery"><span title="Gallery" className="icon fa-camera-retro"/></Link>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Link to="/stuff"><span title="Stuff used to paint" className="icon fa-paint-brush"/></Link>
                    </Navbar.Brand>
                </Navbar>
                <Row>


                    <section id="main">
                        <switch>
                            <Route component={ScrollToTop} />
                            <Route exact path="/" component={WhatsNew}/>
                            <Route path="/gallery" component={Gallery}/>
                            <Route path="/stuff" component={Stuff}/>
                        </switch>
                    </section>

                    <Contact/>


                </Row>
                <Row id="footer">
                    <span className="copyright">&copy; Mark Earlam.</span>
                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default App;
