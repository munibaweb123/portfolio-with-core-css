import Hero from "../components/hero";
import Navbar from "../components/nav";
import "../style/project.css"

export default function Project(){
    return(
        <div>
            <h2 className="heading">My Projects</h2>
            <div className="project">
            <Hero/>
            <Navbar/>
            </div>
        </div>
    )
}