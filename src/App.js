import React from 'react';
import {HashRouter, Link, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatsNew from "./pages/WhatsNew";
import Gallery from "./pages/Gallery";
import Stuff from "./pages/Stuff";
import Learning from "./pages/Learning";
import Contact from "./components/Contact";
import Privacy from "./pages/Privacy";
import {Container, Navbar, Row} from 'react-bootstrap';
import {FacebookProvider} from "react-facebook";
import styled from 'styled-components';

/**
 * Without this when changing page the scrollbar stays wherever it was
 * on the last - not always at the top of course and it looks weird.
 */
const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
};

const NavbarLink = styled.div`
         span {text-decoration: none;
            border-bottom: none;
            position: relative;
          }
        
        span:before {
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-family: FontAwesome;
            font-style: normal;
            font-weight: normal;
            text-transform: none !important;
        }
        
        span > .label {
            display: none;
        }
`;

const Footer = styled(Row)`
        padding: 4em 0 2em 0;
        background: #f2f2f2;
     .copyright {
        color: #bfbfbf;
        font-size: 0.9em;
        margin: 0 0 2em 0;
        padding: 0 1em;
        text-align: center;
        display: block;
        width: 100%;
    }
    
    @media screen and (max-width: 736px) {
    
        #footer {
            padding: 3em 0 1em 0;
        }
    
    }
`;

const MainSection = styled.section`
	background: #f1f1f1;
	width: 100%;
 #header {
	background: #e6e6e6;
	padding: 1.15em 3.5em;
	text-align: right;
}

 #header h1 {
	margin: 0;
	font-size: 1em;
}
`;

function App() {
    return (
        <HashRouter>
            <FacebookProvider appId="871056593418954">
                <Container fluid={true}>
                    <Navbar id="nav" bg="dark" fixed="top">
                        <Navbar.Brand>
                            <NavbarLink>
                                <Link to="/" className="active"><span title="Home" className="fa-home"/></Link>
                            </NavbarLink>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <NavbarLink>
                                <Link to="/gallery"><span title="Gallery" className="fa-camera-retro"/></Link>
                            </NavbarLink>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <NavbarLink>
                                <Link to="/stuff"><span title="Stuff used to paint"
                                                        className="fa-paint-brush"/></Link>
                            </NavbarLink>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <NavbarLink>
                                <Link to="/learning"><span title="How I paint" className="fa-book"/></Link>
                            </NavbarLink>
                        </Navbar.Brand>
                    </Navbar>
                    <Row>


                        <MainSection id="main">
                            <switch>
                                <Route component={ScrollToTop}/>
                                <Route exact path="/" component={WhatsNew}/>
                                <Route path="/gallery" component={Gallery}/>
                                <Route path="/stuff" component={Stuff}/>
                                <Route path="/learning" component={Learning}/>
                                <Route path="/privacy" component={Privacy}/>
                            </switch>
                        </MainSection>

                        <Contact/>

                    </Row>
                    <Footer>
                        <span className="copyright">&copy; Mark Earlam.</span>
                        <Link to="/privacy" className="active copyright">Privacy policy</Link>
                    </Footer>
                </Container>
            </FacebookProvider>
        </HashRouter>
    );
}

export default App;
