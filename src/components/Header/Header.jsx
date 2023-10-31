import "./Header.css"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import * as Scroll from "react-scroll"

const Header = () => {
    const [scrollClass, setScrollClass] = useState('');
    const [isNavOpen, setIsNavOpen] = useState(false); // Added state to control menu visibility

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen); // Toggle the mobile menu state
    };
    const closeNav = () => {
        setIsNavOpen(false); // Close the mobile menu
    };
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
                <Link
                    to="/"
                    className="navbar-brand"
                    onClick={() => {
                        window.scroll({
                            top: 0
                        })
                    }}
                >
                    Nitex
                </Link>
                <button
                    onClick={toggleNav}
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded={isNavOpen}
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Scroll.Link
                                to="hero"
                                smooth={true}
                                duration={500}
                                offset={-50}
                                spy={true}
                                className="nav-link scrollto"
                                activeClass={'nav-active'}
                                onClick={closeNav}
                            >
                                About Us
                            </Scroll.Link>
                        </li>
                        <li className="nav-item">
                            <Scroll.Link
                                to="services"
                                smooth={true}
                                duration={500}
                                offset={-50}
                                spy={true}
                                className="nav-link scrollto"
                                activeClass={'nav-active'}
                                onClick={closeNav}
                            >
                                Services
                            </Scroll.Link>
                        </li>
                        <li className="nav-item">
                            <Scroll.Link
                                to="faq"
                                smooth={true}
                                duration={500}
                                offset={-50}
                                spy={true}
                                className="nav-link scrollto"
                                activeClass={'nav-active'}
                                onClick={closeNav}
                            >
                                Faq
                            </Scroll.Link>
                        </li>
                        <li className="nav-item">
                            <Scroll.Link
                                to="team"
                                smooth={true}
                                duration={500}
                                offset={-50}
                                spy={true}
                                className="nav-link scrollto"
                                activeClass={'nav-active'}
                                onClick={closeNav}
                            >
                                Team
                            </Scroll.Link>
                        </li>
                        <li className="nav-item">
                            <Scroll.Link
                                to="recent-blog-posts"
                                smooth={true}
                                duration={500}
                                offset={-50}
                                spy={true}
                                className="nav-link scrollto"
                                activeClass={'nav-active'}
                                onClick={closeNav}
                            >
                                Blog
                            </Scroll.Link>
                        </li>
                        <li className="nav-item">
                            <Scroll.Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                offset={-50}
                                spy={true}
                                className="nav-link scrollto"
                                activeClass={'nav-active'}
                                onClick={closeNav}
                            >
                                Contact
                            </Scroll.Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;