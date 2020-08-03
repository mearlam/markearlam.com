import React, {useState} from "react";
import PicturePopup from "../components/PicturePopup";
import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import styled from 'styled-components';
import {BigButton, ImagePreviewContainer, ImagePreview} from "../components/StyledComponents";

const Header = styled.header`
    text-align: center;
    width: 100%;
`;

const RowCentered = styled(Row)`
    justify-content: center;
    width: 100%;
    margin-top: 1em;
`;

function WhatsNew(props) {

    const [show, setShow] = useState(false);
    const [thumbnail, setThumbnail] = useState('01');

    const handleClose = () => setShow(false);

    return (
        <div>
            <section id="banner">
                <div className="inner">
                    <h1>Mark Earlam</h1>
                    <p>Acrylic landscape paintings</p>
                </div>
            </section>

            <Container fluid={true}>
                <Row>
                    <Header><h2>What's New</h2></Header>
                </Row>
                <Row>
                    <Col sm={6} md={6} lg={3} xl={3}>
                        <ImagePreviewContainer>
                            <ImagePreview>
                                <a onClick={() => {
                                    setShow(true);
                                    setThumbnail('4');
                                }
                                }><img
                                    src="https://s3-eu-west-1.amazonaws.com/static.markearlam.com/whatsnew/4_thumb.jpg"
                                    alt=""
                                    title="This right here is a caption."/></a>
                            </ImagePreview>
                        </ImagePreviewContainer>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3}>
                        <ImagePreviewContainer>
                            <ImagePreview>
                                <a onClick={() => {
                                    setShow(true);
                                    setThumbnail('3');
                                }
                                }><img
                                    src="https://s3-eu-west-1.amazonaws.com/static.markearlam.com/whatsnew/3_thumb.jpg"
                                    alt=""
                                    title="This right here is a caption."/></a>
                            </ImagePreview>
                        </ImagePreviewContainer>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3}>
                        <ImagePreviewContainer>
                            <ImagePreview>
                                <a onClick={() => {
                                    setShow(true);
                                    setThumbnail('2');
                                }
                                }><img
                                    src="https://s3-eu-west-1.amazonaws.com/static.markearlam.com/whatsnew/2_thumb.jpg"
                                    alt=""
                                    title="This right here is a caption."/></a>
                            </ImagePreview>
                        </ImagePreviewContainer>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3}>
                        <ImagePreviewContainer>
                            <ImagePreview>
                                <a onClick={() => {
                                    setShow(true);
                                    setThumbnail('1');
                                }
                                }><img
                                    src="https://s3-eu-west-1.amazonaws.com/static.markearlam.com/whatsnew/1_thumb.jpg"
                                    alt=""
                                    title="This right here is a caption."/></a>
                            </ImagePreview>
                        </ImagePreviewContainer>
                    </Col>
                </Row>
                <RowCentered>
                    <BigButton>
                        <Link to="/gallery">Full Gallery</Link>
                    </BigButton>
                </RowCentered>
            </Container>

            <PicturePopup
                show={show}
                handleClose={handleClose}
                thumbnail={thumbnail}
                staticImage={true}
            />

        </div>
    );
}

export default WhatsNew;