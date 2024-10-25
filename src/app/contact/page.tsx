import Hero from "../components/hero";
import Navbar from "../components/nav";
import "../style/contact.css"

export default function Contact(){
    return(
       <div>
        
         <div className="contact">
           
            <Hero/>
            <div className="container2"> <h2 className="heading">Contact Me</h2></div>
            <Navbar/>
        </div>
       </div>
    )
}