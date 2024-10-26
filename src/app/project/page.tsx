import Hero from "../components/hero";
import Navbar from "../components/nav";
import Image from "next/image";
import "../style/project.css";
import Link from "next/link";

export default function Project(){
    return(
        <div>
            
            <div className="project">
            <Hero/>
            <div className="container2"><h2 className="heading">My Projects</h2>
            <div className="sub-container">
            <div className="projects-div">
                <div className="project-pic">
                    <Image className="project-img" src={"/images/projects/portfolio1.png"} alt="portfolio pic" height={250} width={250}/>
                </div>
                <h3><Link className="link" href="https://my-portfolio-five-azure-14.vercel.app/">Portfolio from HTML, CSS.</Link></h3>
            </div>
            <div className="projects-div">
            <div className="project-pic">
                    <Image className="project-img" src={"/images/projects/portfolio2.png"} alt="portfolio pic" height={250} width={250}/>
                </div>
                <h3><Link className="link" href={"https://portfolio-nextjs-ochre-one.vercel.app/"}>Portfolio from NEXT JS.</Link></h3>
            </div>
            <div className="projects-div">
            <div className="project-pic">
                    <Image className="project-img" src={"/images/projects/resume-builder.png"} alt="portfolio pic" height={250} width={250}/>
                </div>
                <h3><Link className="link" href={"https://milestone5-resumeby-muniba.vercel.app/"}>Resume Builder with HTML,CSS & Typescript.</Link></h3>
            </div>
            <div className="projects-div">
            <div className="project-pic">
                    <Image className="project-img" src={"/images/projects/ecommerce.png"} alt="ecommerce pic" height={250} width={250}/>
                </div>
                <h3><Link className="link" href={"https://e-commerce-nextjs-flame-one.vercel.app/"}>E-commerce from NEXT JS.</Link></h3>
            </div>
            </div>
            </div>
            <Navbar/>
            </div>
        </div>
    )
}