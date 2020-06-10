import React, {useRef, useState} from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Modal from "react-bootstrap/Modal";
import PicturePopup from "../components/PicturePopup";


function Learning(props) {


    return (
        <div>
            <section id="stuff">
                <div className="stuff">
                    <header>
                        <h1>Learning</h1>
                    </header>
                    <section>
                        <div className="description">

                        </div>
                        <h2>Basic process</h2>
                        <div className="description">
                            There is a lot to learn about painting and many resources to do so. I will show you the
                            basic process for how I paint every landscape that I do. I painted this simple
                            sunset scene and re-painted digitally in photoshop to show the process.
                        </div>
                        <div className="description">
                            Simple painting in acrylics:
                        </div>
                        <div>
                            <img src={require(`../images/learning/basic/layering.jpg`)}/>
                        </div>
                        <div className="description">
                            A digital version showing how the layers are built up one on top of the other:
                        </div>
                        <div>
                            <img width="400px" src={require(`../images/learning/basic/layering.gif`)}/>
                        </div>
                        <div className="description">
                            <h4>Step 1 - sky</h4>
                            <p>We always start with the sky as everything goes on top. It also sets what value
                                everything in front of it will be.</p>
                        </div>
                        <div className="description">
                            <h4>Step 2 - water</h4>
                            <p>In this painting the water is a reflection of the sky so it comes next.</p>
                        </div>
                        <div className="description">
                            <h4>Step 3 - distant hills</h4>
                            <p>We go back into the sky to add the hills.</p>
                        </div>
                        <div className="description">
                            <h4>Step 4 - distant trees</h4>
                            <p>Just below the hills coming forward a little is the distant trees on top.</p>
                        </div>
                        <div className="description">
                            <h4>Step 5 - first rocks and shadows</h4>
                            <p>We have come quite a way forward now, making the values a lot darker for contrast we put
                                in the first set of rocks.
                                The shadows can also go in.</p>
                        </div>
                        <div className="description">
                            <h4>Step 6 - second rocks and shadows</h4>
                            <p>A repeat of the last stop to add more rocks in the foreground. This adds more depth than
                                having just one.</p>
                        </div>
                        <div className="description">
                            <h4>Step 7 - front rocks</h4>
                            <p>Again, adding more depth and the closest thing to the viewer.</p>
                        </div>
                        <div className="description">
                            <h4>Step 8 - sun</h4>
                            <p>You could have done the sun right after the hills but as long as nothing is going in
                                front of it you
                                can do it now. If you have the rocks in front of the sun you would need to do this
                                earlier.</p>
                        </div>
                        <div className="description">
                            <h4>Step 9 - birds</h4>
                            <p>The last step is to put details like the birds and in the original painting the weeds
                                etc</p>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
}

export default Learning;