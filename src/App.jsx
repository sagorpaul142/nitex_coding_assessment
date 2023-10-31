import Header from "./components/Header/Header.jsx";
import {BrowserRouter} from "react-router-dom";
import HeroSection from "./components/Hero/HeroSection.jsx";
import Services from "./components/Services/Services.jsx";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <HeroSection/>
            <Services/>
        </BrowserRouter>
    )
}

export default App
