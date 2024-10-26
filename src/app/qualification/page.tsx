import Hero from "../components/hero";
import Navbar from "../components/nav";
import "../style/education.css"
import Image from "next/image";

export default function Education(){
    return(
        <div className="education">
              <Hero/>
            <div className="container2">
            <h2 className="heading">Education</h2>
          
            <div className="sub-container">
            <div className="education-degree">
                <h3>MCS (2020-2022) from VU</h3>
            </div>
            <div className="education-degree">
                <h3>BCS (2015-2018) from KU</h3>
            </div>
            </div>
            <h4 className="heading">Skills</h4>
            <div className="skills">
                
                <div className="skills-pic"><Image src="/images/icons/figma.png" alt="figma" height={50} width={50}/></div>
                <div className="skills-pic"><Image src="/images/icons/next.png" alt="nextjs" height={50} width={50}/></div>
                <div className="skills-pic"><Image src="/images/icons/typescript.png" alt="typescript" height={50} width={50}/></div>
                <div className="skills-pic"><Image src="/images/icons/tailwindcss.png" alt="tailwindcss" height={50} width={50}/></div>
                <div className="skills-pic"><Image src="/images/icons/adobe-illustrator.png" alt="illustrator" height={50} width={50}/></div>
                <div className="skills-pic"><Image src="/images/icons/adobe-photoshop.png" alt="photoshop" height={50} width={50}/></div>



            </div>
            
            </div>
            <Navbar/>
        </div>
    )
}