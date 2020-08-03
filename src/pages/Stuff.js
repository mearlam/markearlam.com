import React, {useEffect, useRef, useState} from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Modal from "react-bootstrap/Modal";
import PicturePopup from "../components/PicturePopup";
import {Col, Row} from "react-bootstrap";


function Stuff(props) {

    useEffect(() => {
        document.title = `Mark Earlam - Stuff`;
    });

    return (
        <div>
            <section id="stuff">

                <div className="stuff">
                    <header>
                        <h1>Stuff used to paint</h1>
                        <div className="description">
                            You need quite a lot of stuff to be able to paint acrylics and you will need most of what is listed on this page.
                            You do not need to match it exactly sometimes but it is important not to buy cheap paints. Also, <b>do not buy
                            expensive brushes</b>, none of mine are and I replace them quite often.

                            Another thing to note is I live in the UK and you may need to find another brand.
                        </div>
                        <h2>Essentials</h2>
                        <div className="description">
                            There is quite a lot listed on here but you don't need to go nuts and buy it all. Here are a
                            few things you can use to get started.
                            <ul>
                                <li><b>Brushes</b> - A couple of cheap brushes, a couple of tough bristle brushes and maybe one synthetic</li>
                                <li><b>Paint</b> - do not buy anything but pro paint but you don't need lots of colours. Get a pro set perhaps, that is what I did.</li>
                                <li><b>Canvas</b> - find some cheap ones or use acrylic paper.
                                    I started mostly on paper. Keep in mind that you probably wont be able to hang these.
                                    If you stick with it you produce much better paintings so it is not a concern</li>
                                <li><b>Palette</b> - use anything for now but you will waste paint, upgrade if you keep painting</li>
                                <li><b>Easel</b> - don't even bother for your first few paintings, maybe get a cheap table one after that</li>
                            </ul>
                        </div>
                        <div className="description">
                            Once you have all the essentials and you keep enjoying painting start upgrading the things that annoy you the most.
                            I built up my collection of things over a long period of time. Your first upgrade should be your palette as you can
                            set out your paints and they stay wet for weeks, this is very convenient.
                        </div>
                        <h2>Brushes</h2>
                      <Row>
                          <Col xs={12} sm={12} lg={6}  xl={6}>
                              <div className="description">
                                  No brush will improve your paintings. I used to think if I buy a better brush then I will
                                  get better results. Unfortunately it does not work that way and all you really need is
                                  the right brush for the situation.

                                  For example, blocking in colours you need a tough hog brush. Small details you use
                                  a soft synthetic brush. It is not really complicated and use whatever brush you like
                                  really. Also, ignore what they tell you the brush is for. I use oil and watercolour
                                  brushes all of the time for acrylic painting.
                              </div>
                              <div className="description">
                                  The main brushes I use are <b>Daler Rowney Georgian Long Flat oil brushes</b> that are
                                  pretty tough.
                                  I have various sizes but you can use
                                  whatever you choose. It depends how big you will paint but something like 2,6 and 8 will do.
                                  Try and
                                  use the biggest brush you can.
                              </div>
                              <div>
                                  <img width="25%" src={require(`../images/stuff/hog-brushes.jpg`)}/>
                              </div>
                          </Col>
                          <Col xs={12} sm={12} lg={6}  xl={6}>
                              <div className="description">
                                  You will also need synthetic brushes for detailing things like buildings. I use
                                  <b> Daler Rowney system 3 flat</b> but almost anything like that will do. Get some small
                                  ones and bigger ones for large areas.
                              </div>
                              <div>
                                  <img width="25%" src={require(`../images/stuff/flat.jpg`)}/>
                              </div>
                              <div className="description">
                                  For very fine work you will need a script or liner brush. These are long and thin. I use
                                  whichever one I can find. The longer the better as it will hold more paint.
                              </div>
                              <div>
                                  <img width="25%" src={require(`../images/stuff/script.jpg`)}/>
                              </div>
                          </Col>
                      </Row>

                        <h2>Paint</h2>
                        <Row>
                            <Col xs={3} sm={3} lg={3}  xl={3}>
                                <div>
                                    <img width="75%" src={require(`../images/stuff/paint.jpg`)}/>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} lg={6}  xl={6}>
                                <div className="description">
                                    I only use <b> Liquitex Professional Acrylic Artist Colour Heavy Body</b> for everything I
                                    do. Note that I do not use the white of this paint, see below for what white I use.
                                    Colour list:
                                    <ul>
                                        <li>Hooker’s Green Deep Hue Permanent</li>
                                        <li>Burnt Umber</li>
                                        <li>Vivid Lime Green</li>
                                        <li>Turquoise Deep</li>
                                        <li>Ultramarine Blue Red Shade</li>
                                        <li>Dioxazine Purple</li>
                                        <li>Cadmium Yellow Light</li>
                                        <li>Burnt Sienna</li>
                                        <li>Cadmium red light</li>
                                        <li>Cadmium orange</li>
                                        <li>Alizarin crimson</li>
                                        <li>Cadmium yellow light</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>




                        <h3>Gesso for white</h3>
                        <div className="description">
                            You will use a huge amount of white when painting and it works best for me to use the
                            thick gesso you can get. This makes it more opaque. I use
                            <b> Liquitex Professional Super Heavy Gesso</b>
                        </div>
                        <div>
                            <img width="25%" src={require(`../images/stuff/gesso.jpg`)}/>
                        </div>
                        <h2>Palette</h2>
                        <div className="description">
                            This is very important for acrylic painting and I would not paint for any length without one.
                            It is a <b>Masterson Sta-Wet Premier Palette</b> but there are other types. I wouldn't buy the cheap ones
                            you see around. I have tried most of them and they are flimsey and usually not big enough.
                            I have the 12x16 red version of this and it is worth every penny. I actually have two because
                            one I use for oils.
                        </div>
                        <div>
                            <img width="25%" src={require(`../images/stuff/wet.jpg`)}/>
                        </div>
                        <h2>Mediums</h2>
                        <div className="description">
                            I do not use any and I suggest if you are beginning you stick with just water.
                        </div>
                        <h2>Canvases</h2>
                        <div className="description">
                            <b>Winsor & Newton Artists’ Canvas Board</b> is my choice for canvas boards. You can use
                            normal canvases with the frame. The main reason I do not is that they take up a lot of room
                            to store. These boards take up very little space as you can stack them.
                        </div>
                        <div className="description">
                           It is up to you what size you want but I tend not to go below 16x20 for proper landscape paintings.
                            I do sometimes use smaller ones but they are more like studies.
                        </div>
                        <div>
                            <img width="25%" src={require(`../images/stuff/canvas.jpg`)}/>
                        </div>
                        <h2>Other</h2>
                        <div className="description"><b>The Daler-Rowney Colour Wheel</b> is great for colour theory, I use this quite a lot.</div>
                        <div>
                            <img width="25%" src={require(`../images/stuff/wheel.jpg`)}/>
                        </div>
                        <div className="description">Any charcoal will do for sketching as it is easy to remove. I use <b>Winsor & Newton Artists’ Charcoal </b></div>
                        <div>
                            <img width="25%" src={require(`../images/stuff/charcoal.jpg`)}/>
                        </div>
                        <div className="description">

                        </div>
                        <h2>Even more stuff</h2>
                        <div className="description">
                            <ul>
                                <li><b>Daylight clipon lamp</b> - get something that is for painting or craft in general</li>
                                <li><b>Easel</b> - this is really up to you and your setup, I have a H easel which is quite large</li>
                                <li><b>Mister bottle</b> - you will need this to keep your paints wet</li>
                                <li><b>Artist apron</b> - I have paint all over my clothes still but useful</li>
                                <li><b>Varnish</b> - I sometimes varnish my paintings but you don't need to</li>
                            </ul>
                        </div>
                    </header>
                </div>
            </section>
        </div>
    );
}

export default Stuff;