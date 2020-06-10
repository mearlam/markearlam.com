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
                                setThumbnail('11');
                            }
                            }><img src={thumb1} alt=""
                                   title="This right here is a caption."/></a>
                        </div>
                        <div className="media">
                            <a onClick={() => {
                                setShow(true);
                                setThumbnail('12');
                            }
                            }><img src={thumb2} alt=""
                                   title="This right here is a caption."/></a>
                        </div>
                        <div className="media">
                            <a onClick={() => {
                                setShow(true);
                                setThumbnail('13');
                            }
                            }><img src={thumb3} alt=""
                                   title="This right here is a caption."/></a>
                        </div>
                        <div className="media">
                            <a onClick={() => {
                                setShow(true);
                                setThumbnail('14');
                            }
                            }><img src={thumb4} alt=""
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
            />

        </div>
    );
}

export default WhatsNew;