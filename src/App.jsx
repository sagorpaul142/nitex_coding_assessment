import Header from "./components/Header/Header.jsx";
import {BrowserRouter} from "react-router-dom";
import HeroSection from "./components/Hero/HeroSection.jsx";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <HeroSection/>
        </BrowserRouter>
    )
}

export default App
