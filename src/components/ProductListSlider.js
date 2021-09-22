import React, { Component } from "react";
import Slider from "react-slick";
import LineIcon from "react-lineicons";
import Button from "react-bootstrap/Button";
import "./Product.css";
import ProductImages from "../product/small/tata-tea-1868-darjeeling.png";
import ProductImagesHover from "../product/small/darjeeling.jpg";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            //centerMode: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4 className="title text-center">OUR Products</h4>
                        <div className="productSection">
                            <Slider {...settings}>
                                <div className="product-thumb">
                                    <img src={ProductImages} alt="" />
                                    <img src={ProductImagesHover} alt="" />
                                    <div className="mt-4 product-name-d">
                                        <h5 className="product-origin">darjeeling</h5>
                                        <h6 className="product_name">Darjeeling Spring Blossom <span className="product-description">(50g)</span></h6>
                                        <dl className="product-price">
                                            <dd>
                                                <span><LineIcon name="rupee" /> 1000.00</span>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="addtocart_wrapper">
                                        <h6 className="product_name">Darjeeling Spring Blossom </h6>
                                        <div className="mt-4">
                                            <Button variant="outline-primary">Add to Cart</Button>{' '}
                                        </div></div></div>
                                <div className="product-thumb">
                                    <img src={ProductImages} alt="" />
                                    <img src={ProductImagesHover} alt="" />
                                    <div className="mt-4 product-name-d">
                                        <h5 className="product-origin">darjeeling</h5>
                                        <h6 className="product_name">Darjeeling Spring Blossom <span className="product-description">(50g)</span></h6>
                                        <dl className="product-price">
                                            <dd>
                                                <span><LineIcon name="rupee" /> 1000.00</span>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="addtocart_wrapper">
                                        <h6 className="product_name">Darjeeling Spring Blossom </h6>
                                        <div className="mt-4">
                                            <Button variant="outline-primary">Add to Cart</Button>{' '}
                                        </div></div></div><div className="product-thumb">
                                    <img src={ProductImages} alt="" />
                                    <img src={ProductImagesHover} alt="" />
                                    <div className="mt-4 product-name-d">
                                        <h5 className="product-origin">darjeeling</h5>
                                        <h6 className="product_name">Darjeeling Spring Blossom <span className="product-description">(50g)</span></h6>
                                        <dl className="product-price">
                                            <dd>
                                                <span><LineIcon name="rupee" /> 1000.00</span>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="addtocart_wrapper">
                                        <h6 className="product_name">Darjeeling Spring Blossom </h6>
                                        <div className="mt-4">
                                            <Button variant="outline-primary">Add to Cart</Button>{' '}
                                        </div></div></div><div className="product-thumb">
                                    <img src={ProductImages} alt="" />
                                    <img src={ProductImagesHover} alt="" />
                                    <div className="mt-4 product-name-d">
                                        <h5 className="product-origin">darjeeling</h5>
                                        <h6 className="product_name">Darjeeling Spring Blossom <span className="product-description">(50g)</span></h6>
                                        <dl className="product-price">
                                            <dd>
                                                <span><LineIcon name="rupee" /> 1000.00</span>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="addtocart_wrapper">
                                        <h6 className="product_name">Darjeeling Spring Blossom </h6>
                                        <div className="mt-4">
                                            <Button variant="outline-primary">Add to Cart</Button>{' '}
                                        </div></div></div><div className="product-thumb">
                                    <img src={ProductImages} alt="" />
                                    <img src={ProductImagesHover} alt="" />
                                    <div className="mt-4 product-name-d">
                                        <h5 className="product-origin">darjeeling</h5>
                                        <h6 className="product_name">Darjeeling Spring Blossom <span className="product-description">(50g)</span></h6>
                                        <dl className="product-price">
                                            <dd>
                                                <span><LineIcon name="rupee" /> 1000.00</span>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="addtocart_wrapper">
                                        <h6 className="product_name">Darjeeling Spring Blossom </h6>
                                        <div className="mt-4">
                                            <Button variant="outline-primary">Add to Cart</Button>{' '}
                                        </div></div></div><div className="product-thumb">
                                    <img src={ProductImages} alt="" />
                                    <img src={ProductImagesHover} alt="" />
                                    <div className="mt-4 product-name-d">
                                        <h5 className="product-origin">darjeeling</h5>
                                        <h6 className="product_name">Darjeeling Spring Blossom <span className="product-description">(50g)</span></h6>
                                        <dl className="product-price">
                                            <dd>
                                                <span><LineIcon name="rupee" /> 1000.00</span>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="addtocart_wrapper">
                                        <h6 className="product_name">Darjeeling Spring Blossom </h6>
                                        <div className="mt-4">
                                            <Button variant="outline-primary">Add to Cart</Button>{' '}
                                        </div></div></div><div className="product-thumb">
                                    <img src={ProductImages} alt="" />
                                    <img src={ProductImagesHover} alt="" />
                                    <div className="mt-4 product-name-d">
                                        <h5 className="product-origin">darjeeling</h5>
                                        <h6 className="product_name">Darjeeling Spring Blossom <span className="product-description">(50g)</span></h6>
                                        <dl className="product-price">
                                            <dd>
                                                <span><LineIcon name="rupee" /> 1000.00</span>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="addtocart_wrapper">
                                        <h6 className="product_name">Darjeeling Spring Blossom </h6>
                                        <div className="mt-4">
                                            <Button variant="outline-primary">Add to Cart</Button>{' '}
                                        </div></div></div><div className="product-thumb">
                                    <img src={ProductImages} alt="" />
                                    <img src={ProductImagesHover} alt="" />
                                    <div className="mt-4 product-name-d">
                                        <h5 className="product-origin">darjeeling</h5>
                                        <h6 className="product_name">Darjeeling Spring Blossom <span className="product-description">(50g)</span></h6>
                                        <dl className="product-price">
                                            <dd>
                                                <span><LineIcon name="rupee" /> 1000.00</span>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="addtocart_wrapper">
                                        <h6 className="product_name">Darjeeling Spring Blossom </h6>
                                        <div className="mt-4">
                                            <Button variant="outline-primary">Add to Cart</Button>{' '}
                                        </div></div></div><div className="product-thumb">
                                    <img src={ProductImages} alt="" />
                                    <img src={ProductImagesHover} alt="" />
                                    <div className="mt-4 product-name-d">
                                        <h5 className="product-origin">darjeeling</h5>
                                        <h6 className="product_name">Darjeeling Spring Blossom <span className="product-description">(50g)</span></h6>
                                        <dl className="product-price">
                                            <dd>
                                                <span><LineIcon name="rupee" /> 1000.00</span>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="addtocart_wrapper">
                                        <h6 className="product_name">Darjeeling Spring Blossom </h6>
                                        <div className="mt-4">
                                            <Button variant="outline-primary">Add to Cart</Button>{' '}
                                        </div></div></div><div className="product-thumb">
                                    <img src={ProductImages} alt="" />
                                    <img src={ProductImagesHover} alt="" />
                                    <div className="mt-4 product-name-d">
                                        <h5 className="product-origin">darjeeling</h5>
                                        <h6 className="product_name">Darjeeling Spring Blossom <span className="product-description">(50g)</span></h6>
                                        <dl className="product-price">
                                            <dd>
                                                <span><LineIcon name="rupee" /> 1000.00</span>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="addtocart_wrapper">
                                        <h6 className="product_name">Darjeeling Spring Blossom </h6>
                                        <div className="mt-4">
                                            <Button variant="outline-primary">Add to Cart</Button>{' '}
                                        </div></div></div>
                            </Slider>
                        </div>
                    </div>
                    <div className="col-12 text-center mt-5">
                        <Button variant="outline-primary">Shop Now</Button>{' '}
                    </div>
                </div>
            </div>
        );
    }
}
