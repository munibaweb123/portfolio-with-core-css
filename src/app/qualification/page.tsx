import Hero from "../components/hero";
import Navbar from "../components/nav";
import "../style/education.css"

export default function Education(){
    return(
        <div>
            
            <div className="education">
            <Hero/>
            <div className="container2"><h2 className="heading">Education</h2></div>
            <Navbar/>
            </div>
        </div>
    )
}