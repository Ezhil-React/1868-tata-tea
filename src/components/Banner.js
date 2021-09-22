import React from "react";
import Slider from "react-slick";
import "./Banner.css";
import BannerImages from "../banner/1.jpg";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const slidesData = [
        {
            id: 1,
            title: 'repellendus id ullam',
            label: 'DELICIOUS FLAVOURS INSPIRED by INDIA'
        }, {
            id: 2,
            title: 'excepturi consequatur est',
            label: 'DELICIOUS FLAVOURS INSPIRED by INDIA'
        }, {
            id: 3,
            title: 'eius doloribus blanditiis',
            label: 'DELICIOUS FLAVOURS INSPIRED by INDIA'
        },
    ];
    // const images = [
    //     { src: baseUrl + "/1.jpg" },
    //     { src: baseUrl + "/2.jpg" },
    //     { src: baseUrl + "/3.jpg" },
    //     { src: baseUrl + "/4.jpg" },
    // ];
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 px-0"><div className="slider-wrapper">

                    <Slider {...settings}>

                        {slidesData.map((slide) =>

                            <div className="slick-slide" key={slide.id}>
                                {/* <h2 className="slick-slide-title">{slide.title}</h2> */}
                                {/* <img className="slick-slide-image" src={img.src} /> */}
                                <img className="slick-slide-image" src={BannerImages} />
                                <label className="slick-slide-label">{slide.label}</label>
                            </div>

                        )}

                    </Slider>

                </div></div>
            </div>
        </div>
    );
}
