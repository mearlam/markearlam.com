import React, {useRef, useState} from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Modal from "react-bootstrap/Modal";
import PicturePopup from "../components/PicturePopup";

const images = ({
                    thumbnails,
                    setShow,
                    setThumbnail,
                    alt = 'thumbnail image',
                    title = 'acrylic landscape painting',
                }) => {
    return (
        thumbnails.map((thumbnail, index) => {
            return (<div className="media all people">
                <a onClick={() => {
                    setShow(true);
                    setThumbnail(thumbnail);
                }
                }><img
                    src={require(`../images/thumbs/${thumbnail}.jpg`)} alt={alt}
                    title={title}/></a>
            </div>);
        })

    );
};

function Gallery(props) {

    const [show, setShow] = useState(false);
    const [thumbnail, setThumbnail] = useState('01');

    const handleClose = () => setShow(false);

    return (
        <div>
            <section id="galleries">

                <div className="gallery">

                    <header>
                        <h1>Gallery</h1>
                        <ul className="tabs">
                            <li><a href="#" data-tag="all" className="button active">All</a></li>
                        </ul>
                    </header>

                    <div className="content">
                        {
                            images({
                                thumbnails: ['01', '05', '09', '02', '06', '10', '03', '07'],
                                setShow,
                                setThumbnail,
                            })
                        }
                    </div>

                    <PicturePopup
                        show={show}
                        handleClose={handleClose}
                        thumbnail={thumbnail}
                    />

                </div>
            </section>
        </div>
    );
}

export default Gallery;