import Hero from "../components/hero";
import Navbar from "../components/nav";
import "../style/project.css"

export default function Project(){
    return(
        <div>
            
            <div className="project">
            <Hero/>
            <div className="container2"><h2 className="heading">My Projects</h2></div>
            <Navbar/>
            </div>
        </div>
    )
}