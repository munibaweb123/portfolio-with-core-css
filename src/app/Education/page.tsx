import Hero from "../components/hero";
import Navbar from "../components/nav";
import "../style/education.css"

export default function Education(){
    return(
        <div >
            <h2 className="heading">Education</h2>
            <div className="education">
            <Hero/>
            <Navbar/>
            </div>
           
        </div>
    )
}