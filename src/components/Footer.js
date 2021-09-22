import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Button from "react-bootstrap/Button"
import "../components/footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="row">
                            <div className="col-12"><div className="d-flex align-items-center mb-4 justify-content-between">
                                <h4 className="title mb-0 m-0">
                                    LET’S CONNECT
                                </h4>
                                <ul className="follow-us"><li><a href="https://www.facebook.com/1868-by-Tata-Tea-103883878416042" target="_blank">
                                    <FontAwesomeIcon icon={faFacebookF} /></a></li>
                                    <li><a href="https://instagram.com/1868bytatatea?igshid=8o5xohwxylo" target="_blank">
                                        <FontAwesomeIcon icon={faInstagram} /></a></li>
                                </ul>

                            </div></div>
                            <div className="col-12">
                                <form className="">
                                    <div className="input-group">
                                        <input type="email" class="form-input" placeholder="Email Address" />
                                        <Button variant="outline-primary">Subscribe</Button>{' '}
                                    </div>
                                    <div class="form-check mt-3 mb-5">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label mb-0" for="flexCheckDefault">
                                            By checking I accept <a href=""> T&amp;C</a> and <a href="">Privacy Policy</a>
                                        </label>
                                    </div>
                                </form>

                            </div>

                        </div>


                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
                        <div className="footer-menu">
                            <ul>
                                <li>
                                    <a href="">
                                        TRACK ORDER</a></li><li>
                                    <a href="">
                                        OUR STORY</a></li><li>
                                    <a href="">
                                        ENQUIRE NOW</a></li><li>
                                    <a href="">
                                        FAQS</a></li><li>
                                    <a href="">
                                        TERMS OF SERVICE</a></li><li>
                                    <a href="">
                                        REFUND POLICY
                                    </a>
                                </li>
                            </ul>
                        </div></div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
                        <div className="footer-menu">
                            <ul>
                                <li>
                                    <a href="">
                                        RETURN AND EXCHANGE</a></li><li>
                                    <a href="">
                                        SHIPPING &amp; DELIVERY</a></li><li>
                                    <a href="">
                                        PRIVACY POLICY</a></li><li>
                                    <a href="">
                                        TERMS OF USE</a></li>
                            </ul>
                        </div></div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
                        <div className="footer-menu">
                            <p>TATA CONSUMER PRODUCTS LTD. KIRLOSKAR BUSINESS PARK, HEBBAL, BENGALURU - 560 024. 1800 345 1720</p>
                            <a href="mailto:CARE@TATACONSUMER.COM">CARE@TATACONSUMER.COM</a>
                        </div></div>




                </div>
                <div className="row justify-content-md-end">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="veg">
                            <p>Images are for illustration purpose</p>
                        </div>
                    </div></div>



            </div>

        </footer>
    )
}

export default Footer
