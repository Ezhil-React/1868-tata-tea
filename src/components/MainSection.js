import React from "react";
import Button from "react-bootstrap/Button";

const MainSection = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-xl-10 mx-auto col-md-12 col-lg-10 text-center py-5">
                    <h4 className="title">OUR STORY</h4>
                    <p className="mb-5">
                        1868 by Tata Tea – a specially curated range of 13 teas designed to delight your senses. Inspired by India each variant has a unique story to tell. This exclusive collection was launched to celebrate the legacy of the Tata Group on the completion of its milestone 150th year and was first unveiled at the Tata kiosk at the World Economic Forum (WEF) in Davos, Switzerland in January 2018.
                    </p>
                    <Button variant="outline-primary">Read More</Button>{' '}
                </div>
            </div>

        </div>
    )
}

export default MainSection
