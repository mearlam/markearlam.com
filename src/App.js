import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import {FacebookProvider} from "react-facebook";
import styled, {keyframes} from 'styled-components';
import Social from "./components/Social";
import Me from "./images/Mark-Earlam-300x300.jpg"

/**
 * Without this when changing page the scrollbar stays wherever it was
 * on the last - not always at the top of course and it looks weird.
 */
const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
};

const MainSection = styled.section`
	width: 100%;
 #header {
	padding: 1.15em 3.5em;
	text-align: right;
}

 #header h1 {
	margin: 0;
	font-size: 1em;
}
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
`;

const RoundedImage = styled.img`
    animation: ${fadeIn} 2s linear 1;
    border-radius: 50%;
    border: 5px solid #1a362b;
    height: 200px;
    display: inline-block;
`;

const MarksRow = styled(Row)`
 animation: ${fadeIn} 2s linear 1;
    padding: 5em 1em 1em 1em;
    justify-content: center;
`;

const NameRow = styled.div`
 animation: ${fadeIn} 2s linear 1;
    margin: 0;
    justify-content: center;
    display: flex;
    color: white;
    font-size: 1.2em;
    font-weight: 700;
`;

const TextRow = styled.div`
 animation: ${fadeIn} 2s linear 1;
    margin: 0;
    justify-content: center;
    display: flex;
    color: white;
`;


function App() {

    return (
        <BrowserRouter>
            <FacebookProvider appId="871056593418954">
                <Container fluid={true}>

                        <MainSection id="main">
                            <switch>
                                <Route component={ScrollToTop}/>
                                <Route exact path="/" >
                                    <MarksRow xs={12} xl={12} >
                                        <RoundedImage src={Me} />
                                    </MarksRow>

                                    <NameRow>Mark Andrew Art</NameRow>
                                    <TextRow>Hi! ..if you are looking for my paintings, you can find them in the usual places down below.</TextRow>

                                    <Social url='https://www.markearlam.com' />


                                </Route>
                            </switch>
                        </MainSection>


                </Container>
            </FacebookProvider>
        </BrowserRouter>
    );
}

export default App;
