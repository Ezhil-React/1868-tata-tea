import React from 'react';
import Button from "react-bootstrap/Button";
import FlavourImages from "../img/tata-tea-flavour.jpg";
import FlavourImagesGreenTwirl from "../img/NILGIRI-GREEN-TWIRL.png";
import LightTea from "../img/light-tea.png";
import FloralTea from "../img/floral-tea.png";
import DelicateTea from "../img/delicate-tea.png";
import TTRose from "../img/tata-tea-rose.jpg";
import TTFlavourLemon from "../img/tata-tea-flavour-lemon.jpg";

const Flavour = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 py-5 text-center">
                        <div className="position-relative">
                            <img src={FlavourImages} alt="" className="img-fluid" />


                            <p className="flavour-desc">Nilgiri Green Twirl - this delicate floral tea hails from the misty Nilgiri ranges, also famous for the Nilgiri Flycatcher. A single sip of this flavourful cup with sweet and floral notes is sure to leave you mesmerised.</p>
                            <div className="flavour-wraper">
                                <div className="flavour-content">
                                    <h4>FLAVOUR <span>of </span>
                                        THE MONTH</h4>
                                    <h4 className="mt-5 mb-3">
                                        Nilgiri Green Twirl
                                    </h4>
                                    <Button variant="outline-primary">Shop Now</Button>{' '}
                                </div>
                                <div className="flavour_img"><img src={FlavourImagesGreenTwirl} alt="" /></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="col-12 text-center pt-5">
                        <h4 className="title">TASTING NOTES</h4>

                    </div>
                    <div className="col-12 col-md-3 col-sm-12 col-lg-2 text-center mb-4 mb-lg-0">
                        <img src={LightTea} alt="" />
                        <p className="mt-2 fs-6">LIGHT</p>
                    </div>
                    <div className="col-12 col-md-3 col-sm-12 col-lg-2 text-center mb-4 mb-lg-0">
                        <img src={FloralTea} alt="" />
                        <p className="mt-2 fs-6">FLORAL</p>
                    </div>
                    <div className="col-12 col-md-3 col-sm-12 col-lg-2 text-center mb-4 mb-lg-0">
                        <img src={DelicateTea} alt="" />
                        <p className="mt-2 fs-6">DELICATE</p>
                    </div>
                </div>

            </div>
            <section className="tataTea-orange my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xl-10 mx-auto col-md-10 col-lg-10 text-center">
                            <h4 className="title">DELICIOUS BLENDS <i> from </i> INDIA's FINEST</h4>
                            <p className="tt-desc">
                                From the land of the one-horned Rhino, to the misty mountains of the Nilgiris, from the rolling hills of Darjeeling to the bustling streets of Kolkata – comes a collection of 13 variants that will take you on a fascinating journey...
                            </p>
                        </div></div>
                </div>
            </section>
            <div className="container-fluid tt-lr">
                <div className="row justify-content-lg-between">
                    <div className="col-1"></div>
                    <div className="col-4 text-start">
                        <img src={TTRose} alt="" className="img-fluid" />

                    </div>
                    <div className="col-4 text-end">
                        <img src={TTFlavourLemon} alt="" className="img-fluid" />

                    </div>
                    <div className="col-1"></div>

                </div>
            </div>
        </>
    )
}

export default Flavour
