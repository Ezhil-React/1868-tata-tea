import React from "react";
import LineIcon from "react-lineicons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../logo.png";

const Navbar = () => {
    return (
        <div className="container">
            <div class="row">
                <div class="col-12">
                    <nav className="navbar navbar-expand-lg navbar-m">
                        <a className="navbar-brand" href="#"> <img src={Logo} alt="Logo" /> </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <FontAwesomeIcon icon={faBars} />
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav navbar-nav-m mx-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Shop Tea </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Our Story</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">Enquire Now</a>
                                </li>


                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><LineIcon name="search-alt" /> </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><LineIcon name="user" /></a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#"><LineIcon name="cart" /></a>
                                </li>


                            </ul>

                        </div>
                    </nav>
                </div>
            </div>
        </div>

    )
}

export default Navbar
