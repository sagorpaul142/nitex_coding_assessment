import "./Header.scss"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import * as Scroll from "react-scroll"

const Header = () => {
    const [scrollClass, setScrollClass] = useState('');
    const getScroll = () => {
        if (window.scrollY > 3) {
            setScrollClass('sticked')
        } else {
            setScrollClass('')
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", () => getScroll());
    }, [])

    return (
        <nav className={`navbar navbar-expand-lg bg-gray sticky-top ${scrollClass}`}>
            <div className="container-fluid">
                <Link to="#" className="navbar-brand">Nitex</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="#" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Scroll.Link
                                to="hero"
                                smooth={true}
                                duration={500}
                                className="nav-link scrollto"
                            >
                                About Us
                            </Scroll.Link>
                        </li>
                        <li className="nav-item">
                            <Scroll.Link
                                to="services"
                                smooth={true}
                                duration={500}
                                className="nav-link scrollto"
                            >
                                Services
                            </Scroll.Link>
                        </li>
                        <li className="nav-item">
                            <Scroll.Link
                                to="#"
                                smooth={true}
                                duration={500}
                                offset={-50}
                                className="nav-link scrollto"
                            >
                                Testimonials
                            </Scroll.Link>
                        </li>
                        <li className="nav-item">
                            <Scroll.Link
                                to="#"
                                smooth={true}
                                duration={500}
                                offset={-50}
                                className="nav-link scrollto"
                            >
                                Contact
                            </Scroll.Link>
                        </li>
                        <li className="nav-item">
                            <Scroll.Link
                                to="#"
                                smooth={true}
                                duration={500}
                                offset={-50}
                                className="nav-link scrollto"
                            >
                                Project
                            </Scroll.Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;