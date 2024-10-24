import Hero from "../components/hero";
import Navbar from "../components/nav";
import "../style/contact.css"

export default function Contact(){
    return(
       <div>
         <h2 className="heading">Contact Me</h2>
         <div className="contact">
           
            <Hero/>
            <Navbar/>
        </div>
       </div>
    )
}