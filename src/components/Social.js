import React from "react";
import styled from "styled-components";
import {
    EmailIcon,
    EmailShareButton, FacebookIcon,
    FacebookShareButton,
    TwitterIcon,
    TwitterShareButton, WhatsappIcon,
    WhatsappShareButton
} from "react-share";

const SocialContainer = styled.div`
    text-align: center;
    width: 100%;
    button {
        margin-right: 5px;
        }
`;

function Social(props) {
    const {url} = props;

    return (
        <SocialContainer>
            <EmailShareButton  url={url} ><EmailIcon size={32} round={true} /></EmailShareButton>
            <TwitterShareButton  url={url} ><TwitterIcon size={32} round={true} /></TwitterShareButton>
            <FacebookShareButton  url={url} ><FacebookIcon size={32} round={true} /></FacebookShareButton>
            <WhatsappShareButton url={url} ><WhatsappIcon size={32} round={true} /></WhatsappShareButton>
        </SocialContainer>
    );
}

export default Social;