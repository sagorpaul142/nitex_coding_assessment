import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Mousewheel, Keyboard, Autoplay, EffectFade} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import heroCarouselOne from "../../assets/hero-carousel/hero-carousel-1.svg"
import heroCarouselTwo from "../../assets/hero-carousel/hero-carousel-2.svg"
import heroCarouselThree from "../../assets/hero-carousel/hero-carousel-3.svg"
import "./HeroSection.css"
const HeroSection = () => {
    return (
        <section id="hero" className="hero carousel  carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                mousewheel={true}
                keyboard={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="container">
                        <div className="row justify-content-center gy-6 mb-5">

                            <div className="col-lg-5 col-md-8">
                                <img src={heroCarouselOne} alt="" className="img-fluid img"/>
                            </div>

                            <div className="col-lg-9 text-center">
                                <h2>Welcome to HeroBiz</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat.</p>
                                <a href="#featured-services" className="btn-get-started scrollto ">Get
                                    Started</a>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="row justify-content-center gy-6 mb-5">
                            <div className="col-lg-5 col-md-8">
                                <img src={heroCarouselTwo} alt="" className="img-fluid img"/>
                            </div>
                            <div className="col-lg-9 text-center">
                                <h2>At vero eos et accusamus</h2>
                                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                                    minus id quod maxime placeat facere possimus, omnis voluptas assumenda est,
                                    omnis
                                    dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.</p>
                                <a href="#featured-services" className="btn-get-started scrollto ">Get Started</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="row justify-content-center gy-6 mb-5">

                            <div className="col-lg-5 col-md-8">
                                <img src={heroCarouselThree} alt="" className="img-fluid img"/>
                            </div>

                            <div className="col-lg-9 text-center">
                                <h2>Temporibus autem quibusdam</h2>
                                <p>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                    ratione
                                    voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.</p>
                                <a href="#featured-services" className="btn-get-started scrollto ">Get Started</a>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default HeroSection;