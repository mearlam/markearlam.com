import React from "react";

function Navigation(props) {
    return (
        <nav id="nav">
            <ul>
                <li><a href="index.html" className="active"><span className="icon fa-home"/></a></li>
                <li><a href="gallery.html"><span className="icon fa-camera-retro"/></a></li>
                {/*<li><a href="generic.html"><span class="icon fa-file-text-o"></span></a></li>*/}
            </ul>
        </nav>
    );
}

export default Navigation;