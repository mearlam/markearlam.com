import React, {useEffect, useState} from "react";
import PicturePopup from "../components/PicturePopup";
import { ImagePreviewContainer, ImagePreview} from "../components/StyledComponents";

const images = ({
                    thumbnails,
                    setShow,
                    setThumbnail,
                    alt = 'thumbnail image',
                    title = 'acrylic landscape painting',
                }) => {
    return (
        thumbnails.map((thumbnail) => {
            return (<ImagePreviewContainer>
                <ImagePreview>
                <a onClick={() => {
                    setShow(true);
                    setThumbnail(thumbnail);
                }
                }><img
                    src={require(`../images/thumbs/${thumbnail}.jpg`)} alt={alt}
                    title={title}/></a></ImagePreview>
            </ImagePreviewContainer>);
        })

    );
};

function Gallery(props) {

    const { match: { params } } = props;

    const [show, setShow] = useState(false);
    const [thumbnail, setThumbnail] = useState('01');

    useEffect(() => {
        document.title = `Mark Earlam - Gallery`;

        if(params.imageName) {
            setShow(true);
            setThumbnail(params.imageName);
        }
    }, [params]);

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
                                thumbnails: ['11', '12', '13', '14', '01', '05', '09', '02', '06', '10', '03', '07'],
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