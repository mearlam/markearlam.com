import React from "react";

function Contact(props) {
    return (
        <section id="contact">
            <div className="social column">
                <h3>About Me</h3>
                <p>I started learning to paint acrylics in late 2018. I am mainly interested in painting landscapes but
                    also try other subjects. One of my main hobbies is to go out walking in the English countryside with
                    my wife Elisabeth. When doing this we see many great places and lots of inspiration to paint.
                    Most of my paintings are from my imagination but I take what I see while hiking. We enjoy walking in
                    the Lake district and Scotland and visit them every year. I hope you enjoy the paintings and see my
                    progression over the coming years. There is still a lot to learn</p>
                <h3>Follow Me</h3>
                <ul className="icons">
                    {/*<li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>*/}
                    <li><a href="https://www.facebook.com/Mark-Earlam-110034125732006"
                           className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="https://www.instagram.com/earlam.mark/" className="icon fa-instagram"><span
                        className="label">Instagram</span></a></li>
                </ul>
            </div>

            <div className="column">
                <h3>Get in Touch</h3>
                <form action="#" method="post">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input name="name" id="name" type="text" placeholder="Name" required="required"/>
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input name="email" id="email" type="email" placeholder="Email" required="required"/>
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6" placeholder="Message"
                                  required="required"/>
                    </div>
                    <ul className="actions">
                        <li><input id="submit" value="Send Message" className="button"
                                   disabled={true}
                                   type="submit"/></li>
                        <li>
                            <div className="g-recaptcha" data-sitekey="6LfD9PkUAAAAAIORBI8maK15sZiMMGnydDEUMPIw"/>
                        </li>
                    </ul>
                </form>
                <div id="form-response"/>
            </div>
        </section>
    );
}

export default Contact;