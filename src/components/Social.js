import React from "react";
import styled, {keyframes} from "styled-components";
import {SocialIcon} from "react-social-icons";
import EtsyLogo from "../images/etsy-social-logo.png"

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
`;

const SocialContainer = styled.div`
 animation: ${fadeIn} 3s linear 1;
    text-align: center;
    margin-top: 1em;
    width: 100%;
    
    svg:hover {
    
           transform: scale(1.5);
        }
`;

const Spacer = styled.div`
    margin-right: 0.5em;
    display: inline-block;
`;

const EtsyLogoContainer = styled.div`
    img:hover {
           transform: scale(1.3);
    }
`;

function Social(props) {
    const {url} = props;

    return (
        <SocialContainer>
            <Spacer>
                <SocialIcon bgColor={"#404040"} fgColor={"white"} url="https://www.facebook.com/markandrewart"/>
            </Spacer>
            <Spacer>
                <SocialIcon bgColor={"#404040"} fgColor={"white"} url="https://www.instagram.com/mark.andrew.art"/>
            </Spacer>
            <SocialIcon bgColor={"#404040"} fgColor={"white"} url="mailto:mark.earlam@gmail.com"/>

        </SocialContainer>
);
}

export default Social;