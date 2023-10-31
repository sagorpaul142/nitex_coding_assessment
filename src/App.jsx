import Header from "./components/Header/Header.jsx";
import {BrowserRouter} from "react-router-dom";
import HeroSection from "./components/Hero/HeroSection.jsx";
import Services from "./components/Services/Services.jsx";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs.jsx";
import Faq from "./components/Faq/Faq.jsx";
import Team from "./components/Team/Team.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <HeroSection/>
            <Services/>
            <WhyChooseUs/>
            <Faq/>
            <Team/>
            <Blog/>
            <Contact/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
