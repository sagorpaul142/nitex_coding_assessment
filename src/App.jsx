import Header from "./components/Header/Header.jsx";
import {BrowserRouter} from "react-router-dom";
import HeroSection from "./components/Hero/HeroSection.jsx";
import Services from "./components/Services/Services.jsx";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs.jsx";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <HeroSection/>
            <Services/>
            <WhyChooseUs />
        </BrowserRouter>
    )
}

export default App
