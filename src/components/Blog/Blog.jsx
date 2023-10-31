import "./Blog.css"
import blogOne from "../../assets/blog/blog-1.jpg"
import blogTwo from "../../assets/blog/blog-2.jpg"
import blogThree from "../../assets/blog/blog-3.jpg"

const Blog = () => {
    return (
        <section id="recent-blog-posts" className="recent-blog-posts">

            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Blog</h2>
                    <p>Recent posts form our Blog</p>
                </div>

                <div className="row">

                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="post-box">
                            <div className="post-img">
                                <img src={blogOne} className="img-fluid" alt=""/>
                                </div>
                            <div className="meta">
                                <span className="post-date">Tue, December 12</span>
                                <span className="post-author"> / Julia Parker</span>
                            </div>
                            <h3 className="post-title">Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur
                                sit</h3>
                            <p>Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium.
                                Asperiores eum ipsa est officiis. Modi cupiditate exercitationem qui magni est...</p>
                            <a href={void 0} className="readmore stretched-link"><span>Read More</span><i
                                className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
                        <div className="post-box">
                            <div className="post-img">
                                <img src={blogTwo} className="img-fluid" alt=""/>
                                </div>
                            <div className="meta">
                                <span className="post-date">Fri, September 05</span>
                                <span className="post-author"> / Mario Douglas</span>
                            </div>
                            <h3 className="post-title">Et repellendus molestiae qui est sed omnis voluptates magnam</h3>
                            <p>Voluptatem nesciunt omnis libero autem tempora enim ut ipsam id. Odit quia ab eum
                                assumenda. Quisquam omnis aliquid necessitatibus tempora consectetur doloribus...</p>
                            <a href={void 0} className="readmore stretched-link"><span>Read More</span><i
                                className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="600">
                        <div className="post-box">
                            <div className="post-img">
                                <img src={blogThree} className="img-fluid" alt="" />
                                </div>
                            <div className="meta">
                                <span className="post-date">Tue, July 27</span>
                                <span className="post-author"> / Lisa Hunter</span>
                            </div>
                            <h3 className="post-title">Quia assumenda est et veritatis aut quae</h3>
                            <p>Quia nam eaque omnis explicabo similique eum quaerat similique laboriosam. Quis omnis
                                repellat sed quae consectetur magnam veritatis dicta nihil...</p>
                            <a href={void 0} className="readmore stretched-link"><span>Read More</span><i
                                className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Blog;