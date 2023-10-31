import "./Header.css"
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
                        {/*<li className="nav-item">*/}
                        {/*    <Scroll.Link*/}
                        {/*        to="/"*/}
                        {/*        className="nav-link scrollto"*/}
                        {/*        aria-current="page"*/}
                        {/*        smooth={true}*/}
                        {/*        duration={500}*/}
                        {/*        offset={-55}*/}
                        {/*        spy={true}*/}
                        {/*        activeClass={'nav-active'}*/}
                        {/*    >*/}
                        {/*        Home*/}
                        {/*    </Scroll.Link>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <Scroll.Link
                                to="hero"
                                smooth={true}
                                duration={500}
                                offset={-65}
                                spy={true}
                                className="nav-link scrollto"
                                activeClass={'nav-active'}
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
                            >
                                Services
                            </Scroll.Link>
                        </li>
                        <li className="nav-item">
                            <Scroll.Link
                                to="faq"
                                smooth={true}
                                duration={500}
                                offset={-80}
                                spy={true}
                                className="nav-link scrollto"
                                activeClass={'nav-active'}
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