import Image from "next/image"
import "../style/hero.css"
import { FaMobileAlt,FaMapMarkerAlt,FaEnvelope,FaCalendar, FaGithub } from 'react-icons/fa';
export default function Hero(){
    return(
        <div className="container1">
        <div className="pic-container"><img className="profile-pic" src="/images/profile.jpg" alt="profile pic" height={500} width={500}/></div>
         <div >
         <h1 className="heading1">Muniba Ahmed</h1>
         <h2 className="heading2">Graphic Designer + Web Developer</h2>
         <div className="icons">
         <Image  src={"/images/icons/facebook.png"} alt="facebook icon" height={20} width={20}/>
         <Image  src={"/images/icons/instagram.png"} alt="intagram icon" height={20} width={20}/>
         <Image src={"/images/icons/figma.png"} alt="figma icon" height={20} width={20}/>
         <FaGithub size={20}/>
         <Image src={"/images/icons/linkedin.png"} alt="linkedin icon" height={20} width={20}/>
        </div>

        <div className="container1-1">
            <div className="contact-container"><FaMobileAlt size={20}/> +91 786XX XX740</div>
            <div className="contact-container"><FaEnvelope size={20}/> Me@gmail.com</div>
            <div className="contact-container"><FaMapMarkerAlt size={20}/> Karachi Pakistan</div>
            <div className="contact-container"><FaCalendar size={20}/> 25-10-2024</div>
        </div>
        <button className="btn">View Resume</button>
   
         </div>
        </div>
    )
}