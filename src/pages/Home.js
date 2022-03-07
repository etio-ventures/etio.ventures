import Navbar from "../components/Navbar";
import Synopsis from "../components/Synopsis";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import FAQs from "../components/FAQs";
import CompanyList from "../components/CompanyList";

export default function Home() {
    return (
        <div>
            <Navbar/>
            <Synopsis/>
            <Stats/>
            <FAQs/>
            <CompanyList/>
            <Footer/>
        </div>
    )
}