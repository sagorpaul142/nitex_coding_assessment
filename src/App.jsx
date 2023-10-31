import Header from "./components/Header/Header.jsx";
import {BrowserRouter} from "react-router-dom";
import HeroSection from "./components/Hero/HeroSection.jsx";
import Services from "./components/Services/Services.jsx";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs.jsx";
import Faq from "./components/Faq/Faq.jsx";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <HeroSection/>
            <Services/>
            <WhyChooseUs/>
            <Faq/>
        </BrowserRouter>
    )
}

export default App
