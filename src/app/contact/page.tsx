import Hero from "../components/hero";
import Navbar from "../components/nav";
import "../style/contact.css"

export default function Contact(){
    return(
       <div>
        
         <div className="contact">
           
            <Hero/>
            <div className="container2"> <h2 className="heading">Contact Me</h2>
            <div className="sub-container">
                <form className="form">
                    <div className="in-form">
                        <label className="label">Email:</label><br/>
                        <input className="input" type="email" />
                    </div>
                    <div className="in-form">
                        <label className="label">Subject:</label><br/>
                        <input className="input" type="subject" />
                    </div>
                    <div className="in-form">
                        <label className="label">Message:</label><br/>
                        <textarea className="input" typeof="message" rows={5}></textarea>

                    </div>
                    <button className="btn">Submit</button>
                </form>
            </div>
            </div>
            <Navbar/>
        </div>
       </div>
    )
}