import "./Footer.css"
import logo from "/images/favicon.svg"
import clock from "/images/footer-clock.png"


const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer__container">
                <div className="container">

                    <div className="footer__item">
                        <a href="#home" className="footer__logo">
                            <img src={logo} alt="Fitlife logo" className="footer__logo-img" />
                            Fitlife
                        </a>

                        <p className="footer__item-text">Etiam suscipit fringilla ullamcorper sed malesuada urna nec odio.</p>

                        <div className="footer__item__time">
                            <img src={clock} alt="clock" className="footer__item__time-img" />

                            <div>
                                <p className="footer__item__time-days">Monday - Friday</p>
                                <p className="footer__item__time-hour">7:00Am - 10:00Pm</p>
                            </div>

                            <div>
                                <p className="footer__item__time-days">Saturday - Sunday</p>
                                <p className="footer__item__time-hour">7:00Am - 02:00Pm</p>
                            </div>
                        </div>
                    </div>

                    <div className="footer__item">
                        <h4 className="footer__item-title">our links</h4>

                        <ul className="footer__item__links">
                            <li>
                                <a href="#home" className="footer__item__links-link">home</a>
                            </li>
                            <li>
                                <a href="#about" className="footer__item__links-link">about us</a>
                            </li>
                            <li>
                                <a href="#classes" className="footer__item__links-link">classes</a>
                            </li>
                            <li>
                                <a href="#blog" className="footer__item__links-link">blog</a>
                            </li>
                            <li>
                                <a href="#contact" className="footer__item__links-link">contact us</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__item">
                        <h4 className="footer__item-title">contact us</h4>

                        <div className="footer__item__contact__container">
                            <div className="footer__item__contact">
                                <i className="ri-map-pin-fill"></i>
                                <address className="footer__item__contact-address">1247/Plot No. 39, 15th Phase, Colony, Kukatpally, Hyderabad</address>
                            </div>

                            <div className="footer__item__contact">
                                <i className="ri-phone-fill"></i>
                                <div className="footer__item__contact__cta">
                                    <a href="tel:18001213637" className="footer__item__contact-link">1800-121-3637</a>
                                    <a href="tel:+915552348765" className="footer__item__contact-link">+91 555 234-8765</a>
                                </div>
                            </div>

                            <div className="footer__item__contact">
                                <i className="ri-mail-fill"></i>
                                <div className="footer__item__contact__cta">
                                    <a href="mailto:info@fitlife.com" className="footer__item__contact-link">info@fitlife.com</a>
                                    <a href="mailto:services@fitlife.com" className="footer__item__contact-link">services@fitlife.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer__item">
                        <h4 className="footer__item-title">our newsletter</h4>

                        <form action="#" className="footer__item__form">
                            <input type="email" className="footer__item__form-input" placeholder="Email address" />
                            <button type="submit" className="footer__item__form-submit">
                                <i className="ri-arrow-right-s-line"></i>
                            </button>
                        </form>

                        <div className="footer__item__social">
                            <a href="#" className="footer__item__social-link">
                                <i className="ri-facebook-circle-fill"></i>
                            </a>
                            <a href="#" className="footer__item__social-link">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="#" className="footer__item__social-link">
                                <i className="ri-twitter-fill"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="footer__bottom">
                <div className="container">
                    <p className="footer__bottom-copy">© 2024 Fitlife. All Rights Reserved By <a href="https://github.com/moisalexweb" target="_blank">MoisalexWeb.</a></p>

                    <div className="footer__bottom__copy">
                        <a href="#" className="footer__bottom__copy-link">Privacy Policy</a>
                        <a href="#" className="footer__bottom__copy-link">Terms & Condition</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer