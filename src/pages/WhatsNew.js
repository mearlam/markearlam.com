import React, {useState} from "react";
import thumb1 from '../images/thumbs/11.jpg';
import thumb2 from '../images/thumbs/12.jpg';
import thumb3 from '../images/thumbs/13.jpg';
import thumb4 from '../images/thumbs/14.jpg';
import PicturePopup from "../components/PicturePopup";
import {Link} from "react-router-dom";

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

            <section id="galleries">

                <div className="gallery">
                    <header className="special">
                        <h2>What's New</h2>
                    </header>
                    <div className="content">
                        <div className="media">
                            <a onClick={() => {
                                setShow(true);
                                setThumbnail('4');
                            }
                            }><img src="https://s3-eu-west-1.amazonaws.com/static.markearlam.com/whatsnew/4_thumb.jpg" alt=""
                                   title="This right here is a caption."/></a>
                        </div>
                        <div className="media">
                            <a onClick={() => {
                                setShow(true);
                                setThumbnail('3');
                            }
                            }><img src="https://s3-eu-west-1.amazonaws.com/static.markearlam.com/whatsnew/3_thumb.jpg" alt=""
                                   title="This right here is a caption."/></a>
                        </div>
                        <div className="media">
                            <a onClick={() => {
                                setShow(true);
                                setThumbnail('2');
                            }
                            }><img src="https://s3-eu-west-1.amazonaws.com/static.markearlam.com/whatsnew/2_thumb.jpg" alt=""
                                   title="This right here is a caption."/></a>
                        </div>
                        <div className="media">
                            <a onClick={() => {
                                setShow(true);
                                setThumbnail('1');
                            }
                            }><img src="https://s3-eu-west-1.amazonaws.com/static.markearlam.com/whatsnew/1_thumb.jpg" alt=""
                                   title="This right here is a caption."/></a>
                        </div>
                    </div>
                    <footer>
                        <Link to="/gallery" className="button big">Full Gallery</Link>
                    </footer>
                </div>
            </section>

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