import React from "react";
import PropTypes from 'prop-types';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function PicturePopup(props) {

    const {show, handleClose, thumbnail, staticImage } = props;

    return (
        <Modal id="picture-popup" size="lg" show={show} onHide={handleClose}>
            <Modal.Body>
                {staticImage &&
                <img src={`https://s3-eu-west-1.amazonaws.com/static.markearlam.com/whatsnew/${thumbnail}.jpg`}/>
                }
                {!staticImage &&
                    <img src={require(`../images/fulls/${thumbnail}.jpg`)}/>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
);
}

PicturePopup.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    thumbnail: PropTypes.func.isRequired,
};

export default PicturePopup;