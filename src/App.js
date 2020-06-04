import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatsNew from "./pages/WhatsNew";
import Gallery from "./pages/Gallery";
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
                        <Link to="/" className="active"><span className="icon fa-home"/></Link>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Link to="/gallery"><span className="icon fa-camera-retro"/></Link>
                    </Navbar.Brand>
                </Navbar>
                <Row>


                    <section id="main">
                        <switch>
                            <Route component={ScrollToTop} />
                            <Route exact path="/" component={WhatsNew}/>
                            <Route path="/gallery" component={Gallery}/>
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
