import React, {useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {getInTouch} from '../network/apiCalls';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const recaptchaRef = React.createRef();

function Contact(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [captcha, setCaptcha] = useState('');

    const handleCaptureUpdate = (value) => {
        setCaptcha(value);
    };

    const handleSubmit = async () => {
        if(name && email && message && captcha) {
            const success = await getInTouch({
                name,
                email,
                message,
                captcha,
            });
            if(success) {
                toast.success("Message sent, thank you for getting in touch");
                setName('');
                setEmail('');
                setMessage('');
                setCaptcha('');
                recaptchaRef.current.reset();
            }else {
                toast.error("Message could not be sent, please try again");
            }
        }
    };

    return (
        <section id="contact">
            <ToastContainer />
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
                <div className="field half first">
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" type="text"
                           value={name}
                           onChange={event => setName(event.target.value)}
                           placeholder="Name" required="required"/>
                </div>
                <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input name="email" id="email" type="email"
                           value={email}
                           onChange={event => setEmail(event.target.value)}
                           placeholder="Email" required="required"/>
                </div>
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="6" placeholder="Message"
                              value={message}
                              onChange={event => setMessage(event.target.value)}
                              required="required"/>
                </div>
                <ul className="actions">
                    <li><button onClick={handleSubmit} value="Send Message" className="button">Send</button></li>
                    <li>
                        <ReCAPTCHA
                            sitekey="6LfD9PkUAAAAAIORBI8maK15sZiMMGnydDEUMPIw"
                            onChange={handleCaptureUpdate}
                            ref={recaptchaRef}
                        />
                    </li>
                </ul>
                <div id="form-response"/>
            </div>
        </section>
    );
}

export default Contact;